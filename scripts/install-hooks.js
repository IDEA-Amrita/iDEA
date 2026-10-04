import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

if (existsSync(".git")) {
  const result = spawnSync(
    "git",
    ["config", "--local", "core.hooksPath", "hooks"],
    {
      stdio: "inherit",
    },
  );

  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
