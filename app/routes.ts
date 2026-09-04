import { type RouteConfig, index, prefix, route, layout } from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),

    route("features", "routes/features.tsx"),
    route("download", "routes/download.tsx"),
    route("sponsors", "routes/sponsors.tsx"),
    route("developers", "routes/developers.tsx"),
    route("changelog", "routes/changelog.tsx"),
    route("from-godot", "routes/from-godot.tsx"),
    route("brand-kit", "routes/brand-kit.tsx"),
    route("news", "routes/news.tsx"),
    route("news/:slug", "routes/article.tsx"),

    route("*", "routes/404.tsx"),
  ]),

  ...prefix("api", [
    route("/mirrorlist/:version.json", "routes/api-mirrorlist.tsx"),
    route(":version.json", "routes/api-versions.tsx"),
  ]),
] satisfies RouteConfig;