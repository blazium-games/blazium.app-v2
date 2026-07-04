import { copyFileSync, existsSync, readdirSync, renameSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";
import type { Config } from "@react-router/dev/config";

const isPagesPreview = process.env["GITHUB_PAGES"] === "true";
const pagesBase = "/blazium.app-v2/";

const pagesPrerender = [
  "/",
  "/features",
  "/download",
  "/sponsors",
  "/developers",
  "/changelog",
  "/from-godot",
  "/privacy-policy",
  "/press-kit",
];

function moveBuildEntry(src: string, dest: string) {
  if (!existsSync(dest)) {
    renameSync(src, dest);
    return;
  }

  if (statSync(dest).isDirectory()) {
    for (const entry of readdirSync(src)) {
      moveBuildEntry(join(src, entry), join(dest, entry));
    }
    rmSync(src, { recursive: true, force: true });
    return;
  }

  rmSync(dest, { force: true });
  renameSync(src, dest);
}

export default {
  ssr: true,
  basename: isPagesPreview ? pagesBase : "/",
  prerender: isPagesPreview ? pagesPrerender : ["privacy-policy"],
  routeDiscovery: isPagesPreview ? { mode: "initial" } : undefined,
  buildEnd(args) {
    if (!isPagesPreview || !args.viteConfig.isProduction) return;

    const clientDir = join(process.cwd(), "build", "client");
    const siteDir = join(clientDir, "blazium.app-v2");
    const indexPath = join(siteDir, "index.html");
    if (!existsSync(indexPath)) return;

    // GitHub Pages project sites already prefix URLs with /repo-name/.
    // Flatten basename output so index.html lives at the artifact root.
    for (const entry of readdirSync(siteDir)) {
      moveBuildEntry(join(siteDir, entry), join(clientDir, entry));
    }
    rmSync(siteDir, { recursive: true, force: true });

    const rootIndex = join(clientDir, "index.html");
    if (existsSync(rootIndex)) {
      copyFileSync(rootIndex, join(clientDir, "404.html"));
    }
  },
} satisfies Config;
