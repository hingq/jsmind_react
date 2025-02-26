import fs from "node:fs";
import path from "node:path";
import { generateRouter, scanMarkdownFiles } from "../util/markdown/util";
import { transformSync } from "esbuild";
const Mdresolve = () => {
  const markdownDir = path.resolve("src/assets/markdown");
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
        const filePath = path.resolve("src/assets/markdown", path.basename(id));

        if (!fs.existsSync(filePath)) {
          throw new Error(`File not found: ${filePath}`);
        }
        const code = fs.readFileSync(filePath, "utf-8");
        const string = JSON.stringify(code);
        const component = `
        export default ${string}
        `;
        const result = transformSync(component, { loader: "jsx" });
        return result.code;
      }
    },
    // configureServer(server) {
    //   server.middlewares.use(async (req, res, next) => {        
    //     const matchRoute = routes.find((route) => route.routePath === req.url);
    //     if (matchRoute) {
    //       const mdContent = fs.readFileSync(matchRoute.filePath, "utf-8");
    //       const htmlContent = "";

    //       const component = `
    //         import React from 'react';
    //         export default function MarkdownPage() {
    //           return <div className="markdown-body" dangerouslySetInnerHTML={{ __html: ${JSON.stringify(
    //             htmlContent
    //           )} }} />;
    //         }
    //       `;
    //       const result = transformSync(component, { loader: "jsx" });
    //       res.setHeader("Content-Type", "text/html");
    //       res.end(result.code);
    //     } else {
    //       next();
    //     }
    //   });
    // },
  };
};

export default Mdresolve;
