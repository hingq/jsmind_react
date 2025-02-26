import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// https://vitejs.dev/config/
import { default as Mdresolve } from "./src/plugin/md";
import { resolve } from "path";
// eslint-disable-next-line no-undef
const isDev = process.env.NODE_ENV === "development";

const path = isDev ? "" : "https://hingq.github.io/jsmind_react/";
export default defineConfig({
  base: path,
  assetsInclude: ["**/*.md"],
  // 依据数组先后执行
  plugins: [Mdresolve(), react()],
  build: {
    outDir: "docs",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes(".md")) {
            return "markdown";
          }
          if (id.includes("node_modules")) {
            return "vendor";
          }          
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },

  worker: {
    format: "es",
  },
  // 配置别名
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
