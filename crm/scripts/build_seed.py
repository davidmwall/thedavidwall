#!/usr/bin/env python3
"""Build Lead Ledger database documents from raw source extracts.

Inputs (in RAW_DIR):
  meta_page*.json / meta_page*.tsv  Meta ads receipts (Gmail search results or TSV extracts)
  leads_*.tsv                       MyEZLeads "Hot New Lead" emails: iso_date, name, email, state
  vendor_purchases.tsv              One row per lead-vendor invoice/receipt
  axiums_book.tsv                   Axiums get_my_book rows
  axiums_actuals.tsv                Optional per-policy actuals from get_policy_details

Output: OUT_DIR/batch_NN.json, each an ArtifactData "batch" writes list (<=50 writes).
"""
import csv, glob, json, os, re, sys
from datetime import date, datetime, timedelta, timezone

RAW, OUT = sys.argv[1], sys.argv[2]
os.makedirs(OUT, exist_ok=True)
SYNCED_AT = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

MON = {m: i for i, m in enumerate("Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(), 1)}
SNIP = re.compile(r"Transaction ID (\S+) .*?Amount billed \$([\d,.]+) USD Date range (\w+) (\d+), (\d{4})")

def week_start(d: date) -> date:
    return d - timedelta(days=d.weekday())

# ---- Meta receipts, deduped by transaction id ----
receipts = {}
for f in glob.glob(os.path.join(RAW, "meta_page*.json")):
    for t in json.load(open(f)).get("threads", []):
        for m in t["messages"]:
            mm = SNIP.search(m.get("snippet", ""))
            if mm:
                receipts[mm.group(1)] = (float(mm.group(2).replace(",", "")), m["date"][:10], m["id"])
for f in glob.glob(os.path.join(RAW, "meta_page*.tsv")):
    for row in csv.reader(open(f), delimiter="\t"):
        mid, txn, amt, ts = row[:4]
        receipts[txn] = (float(amt), ts[:10], mid)

meta_weeks = {}
for txn, (amt, d, mid) in receipts.items():
    wk = week_start(date.fromisoformat(d)).isoformat()
    w = meta_weeks.setdefault(wk, {"cost": 0.0, "receipts": 0, "leads": []})
    w["cost"] += amt
    w["receipts"] += 1

TEST = re.compile(r"test lead|dummy data", re.I)
seen = set()
rows = [r for f in sorted(glob.glob(os.path.join(RAW, "leads_*.tsv"))) for r in csv.reader(open(f), delimiter="\t")]
for row in sorted(rows, key=lambda r: r[0]):  # oldest first: a re-delivered lead counts in the week it first arrived
    ts, name, email, state = (row + ["", "", "", ""])[:4]
    if TEST.search(name):
        continue
    key = (name.lower().strip(), email.lower().strip())
    if key in seen:  # Meta re-delivers the same person; count once
        continue
    seen.add(key)
    wk = week_start(date.fromisoformat(ts[:10])).isoformat()
    w = meta_weeks.setdefault(wk, {"cost": 0.0, "receipts": 0, "leads": []})
    w["leads"].append({"n": name.strip(), "s": state.strip(), "d": ts[:10]})

writes = []
def put(col, doc_id, data):
    writes.append({"op": "set", "collection": col, "doc_id": doc_id, "data": data})

for wk, w in sorted(meta_weeks.items()):
    end = (date.fromisoformat(wk) + timedelta(days=6)).isoformat()
    put("batches", f"meta-{wk}", {
        "kind": "meta", "vendor": "Meta Ads", "date": wk, "endDate": end,
        "label": f"Meta · week of {date.fromisoformat(wk).strftime('%b %-d')}",
        "cost": round(w["cost"], 2), "qty": len(w["leads"]), "receipts": w["receipts"],
        "desc": f"{w['receipts']} ad receipts, {len(w['leads'])} MyEZLeads leads",
        "leads": sorted(w["leads"], key=lambda l: l["d"]),
        "source": "Gmail: Meta ads receipts + MyEZLeads Hot New Lead emails",
    })

for row in csv.reader(open(os.path.join(RAW, "vendor_purchases.tsv")), delimiter="\t"):
    if not row or row[0].startswith("#"):
        continue
    bid, vendor, d, total, qty, desc, thread, note = (row + [""] * 8)[:8]
    put("batches", bid, {
        "kind": "vendor", "vendor": vendor, "date": d,
        "label": f"{vendor.split(' (')[0]} · {datetime.fromisoformat(d).strftime('%b %-d, %Y')}",
        "cost": float(total), "qty": int(qty) if qty else None, "desc": desc, "note": note,
        "threadId": thread, "leads": [],
        "source": "Gmail: vendor invoice/receipt",
    })

actuals = {}
ap = os.path.join(RAW, "axiums_actuals.tsv")
if os.path.exists(ap):
    for pn, gross, cb, net in csv.reader(open(ap), delimiter="\t"):
        actuals[pn] = {"gross": float(gross), "chargeback": float(cb), "net": float(net)}

num = lambda s: float(s) if s else None
for row in csv.reader(open(os.path.join(RAW, "axiums_book.tsv")), delimiter="\t"):
    pn, insured, product, carrier, status, prem, adv, back, placed = (row + [""] * 9)[:9]
    doc = {"insured": insured, "product": product, "carrier": carrier, "status": status,
           "annualPremium": num(prem), "advance": num(adv), "backend": num(back),
           "placedDate": placed or None}
    if pn in actuals:
        doc["actual"] = actuals[pn]
    put("policies", pn, doc)

put("crm", "meta", {
    "syncedAt": SYNCED_AT,
    "sources": {
        "gmail": "Meta receipts, MyEZLeads leads, Proven / Aria / HOF / Commas invoices",
        "axiums": "get_my_book + get_policy_details actuals for lapsed / not-taken policies",
        "revup": "Not synced: services.leadconnectorhq.com is blocked by the session network policy",
    },
    "compLevel": "90", "advanceShare": 0.75,
})

for i in range(0, len(writes), 40):
    json.dump(writes[i:i + 40], open(os.path.join(OUT, f"batch_{i // 40:02d}.json"), "w"))
print(f"{len(writes)} writes; meta weeks={len(meta_weeks)} receipts={len(receipts)} leads={len(seen)}")
print("meta spend", round(sum(w['cost'] for w in meta_weeks.values()), 2))
