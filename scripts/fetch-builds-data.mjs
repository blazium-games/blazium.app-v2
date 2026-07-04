/**
 * CI validation: verify blazium.app version APIs are reachable and write a snapshot.
 * Does not replace server loaders — production SSR still uses builds_data.server.tsx.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outPath = join(root, "public", "builds-data.json");

function parseFilename(filename) {
  const baseMatch = filename.match(/\d_(?<info>.+)\.zip/);
  if (!baseMatch?.groups?.info) return null;
  const { info } = baseMatch.groups;

  if (info.startsWith("web") || info.startsWith("android")) {
    return { os: info, arch: undefined, dotnet: undefined };
  }
  if (info.startsWith("macos")) {
    return { os: "macos", arch: undefined, dotnet: info.includes("mono") };
  }
  const matches = info.match(/^(?<os>[a-z]+)(?<dotnet>\.mono)?\.(?<arch>.+)$/);
  if (matches?.groups) {
    return {
      os: matches.groups.os ?? null,
      arch: matches.groups.arch ?? null,
      dotnet: matches.groups.dotnet !== undefined,
    };
  }
  return null;
}

function sortVersions(versions) {
  return [...versions].sort((a, b) => {
    const aParts = a.version.split(".").map(Number);
    const bParts = b.version.split(".").map(Number);
    for (let i = 0; i < 3; i++) {
      const diff = (bParts[i] ?? 0) - (aParts[i] ?? 0);
      if (diff !== 0) return diff;
    }
    return 0;
  });
}

async function getBuildTypeData(type) {
  const response = await fetch(`https://blazium.app/api/versions/data/${type}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch versions for ${type}: HTTP ${response.status}`);
  }

  const versionsResData = await response.json();
  const versions = [];

  for (const version of sortVersions(versionsResData)) {
    const editorsRes = await fetch(version.version_url);
    if (!editorsRes.ok) {
      throw new Error(`Failed to fetch editors for ${version.version}: HTTP ${editorsRes.status}`);
    }

    const editorsResData = await editorsRes.json();
    const editors = [];

    for (const editor of editorsResData) {
      const filedata = parseFilename(editor.filename);
      if (!filedata) continue;
      const data = { ...editor, os: filedata.os ?? "" };
      if (filedata.arch) data.arch = filedata.arch;
      if (filedata.dotnet) data.dotnet = filedata.dotnet;
      editors.push(data);
    }

    if (editors.length > 0) {
      versions.push({ ...version, editors });
    }
  }

  return versions;
}

async function main() {
  const [release, nightly] = await Promise.all([
    getBuildTypeData("release"),
    getBuildTypeData("nightly"),
  ]);

  const payload = {
    timestamp: Date.now(),
    release,
    nightly,
  };

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(payload, null, 2) + "\n");

  console.log(
    `Wrote ${outPath} (${release.length} release, ${nightly.length} nightly versions)`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
