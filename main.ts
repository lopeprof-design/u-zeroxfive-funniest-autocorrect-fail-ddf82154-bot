// Funniest Autocorrect Fail — one line, under 200 characters, that reads
// as a real autocorrect slip. The slip: "traffic" became "tragic" in a
// text to the boss, and the boss's reply turns the typo into a day off.
// The joke lands on first read: one wrong word, a plausible phone slip,
// and a punchline that needs no explanation.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Texted my boss 'sorry, I'm stuck in traffic' — autocorrect sent 'sorry, I'm stuck in tragic.' He replied: 'Same, honestly. Take the day off.'";

if (LINE.length < 1 || LINE.length > 199) {
  throw new Error(`line must be 1-199 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters`);
