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
   
  };
};

export default Mdresolve;
