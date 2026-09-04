import type { Route } from "./+types/home";
import style from "css/home.module.css";
import { MetaTags } from "comps/metatags";
import { AppLink } from "comps/AppLink";
import { publicAsset } from "~/lib/publicAsset";
import { Link } from "react-router";
import { showcases } from "~/data/showcases";

export async function loader({ }: Route.LoaderArgs) {
  return showcases[Math.floor(Math.random() * showcases.length)];
}

export default ({ loaderData }: Route.ComponentProps) => {
  return <>
    <MetaTags />
    <main className={style["main"]} id="main-content">
      <section>
        <div>
          <h1>
            <span>Blazium Game Engine</span>
            <span>Stable, feature rich and community-driven.</span>
          </h1>
          <p>
            Blazium Engine is a free, open-source fork of Godot for building
            cross-platform 2D and 3D games and apps, with the tools, platform
            integrations, and improvements you need.
          </p>
          <nav>
            <AppLink to="/download" className="button">Download</AppLink>
            <AppLink to="/features" className="button secondary">Features</AppLink>
          </nav>
        </div>
        <div>
          <video
            src={loaderData?.video}
            autoPlay
            muted
            loop
            disablePictureInPicture
            playsInline
            id="video-showcase"
          />
          <div>
            <label htmlFor="video-showcase">
              <span>{loaderData?.name}</span>
              <span>{loaderData?.credits.join(" \u2022 ")}</span>
            </label>
            {loaderData?.link && <Link to={loaderData.link.url}>{loaderData.link.label}</Link>}
          </div>
        </div>
      </section>
    </main>
  </>
}