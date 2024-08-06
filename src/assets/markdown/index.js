// src/assets/markdown/markdown-files.js

export default {
  html: () => import("./html.md"),
  promise: ()=>import("./promise.md"),
  canvas: () => import("./canvas.md"),
  css: () => import("./Css.md"),
  js:  ()=>import("./js.md"),
  ts: () => import("./typescript.md"),
  nginx: () => import("./nginx.md"),
  react: () => import("./react.md"),
  redis: () => import("./redis.md"),
  vite: () => import("./vite.md"),
  vitest: () => import("./vitest.md"),
  vue: () => import("./vue.md"),
  git:()=>import("./git.md"),
  webpack:()=>import("./webpack.md")
};
