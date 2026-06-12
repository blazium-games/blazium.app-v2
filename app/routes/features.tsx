import type { Route } from "./+types/features";
import style from "css/features.module.css";
import { MetaTags } from "comps/metatags";
import { Link } from "react-router";

/* 
  - godot compatibility
  - all features
    - features over godot/first party features
  - why blazium instead of godot/redot/other engines
*/

export default ({ }: Route.ComponentProps) => {
  return <>
    <MetaTags />
    <main className={style["main"]}>
      <section>
        <h1>Features</h1>
        <p>
          fork of godot, various 2d, 3d, xr features.
        </p>
        <Link to="from-godot">See our migration guide</Link>
      </section>
      <section>
        <h2>First-Party Features</h2>
        <p>
          lots of modules!
        </p>
      </section>
      <section>
        <h2>call to action</h2>
        <Link to="/download">Get Blazium Engine</Link>
      </section>
    </main>
  </>
}