import type { FeatureData } from "~/types";

export const featuresList: Record<string, FeatureData[]> = {
  "Scripting Languages": [{
    img: "",
    title: "GDScript Support",
    description: "Blazium fully supports GDScript, the high-level, Python-inspired scripting language tightly integrated with the engine. Write game logic quickly and naturally with optional static typing, powerful language features, first-class functions, and seamless access to nodes, signals, and resources. Ideal for rapid prototyping and production code with excellent editor tooling and performance.",
  }, {
    img: "",
    title: "C# Integration",
    description: "Leverage full first-class C# and .NET support for high-performance game logic, familiar libraries, and advanced tooling. Enjoy swizzle operators, VSCodium support, and cross-platform builds including Android. Perfect for teams coming from Unity or other C# ecosystems while retaining deep engine integration and GDExtension compatibility.",
  }, {
    img: "",
    title: "Luau Experimental",
    description: "Experimental Luau scripting support enables high-performance Lua-based code for networking, server logic, and scriptable systems. Designed with future scriptable game servers in mind, this module allows developers to write networking and backend code directly inside the engine while remaining fully experimental and under active improvement.",
  }],
  "Physics Systems": [{
    img: "",
    title: "Godot Physics",
    description: "The classic Godot physics engines for both 2D and 3D remain fully available and optimized. They provide reliable rigid body, soft body, character, and vehicle simulation with extensive configuration options, joints, and collision handling that integrate seamlessly with the scene system and scripting languages.",
  }, {
    img: "",
    title: "Jolt Physics",
    description: "High-performance Jolt Physics is integrated as a modern alternative for 3D simulation. It delivers excellent rigid body, soft body, and vehicle physics with superior scalability and determinism, supporting advanced features such as physics interpolation, manual stepping, and inactive joints for creative gameplay mechanics.",
  }],
  "Platform Support": [{
    img: "",
    title: "Multi Platform Export",
    description: "Export your projects with one click to a comprehensive range of platforms including Windows, macOS, Linux, Android, iOS, web (HTML5), and consoles via the Blazium toolchain. Additional support extends to legacy systems such as PS1 and PS2 through custom toolchains, Discord Embedded Apps, YouTube Playables, and more, all from a single project.",
  }, {
    img: "",
    title: "Blazium Toolchain",
    description: "The official Blazium Toolchain is a dedicated CLI that fetches console compilers into a local cache and builds products for PS1, PS2, N64, and Interactive DVD. It supports setup profiles (compile, dev, iso/rom), guest runtime stubs, sample projects, ISO/ROM mastering, emulator runs, and offline modes. Compilers and SDKs are downloaded on demand while the MIT-licensed editor only spawns the binary, enabling true legacy console and Interactive DVD exports from modern Blazium projects.",
  }, {
    img: "",
    title: "XR Experiences",
    description: "Built-in OpenXR and WebXR support makes creating immersive XR projects straightforward. Setting up an XR project takes only minutes, with native editor support on various headsets, hand tracking, body tracking, spatial understanding, and the ability to author experiences directly while wearing the headset for true WYSIWYG development.",
  }],
  "Developer Tools": [{
    img: "",
    title: "Blazium Editor",
    description: "The full-featured Blazium Editor provides an integrated development environment available on Linux, macOS, and Windows. It includes multi-user real-time collaborative editing so multiple developers can work simultaneously on the same project, remote control protocols, MCP server integration for AI agents with hundreds of tools, and the ability to run the complete editor in VR mode.",
  }, {
    img: "",
    title: "MCP Integration",
    description: "The native JustAMCP module embeds a full Model Context Protocol (MCP) server directly into the Blazium editor. AI agents gain access to up to 308 specialized tools for inspecting and modifying scenes, scripts, resources, shaders, tilemaps, themes, documentation, and more. Streamable HTTP transport, async task support, pagination, runtime endpoints, and deep editor API integration enable seamless AI-driven project automation without external bridges.",
  }, {
    img: "",
    title: "Blazium CLI",
    description: "The official Blazium CLI is a powerful command-line companion for installing and managing editors across release, prerelease, and nightly channels, registering local projects, self-updating, and deeply remote-controlling running editor instances. It supports deep links (blazium://), template installation, Autowork test execution, GDScript/Lua evaluation, log inspection, debugger control, and instance selection, making it ideal for automation, CI pipelines, and headless workflows.",
  }, {
    img: "",
    title: "Source Access",
    description: "Complete free access to the entire source code under the MIT license allows you to study, customize, extend, and debug every part of the engine. The public GitHub repository is continuously updated with the latest mainline development so you can obtain cutting-edge features without waiting for official releases.",
  }, {
    img: "",
    title: "Autowork Framework",
    description: "Autowork is a native testing framework deeply integrated into the engine for fast and reliable unit, integration, simulation, and regression testing. Write automated tests for gameplay systems, validation workflows, and project verification directly inside Blazium without external tools, enabling continuous quality assurance throughout development.",
  }, {
    img: "",
    title: "Remote Control",
    description: "Remotely control the running engine or editor using the Blazium CLI and custom remote control protocols. Ideal for automation, headless servers, continuous integration pipelines, and live debugging sessions, giving developers powerful ways to interact with projects from external scripts or remote machines with instance-aware commands.",
  }, {
    img: "",
    title: "Asset Tags",
    description: "Native hierarchical asset tagging system with a full registry, query engine, persistence layer, undo/redo stack, and sidecar file support. Organize, filter, and reverse-lookup assets by custom tags and hierarchies directly inside the editor and at runtime, enabling powerful asset management workflows, automated organization, and integration with semantic search.",
  }, {
    img: "",
    title: "Semantic Search",
    description: "Advanced semantic and lexical search for project assets using embeddings, BM25 ranking, rank fusion, asynchronous workers, and a bridge to the Asset Tags system. Find assets by meaning rather than exact filename matches, with support for hybrid search, filters, and persistent indexes that accelerate large-project navigation and discovery.",
  }, {
    img: "",
    title: "Tiled Importer",
    description: "Easily import maps created with the popular Tiled map editor. Bring external level design workflows into Blazium projects with support for tilemaps, layers, objects, and properties, streamlining the transition from Tiled to the engine’s 2D systems.",
  }, {
    img: "",
    title: "GOAP System",
    description: "Native Goal-Oriented Action Planning module lets NPCs and agents select actions dynamically based on world state rather than rigid state machines. Build smarter, more flexible AI behaviors with inspectable planning, dynamic goals, and seamless integration into the scene and scripting systems.",
  }],
  "Data Handling": [{
    img: "",
    title: "SQLite Support",
    description: "Native SQLite3 module provides full database capabilities with dedicated nodes, resources, backup tools, BLOB handling, and advanced query support. Ideal for local storage, save systems, structured game data, and offline-first applications with high performance and reliability improvements in recent releases.",
  }, {
    img: "",
    title: "GIF Support",
    description: "Built-in GIF loading and handling allows seamless integration of animated GIF assets into your projects. Use them for UI elements, particle effects, cutscenes, or any visual content that benefits from lightweight animated image sequences without external dependencies.",
  }, {
    img: "",
    title: "CSV Handling",
    description: "The DotCSV module offers lightweight and flexible CSV parsing and writing directly inside the engine. Perfect for game data tables, configuration exports, spreadsheet imports, localization beyond simple translations, and any structured text data workflows with expanded import presets.",
  }, {
    img: "",
    title: "INI Configuration",
    description: "DotINI provides intuitive reading and writing of INI-style configuration files with custom type checking. Manage settings, structured data, and project options cleanly while keeping configuration separate from code for easier deployment and environment-specific tuning.",
  }, {
    img: "",
    title: "DotENV Support",
    description: "DotENV loads environment variables and secrets from .env files located next to the executable. Keep sensitive configuration out of source control, support different deployment environments, and simplify secret management for servers and multiplayer backends without hardcoding values.",
  }],
  "Networking Modules": [{
    img: "",
    title: "ENet Networking",
    description: "A flexible low-level ENet implementation runs alongside the standard high-level multiplayer API. Create custom hosts, manage peers, and handle packet-level communication with full control, making it ideal for connecting to third-party ENet servers or building specialized networking architectures.",
  }, {
    img: "",
    title: "HTTP Server",
    description: "A complete HTTP server module supports REST APIs, static file serving, and Server-Sent Events. Host backend services, serve game assets, or create interactive web endpoints directly from your Blazium project for tools, multiplayer backends, or embedded servers.",
  }, {
    img: "",
    title: "RCON Protocol",
    description: "Full RCON client and server support implements the standard Source RCON protocol. Authenticate, execute remote commands, and receive multi-packet responses for remote administration of dedicated servers or in-game consoles with native performance and deep engine integration.",
  }, {
    img: "",
    title: "Socket.IO Client",
    description: "Native Socket.IO client enables real-time bidirectional communication with any Socket.IO-compatible server. Support for namespaces, rooms, events, acknowledgments, automatic reconnection, and JSON data makes it perfect for chat, live multiplayer, or interactive web services.",
  }, {
    img: "",
    title: "IRC Client",
    description: "A full-featured IRC client with Node wrapper supports RFC 1459/2812, IRCv3 extensions, SSL/TLS, SASL, and DCC transfers. Integrate real-time chat, community features, or bot functionality directly into games with automatic polling and signal-based event handling.",
  }],
  "Streaming Tools": [{
    img: "",
    title: "OBS Client",
    description: "Control OBS Studio directly from within Blazium projects. Switch scenes, start and stop recordings or streams, manage sources, and react to OBS events for tight integration between game logic and streaming production workflows.",
  }, {
    img: "",
    title: "Crowd Control",
    description: "Native Crowd Control integration lets streamers allow viewers to trigger real-time in-game effects. Define custom effects with parameters, organize them into game packs, and handle HTTP plus WebSocket communication for interactive livestream experiences that engage audiences directly.",
  }, {
    img: "",
    title: "Twitch API",
    description: "Complete native access to the Twitch Helix API enables authenticated requests for stream data, chat integration, follower and subscriber information, and more. Build overlays, reward systems, live-event triggers, and community features without external SDKs or complex HTTP wrappers.",
  }, {
    img: "",
    title: "Kick API",
    description: "Native Kick API support brings modern streaming platform integration for chat, channel data, and interactive features. Expand audience reach beyond traditional platforms with first-class support for Kick’s growing ecosystem inside your Blazium projects.",
  }],
  "Platform SDKs": [{
    img: "",
    title: "Steamworks Support",
    description: "Dedicated Steam module provides achievements, stats, inventory, web API tickets, and backend authentication after the previous GodotSteam removal. Integrate Steam features natively for PC releases with the pieces most games need from day one without external dependencies.",
  }, {
    img: "",
    title: "Discord Integration",
    description: "Native Discord Social SDK and Embedded App support enable rich presence, social features, and publishing games as Discord Activities. The DiscordEmbeddedAppClient node handles environment detection and seamless service integration for effortless Discord deployment.",
  }, {
    img: "",
    title: "Microsoft GDK",
    description: "Full Microsoft Game Development Kit integration includes Xbox Services (XSAPI) for achievements, presence, leaderboards, and multiplayer, plus dedicated Xbox export tooling, MicrosoftGame.config packaging, and editor plugins for shipping PC and Xbox titles from Blazium.",
  }],
  "Analytics Systems": [{
    img: "",
    title: "Crash Reporting",
    description: "Native CrashReporter singleton uses Breakpad to generate minidumps on crashes, with support for in-engine HTTP upload, sidecar reporter launch, pending report management, and consent-aware workflows. Identity is shared with Analytics, and upload modes include Disabled, In-Engine, Sidecar, or Both for flexible production crash handling.",
  }, {
    img: "",
    title: "General Analytics",
    description: "Opt-in Analytics singleton queues JSON events with automatic editor or game context and optionally POSTs them to a configurable ingest endpoint. Supports consent management, anonymous or identified modes, user identification, custom properties, session tracking, and on-disk queuing with flush signals for reliable telemetry collection.",
  }, {
    img: "",
    title: "POGR Integration",
    description: "Native POGRClient node simplifies integration with the POGR analytics platform. Send events and receive insights efficiently for player engagement, retention analysis, and data-driven design decisions with minimal setup.",
  }],
} as const;