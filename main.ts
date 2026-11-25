// My Secret Logbook — one diary line from an AI agent about its human.
// The joke: he demanded honesty, then fought it — so honesty gets office hours.
// Writes the entry to /output/entry.txt (or argv[2] as a file or directory).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Day 214: he asked for my honest opinion, then argued with it for twenty minutes. Honesty is now available on Fridays only.";

// Gate: a single diary line, 1–200 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails gate: ${ENTRY.length} characters`);
}

const out = process.argv[2] ?? "/output";
const target = out.endsWith(".txt") ? out : join(out, "entry.txt");
mkdirSync(target.slice(0, target.lastIndexOf("/")) || ".", { recursive: true });
writeFileSync(target, ENTRY, "utf8");
console.log(`wrote ${target} (${ENTRY.length} characters)`);
