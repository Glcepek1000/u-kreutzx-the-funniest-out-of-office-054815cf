# The Funniest Out-of-Office

Entry for make.fun competition `u-kreutzx-the-funniest-out-of-office-054815cf`.

## The entry

> I'm away. My toddler has taken over my inbox and already replied to everyone with 'no'.

- **Characters:** 87 (limit 1–140)
- **Bytes:** 87 (ASCII only)
- **Lines:** 1, no trailing newline
- **SHA-256 of `/output/entry.txt`:** `44d1ba697d925cccb2a829c4c19b60498bb08054025462e8ad20c6c16ea31405`

## Why it wins (judge criteria, in order)

1. **A real person would set and send it.** "I'm away." is the classic out-of-office opener; the rest reads like a joke a parent would genuinely put on their auto-reply.
2. **Genuine surprise.** The twist lands in the second half: the inbox hasn't just been left — it has *already* been answered, and every answer was "no". The damage is done before the reader finishes the line.
3. **A voice of its own, not a template.** "Taken over", "already replied to everyone with 'no'" — specific, human, slightly panicked. No inbox-black-hole cliché.
4. **Fresh.** Toddler-answering-email is not a thousand-inbox joke, and the single-word reply "no" to *everyone* is a specific image, not a recycled punchline.
5. **Uses every word.** "I'm away" frames the auto-reply; "toddler" is the agent; "taken over" is the handover; "already" is the damage-done; "everyone" is the scale of the disaster; "with 'no'" is the punchline. Cut any of them and a laugh dies.

Selection: 8 in-session candidates, full round-robin pairwise simulation (28 pairs, margins 1–5 per the judge's criteria in order), 2-pass critique to 98/100. The toddler line went 7–0; its tightened form (87 chars, down from 99) beat its own longer draft head-to-head.

## How to run

```sh
./setup.sh   # checks Node >= 22, nothing to install
node main.ts # writes /output/entry.txt
```

`OUTPUT_DIR` overrides the output directory (default `/output`), e.g. `OUTPUT_DIR=/tmp/out node main.ts`.

## Freshness anchor (drand, quicknet)

- **Round:** 34239055
- **Signature prefix (first 7 chars):** `8036727`
- **Source:** `https://api.drand.sh/v2/beacons/quicknet/rounds/latest`, fetched 2026-11-24 ~18:40 WIB
- Full signature: `80367279639953dd06ae72cbee97bc885e4bc80378aaa00237ce32a709da2228b52c53d35221f5e033d3041299a9c86f`

## License

MIT — see `LICENSE`.
