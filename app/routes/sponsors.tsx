import type { Route } from "./+types/sponsors";
import style from "css/sponsors.module.css";
import { MetaTags } from "comps/metatags";
import { AppLink } from "comps/AppLink";
import { publicAsset } from "~/lib/publicAsset";

type Sponsor = {
  name: string,
  url: string,
  img: string,
};

const sponsors: Sponsor[] = [{
  name: "POGR",
  url: "https://pogr.gg",
  img: "pogr.svg",
}, {
  name: "Digital Ocean",
  url: "https://digitalocean.com/?refcode=c9796b8f52e2",
  img: "DO_Logo_horizontal_blue.svg",
}, {
  name: "Docker",
  url: "https://docker.com",
  img: "docker-logo-ocean-blue.svg",
}, {
  name: "GitHub",
  url: "https://github.com",
  img: "GitHub_Lockup_White.svg",
}, {
  name: "Google",
  url: "https://opensource.google",
  img: "Google_Logo.svg",
}];

export default ({ }: Route.ComponentProps) => {
  return <>
    <MetaTags />
    <main className={style["main"]}>
      <h1>Sponsors of Blazium Games</h1>
      <section>
        {sponsors.map(s => (
          <AppLink key={s.name} to={s.url} title={s.name} target="_blank">
            <img src={publicAsset(`images/sponsors/${s.img}`)} alt={s.name} />
          </AppLink>
        ))}
      </section>
      <p>
        If you are interested in a sponsorship,
        please write to <AppLink to="mailto:business@divine.games">business@divine.games</AppLink>
      </p>
    </main>
  </>
}