import type { FeatureData } from "~/types";

const base: FeatureData[] = [{
  img: "",
  title: "2D & 3D Game Development",
  description: "Full-featured 2D and 3D game engine based on Godot 4.x with scene system, nodes, rendering, animation, and complete project compatibility.",
}, {
  img: "",
  title: "Cross-platform Exports",
  description: "One-click export to Windows, macOS, Linux, Android, iOS, Web, Steam Deck, and consoles while preserving full Godot 4.x project compatibility.",
}, {
  img: "",
  title: "Physics Engines",
  description: "Built-in 2D and 3D physics (Godot Physics) plus optional Jolt Physics module for high-performance rigid body simulation and collisions.",
}, {
  img: "",
  title: "XR Support",
  description: "Native OpenXR and mobile VR support for immersive AR/VR experiences with headset tracking, controllers, and cross-platform deployment.",
}] as const;

const platform: FeatureData[] = [{
  img: "",
  title: "Steamworks",
  description: "Native Steam API integration for authentication, inventory, drops, achievements, stats, user info, rich presence, and server auth without external extensions.",
}, {
  img: "",
  title: "Discord Social SDK",
  description: "Native Discord Social SDK for rich presence, friends lists, activity invites, join requests, and seamless social features inside your games.",
}, {
  img: "",
  title: "Microsoft GDK",
  description: "Microsoft Game Development Kit support with export tooling, live services, and a built-in test suite for Xbox and Windows platforms.",
}, {
  img: "",
  title: "Discord Activities",
  description: "Publish games as Discord Embedded Apps / Activities with dedicated client node, export options, and integration with Blazium services.",
}, {
  img: "",
  title: "YouTube Playables",
  description: "Native YouTube Playables support via client node and dedicated web export options for easy browser-based game deployment.",
}] as const;

const data: FeatureData[] = [{
  img: "",
  title: "SQLite3",
  description: "Native SQLite databases with resources, nodes, backups, BLOB handling, and advanced query tools for persistent game data.",
}, {
  img: "",
  title: "CSV Support",
  description: "Built-in DotCSV module for reading and writing structured CSV files for game data, configs, and spreadsheet imports.",
}, {
  img: "",
  title: "INI Support",
  description: "Lightweight DotINI module for parsing and writing INI configuration files with type-checking for settings and structured data.",
}, {
  img: "",
  title: "DotENV Support",
  description: "Load and manage .env files and runtime variables to keep configuration and secrets out of source code.",
}, {
  img: "",
  title: "JWT Handling",
  description: "Built-in JWT API for token creation, parsing, validation, and signing (HS256/RS256) with claim verification, expiration checks, key rotation, and JTI blacklisting.",
}, {
  img: "",
  title: "BigNum++",
  description: "Arbitrary-precision arithmetic for incremental, idle, and simulation-heavy games that need extremely large or highly precise numbers.",
}] as const;

const networking: FeatureData[] = [{
  img: "",
  title: "ENet Server & Client",
  description: "Enhanced low-level ENet module with flexible host/peer management and packet-level control, independent of the high-level multiplayer API.",
}, {
  img: "",
  title: "HTTP Server",
  description: "Complete built-in HTTP server supporting REST APIs, static file serving, and Server-Sent Events (SSE).",
}, {
  img: "",
  title: "RCON Server & Client",
  description: "Full Source RCON protocol support for remote administration, console commands, and control of dedicated servers or in-game tools.",
}, {
  img: "",
  title: "Socket.IO Client",
  description: "Full Socket.IO v5 client for real-time bidirectional communication with namespaces, events, acknowledgments, binary data, and automatic reconnection.",
}, {
  img: "",
  title: "IRC Client",
  description: "Native IRC client for real-time chat connectivity, community features, bots, or multiplayer communication.",
}] as const;

const streaming: FeatureData[] = [{
  img: "",
  title: "OBS Client",
  description: "Connect to OBS Studio via WebSocket and control virtually every aspect of streaming or recording setups from within Blazium.",
}, {
  img: "",
  title: "Crowd Control",
  description: "Native Crowd Control integration letting live audiences influence gameplay in real time through effects, parameters, and game packs.",
}, {
  img: "",
  title: "Twitch API",
  description: "Native high-performance Twitch Helix API access for overlays, interactivity, authentication, and audience-driven features.",
}, {
  img: "",
  title: "Kick API",
  description: "Native Kick.com integration for multi-streamer tools, interactive overlays, and reliable real-time audience features.",
}] as const;

const tools: FeatureData[] = [{
  img: "",
  title: "MCP Server",
  description: "Built-in Model Context Protocol server connecting AI assistants to projects with structured access to files, scenes, scripts, and up to 308 tools for automation and natural-language workflows.",
}, {
  img: "",
  title: "Multi-user Editor",
  description: "Real-time collaborative editing with CRDT script sync, filesystem transfer, permissions, and live presence for multiple developers on the same project.",
}, {
  img: "",
  title: "Autowork Testing",
  description: "Integrated testing framework for unit, integration, and simulation tests to automate gameplay validation, regression testing, and project verification.",
}, {
  img: "",
  title: "GOAP Framework",
  description: "Native Goal-Oriented Action Planning for flexible, goal-driven AI. Agents inspect world state and plan action sequences toward objectives with inspectable behavior.",
}, {
  img: "",
  title: "Tiled Importer",
  description: "Native import of Tiled map editor files including tile layers, object groups, tilesets, and animated tiles for 2D level design.",
}, {
  img: "",
  title: "POGR Analytics",
  description: "Integrated POGR API for easily adding analytics to track gameplay metrics, player behavior, and performance data.",
}, {
  img: "",
  title: "Luau Support (Experimental)",
  description: "Experimental Luau scripting module for writing networking and server-side code directly in the engine, planned for scriptable game servers.",
}, {
  img: "",
  title: "React Bridge",
  description: "Native bridge for integrating Blazium web exports with React applications via postMessage for hybrid web experiences.",
}] as const;

export const featuresList = {
  "Core Engine": base,
  "Platform Integrations": platform,
  "Data & Configuration": data,
  "Networking & Servers": networking,
  "Streaming & Interactivity": streaming,
  "Developer Tools": tools,
} as const;