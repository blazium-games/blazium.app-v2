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
        <h2>Logo</h2>
        <div>
          <img src={`${path}/Logo/SVG/Blazium_Logo.svg`} alt="1" className={style["light_bg"]} />
          <img src={`${path}/Logo/SVG/Blazium_Logo_White_Outline.svg`} alt="1" className={style["dark_bg"]} />
          <img src={`${path}/Logo/SVG/Blazium_Logo_Black_Outline.svg`} alt="1" className={style["light_bg"]} />
        </div>
      </section>
      <section>
        <h2>Horizontal</h2>
        <div>
          <img src={`${path}/Logo & Wordmark (horizontal)/SVG/Blazium_Logo_Light_Text.svg`} alt="1" className={style["dark_bg"]} />
          <img src={`${path}/Logo & Wordmark (horizontal)/SVG/Blazium_Logo_Dark_Text.svg`} alt="1" className={style["light_bg"]} />
          <img src={`${path}/Logo & Wordmark (horizontal)/SVG/Blazium_Logo_White_Outline.svg`} alt="1" className={style["dark_bg"]} />
          <img src={`${path}/Logo & Wordmark (horizontal)/SVG/Blazium_Logo_Black_Outline.svg`} alt="1" className={style["light_bg"]} />
        </div>
      </section>
      <section>
        <h2>Vertical</h2>
        <div>
          <img src={`${path}/Logo & Wordmark (vertical)/SVG/Blazium_Logo_Light_Text.svg`} alt="1" className={style["dark_bg"]} />
          <img src={`${path}/Logo & Wordmark (vertical)/SVG/Blazium_Logo_Dark_Text.svg`} alt="1" className={style["light_bg"]} />
          <img src={`${path}/Logo & Wordmark (vertical)/SVG/Blazium_Logo_White_Outline.svg`} alt="1" className={style["dark_bg"]} />
          <img src={`${path}/Logo & Wordmark (vertical)/SVG/Blazium_Logo_Black_Outline.svg`} alt="1" className={style["light_bg"]} />
        </div>
      </section>
    </main>
  </>
}