(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{630:function(n,e){n.exports='Tag 标签\n===\n\n进行标记和分类的小标签。\n\n```jsx\nimport { Tag } from \'uiw\';\n```\n\n### 基础用法\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tag, Divider } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Tag title="成功-绿色" color="#28a745" />\n    <Tag title="主要-蓝色" color="#008EF0" />\n    <Tag title="信息-青色" color="#1EABCD" />\n    <Tag title="导航-藏青" color="#393E48" />\n    <Divider />\n    <Tag color="#ffc107">警告-黄色</Tag>\n    <Tag color="#F95C2B">提醒-橙色</Tag>\n    <Tag color="#dc3545">危险-红色</Tag>\n    <Tag>默认颜色</Tag>\n    <Divider />\n    <Tag light color="#28a745">成功-绿色</Tag>\n    <Tag light color="#008EF0">主要-蓝色</Tag>\n    <Tag light color="#1EABCD">信息-青色</Tag>\n    <Tag light color="#393E48">导航-藏青</Tag>\n    <Divider />\n    <Tag light color="#ffc107">警告-黄色</Tag>\n    <Tag light color="#F95C2B">提醒-橙色</Tag>\n    <Tag light color="#dc3545">危险-红色</Tag>\n    <Tag light>默认颜色</Tag>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 标签禁用\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tag, Divider } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Tag disabled title="成功-绿色" color="#28a745" />\n    <Tag disabled title="主要-蓝色" color="#008EF0" />\n    <Tag disabled title="信息-青色" color="#1EABCD" />\n    <Tag disabled title="导航-藏青" color="#393E48" />\n    <Tag disabled color="#ffc107">警告-黄色</Tag>\n    <Tag disabled color="#F95C2B">提醒-橙色</Tag>\n    <Tag disabled color="#dc3545">危险-红色</Tag>\n    <Tag disabled>默认颜色</Tag>\n    <Divider />\n    <Tag light disabled color="#28a745">成功-绿色</Tag>\n    <Tag light disabled color="#008EF0">主要-蓝色</Tag>\n    <Tag light disabled color="#1EABCD">信息-青色</Tag>\n    <Tag light disabled color="#393E48">导航-藏青</Tag>\n    <Tag light disabled color="#ffc107">警告-黄色</Tag>\n    <Tag light disabled color="#F95C2B">提醒-橙色</Tag>\n    <Tag light disabled color="#dc3545">危险-红色</Tag>\n    <Tag light disabled>默认颜色</Tag>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 添加图标\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tag, Divider } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Tag title={(\n      <>\n        <Icon type="heart-on" verticalAlign="baseline" /> 成功-绿色\n      </>\n    )} color="#28a745" />·\n    <Tag color="#1C7CEB"><Icon type="heart-on" verticalAlign="baseline" /> 限购一份</Tag>\n    <Tag color="red"><Icon type="heart-on" verticalAlign="baseline" /> 胶囊</Tag>\n    <Divider />\n    <Tag light color="#28a745"><Icon type="heart-on" verticalAlign="baseline" /> 成功-绿色</Tag>\n    <Tag light color="#008EF0"><Icon type="heart-on" verticalAlign="baseline" /> 主要-蓝色</Tag>\n    <Tag light color="#dc3545"><Icon type="heart-on" verticalAlign="baseline" /> 信息-红色</Tag>\n  </div>\n)\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 控制关闭标签\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tag, Icon } from \'uiw\';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      visible: true,\n      visible1: true,\n    }\n  }\n  onClose(type) {\n    this.setState({\n      [type]: !this.state[type],\n    });\n  }\n  render() { \n    return (\n      <div>\n        <Tag\n          closable\n          onClose={this.onClose.bind(this, \'visible\')}\n          visible={this.state.visible}\n          color="#F95C2B">提醒-橙色</Tag>\n        <Tag\n          closable\n          light\n          visible={this.state.visible1}\n          color="#dc3545"\n          onClose={this.onClose.bind(this, \'visible1\')}\n        >\n            <Icon type="heart-on" verticalAlign="baseline" /> 信息-红色\n        </Tag>\n      </div>\n    );\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 标签组动态删除\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tag, Button, Icon } from \'uiw\';\n\nlet num = 3;\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      dataTags: [\n        { label: \'橘子\', value: 1, color: \'#28a745\' },\n        { label: \'苹果\', value: 2, color: \'#F95C2B\' },\n        { label: \'橘子\', value: 3, color: \'#008EF0\' },\n      ]\n    }\n  }\n  onClose(data) {\n    const dataTags = this.state.dataTags.filter(item => item.value !== data.value);\n    this.setState({ dataTags });\n  }\n  addTag() {\n    const { dataTags } = this.state;\n    num += 1;\n    dataTags.push({\n      label: `橘子${num}`, value: num, color: \'#28a745\'\n    });\n    this.setState({ dataTags });\n  }\n  render() { \n    const { dataTags } = this.state;\n    return (\n      <div>\n        {dataTags.map((item, idx) => {\n          return (\n            <Tag\n              key={idx}\n              closable\n              onClose={this.onClose.bind(this, item)}\n              visible={this.state.visible}\n              color={item.color}>\n              {item.label}\n            </Tag>\n          )\n        })}\n        <Button style={{ marginLeft: 5 }} size="small" onClick={this.addTag.bind(this)}> <Icon type="plus" /> </Button>\n      </div>\n    );\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 热门标签\n\n选择你感兴趣的话题，下面实例类似 CheckBox 多选。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tag } from \'uiw\';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      dataTags: [\n        { label: \'橘子\', value: 1, color: \'#008EF0\' },\n        { label: \'苹果\', value: 2, color: \'#008EF0\' },\n        { label: \'橘子\', value: 3, color: \'#008EF0\' },\n        { label: \'川菜\', value: 4, color: \'#008EF0\' },\n      ],\n      values: [1, 2, 3],\n    }\n  }\n  onTagChecked(data) {\n    let { values } = this.state;\n    const isChecked = values.indexOf(data.value) === -1;\n    if(isChecked) {\n      values.push(data.value);\n    } else {\n      values = values.filter(item => item !== data.value);\n    }\n    this.setState({ values });\n  }\n  render() { \n    const { dataTags, values } = this.state;\n    return (\n      <div>\n        {dataTags.map((item, idx) => {\n          const isChecked = values.indexOf(item.value) === -1;\n          return (\n            <Tag\n              onClick={this.onTagChecked.bind(this, item)}\n              key={idx}\n              light={isChecked}\n              bordered={false}\n              color="#008EF0"\n            >\n              {item.label}\n            </Tag>\n          )\n        })}\n      </div>\n    );\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## Tag\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| title | 标题，和 `children` 几乎是一样的 | String/ReactNode | - |\n| color | 颜色 | String | `#1C7CEB` |\n| disabled | 禁用 | Boolean | `false` |\n| light | 有边框的标签 | Boolean | `false` |\n| bordered | 当设置 `light={ture}` 时，起作用，设置为 `false` 不展示边框样式 | Boolean | `true` |\n| closable | 显示关闭按钮 | Boolean | `false` |\n| visible | 是否显示标签 | Boolean | `true` |\n| onClose | 关闭时的回调 | Function | - |\n'}}]);