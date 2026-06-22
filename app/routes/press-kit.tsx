import type { Route } from "./+types/press-kit";
import style from "css/press-kit.module.css";
import { MetaTags } from "comps/metatags";

const path = "/assets/images/Brand Kit";

export default ({ }: Route.ComponentProps) => {
  return <>
    <MetaTags />
    <main className={style["main"]}>
      <h1>press-kit</h1>
      <section>
        <h2>Horizontal</h2>
        <div>
          <img src={`${path}/Logo & Wordmark (horizontal)/SVG/Blazium_Logo_Light_Text.svg`} alt="1" />
          <img src={`${path}/Logo & Wordmark (horizontal)/SVG/Blazium_Logo_Light_Text.svg`} alt="2" />
          <img src={`${path}/Logo & Wordmark (horizontal)/SVG/Blazium_Logo_Light_Text.svg`} alt="3" />
          <img src={`${path}/Logo & Wordmark (horizontal)/SVG/Blazium_Logo_Light_Text.svg`} alt="4" />
        </div>
      </section>
    </main>
  </>
}