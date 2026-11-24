# TEST_RESULTS.md

Real execution proof — run 2026-11-24 ~18:42 WIB, Node v24.22.1, in-session.

## 1. Direct run (OUTPUT_DIR override)

```
$ OUTPUT_DIR=/tmp/ooo-out node main.ts
exit=0
/tmp/ooo-out/entry.txt — 87 bytes
chars=87 bytes=87
trailing newline: false
content: I'm away. My toddler has taken over my inbox and already replied to everyone with 'no'.
sha256: 44d1ba697d925cccb2a829c4c19b60498bb08054025462e8ad20c6c16ea31405
```

## 2. Clean-dir run (fresh copy in /tmp, no repo files reused)

```
$ rm -rf /tmp/ooo-clean && mkdir -p /tmp/ooo-clean
$ cp <repo>/main.ts /tmp/ooo-clean/
$ cd /tmp/ooo-clean && OUTPUT_DIR=/tmp/ooo-clean-out node main.ts
exit=0
/tmp/ooo-clean-out/entry.txt — 87 bytes
sha256: 44d1ba697d925cccb2a829c4c19b60498bb08054025462e8ad20c6c16ea31405
```

Byte-exact match with the direct run. Gate: 87 chars within 1–140, single line, not whitespace-only — PASS.

## 3. Zero-fail QA

- Node stdlib only (`node:fs`, `node:path`); no network calls; no secrets; no hardcoded paths besides the `/output` default (overridable via `OUTPUT_DIR`).
- No trailing newline by design; `entry.txt` is exactly the 87-byte line.

## 4. SolAPI

Unavailable during this build: `solapi-responses.py` returned HTTP 503 on both allowed attempts (2026-11-24 ~18:35 WIB). All drafting and judging was done in-session; no model was substituted.
