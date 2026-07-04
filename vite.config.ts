import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import { plugin as markdown, Mode } from 'vite-plugin-markdown'

const pagesBase = process.env["GITHUB_PAGES"] === "true" ? "/blazium.app-v2/" : "/";

export default defineConfig(() => {
  return {
    base: pagesBase,
    resolve: {
      tsconfigPaths: true,
    },
    plugins: [
      reactRouter(),
      markdown({ mode: [Mode.HTML] }),
    ],
  }
});
