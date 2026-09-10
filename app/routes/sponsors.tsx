import type { Route } from "./+types/sponsors";
import style from "css/sponsors.module.css";
import { MetaTags } from "comps/metatags";
import { Link } from "react-router";
import { sponsors } from "~/data/sponsors";
import { publicAsset } from "~/lib/publicAsset";

export default ({ }: Route.ComponentProps) => {
  return <>
    <MetaTags />
    <main className={style["main"]}>
      <h1>Sponsors of Blazium Games</h1>
      <section>
        {sponsors.map(s => (
          <Link key={s.name} to={s.url} title={s.name} target="_blank">
            <img src={publicAsset(`images/sponsors/${s.img}`)} alt={s.name} />
          </Link>
        ))}
      </section>
      <p>
        If you are interested in a sponsorship,
        please write to <Link to="mailto:business@divine.games">business@divine.games</Link>
      </p>
    </main>
  </>
}