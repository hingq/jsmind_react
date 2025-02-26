// vite.config.js
import { defineConfig } from "file:///E:/Person_Programs/mindMap_react/mindMap/node_modules/vite/dist/node/index.js";
import react from "file:///E:/Person_Programs/mindMap_react/mindMap/node_modules/@vitejs/plugin-react-swc/index.mjs";

// src/plugin/md.js
import fs2 from "node:fs";
import path2 from "node:path";

// src/util/markdown/util.js
import fs from "node:fs";
import path from "node:path";
function scanMarkdownFiles(dir) {
  let file = [];
  fs.readdirSync(dir).forEach((filename) => {
    const fullpath = path.join(dir, filename);
    if (fs.statSync(fullpath).isDirectory()) {
      file = file.concat(scanMarkdownFiles(fullpath));
    }
    if (filename.endsWith(".md")) {
      file.push(filename);
    }
  });
  return file;
}
function generateRouter(file, baseUrl) {
  return file.map((filename) => {
    const relativePath = path.relative(baseUrl, filename);
    const routePath = `${relativePath.replace(/\.md$/, "")}`;
    return { file, routePath };
  });
}

// src/plugin/md.js
import { transformSync } from "file:///E:/Person_Programs/mindMap_react/mindMap/node_modules/esbuild/lib/main.js";
var Mdresolve = () => {
  const markdownDir = path2.resolve("src/assets/markdown");
  const file = scanMarkdownFiles(markdownDir);
  const routes = generateRouter(file, markdownDir);
  return {
    name: "vite-plugin-md",
    enforce: "pre",
    // 优先执行
    resolveId(id) {
      if (id.endsWith(".md")) {
        return id;
      }
    },
    async load(id) {
      if (id.endsWith(".md")) {
        const filePath = path2.resolve("src/assets/markdown", path2.basename(id));
        if (!fs2.existsSync(filePath)) {
          throw new Error(`File not found: ${filePath}`);
        }
        const code = fs2.readFileSync(filePath, "utf-8");
        const string = JSON.stringify(code);
        const component = `
        export default ${string}
        `;
        const result = transformSync(component, { loader: "jsx" });
        return result.code;
      }
    },
    configureServer(server) {
      const matchRoute = routes.find((route) => route.routePath === req.url);
      if (matchRoute) {
        const mdContent = fs2.readFileSync(matchRoute.filePath, "utf-8");
        const htmlContent = "";
        const component = `
            import React from 'react';
            export default function MarkdownPage() {
              return <div className="markdown-body" dangerouslySetInnerHTML={{ __html: ${JSON.stringify(
          htmlContent
        )} }} />;
            }
          `;
        const result = transformSync(component, { loader: "jsx" });
        res.setHeader;
      }
    }
  };
};
var md_default = Mdresolve;

