import { type RouteConfig, index, prefix, route, layout } from "@react-router/dev/routes";

export default [
  route("chat", "routes/discord-redirect.tsx"),

  layout("routes/layout.tsx", [
    index("routes/home.tsx"),

    route("features", "routes/features.tsx"),
    route("download", "routes/download.tsx"), // redirect /downloads/* here
    route("sponsors", "routes/sponsors.tsx"),
    route("developers", "routes/developers.tsx"), // redirect /meet-the-team here
    route("changelog", "routes/changelog.tsx"),
    route("from-godot", "routes/from-godot.tsx"),
    route("privacy-policy", "routes/privacy-policy.tsx"),
    route("press-kit", "routes/press-kit.tsx"),
    // route("license", "routes/license.tsx"),

    route("*", "routes/404.tsx"),
  ]),

  ...prefix("api", [
    route("/mirrorlist/:version.json", "routes/api-mirrorlist.tsx"),
    route(":version.json", "routes/api-versions.tsx"),
  ]),
] satisfies RouteConfig;