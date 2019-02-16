(window.webpackJsonp=window.webpackJsonp||[]).push([[366],{580:function(n,w){n.exports="文档离线预览\n===\n\n我们使用 [`npm`](https://www.npmjs.com/package/@uiw/doc) 来管理 `uiw` 文档站点的版本，使用 [unpkg.com](https://unpkg.com/@uiw/doc/web/index.html) 预览。文档版本管理，是根据 `unpkg` 工具支持静态服务和同步 `npm` 包的特点，来实现这一功能的。所以我们在发布 [`uiw`](https://www.npmjs.com/package/uiw) 包的同时会发布 [`@uiw/doc`](https://www.npmjs.com/package/@uiw/doc) 包，版本是同步的。\n\n> ⚠️ 文档网站静态资源原本放在 uiw 包中，由于每次安装 uiw 体积过大，下载非常慢，从 [`uiw@2.0.0-beta.7+`](https://unpkg.com/@uiw/doc/web/index.html) 版本开始抽离到单独的 [`@uiw/doc`](https://www.npmjs.com/package/@uiw/doc) 包进行同步发布，\n\n最新版本预览网址：https://unpkg.com/@uiw/doc/web/index.html  \n官网地址预览：https://uiwjs.github.io/  \n\n> 老版本的文档在线预览: [v1.x.x](https://unpkg.com/uiw@1.16.14/dist/index.html)\n\n```bash\nhttps://unpkg.com/@uiw/doc@<包版本>/web/index.html\n# 例如：\nhttps://unpkg.com/@uiw/doc@2.0.0-beta.12/web/index.html\n```\n\n**文档离线预览**\n\n根据上述特点，可将文档网站资源下载到本地，通过类似 [ssr](https://www.npmjs.com/package/ssr) 的工具启静态服务进行预览。\n\n```bash\n# 安装静态服务工具\n$ mpm install -g ssr\n# 安装下载文档\n$ npm install --save-dev @uiw/doc\n$ npm install --save-dev @uiw/doc@2.0.0-beta.12\n\n# 进入目录\ncd node_modules/@uiw/doc/web\nssr # 启动服务\n```\n"}}]);