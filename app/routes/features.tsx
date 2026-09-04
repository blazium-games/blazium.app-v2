import type { Route } from "./+types/features";
import style from "css/features.module.css";
import { MetaTags } from "~/components/metatags";
import { AppLink } from "comps/AppLink";
import { featureList } from "~/data/features";
import { publicAsset } from "~/lib/publicAsset";
import { FaChevronCircleDown } from "react-icons/fa";

function FeatureCard({ data }: { data: any }) {
  return (
    <article className={style["featurecard-article"]}>
      <img src={publicAsset("images/GitHub.png")} alt={data.title} />
      <div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <AppLink to={data.link}>Learn More</AppLink>
      </div>
    </article>
  )
}

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
      {featureList.map(category => (
        <details>
          <summary><FaChevronCircleDown /><h2>{category.title}</h2></summary>
          <div>
            {category.features.map(feature => (
              <FeatureCard data={feature} />
            ))}
          </div>
        </details>
      ))}
    </main>
  </>
}