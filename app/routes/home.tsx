import type { Route } from "./+types/home";
import style from "css/home.module.css";
import { MetaTags } from "comps/metatags";
import { Link } from "react-router";

export default ({ }: Route.ComponentProps) => {
  return <>
    <MetaTags />
    <main className={style["main"]} id="main-content">
      <section>
        <div>
          <h1>Blazium Game Engine</h1>
          <p>The stable Godot fork, with features that matter.</p>
          <div>
            <Link to="/download" className="button">Download</Link>
            <Link to="/features" className="button secondary">Features</Link>
          </div>
        </div>
      </section>
      <section>
        <h2>A Powerful Base</h2>
        <p>
          Blazium is a fully compatible Godot 4.3 fork that brings you every
          Godot feature while adding modern improvements such as Jolt Physics,
          3D physics interpolation, an embedded game window and more.
        </p>
        <p>
          The engine runs on a rock-solid foundation but also integrates the
          latest Godot 4.4 features (selected bug-fixes and enhancements) so you
          can start today with no project changes.
        </p>
        <div>
          <Link to="/features" className="button">Explore all features</Link>
          <Link to="/from-godot" className="button">Migrating from Godot</Link>
        </div>
      </section>
      <section>
        <h2>Many Integrations</h2>
        <ul>
          <li>
            SQLite — native database resource with dedicated nodes.
            The built-in SQLite node lets you store and query data directly from the editor,
            perfect for games that need a lightweight backend without a server.
          </li>
          <li>
            ENet — robust multiplayer networking library exposed through dedicated
            nodes. Ideal for low-latency, cross-platform P2P chat or voice chat
            over WebSockets.
          </li>
          <li>
            RCON — remote console support via the built-in RCON client node,
            enabling live debugging and remote execution of commands from outside
            the editor.
          </li>
          <li>
            Unit Testing — built-in testing framework with GUT compatibility, giving you a
            reliable way to write automated tests that run inside Blazium's engine
            before release.
          </li>
          <li>
            Discord, YouTube Playables, POGR - integrated via the **DiscordEmbeddedAppClient**,
            **YouTubePlayablesClient**, and **POGRClient** nodes. Each node wraps its
            respective SDK/API into a single editor-friendly API, letting you create
            Discord activities, embed YouTube playables directly in scenes, or call
            POGR's game-matching services without leaving Godot.
          </li>
        </ul>
        <Link to="/features" className="button">Full list of integrations</Link>
      </section>
      <section>
        <h2>Built-in MCP Server</h2>
        <p>
          Connect AI coding tools (like Claude, Cursor, etc.) directly to your
          editor. The integrated MCP server lets AI read your scene tree,
          modify nodes, run scripts and automate workflows in real time.
        </p>
        <p>Supercharge your productivity with AI-assisted development.</p>
        <Link to="/features" className="button">Learn more about MCP</Link>
      </section>
      <section>
        <h2>Ready to build?</h2>
        <p>Join the community-driven engine that puts developers first.</p>
        <div>
          <Link to="/download" className="button">Download Blazium</Link>
          <Link to="/features" className="button secondary">See all Features</Link>
        </div>
      </section>
    </main>
  </>
}