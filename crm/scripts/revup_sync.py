#!/usr/bin/env python3
"""Pull RevUp (LeadConnector / GoHighLevel) contacts and opportunities for Lead Ledger.

Needs outbound access to services.leadconnectorhq.com and two env vars:
  REVUP_API_KEY       the private integration token (never commit it)
  REVUP_LOCATION_ID   the sub-account (location) id the token belongs to

Writes RAW_DIR/revup_contacts.tsv: iso_date, name, email, phone, source, tags, pipeline_stage
Meta / vendor attribution then comes from `source` and `tags`; the page uses
email and phone as a fallback when names differ between RevUp and Axiums.
"""
import csv, json, os, sys, time, urllib.parse, urllib.request

BASE = "https://services.leadconnectorhq.com"
KEY, LOC = os.environ["REVUP_API_KEY"], os.environ["REVUP_LOCATION_ID"]
RAW = sys.argv[1] if len(sys.argv) > 1 else "crm/data/raw"

def get(path, **params):
    url = f"{BASE}{path}?{urllib.parse.urlencode(params)}"
    req = urllib.request.Request(url, headers={"Authorization": f"Bearer {KEY}", "Version": "2021-07-28", "Accept": "application/json"})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                return json.load(r)
        except urllib.error.HTTPError as e:
            if e.code == 429 and attempt < 3:
                time.sleep(2 ** (attempt + 1)); continue
            raise

def contacts():
    params, out = {"locationId": LOC, "limit": 100}, []
    while True:
        page = get("/contacts/", **params)
        out += page.get("contacts", [])
        meta = page.get("meta", {})
        if not meta.get("startAfterId"):
            return out
        params.update(startAfter=meta["startAfter"], startAfterId=meta["startAfterId"])

def stages():
    pipes = {p["id"]: {s["id"]: s["name"] for s in p.get("stages", [])} for p in get("/opportunities/pipelines", locationId=LOC).get("pipelines", [])}
    by_contact, page = {}, 1
    while True:
        res = get("/opportunities/search", location_id=LOC, limit=100, page=page)
        for o in res.get("opportunities", []):
            by_contact[o.get("contactId")] = pipes.get(o.get("pipelineId"), {}).get(o.get("pipelineStageId"), o.get("status", ""))
        if len(res.get("opportunities", [])) < 100:
            return by_contact
        page += 1

if __name__ == "__main__":
    st = stages()
    with open(os.path.join(RAW, "revup_contacts.tsv"), "w", newline="") as f:
        w = csv.writer(f, delimiter="\t")
        for c in contacts():
            name = " ".join(x for x in [c.get("firstName"), c.get("lastName")] if x) or c.get("contactName", "")
            w.writerow([c.get("dateAdded", "")[:19], name, c.get("email", ""), c.get("phone", ""),
                        c.get("source", ""), ",".join(c.get("tags", [])), st.get(c.get("id"), "")])
    print("wrote", os.path.join(RAW, "revup_contacts.tsv"))
