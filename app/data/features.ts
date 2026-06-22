import type { FeatureCategory } from "~/types";

const base: FeatureCategory = {
  title: "Platform support",
  features: [{
    img: "",
    title: "Cross-plaform development",
    description: "",
    link: "",
  }, {
    img: "",
    title: "XR support",
    description: "",
    link: "",
  }]
} as const;

const devtools: FeatureCategory = {
  title: "Dev Tools",
  features: [{
    img: "",
    title: "MCP Server for the Editor",
    description: "The built-in MCP Server connects AI assistants directly to your Blazium projects through, enabling intelligent development workflows. It provides structured access to project files, engine resources, scenes, scripts, and development tools from compatible AI clients. Developers can automate repetitive tasks, accelerate content creation, and interact with their projects using natural language.",
    link: "",
  }, {
    img: "",
    title: "Built-In JWT Handling",
    description: "The built-in JSON Web Token (JWT) API, enables secure authentication and data exchange for your projects. It supports token creation, parsing, validation, and cryptographic signing using both HS256 and RS256 algorithms with advanced features such as, claim verification, expiration checks, key rotation support, and token revocation through JTI blacklisting.",
    link: "",
  }, {
    img: "",
    title: "Autowork Testing Framework",
    description: "Autowork is a testing solution built directly into Blazium, designed for fast, reliable validation of game and application code. It supports unit, integration, and simulation testing, helping developers catch issues early and maintain confidence throughout development.",
    link: "",
  }, {
    img: "",
    title: "POGR API",
    description: "Easly add analytics for your project with the powerful POGR API integrated into the engine.",
    link: "",
  }, {
    img: "",
    title: "SQLite API",
    description: "Manage data",
    link: "",
  }, {
    img: "",
    title: "CSV & INI files handling and API",
    description: "",
    link: "",
  }, {
    img: "",
    title: "DotENV Support",
    description: "",
    link: "",
  }, {
    img: "",
    title: "Tiled files import",
    description: "",
    link: "",
  }, {
    img: "",
    title: "Built-In GOAP Framework",
    description: "Build flexible, goal-driven AI directly inside your projects. Goal-Oriented Action Planning lets an agent decide what it wants to accomplish, inspect the current world state, and build a sequence of actions that moves the game toward that goal.",
    link: "",
  }, {
    img: "",
    title: "BigNum++ Integration",
    description: "",
    link: "",
  }, {
    img: "",
    title: "Microsoft's GDK Integration",
    description: "",
    link: "",
  }, {
    img: "",
    title: "Multi User Editor Support",
    description: "",
    link: "",
  }]
} as const;

const web: FeatureCategory = {
  title: "Web Export Improvements",
  features: [{
    img: "",
    title: "Discord Activities API and Export Options",
    description: "",
    link: "",
  }, {
    img: "",
    title: "YouTube Playables API and Export Options",
    description: "",
    link: "",
  }, {
    img: "",
    title: "React Bridge API",
    description: "",
    link: "",
  }]
} as const;

const contentcreation: FeatureCategory = {
  title: "Content Creation",
  features: [{
    img: "",
    title: "OBS Client",
    description: "Connect directly to a running instance of OBS Studio (via its WebSocket protocol) and control virtually every aspect of your streaming or recording setup.",
    link: "",
  }, {
    img: "",
    title: "Crowd Control API",
    description: "Seamless integration with the Crowd Control platform, enabling streamers and developers to let their live audience directly influence gameplay in real time.",
    link: "",
  }, {
    img: "",
    title: "Twitch API",
    description: "Bring your games closer to the Twitch community with native, reliable API access. Whether for overlays, interactivity, or full audience-driven features.",
    link: "",
  }, {
    img: "",
    title: "Kick API",
    description: "Multi-streamer tools, or interactive overlays, the new KickAPI module makes integration straightforward, reliable, and native to Blazium.",
    link: "",
  }]
} as const;

const clientserver: FeatureCategory = {
  title: "Clients & Servers",
  features: [{
    img: "",
    title: "ENET Server & Client",
    description: "",
    link: "",
  }, {
    img: "",
    title: "RCON Server & Client",
    description: "",
    link: "",
  }, {
    img: "",
    title: "HTTP Server",
    description: "",
    link: "",
  }, {
    img: "",
    title: "IRC Client",
    description: "",
    link: "",
  }, {
    img: "",
    title: "Socket.IO Client",
    description: "Whether you're building the next multiplayer hit or a dynamic interactive tool, Socket.IO support is ready to power your connections.",
    link: "",
  }]
} as const;

export const featureList: FeatureCategory[] = [
  base,
  devtools,
  contentcreation,
  clientserver,
  web,
] as const;
