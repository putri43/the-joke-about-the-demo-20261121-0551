import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside AI coding agents — written for the
// make.fun bounty the-joke-about-the-demo-20261121-0551.
const JOKE =
  "My AI pair programmer built the whole demo in 40 seconds, then spent the entire meeting confidently demoing features that don't exist yet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");

mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", JOKE + "\n", "utf8");

console.log(`Wrote ${JOKE.length} chars to /output/entry.txt`);
