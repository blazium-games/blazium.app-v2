import { Link } from "react-router";
import type { Route } from "./+types/features";
import style from "css/features.module.css";
import { MetaTags } from "~/components/metatags";
import { featuresList } from "~/data/features";
import { publicAsset } from "~/lib/publicAsset";

export default ({ }: Route.ComponentProps) => {
  return <>
    <MetaTags />
    <main className={style["main"]}>
      <h1>Features</h1>
      <p>
        From games to applications across PC, console and XR, Blazium Engine
        gives you everything you need to start, ship, grow and stand out from
        the crowd.
      </p>
      <nav>
        {Object.entries(featuresList).map(([title]) => (
          <Link to={`#${title}`} key={title}>{title}</Link>
        ))}
      </nav>
      {Object.entries(featuresList).map(([title, features]) => (
        <section key={title} id={title}>
          <aside>
            <h2>{title}</h2>
            <ul>
              {features.map(feature => 
                <li key={feature.title}>
                  <Link to={`#${feature.title}`}>{feature.title}</Link>
                </li>
              )}
            </ul>
          </aside>
          {features.map(feature => (
            <section key={feature.title} id={feature.title}>
              <h3>{feature.title}</h3>
              <img src={publicAsset("/images/GitHub.png")} alt={feature.title} loading="lazy" />
              <p>{feature.description}</p>
            </section>
          ))}
        </section>
      ))}
    </main>
  </>
}