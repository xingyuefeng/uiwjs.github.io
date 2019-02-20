(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{597:function(n,e){n.exports="Badge 标记\n===\n\n出现在按钮、图标旁的数字或状态标记。\n\n```jsx\nimport { Badge } from 'uiw';\n```\n\n### 基础用法\n\n\x3c!--DemoStart,bgWhite--\x3e\n```js\nconst Demo = () => (\n  <Badge count={ 12 }>\n    评论\n  </Badge>\n);\n```\n\x3c!--End--\x3e\n\n### 封顶数字\n\n不包裹任何元素即是独立使用，可自定样式展现。\n\n\x3c!--DemoStart,bgWhite--\x3e\n```js\nconst styl={ marginRight: 20, display: 'inline-block' }\nconst Demo = () => (\n  <div>\n    <div style={styl}>\n      <Badge count={99}>评论</Badge>\n    </div>\n    <div style={styl}>\n      <Badge count={100} style={{ backgroundColor: '#87d068' }}>回复</Badge>\n    </div>\n    <div style={styl}>\n      <Badge count={99} max={10} style={styl}>点赞</Badge>\n    </div>\n    <div style={styl}>\n      <Badge count={100} max={999} style={styl}>打分</Badge>\n    </div>\n    <div style={styl}>\n      <Badge count={100} max={999} style={styl}>\n        <span style={{ padding: '0 10px' }}>打分</span>\n      </Badge>\n    </div>\n  </div>\n);\n```\n\x3c!--End--\x3e\n\n\n### 独立使用\n\n不包裹任何元素即是独立使用，可自定样式展现。\n\n\x3c!--DemoStart,bgWhite--\x3e\n```js\nconst Demo = () => (\n  <div>\n    <Badge count={25} />\n    <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} /> \n    <Badge count={109} style={{ backgroundColor: '#87d068' }} /> \n  </div>\n);\n```\n\x3c!--End--\x3e\n\n### 小红点\n\n以红点的形式标注需要关注的内容。\n\n\x3c!--DemoStart,bgWhite--\x3e\n```js\nconst Demo = () => (\n  <div>\n    <Badge dot style={{ marginRight: 10 }}>\n      数据查询\n    </Badge>\n    <Badge dot count={4}>\n      <Icon type='message-o' />\n    </Badge>\n  </div>\n);\n```\n\x3c!--End--\x3e\n\n### 状态点\n\n用于表示状态的小圆点。\n\n\x3c!--DemoStart,bgWhite--\x3e\n```js\nconst Demo = () => (\n  <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>\n    <Badge status=\"success\" />\n    <Badge status=\"error\" />\n    <Badge status=\"default\" />\n    <Badge status=\"processing\" />\n    <Badge status=\"warning\" />\n    <br />\n    <Badge status=\"success\">Success</Badge>\n    <br />\n    <Badge status=\"error\">Error</Badge>\n    <br />\n    <Badge status=\"default\">Default</Badge>\n    <br />\n    <Badge status=\"processing\">Processing</Badge>\n    <br />\n    <Badge status=\"warning\">Warning</Badge>\n  </div>\n);\n```\n\x3c!--End--\x3e\n\n## API\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| style | 默认设置计数圆点样式，设置`status`，`style`设置外层节点样式 | Object | - |\n| count | 展示的数字 | Number | - |\n| max | 最大值，超过最大值会显示 '{max}+' | Number | `99` |\n| dot | 不展示数字，只有一个小红点 | Boolean | `false` |\n| status | 设置 Badge 为状态点 | Enum{`success`, `processing`,`default`, `error`, `warning` } | - |\n"}}]);