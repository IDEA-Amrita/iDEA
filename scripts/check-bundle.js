import { readFileSync, readdirSync } from "node:fs";
import { gzipSync } from "node:zlib";

const manifest = JSON.parse(readFileSync("dist/.vite/manifest.json", "utf8"));
const initial = new Set();
function visit(key) {
  const chunk = manifest[key];
  if (!chunk || initial.has(chunk.file)) return;
  initial.add(chunk.file);
  for (const css of chunk.css ?? []) initial.add(css);
  for (const dependency of chunk.imports ?? []) visit(dependency);
}
visit("index.html");
const all = readdirSync("dist/assets")
  .filter((name) => /\.(js|css)$/.test(name))
  .map((name) => `assets/${name}`);
const budgets = [
  {
    name: "Initial JavaScript",
    files: [...initial].filter((name) => name.endsWith(".js")),
    raw: 310000,
    gzip: 100000,
  },
  {
    name: "Initial CSS",
    files: [...initial].filter((name) => name.endsWith(".css")),
    raw: 50000,
    gzip: 10000,
  },
  {
    name: "All JavaScript",
    files: all.filter((name) => name.endsWith(".js")),
    raw: 460000,
    gzip: 155000,
  },
  {
    name: "All CSS",
    files: all.filter((name) => name.endsWith(".css")),
    raw: 60000,
    gzip: 15000,
  },
];
for (const budget of budgets) {
  let raw = 0,
    gzip = 0;
  for (const file of budget.files) {
    const bytes = readFileSync(`dist/${file}`);
    raw += bytes.length;
    gzip += gzipSync(bytes).length;
  }
  console.log(
    `${budget.name}: ${(raw / 1000).toFixed(2)} kB raw, ${(gzip / 1000).toFixed(2)} kB gzip`,
  );
  if (!budget.files.length || raw > budget.raw || gzip > budget.gzip) {
    console.error(`${budget.name} exceeds its budget or was not found.`);
    process.exitCode = 1;
  }
}
