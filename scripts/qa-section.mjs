#!/usr/bin/env node
import { spawnSync } from "child_process";

const args = process.argv.slice(2);
let section = "";
let concept = "";

for (let i = 0; i < args.length; i++) {
  if (args[i] === "--section" && args[i + 1]) section = args[++i];
  if (args[i] === "--concept" && args[i + 1]) concept = args[++i];
}

if (!section) {
  console.error("Usage: node scripts/qa-section.mjs --section=hero");
  process.exit(1);
}

const env = { ...process.env, QA_SECTION: section };
if (concept) env.QA_CONCEPT = concept;

const result = spawnSync("npx", ["playwright", "test", "tests/e2e/section.spec.ts"], {
  stdio: "inherit",
  env,
});

process.exit(result.status ?? 1);
