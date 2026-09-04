import type { FeatureCategory } from "~/types";

const base: FeatureCategory = {
  title: "Core Engine",
  features: [{
    img: "",
    title: "2D & 3D Game Development",
    description: "Full-featured 2D and 3D game engine based on Godot 4.x with scene system, nodes, rendering, animation, and complete project compatibility.",
    link: "",
  }, {
    img: "",
    title: "Cross-platform Exports",
    description: "One-click export to Windows, macOS, Linux, Android, iOS, Web, Steam Deck, and consoles while preserving full Godot 4.x project compatibility.",
    link: "",
  }, {
    img: "",
    title: "Physics Engines",
    description: "Built-in 2D and 3D physics (Godot Physics) plus optional Jolt Physics module for high-performance rigid body simulation and collisions.",
    link: "",
  }, {
    img: "",
    title: "XR Support",
    description: "Native OpenXR and mobile VR support for immersive AR/VR experiences with headset tracking, controllers, and cross-platform deployment.",
    link: "",
  }]
} as const;

const platform: FeatureCategory = {
  title: "Platform Integrations",
  features: [{
    img: "",
    title: "Steamworks",
    description: "Native Steam API integration for authentication, inventory, drops, achievements, stats, user info, rich presence, and server auth without external extensions.",
    link: "",
  }, {
    img: "",
    title: "Discord Social SDK",
    description: "Native Discord Social SDK for rich presence, friends lists, activity invites, join requests, and seamless social features inside your games.",
    link: "",
  }, {
    img: "",
    title: "Microsoft GDK",
    description: "Microsoft Game Development Kit support with export tooling, live services, and a built-in test suite for Xbox and Windows platforms.",
    link: "",
  }, {
    img: "",
    title: "Discord Activities",
    description: "Publish games as Discord Embedded Apps / Activities with dedicated client node, export options, and integration with Blazium services.",
    link: "",
  }, {
    img: "",
    title: "YouTube Playables",
    description: "Native YouTube Playables support via client node and dedicated web export options for easy browser-based game deployment.",
    link: "",
  }]
} as const;

const data: FeatureCategory = {
  title: "Data & Configuration",
  features: [{
    img: "",
    title: "SQLite3",
    description: "Native SQLite databases with resources, nodes, backups, BLOB handling, and advanced query tools for persistent game data.",
    link: "",
  }, {
    img: "",
    title: "CSV Support",
    description: "Built-in DotCSV module for reading and writing structured CSV files for game data, configs, and spreadsheet imports.",
    link: "",
  }, {
    img: "",
    title: "INI Support",
    description: "Lightweight DotINI module for parsing and writing INI configuration files with type-checking for settings and structured data.",
    link: "",
  }, {
    img: "",
    title: "DotENV Support",
    description: "Load and manage .env files and runtime variables to keep configuration and secrets out of source code.",
    link: "",
  }, {
    img: "",
    title: "JWT Handling",
    description: "Built-in JWT API for token creation, parsing, validation, and signing (HS256/RS256) with claim verification, expiration checks, key rotation, and JTI blacklisting.",
    link: "",
  }, {
    img: "",
    title: "BigNum++",
    description: "Arbitrary-precision arithmetic for incremental, idle, and simulation-heavy games that need extremely large or highly precise numbers.",
    link: "",
  }]
} as const;

const networking: FeatureCategory = {
  title: "Networking & Servers",
  features: [{
    img: "",
    title: "ENet Server & Client",
    description: "Enhanced low-level ENet module with flexible host/peer management and packet-level control, independent of the high-level multiplayer API.",
    link: "",
  }, {
    img: "",
    title: "HTTP Server",
    description: "Complete built-in HTTP server supporting REST APIs, static file serving, and Server-Sent Events (SSE).",
    link: "",
  }, {
    img: "",
    title: "RCON Server & Client",
    description: "Full Source RCON protocol support for remote administration, console commands, and control of dedicated servers or in-game tools.",
    link: "",
  }, {
    img: "",
    title: "Socket.IO Client",
    description: "Full Socket.IO v5 client for real-time bidirectional communication with namespaces, events, acknowledgments, binary data, and automatic reconnection.",
    link: "",
  }, {
    img: "",
    title: "IRC Client",
    description: "Native IRC client for real-time chat connectivity, community features, bots, or multiplayer communication.",
    link: "",
  }]
} as const;

const streaming: FeatureCategory = {
  title: "Streaming & Interactivity",
  features: [{
    img: "",
    title: "OBS Client",
    description: "Connect to OBS Studio via WebSocket and control virtually every aspect of streaming or recording setups from within Blazium.",
    link: "",
  }, {
    img: "",
    title: "Crowd Control",
    description: "Native Crowd Control integration letting live audiences influence gameplay in real time through effects, parameters, and game packs.",
    link: "",
  }, {
    img: "",
    title: "Twitch API",
    description: "Native high-performance Twitch Helix API access for overlays, interactivity, authentication, and audience-driven features.",
    link: "",
  }, {
    img: "",
    title: "Kick API",
    description: "Native Kick.com integration for multi-streamer tools, interactive overlays, and reliable real-time audience features.",
    link: "",
  }]
} as const;

const tools: FeatureCategory = {
  title: "Developer Tools",
  features: [{
    img: "",
    title: "MCP Server",
    description: "Built-in Model Context Protocol server connecting AI assistants to projects with structured access to files, scenes, scripts, and up to 308 tools for automation and natural-language workflows.",
    link: "",
  }, {
    img: "",
    title: "Multi-user Editor",
    description: "Real-time collaborative editing with CRDT script sync, filesystem transfer, permissions, and live presence for multiple developers on the same project.",
    link: "",
  }, {
    img: "",
    title: "Autowork Testing",
    description: "Integrated testing framework for unit, integration, and simulation tests to automate gameplay validation, regression testing, and project verification.",
    link: "",
  }, {
    img: "",
    title: "GOAP Framework",
    description: "Native Goal-Oriented Action Planning for flexible, goal-driven AI. Agents inspect world state and plan action sequences toward objectives with inspectable behavior.",
    link: "",
  }, {
    img: "",
    title: "Tiled Importer",
    description: "Native import of Tiled map editor files including tile layers, object groups, tilesets, and animated tiles for 2D level design.",
    link: "",
  }, {
    img: "",
    title: "POGR Analytics",
    description: "Integrated POGR API for easily adding analytics to track gameplay metrics, player behavior, and performance data.",
    link: "",
  }, {
    img: "",
    title: "Luau Support (Experimental)",
    description: "Experimental Luau scripting module for writing networking and server-side code directly in the engine, planned for scriptable game servers.",
    link: "",
  }, {
    img: "",
    title: "React Bridge",
    description: "Native bridge for integrating Blazium web exports with React applications via postMessage for hybrid web experiences.",
    link: "",
  }]
} as const;

export const featureList: FeatureCategory[] = [
  base,
  platform,
  data,
  networking,
  streaming,
  tools,
] as const;
