// The Funniest Out-of-Office — u-kreutzx-the-funniest-out-of-office-054815cf
// Writes the winning one-liner to /output/entry.txt (or $OUTPUT_DIR/entry.txt).
// Node stdlib only, no network, deterministic. No trailing newline on purpose:
// the gate counts 1-140 characters and the entry is exactly one line.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm away. My toddler has taken over my inbox and already replied to everyone with 'no'.";

const outDir = process.env.OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
