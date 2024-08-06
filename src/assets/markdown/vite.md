# 静态资源打包

> 1. 标签页静态路经
> 2. css静态路径
> 3. 动态导入，import.meta.url
> 4. URL api, new URL('path',import.meta.url

# 资源分包

```js

  rollupOptions:{
      output: {
        entryFileNames: 'js/[name].js',//入口文件
        // entryFileNames: 'js/[name]-[hash].js',//入口文件
        chunkFileNames: 'js/[name].js',//分包引入文件
        // chunkFileNames: 'js/[name]-[hash].js',//分包引入文件
        // assetFileNames: '[ext]/[name]-[hash].[ext]',//静态文件
        assetFileNames(assetInfo){
          console.log(assetInfo)
          //文件名称
          if (assetInfo.name.endsWith('.css')) {
            return 'css/[name].css'
            // return 'css/[name]-[hash].css'
          }
          //图片名称
          //定义图片后缀
          const imgExts = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg','.ico']
          if(imgExts.some(ext => assetInfo.name.endsWith(ext))){
            return 'imgs/[name].[ext]'
            // return 'imgs/[name]-[hash].[ext]'
          }
          //剩余资源文件
          return 'assets/[name].[ext]'
          // return 'assets/[name]-[hash].[ext]'
        }
      },

```



## autoimport配置项

```js
AutoImport({
  // 目标文件
  include: [
    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    /\.vue$/, /\.vue\?vue/, // .vue
    /\.md$/, // .md
  ],

  // 全局引入插件
  imports: [
    // presets
    'vue',
    'vue-router',
    // custom
    {
      '@vueuse/core': [
        // named imports
        'useMouse', // import { useMouse } from '@vueuse/core',
        // alias
        ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
      ],
      'axios': [
        // default imports
        ['default', 'axios'], // import { default as axios } from 'axios',
      ],
      '[package-name]': [
        '[import-names]',
        // alias
        ['[from]', '[alias]'],
      ],
    },
  ],

  // eslint报错解决
  eslintrc: {
    enabled: false, // Default `false`
    filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
    globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
  },

  // 解析器，例如element-plus的ElementPlusResolver
  // see https://github.com/antfu/unplugin-auto-import/pull/23/
  resolvers: [
    /* ... */
  ],
  // 声明文件生成位置和文件名称
  dts: './auto-import.d.ts'
})
```







```ts

interface Plugin {
    // 插件名
    name: string;
    /**
     * 指定插件调用的顺序，见下文插件顺序调用
     */
    enforce?: 'pre' | 'post';
    /**
     * 默认情况下插件在开发（serve）和构建（build）模式中都会调用，通过用 apply 属性指定调用的时机
     */
    apply?: 'serve' | 'build' | ((config: UserConfig, env: ConfigEnv) => boolean);
    /**
     * 在解析 Vite 配置前调用。钩子接收原始用户配置（命令行选项指定的会与配置文件合并）和一个描述配置环境的变量，返回一个将被深度合并到现有配置中的部分配置对象
     */
    config?: (config: UserConfig, env: ConfigEnv) => UserConfig | null | void | Promise<UserConfig | null | void>;
    /**
     * 获取 vite 最终的配置，在解析合并 Vite 配置后调用
     */
    configResolved?: (config: ResolvedConfig) => void | Promise<void>;
    /**
     * 获取开发服务器实例，用于配置开发服务器，只在开发环境调用
     */
    configureServer?: ServerHook;
    /**
     * 配置预览服务器实例，用于预览本地打包完的页面
     */
    configurePreviewServer: ServerHook;
    /**
     * 获取 html 字符串和 bundle 产物，用于转换打包后的 html 页面
     */
    transformIndexHtml?: IndexHtmlTransform;
    /**
     * 获取开发环境构建产物，用于自定义 HMR 更新处理
     */
    handleHotUpdate?(ctx: HmrContext): Array<ModuleNode> | void | Promise<Array<ModuleNode> | void>;
}
```



## 通用钩子：

### options

> 这是构建阶段的第一个钩子，通常用于插件开发中的参数阅读选项

### buildStart

- 这是构建阶段的第二个钩子，读取到入口文件后开始构建。

> **`buildStart` 钩子函数的主要作用包括但不限于以下几点：**
>
> 1. **自定义任务**：你可以在构建开始前执行自定义任务，例如清理临时文件、生成一些构建配置、执行前置操作等。
> 2. **日志记录**：你可以在构建开始前添加一些日志记录，以记录构建过程的开始时间、项目信息等，以便后续分析和调试。
> 3. **状态检查**：在构建开始前，你可以执行一些状态检查，确保构建所需的条件满足，如果有问题，可以提前终止构建并给出错误提示。
> 4. **设置环境变量**：你可以在构建开始前设置一些环境变量，以影响构建过程中的行为，例如根据不同的环境配置不同的构建选项。

### resolveId

> 主要用于自定义模块解析的行为。模块解析是指当你在代码中导入模块时，Vite 需要确定模块的位置和如何加载它。

### transform

 执行时间点：在模块代码构建期间。

使用场景：用于修改模块的源代码，可以在构建期间对模块进行转换和处理，例如添加额外的代码、转换特定格式的文件等。

> 比如：Vite 在加载到 Vue 项目中的 main.js 后我们可以在 transform 钩子中对 main.js的代码做一些修改

### buildEnd

- 作用：`buildEnd` 钩子函数在 Vite 构建结束后触发。

> 使用场景：你可以使用 `buildEnd` 钩子来执行一些与构建结束相关的操作，例如生成构建报告、自动化部署、通知团队构建已完成等。这个钩子通常用于处理构建后的事务。

### closeBundle

- 作用：`closeBundle` 钩子函数在 Vite 打包生成 bundle 文件时触发。

## 独有的钩子：

### config

> 允许你在 Vite 配置对象被创建之前对其进行修改和扩展。这个钩子函数在 Vite 配置加载过程中的早期阶段被触发，允许你动态地修改 Vite 的配置，以满足项目的特定需求。

场景举例：

**自定义配置**：你可以在 `config` 钩子中添加、修改或删除 Vite 配置的属性和选项，以适应项目的需求。例如，你可以修改构建输出目录、设置自定义别名、更改开发服务器的选项等。

### configResolved

-  用于在 Vite 配置对象被解析和应用后执行自定义操作。这个钩子函数在配置加载过程的较早阶段触发，允许你检查和修改已解析的 Vite 配置。

> 场景举例：
>
> **配置检查与修改**：你可以在 `configResolved` 钩子函数中检查和修改 Vite 配置。这通常用于在配置加载后动态地调整配置选项，以适应不同的项目需求。

### configureServer

-  用于配置开发服务器。这个钩子函数在 Vite 开发服务器启动之前执行，允许你自定义开发服务器的行为。

> 场景举例：
>
> **添加中间件**：你可以在 `configureServer` 中添加自定义中间件到开发服务器中。这使得你可以处理请求、修改响应、添加身份验证等。

`configurePreviewServer`： 与 configureServer 相同，但用于预览服务器。

### transformIndexHtml

 允许你在构建过程中修改生成的 HTML 文件。这个钩子函数在生成最终的 `index.html` 文件之前执行，允许你自定义 HTML 内容或添加额外的标签、脚本等。

### `handleHotUpdate`

-  用于在模块发生热更新（Hot Module Replacement，HMR）时执行自定义逻辑。HMR 是一种开发工具，允许你在不刷新整个页面的情况下替换、添加或删除模块，以加快开发过程。

> 场景举例： **动态加载模块**：你可以在热更新时动态加载新的模块，以实现按需加载或懒加载的效果。