// vite.config.js
import { resolve } from "path";
var __vite_injected_original_dirname = "E:\\Person_Programs\\mindMap_react\\mindMap";
var isDev = process.env.NODE_ENV === "development";
var path3 = isDev ? "" : "https://hingq.github.io/jsmind_react/";
var vite_config_default = defineConfig({
  base: path3,
  assetsInclude: ["**/*.md"],
  // 依据数组先后执行
  plugins: [md_default(), react()],
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
          console.log(id);
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true
      }
    }
  },
  worker: {
    format: "es"
  },
  // 配置别名
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAic3JjL3BsdWdpbi9tZC5qcyIsICJzcmMvdXRpbC9tYXJrZG93bi91dGlsLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcUGVyc29uX1Byb2dyYW1zXFxcXG1pbmRNYXBfcmVhY3RcXFxcbWluZE1hcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcUGVyc29uX1Byb2dyYW1zXFxcXG1pbmRNYXBfcmVhY3RcXFxcbWluZE1hcFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovUGVyc29uX1Byb2dyYW1zL21pbmRNYXBfcmVhY3QvbWluZE1hcC92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmltcG9ydCB7IGRlZmF1bHQgYXMgTWRyZXNvbHZlIH0gZnJvbSBcIi4vc3JjL3BsdWdpbi9tZFwiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbmNvbnN0IGlzRGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIjtcblxuY29uc3QgcGF0aCA9IGlzRGV2ID8gXCJcIiA6IFwiaHR0cHM6Ly9oaW5ncS5naXRodWIuaW8vanNtaW5kX3JlYWN0L1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYmFzZTogcGF0aCxcbiAgYXNzZXRzSW5jbHVkZTogW1wiKiovKi5tZFwiXSxcbiAgLy8gXHU0RjlEXHU2MzZFXHU2NTcwXHU3RUM0XHU1MTQ4XHU1NDBFXHU2MjY3XHU4ODRDXG4gIHBsdWdpbnM6IFtNZHJlc29sdmUoKSwgcmVhY3QoKV0sXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiBcImRvY3NcIixcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKFwiLm1kXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJtYXJrZG93blwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCJub2RlX21vZHVsZXNcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBcInZlbmRvclwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgZHJvcF9jb25zb2xlOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIHdvcmtlcjoge1xuICAgIGZvcm1hdDogXCJlc1wiLFxuICB9LFxuICAvLyBcdTkxNERcdTdGNkVcdTUyMkJcdTU0MERcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgfSxcbiAgfSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxQZXJzb25fUHJvZ3JhbXNcXFxcbWluZE1hcF9yZWFjdFxcXFxtaW5kTWFwXFxcXHNyY1xcXFxwbHVnaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXFBlcnNvbl9Qcm9ncmFtc1xcXFxtaW5kTWFwX3JlYWN0XFxcXG1pbmRNYXBcXFxcc3JjXFxcXHBsdWdpblxcXFxtZC5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovUGVyc29uX1Byb2dyYW1zL21pbmRNYXBfcmVhY3QvbWluZE1hcC9zcmMvcGx1Z2luL21kLmpzXCI7aW1wb3J0IGZzIGZyb20gXCJub2RlOmZzXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJub2RlOnBhdGhcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVSb3V0ZXIsIHNjYW5NYXJrZG93bkZpbGVzIH0gZnJvbSBcIi4uL3V0aWwvbWFya2Rvd24vdXRpbFwiO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm1TeW5jIH0gZnJvbSBcImVzYnVpbGRcIjtcclxuY29uc3QgTWRyZXNvbHZlID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1hcmtkb3duRGlyID0gcGF0aC5yZXNvbHZlKFwic3JjL2Fzc2V0cy9tYXJrZG93blwiKTtcclxuICBjb25zdCBmaWxlID0gc2Nhbk1hcmtkb3duRmlsZXMobWFya2Rvd25EaXIpO1xyXG4gIGNvbnN0IHJvdXRlcyA9IGdlbmVyYXRlUm91dGVyKGZpbGUsIG1hcmtkb3duRGlyKTtcclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogXCJ2aXRlLXBsdWdpbi1tZFwiLFxyXG4gICAgZW5mb3JjZTogXCJwcmVcIixcclxuICAgIC8vIFx1NEYxOFx1NTE0OFx1NjI2N1x1ODg0Q1xyXG4gICAgcmVzb2x2ZUlkKGlkKSB7XHJcbiAgICAgIGlmIChpZC5lbmRzV2l0aChcIi5tZFwiKSkge1xyXG4gICAgICAgIHJldHVybiBpZDtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFzeW5jIGxvYWQoaWQpIHtcclxuICAgICAgaWYgKGlkLmVuZHNXaXRoKFwiLm1kXCIpKSB7XHJcbiAgICAgICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLnJlc29sdmUoXCJzcmMvYXNzZXRzL21hcmtkb3duXCIsIHBhdGguYmFzZW5hbWUoaWQpKTtcclxuXHJcbiAgICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGaWxlIG5vdCBmb3VuZDogJHtmaWxlUGF0aH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29kZSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgXCJ1dGYtOFwiKTtcclxuICAgICAgICBjb25zdCBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShjb2RlKTtcclxuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBgXHJcbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgJHtzdHJpbmd9XHJcbiAgICAgICAgYDtcclxuICAgICAgICAvLyBjb25zdCByZWFkID0gbmV3IFJlYWRlcihjb2RlKTtcclxuICAgICAgICAvLyBjb25zdCBfaHRtbCA9IHJlYWQuZ2V0aHRtbCgpO1xyXG4gICAgICAgIC8vIGNvbnN0IGlkQXJyYXkgPSByZWFkLmdldElkKCk7XHJcbiAgICAgICAgLy8gY29uc3QgY29tcG9uZW50ID0gYFxyXG4gICAgICAgIC8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuICAgICAgICAvLyBpbXBvcnQgJ2hpZ2hsaWdodC5qcy9zdHlsZXMveGNvZGUuY3NzJztcclxuICAgICAgICAvLyBpbXBvcnQgJ2dpdGh1Yi1tYXJrZG93bi1jc3MnO1xyXG4gICAgICAgIC8vIGV4cG9ydCBjb25zdCBpZEFycmF5PSR7SlNPTi5zdHJpbmdpZnkoaWRBcnJheSl9XHJcbiAgICAgICAgLy8gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNuaXBwZXQoKSB7XHJcbiAgICAgICAgLy8gICByZXR1cm4gKFxyXG4gICAgICAgIC8vICAgPD5cclxuICAgICAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZG93bi1ib2R5XCIgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogJHtKU09OLnN0cmluZ2lmeShcclxuICAgICAgICAvLyAgICAgICBfaHRtbFxyXG4gICAgICAgIC8vICAgICApfSB9fT48L2Rpdj5cclxuXHJcbiAgICAgICAgLy8gICA8Lz5cclxuICAgICAgICAvLyApXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGA7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdHJhbnNmb3JtU3luYyhjb21wb25lbnQsIHsgbG9hZGVyOiBcImpzeFwiIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQuY29kZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbmZpZ3VyZVNlcnZlcihzZXJ2ZXIpIHtcclxuICAgICAgY29uc3QgbWF0Y2hSb3V0ZSA9IHJvdXRlcy5maW5kKChyb3V0ZSkgPT4gcm91dGUucm91dGVQYXRoID09PSByZXEudXJsKTtcclxuICAgICAgaWYgKG1hdGNoUm91dGUpIHtcclxuICAgICAgICBjb25zdCBtZENvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMobWF0Y2hSb3V0ZS5maWxlUGF0aCwgXCJ1dGYtOFwiKTtcclxuICAgICAgICBjb25zdCBodG1sQ29udGVudCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGBcclxuICAgICAgICAgICAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuICAgICAgICAgICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFya2Rvd25QYWdlKCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm1hcmtkb3duLWJvZHlcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6ICR7SlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgICAgICBodG1sQ29udGVudFxyXG4gICAgICAgICAgICAgICl9IH19IC8+O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRyYW5zZm9ybVN5bmMoY29tcG9uZW50LCB7IGxvYWRlcjogXCJqc3hcIiB9KTtcclxuICAgICAgIHJlcy5zZXRIZWFkZXJcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWRyZXNvbHZlO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXFBlcnNvbl9Qcm9ncmFtc1xcXFxtaW5kTWFwX3JlYWN0XFxcXG1pbmRNYXBcXFxcc3JjXFxcXHV0aWxcXFxcbWFya2Rvd25cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXFBlcnNvbl9Qcm9ncmFtc1xcXFxtaW5kTWFwX3JlYWN0XFxcXG1pbmRNYXBcXFxcc3JjXFxcXHV0aWxcXFxcbWFya2Rvd25cXFxcdXRpbC5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovUGVyc29uX1Byb2dyYW1zL21pbmRNYXBfcmVhY3QvbWluZE1hcC9zcmMvdXRpbC9tYXJrZG93bi91dGlsLmpzXCI7aW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMnXHJcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCdcclxuZXhwb3J0IGZ1bmN0aW9uIHNjYW5NYXJrZG93bkZpbGVzKGRpcikge1xyXG4gICAgICAgIGxldCBmaWxlPVtdXHJcblxyXG4gICAgICAgIGZzLnJlYWRkaXJTeW5jKGRpcikuZm9yRWFjaCgoZmlsZW5hbWUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZnVsbHBhdGg9cGF0aC5qb2luKGRpciwgZmlsZW5hbWUpXHJcbiAgICAgICAgICAgIGlmIChmcy5zdGF0U3luYyhmdWxscGF0aCkuaXNEaXJlY3RvcnkoKSkge1xyXG4gICAgICAgICAgICAgICAgZmlsZSA9IGZpbGUuY29uY2F0KHNjYW5NYXJrZG93bkZpbGVzKGZ1bGxwYXRoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZmlsZW5hbWUuZW5kc1dpdGgoXCIubWRcIikpIHtcclxuICAgICAgICAgICAgICAgIGZpbGUucHVzaChmaWxlbmFtZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGZpbGVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUm91dGVyKGZpbGUsYmFzZVVybCkge1xyXG4gICByZXR1cm4gZmlsZS5tYXAoKGZpbGVuYW1lKSA9PiB7XHJcbiAgICAgICBjb25zdCByZWxhdGl2ZVBhdGggPSBwYXRoLnJlbGF0aXZlKGJhc2VVcmwsIGZpbGVuYW1lKVxyXG4gICAgICAgIGNvbnN0IHJvdXRlUGF0aD1gJHtyZWxhdGl2ZVBhdGgucmVwbGFjZSgvXFwubWQkLywnJyl9YFxyXG4gICAgICAgIHJldHVybiB7ZmlsZSxyb3V0ZVBhdGh9XHJcbiAgICB9KVxyXG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUFrVCxTQUFTLG9CQUFvQjtBQUMvVSxPQUFPLFdBQVc7OztBQ0RtVCxPQUFPQSxTQUFRO0FBQ3BWLE9BQU9DLFdBQVU7OztBQ0QrVSxPQUFPLFFBQVE7QUFDL1csT0FBTyxVQUFVO0FBQ1YsU0FBUyxrQkFBa0IsS0FBSztBQUMvQixNQUFJLE9BQUssQ0FBQztBQUVWLEtBQUcsWUFBWSxHQUFHLEVBQUUsUUFBUSxDQUFDLGFBQWE7QUFDdEMsVUFBTSxXQUFTLEtBQUssS0FBSyxLQUFLLFFBQVE7QUFDdEMsUUFBSSxHQUFHLFNBQVMsUUFBUSxFQUFFLFlBQVksR0FBRztBQUNyQyxhQUFPLEtBQUssT0FBTyxrQkFBa0IsUUFBUSxDQUFDO0FBQUEsSUFDbEQ7QUFDQSxRQUFJLFNBQVMsU0FBUyxLQUFLLEdBQUc7QUFDMUIsV0FBSyxLQUFLLFFBQVE7QUFBQSxJQUN0QjtBQUFBLEVBQ0osQ0FBQztBQUNELFNBQU87QUFDZjtBQUVPLFNBQVMsZUFBZSxNQUFLLFNBQVM7QUFDMUMsU0FBTyxLQUFLLElBQUksQ0FBQyxhQUFhO0FBQzFCLFVBQU0sZUFBZSxLQUFLLFNBQVMs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
