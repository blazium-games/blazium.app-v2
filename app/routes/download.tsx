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
      <Link
        to="https://cdn.blazium.app/hub/linux/0.1.16/blazium-hub_0.1.16_amd64.deb"
        download
        className="button"
      >
        Download Blazium Hub
      </Link>
      <hr />
      <Link to="/download/editor"><small>Standalone Download</small></Link>
      <Link to="/download/cli"><small>Standalone CLI</small></Link>
    </main>
  </>
}