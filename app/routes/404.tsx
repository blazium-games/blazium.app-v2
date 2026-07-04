import type { Route } from "./+types/404";
import style from "css/404.module.css";
import { MetaTags } from "comps/metatags";
import { Link } from "react-router";
import { AppLink } from "comps/AppLink";
import { links } from "~/data/links";

export default ({ }: Route.ComponentProps) => {
  return <>
    <MetaTags />
    <main className={style["main"]}>
      <h1>404 | Page Not Found</h1>
      <ul>
        <li><AppLink to="/">Home</AppLink></li>
        <li><AppLink to="/download">Download</AppLink></li>
        <li><AppLink to="/features">Features</AppLink></li>
        <li><AppLink to={links.documentation}>Documentation</AppLink></li>
      </ul>
      <p>
        Found an issue with the website?
        Please open an <Link to={links.website_repo}>issue on GitHub</Link>.
      </p>
    </main>
  </>
}