import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import { plugin as markdown, Mode } from 'vite-plugin-markdown'

export default defineConfig(() => {
  return {
    resolve: {
      tsconfigPaths: true,
    },
    plugins: [
      reactRouter(),
      markdown({ mode: [Mode.HTML] }),
    ],
  }
});
