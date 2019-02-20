(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{606:function(n,t){n.exports="Notify 消息通知\n===\n\n全局展示通知提醒信息。\n\n```jsx\nimport { Notify } from 'uiw';\n```\n\n### 基本用法\n\n\x3c!--DemoStart,bgWhite--\x3e\n```js\nconst Demo = () => {\n  return (\n    <div>\n      <Button\n        onClick={() => {\n          Notify.open({ title: '打开通知', description: '最简单的用法，4.5 秒后自动关闭，没有状态颜色图标。' });\n        }}\n      >\n        打开通知\n      </Button>\n      <Button\n        type=\"success\"\n        onClick={() => {\n          Notify.success({ title: '成功通知', description: '最简单的用法，4.5 秒后自动关闭。' });\n        }}\n      >\n        成功通知\n      </Button>\n      <Button\n        type=\"warning\"\n        onClick={() => {\n          Notify.warning({\n            title: '警告通知',\n            description: '这是一个警告通知，最简单的用法，4.5 秒后自动关闭。'\n          });\n        }}\n      >\n        警告通知\n      </Button>\n      <Button\n        type=\"primary\"\n        onClick={() => {\n          Notify.info({ title: '说明通知', description: '最简单的用法，4.5 秒后自动关闭。' });\n        }}\n      >\n        说明通知\n      </Button>\n      <Button\n        type=\"danger\"\n        onClick={() => {\n          Notify.error({ title: '错误通知', description: '最简单的用法，4.5 秒后自动关闭。' });\n        }}\n      >\n        错误通知\n      </Button>\n    </div>\n  );\n}\n```\n\x3c!--End--\x3e\n\n\n### 弹出位置\n\n\x3c!--DemoStart,bgWhite--\x3e\n```js\nconst Demo = () => {\n  return (\n    <div>\n      <Button\n        onClick={() => {\n          Notify.success({ placement: 'topLeft', title: '成功通知', description: '最简单的用法，4.5 秒后自动关闭。' });\n        }}\n      >\n        ↖上左弹出通知\n      </Button>\n      <Button\n        onClick={() => {\n          Notify.warning({\n            placement: 'topRight',\n            title: '警告通知',\n            description: '最简单的用法，4.5 秒后自动关闭。',\n            onClose: () => {\n              console.log('~~~~>')\n            }\n          });\n        }}\n      >\n        ↗上右弹出通知\n      </Button>\n      <Button\n        onClick={() => {\n          Notify.info({ placement: 'bottomLeft', title: '说明通知', description: '最简单的用法，4.5 秒后自动关闭。' });\n        }}\n      >\n        ↙下左弹出通知\n      </Button>\n      <Button\n        onClick={() => {\n          Notify.error({ placement: 'bottomRight', title: '错误通知', description: '最简单的用法，4.5 秒后自动关闭。' });\n        }}\n      >\n        ↘下右通知\n      </Button>\n    </div>\n  );\n}\n```\n\x3c!--End--\x3e\n\n\n### 弹出通知不消失\n\n\x3c!--DemoStart,bgWhite--\x3e\n```js\nconst Demo = () => {\n  return (\n    <div>\n      <Button\n        onClick={() => {\n          Notify.warning({\n            placement: 'topRight',\n            title: '警告通知',\n            duration: null,\n            description: '最简单的用法，4.5 秒后自动关闭。'\n          });\n        }}\n      >\n        ↗上右弹出通知\n      </Button>\n    </div>\n  );\n}\n```\n\x3c!--End--\x3e\n\n## Notify\n\n```js\nNotify.open(config);\nNotify.success(config);\nNotify.warning(config);\nNotify.info(config);\nNotify.error(config);\n```\n\n参数 `config` 如下：\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| title | 通知提醒标题，必选 | String/ReactNode | ReactNode |\n| description | 通知提醒内容，必选 | String/ReactNode | ReactNode |\n| duration | 默认 `4.5` 秒后自动关闭，配置为 `null` 则不自动关闭 | Number | `4.5` |\n| placement | 弹出位置，可选 | Enum{`topLeft`, `topRight`, `bottomLeft`, `bottomRight`} | `topRight` |\n\n更多属性文档请参考 [`<Alert>`](#/components/alert)。\n"}}]);