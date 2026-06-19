#!/bin/bash
# Pre-deploy confidentiality check for Jake Heaps Portfolio
# Run before every: npx gh-pages -d dist
# Exit 0 = pass, Exit 1 = fail

set -e

cd "$(dirname "$0")/.."

FORBIDDEN=(
  '\$45'
  '\$832'
  '\$13M'
  '\$6M'
  '28-person'
  '26 of 28'
  '32 respondents'
  '26 respondents'
  'Aprimo'
  'Salesloft'
  'ZoomInfo'
  'Neo4j'
  'Cloud Run'
  'board of directors'
  'Finance review'
  # NOTE: headcount/attrition OUTCOME terms (backfill, attrition, headcount
  # reduction, "10 people", "replaced 10", "people replaced", "full-time
  # employees") are intentionally ALLOWED now — the client is anonymized, so
  # those claims are no longer attributable. Org-SIZE descriptors (28/30/50-
  # person) and internal codenames below stay blocked.
  'Minky'
  'Clanker'
  'NLC Mutual'
  'awardco'
  'BankSouth'
  'AirOps'
  'Mission Control'
  'Gemini Showcase'
  'MCP Hub'
  'Messaging Brain'
  'Advanced Questioning'
  'ADM Discovery'
  'Built himself'
  'for successor'
  'course for successor'
  '\$35M'
  '\$35 million'
  '30-person'
  '50-person'
  'fifty-person'
)

FAIL=0

echo "Running confidentiality check..."
echo "================================"

for term in "${FORBIDDEN[@]}"; do
  hits=$(grep -rIi "$term" src/ public/ index.html scripts/pdf-template.html 2>/dev/null | grep -v 'node_modules' | grep -v '.git' || true)
  if [ -n "$hits" ]; then
    echo "FAIL: Found '$term'"
    echo "$hits" | head -5
    echo ""
    FAIL=1
  fi
done

if [ -f scripts/portfolio-rendered.html ]; then
  for term in "${FORBIDDEN[@]}"; do
    hits=$(grep -i "$term" scripts/portfolio-rendered.html 2>/dev/null || true)
    if [ -n "$hits" ]; then
      echo "FAIL (PDF HTML): Found '$term'"
      echo "$hits" | head -3
      echo ""
      FAIL=1
    fi
  done
fi

echo "================================"
if [ $FAIL -eq 1 ]; then
  echo "BLOCKED: Confidentiality violations found. Fix before deploying."
  exit 1
else
  echo "PASS: No confidentiality violations detected."
  exit 0
fi
