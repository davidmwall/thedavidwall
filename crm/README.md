# Lead Ledger

A live dashboard that shows the profit or loss on every lead purchase. It credits Axiums policies to the lead batch that produced them.

**Dashboard:** https://claude.ai/artifact/5AGytbTDU8qc66oTu2TQVH (private to David)

## How it fits together

| Piece | Where | Refresh |
|---|---|---|
| Page | `dashboard/lead-ledger.html`, published as a claude.ai artifact | Republish after edits |
| Batches (cost, lead count, Meta lead names) | Artifact database `batches/*` | Claude sync from Gmail |
| Policies snapshot + commission actuals | Artifact database `policies/*` | Claude sync from Axiums |
| Live book and chargebacks | Axiums connector, called from the page | Every 15 min while the page is open |
| Manual batch picks | Artifact database `assignments/{policyNumber}` | Saved as you choose them |
| RevUp contacts | `scripts/revup_sync.py` | Blocked until the network allows `services.leadconnectorhq.com` |

### Batches

* **Meta Ads**: `Your Meta ads receipt` emails are deduped by transaction ID and grouped by billing week (Monday start). `Hot New Lead` emails from MyEZLeads go into the week they first arrived. Test leads and repeat deliveries are dropped.
* **Proven Lead Solutions**: Stripe invoices. A voided invoice is replaced by its update (#0004 by #0005, #0027 by #0028). Leads arrive as spreadsheet attachments, which the Gmail connector can't read, so names come from RevUp or the manual dropdown.
* **Aria Leads**: Authorize.net receipts. They carry a total only, with no count.
* **HOF Leads**: order confirmation #10037.
* **GEN LIFE LEADS** (Commas / Drippy Leads): Commas receipt.
* **GOAT Leads**: only promo emails, no orders found.

### Money

* Revenue on a credited in-force policy is Axiums' expected advance. Where Axiums has none yet (Ethos, Corebridge), it is estimated as AP × comp rate × 75% and marked "est.".
* Pending and approved policies show as pipeline. They are not counted in net.
* Chargebacks come from `get_policy_details` actuals (gross paid minus clawback) and from `get_my_chargebacks`.

## Refreshing the Gmail and Axiums data

Ask Claude: "Refresh Lead Ledger". The steps:

1. Gmail searches → `data/raw/`:
   * `from:business-updates.facebook.com subject:"Meta ads receipt"` → `meta_page*.json`
   * `from:send.myezleads.com subject:"Hot New Lead"` → `leads_*.tsv`
   * `from:stripe.com "Proven Lead Solutions"`, `from:mail.authorize.net "Aria Leads"`, `from:hofleads.com`, `from:commas.com` → new rows in `vendor_purchases.tsv`
2. Axiums `get_my_book` → `axiums_book.tsv`. For any LAPSED or NOT_TAKEN policy, run `get_policy_details` → `axiums_actuals.tsv`.
3. `python3 scripts/build_seed.py data/raw data/seed`, then write the documents with `ArtifactData` batch. Never touch `assignments/`, which holds manual picks.

## Turning on RevUp

1. Add `services.leadconnectorhq.com` to the cloud environment's allowed domains.
2. Run `REVUP_API_KEY=… REVUP_LOCATION_ID=… python3 scripts/revup_sync.py data/raw`. Keep the key in the environment's secrets, never in the repo.
3. Map RevUp `source` and `tags` to batches, and add stage counts to the batch docs.
