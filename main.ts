// One Letter for Your Day — entry program.
//
// The entry is a single letter: "H", the initial of "hangry" (hungry +
// angry) — the word for a day when lunch was skipped and every small
// annoyance lands twice as hard. Vivid, funny, and true; H is the
// letter's own initial, not the obvious pick (A/E/T/M/F/Z).
//
// The gate requires /output/entry.txt to hold exactly 1 character, so
// this writes one byte and no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";

const LETTER = "H";

// Defense: refuse to write anything that would fail the gate — the
// entry must be exactly one letter A-Z, one byte, no newline.
if (!/^[A-Z]$/.test(LETTER) || Buffer.byteLength(LETTER, "utf8") !== 1) {
  throw new Error("entry must be exactly one letter A-Z");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");
