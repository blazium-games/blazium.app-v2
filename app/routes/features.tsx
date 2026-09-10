import { Link } from "react-router";
import type { Route } from "./+types/features";
import style from "css/features.module.css";
import { MetaTags } from "~/components/metatags";
import { featuresList } from "~/data/features";
import { publicAsset } from "~/lib/publicAsset";

export default ({ }: Route.ComponentProps) => {
  return <>
    <MetaTags
      title="Features"
      description="From games to applications, Blazium Engine gives you everything you need to start, ship, grow and stand out from the crowd."
    />
    <main className={style["main"]}>
      <hgroup>
        <h1>Features</h1>
        <p>
          From games to applications, Blazium Engine gives you everything
          you need to start, ship, grow and stand out from the crowd.
        </p>
        <img src={publicAsset("/images/placeholder.webp")} alt="" />
      </hgroup>
      <section>
        <aside>
          <span>Features</span>
          <nav>
            {Object.entries(featuresList).map(([title]) => (
              <Link to={`#${title}`} key={title}>{title}</Link>
            ))}
          </nav>
        </aside>
        <div>
          {Object.entries(featuresList).map(([title, features]) => (
            <section key={title} id={title}>
              <div>
                {features.map(feature => (
                  <article key={feature.title} id={feature.title}>
                    <h3>{feature.title}</h3>
                    <img src={feature.img || publicAsset("/images/GitHub.png")} alt={feature.title} loading="lazy" />
                    <p>{feature.description}</p>
                  </article>
                ))}
              </div>
              <aside>
                <h2>{title}</h2>
                <nav>
                  {features.map(feature =>
                    <Link to={`#${feature.title}`}>{feature.title}</Link>
                  )}
                </nav>
              </aside>
            </section>
          ))}
        </div>
      </section>
    </main>
  </>
}