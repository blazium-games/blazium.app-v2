import type { Route } from "./+types/api-mirrorlist";

export async function loader({ params }: Route.LoaderArgs) {
  const versionParts = params.version.split(".");

  if (versionParts.length < 4) {
    return new Response(null, { status: 403, statusText: "Invalid version format" });
  }

  const baseVersion = versionParts.slice(0, 3).join(".");
  const versionType = versionParts[3];

  return new Response(`${baseVersion} | ${versionType}`, { status: 200 });
}