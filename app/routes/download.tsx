import type { Route } from "./+types/download";
import style from "css/download.module.css";
import { MetaTags } from "comps/metatags";
import { Link } from "react-router";

export default ({ }: Route.ComponentProps) => {
  return <>
    <MetaTags
      title="Download Blazium Hub"
      description="Dowload and manage editor versions and templates with Blazium Hub."
    />
    <main className={style["main"]}>
      <h1>Blazium Hub</h1>
      <p>
        Blazium Hub is a free, open-source desktop app that helps you manage
        your projects and engine versions.
      </p>
      <Link
        to="https://cdn.blazium.app/hub/linux/0.1.16/blazium-hub_0.1.16_amd64.deb"
        download
        className="button"
      >
        Download Blazium Hub
      </Link>
      <hr />
      <ul>
        <li><Link to="/download/editor"><small>Standalone Editor Binary</small></Link></li>
        <li><Link to="/download/cli"><small>Blazium CLI</small></Link></li>
      </ul>
    </main>
  </>
}