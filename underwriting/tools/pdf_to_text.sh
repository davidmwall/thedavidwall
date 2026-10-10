#!/usr/bin/env bash
# Convert a carrier underwriting guide PDF into page-numbered text, so the
# rules can be transcribed into a carrier file (by you or by Claude with the
# add-carrier skill) with accurate page citations.
#
#   underwriting/tools/pdf_to_text.sh path/to/guide.pdf
#
# Writes guide.txt next to the PDF, one "===== PAGE N =====" header per page.
# Requires pdftotext (poppler-utils). Scanned/image PDFs need OCR first.
set -euo pipefail

pdf="${1:?usage: pdf_to_text.sh guide.pdf}"
out="${pdf%.pdf}.txt"
pages=$(pdfinfo "$pdf" | awk '/^Pages:/ {print $2}')

: > "$out"
for ((p = 1; p <= pages; p++)); do
  printf '\n===== PAGE %d =====\n' "$p" >> "$out"
  pdftotext -layout -f "$p" -l "$p" "$pdf" - >> "$out"
done

chars=$(wc -c < "$out")
echo "Wrote $out ($pages pages, $chars chars)"
if (( chars < pages * 100 )); then
  echo "WARNING: very little text extracted — this PDF is probably scanned images and needs OCR." >&2
fi
