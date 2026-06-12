import type { Route } from "./+types/404";
import style from "css/404.module.css";
import { MetaTags } from "comps/metatags";
import { Link } from "react-router";
import { links } from "~/data/links";

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