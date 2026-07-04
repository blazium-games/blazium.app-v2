import type { Route } from "./+types/developers";
import style from "css/developers.module.css";
import { MetaTags } from "comps/metatags";
import type { Developer } from "~/types";
import { developers } from "~/data/developers";
import { publicAsset } from "~/lib/publicAsset";

function DevCard({ data }: { data: Developer }) {
  return (
    <article className={style["devcard-article"]} title={data.name}>
      <img
        src={data.image ?? publicAsset("images/placeholder.svg")}
        alt={`${data.name}`}
      />
      <div>
        <h2>{data.name}</h2>
        {data.altName && <span>{data.altName}</span>}
        <div>
          {data.roles.map(role => (
            <span key={role}>{role}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ({ }: Route.ComponentProps) => {
  return <>
    <MetaTags />
    <main className={style["main"]}>
      <h1>Blazium Games</h1>
      <p>We are a group of passionate programmers and artists driven by our love of videogames.</p>
      <section>
        {developers.map(dev => (
          <DevCard key={dev.name} data={dev} />
        ))}
      </section>
    </main>
  </>
}