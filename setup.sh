#!/bin/sh
# One-shot setup: checks Node >= 22. No dependencies to install (stdlib only).
set -e
if ! command -v node >/dev/null 2>&1; then
  echo "node is required (Node >= 22)" >&2
  exit 1
fi
node --version
node main.ts
echo "OK: entry written to ${OUTPUT_DIR:-/output}/entry.txt"
