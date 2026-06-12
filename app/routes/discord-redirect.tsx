import type { Route } from "./+types/discord-redirect";
import { redirect } from "react-router";
import { links } from "~/data/links";

export async function loader({ }: Route.LoaderArgs) {
  return redirect(links.discord);
}