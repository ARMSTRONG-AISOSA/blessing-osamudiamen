import { execFileSync } from "node:child_process";
import { seo } from "@/data/profile";

/**
 * Real "last modified" dates for the sitemap and JSON-LD, taken from git at build time:
 * the date of the last commit that touched the given files.
 * Falls back to `seo.updated` (midnight UTC) only if git history is unavailable.
 * Never replace this with `new Date()`: build time is not a content change.
 */
const cache = new Map<string, Date>();

export function lastChanged(...paths: string[]): Date {
  const key = paths.join("|");
  const hit = cache.get(key);
  if (hit) return hit;
  let date = new Date(seo.updated);
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cI", "--", ...paths], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
    if (out) date = new Date(out);
  } catch {
    // no git binary or no repository: keep the fallback
  }
  cache.set(key, date);
  return date;
}

/** All page copy lives in data/profile.ts, so a page changes when that file changes. */
export const contentUpdated = () => lastChanged("data/profile.ts");

/** A file under /public, e.g. "/case-studies/x.pdf". */
export const publicFileUpdated = (publicPath: string) => lastChanged(`public${publicPath}`);
