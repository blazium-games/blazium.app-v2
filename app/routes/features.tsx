import type { Route } from "./+types/features";
import style from "css/features.module.css";
import { MetaTags } from "~/components/metatags";
import { AppLink } from "comps/AppLink";
import { featureList } from "~/data/features";
import { publicAsset } from "~/lib/publicAsset";
import { FaChevronCircleDown } from "react-icons/fa";

/* 
  - godot compatibility
  - all features
    - features over godot/first party features
  - why blazium instead of godot/redot/other engines
*/

/*
- GOAP Framework
- BigNum++ Integration
- Microsoft's GDK integration
- Dev Tools
  - MCP Server for the Editor
  - Autowork Unit Tests Framework
  - POGR API
  - Multi User Editor support
- Web Export Improvements
  - React Bridge API
  - Discord Activities API and export options
  - YouTube Playables API and export options
  - Web export Metatags options
- Data management and File formats
  - SQLite file import and API
  - CSV files import and API
  - INI files import and API
  - DotENV Support
  - Tiled files import
- Client and Server interactions
  - IRC Client
  - HTTP Server
  - RCON Server & Client
  - General Porpouse ENET Server & Client
  - JWT API
  - SocketIO Client
- Content Creator Stuff
  - Twitch API
  - Kick API
  - OBS Client
  - Crowd Control API

To Be Merged
- Steam integration API (auth, user info, inventory, stats, drops, archivements)
*/

function FeatureCard({ data }: { data: any }) {
  return (
    <article className={style["featurecard-article"]}>
      <img src={publicAsset("images/sponsors/GitHub_Lockup_White.svg")} alt={data.title} />
      <div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <AppLink to={data.link}>Learn More</AppLink>
      </div>
    </article>
  )
}

export default ({ }: Route.ComponentProps) => {
  return <>
    <MetaTags />
    <main className={style["main"]}>
      <h1>Features</h1>
      <p>
        From games to applications across PC, console and XR, Blazium Engine
        gives you everything you need to start, ship, grow and stand out from
        the crowd.
      </p>
      {featureList.map(category => (
        <details>
          <summary><FaChevronCircleDown /><h2>{category.title}</h2></summary>
          {category.features.map(feature => (
            <FeatureCard data={feature} />
          ))}
        </details>
      ))}
    </main>
  </>
}