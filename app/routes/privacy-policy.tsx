import type { Route } from "./+types/privacy-policy";
import style from "css/md.module.css";
import { html as privacy } from "md/privacy-policy.md"
import { MetaTags } from "comps/metatags";

export default ({ }: Route.ComponentProps) => {
  return <>
    <MetaTags />
    <main className={style["main"]} dangerouslySetInnerHTML={{ __html: privacy }} />
  </>
}