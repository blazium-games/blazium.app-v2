import type { Route } from "./+types/404";
import style from "css/404.module.css";
import { MetaTags } from "comps/metatags";
import { Link } from "react-router";
import { links } from "~/data/links";
import { redirect } from "react-router";

// Redirects for legacy paths, removed pages and discord invite link
const redirectMiddleware: Route.MiddlewareFunction = async ({ params }) => {
  switch (params["*"]) {
    case "chat":
      return redirect(links.discord, 303);
    case "blog":
      return redirect("/news", 308);
    case "meet-the-team":
      return redirect("/developers", 308);
    case "what-is-blazium":
      return redirect("/", 308);
    case "download/prebuilt-binaries":
    case "download/digital-store":
      return redirect("/download", 308);
    case "games":
    case "games/hangman":
    case "privacy-policy":
    case "terms-of-service":
    case "licenses":
    case "roadmaps":
    case "road-maps":
    case "dev-tools":
    case "dev-tools/download":
    case "dev-tools/blazium-services":
      return redirect("/", 302);
  }
}

export const middleware: Route.MiddlewareFunction[] = [
  redirectMiddleware,
];

export default ({ }: Route.ComponentProps) => {
  return <>
    <MetaTags />
    <main className={style["main"]}>
      <h1>404 | Page Not Found</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/download">Download</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to={links.documentation}>Documentation</Link></li>
      </ul>
      <p>
        Found an issue with the website?
        Please open an <Link to={links.website_repo}>issue on GitHub</Link>.
      </p>
    </main>
  </>
}