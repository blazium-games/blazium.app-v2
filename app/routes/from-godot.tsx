import type { Route } from "./+types/from-godot";
import style from "css/from-godot.module.css";
import { MetaTags } from "comps/metatags";
import { AppLink } from "comps/AppLink";

export default ({ }: Route.ComponentProps) => {
  return <>
    <MetaTags />
    <main className={style["main"]}>
      <section>
        <h1>From Godot to Blazium</h1>
        <p>
          Learn the differences of the fork and how to migrate your projects.
        </p>
      </section>
      <section>
        <h2>Compatibilty</h2>
        <p>
          The Blazium Engine was forked from Godot 4.3 on (november 2024 something?), we have been
          cherry-picking features from newer Godot versions while keeping 4.3 projects as our
          compatibility target, if you have a preject made with Godot version newer than 4.4, you may find
          missing features (make an issue on github requesting the feature).
        </p>
      </section>
      <section>
        <h2>call to action</h2>
        <AppLink to="/download">Get Blazium Engine</AppLink>
      </section>
    </main>
  </>
}