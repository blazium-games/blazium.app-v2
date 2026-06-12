import type { Route } from "./+types/api-versions";

export async function loader({ params }: Route.LoaderArgs) {
  const versionParts = params.version.split("-");

  if (versionParts.length < 2) {
    return new Response(null, { status: 403, statusText: "Invalid version format" });
  }

  const versionType = versionParts[1];

  return new Response(`${versionType}`, { status: 200 });
}