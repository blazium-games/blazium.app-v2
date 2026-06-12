import type { Route } from "./+types/press-kit";
import style from "css/press-kit.module.css";
import { MetaTags } from "comps/metatags";

export default ({ }: Route.ComponentProps) => {
  return <>
    <MetaTags />
    <main className={style["main"]}>
      <h1>press-kit</h1>
    </main>
  </>
}