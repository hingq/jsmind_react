import fs from "node:fs";
import path from "node:path";
import Reader from "../util/markdown/parser.js";
import { transformSync } from "esbuild";
const Mdresolve = () => {
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
        const string=JSON.stringify(code)
        const component=`
        export default ${string}
        `
        // const read = new Reader(code);
        // const _html = read.gethtml();
        // const idArray = read.getId();
        // const component = `
        // import React from "react";
        // import 'highlight.js/styles/xcode.css';
        // import 'github-markdown-css';
        // export const idArray=${JSON.stringify(idArray)}
        //  export default function snippet() {
        //   return (
        //   <>
        //     <div className="markdown-body"  dangerouslySetInnerHTML={{ __html: ${JSON.stringify(
        //       _html
        //     )} }}></div>

        //   </>
        // )    
        // }
        // `;
        const result =  transformSync(component, { loader: "jsx" });        
        return result.code;
      }
    },
  };
};

export default Mdresolve;
