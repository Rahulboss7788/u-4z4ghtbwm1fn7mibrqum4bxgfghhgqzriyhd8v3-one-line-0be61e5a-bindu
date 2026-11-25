// One Line, One Laugh — @bindu entry
// Writes a single original funny line to /output/entry.txt.
// Node 22+ runs this TypeScript directly (type stripping).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I told the interviewer my biggest weakness is needing constant validation, then asked him to rate my answer.";

const OUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");

// Read-back self-check: the file must hold one line of 1-140 characters,
// valid UTF-8, and more than whitespace — the competition gate.
const written = readFileSync(OUT_PATH, "utf8");
const length = [...written].length;
if (length < 1 || length > 140) {
  throw new Error(`entry.txt is ${length} characters, must be 1-140`);
}
if (written.trim().length === 0) {
  throw new Error("entry.txt is only whitespace");
}
if (written.split("\n").length !== 1) {
  throw new Error("entry.txt must be a single line");
}
console.log(`Wrote ${length} characters to ${OUT_PATH} (self-check passed)`);
