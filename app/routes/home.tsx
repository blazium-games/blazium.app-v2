import type { Route } from "./+types/home";
import style from "css/home.module.css";
import { MetaTags } from "comps/metatags";
import { AppLink } from "comps/AppLink";
import { Link } from "react-router";
import { showcases } from "~/data/showcases";
import { ArticleCard } from "./news";
import { publicAsset } from "~/lib/publicAsset";
import type { ArticlesIndex } from "~/types";

export async function loader({ }: Route.LoaderArgs) {
  const showcase = showcases[Math.floor(Math.random() * showcases.length)];

  const response = await fetch(`https://cdn.blazium.app/articles/index.json`);

  const index: ArticlesIndex = await response.json();

  return {
    showcase,
    news: index.items.slice(0, 4),
  };
}

export default ({ loaderData }: Route.ComponentProps) => {
  return <>
    <MetaTags />
    <main className={style["main"]} id="main-content">
      <section className={style["above-the-fold"]}>
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
            src={loaderData.showcase?.video}
            autoPlay
            muted
            loop
            disablePictureInPicture
            playsInline
            id="video-showcase"
          />
          <div>
            <label htmlFor="video-showcase">
              <span>{loaderData.showcase?.name}</span>
              <span>{loaderData.showcase?.credits.join(" \u2022 ")}</span>
            </label>
            {loaderData.showcase?.link && <Link to={loaderData.showcase.link.url}>{loaderData.showcase.link.label}</Link>}
          </div>
        </div>
      </section>
      <section className={style["news"]}>
        <h2>Latest News</h2>
        <Link to="/news" className="button secondary">View All</Link>
        {loaderData.news.map(article => <ArticleCard key={article.slug} data={article} />)}
      </section>
      <section className={style["features"]}>
        <div>
          <span>Blazium Engine Features</span>
          <h2>Everything you need out of the box</h2>
          <p>
            From games to applications across PC, console and XR, Blazium Engine
            gives you everything you need to start, ship, grow and stand out from
            the crowd. We develop Blazium Engine to help us with our games,
            and we want to help you with yours.
          </p>
          <Link to="/features" className="button">See all features</Link>
        </div>
        <img src={publicAsset("/images/GitHub.png")} alt="" loading="lazy" />
      </section>
    </main>
  </>
}