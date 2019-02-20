(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{602:function(n,e){n.exports='Switch 开关\n===\n\n表示两种相互对立的状态间的切换，多用于触发「开/关」。选中时的内容支持响应式。\n\n```jsx\nimport { Switch } from \'uiw\';\n```\n\n### 基本用法\n\n\x3c!--DemoStart,bgWhite--\x3e\n```js\nconst Demo = () => (\n  <div>\n    <Switch checked style={{ marginRight: 10 }} />\n    <Switch style={{ marginRight: 10 }} />\n    <Switch data-checked="开" data-unchecked="关">电源</Switch>\n  </div>\n);\n```\n\x3c!--End--\x3e\n\n### 设置文字\n\n\x3c!--DemoStart,bgWhite--\x3e\n```js\nconst Demo = () => (\n  <div>\n    <Switch\n      data-checked="开"\n      data-unchecked="关"\n      onChange={(e) => {\n        console.log(\'e\', e.target.checked);\n      }}\n      style={{ marginRight: 10 }}\n    />\n  </div>\n);\n```\n\x3c!--End--\x3e\n\n\n### 禁用状态\n\n\x3c!--DemoStart,bgWhite--\x3e\n```js\nconst Demo = () => (\n  <div>\n    <Switch disabled checked style={{ marginRight: 10 }} />\n    <Switch disabled style={{ marginRight: 10 }} />\n    <Switch disabled data-checked="开" data-unchecked="关">电源</Switch>\n  </div>\n);\n```\n\x3c!--End--\x3e\n\n### 尺寸\n\n\x3c!--DemoStart,bgWhite--\x3e\n```js\nconst Demo = () => (\n  <div>\n    <Switch size="large" style={{ marginRight: 10 }} data-checked="开" data-unchecked="关" />\n    <Switch size="large" checked style={{ marginRight: 10 }} />\n    <Switch style={{ marginRight: 10 }} />\n    <Switch style={{ marginRight: 10 }} data-checked="开" data-unchecked="关" />\n    <Switch size="small" data-checked="开" data-unchecked="关">电源</Switch>\n  </div>\n);\n```\n\x3c!--End--\x3e\n\n### 控制组件\n\n通过 `checked` 属性改变 `Switch` 组件状态。\n\n\x3c!--DemoStart,bgWhite--\x3e\n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      checked: true\n    }\n  }\n  onChange(e) {\n    console.log(\'~~~:::\');\n    this.setState({ checked: e.target.checked });\n  }\n  render() {\n    return (\n      <div style={{ backgroundColor: \'#fff\', margin: -15, padding: 15, borderRadius: \'5px 5px 0 0\' }}>\n        <Switch onChange={this.onChange.bind(this)} checked={this.state.checked} style={{ marginRight: 10 }} />\n        <Button\n          size="small"\n          type="primary"\n          onClick={() => {\n            this.setState({ checked: !this.state.checked });\n          }}\n        >\n          点击按钮改变 Switch 状态\n        </Button>\n      </div>\n    )\n  }\n}\n```\n\x3c!--End--\x3e\n\n## Switch \n\n| 参数 | 说明 | 类型 | 默认值 |\n|------ |-------- |---------- |-------- |\n| value | 根据 value 进行比较，判断是否选中 | String/Number/Boolean | - |\n| name | 用于表单对应的名称 | String | - |\n| checked | 指定当前是否选中 | boolean | false |\n| disabled | 是否禁用 | boolean | false |\n| onChange | 变化时回调函数 | Function(e:Event) | - |\n| data-checked |  选中时的内容 | string/ReactNode | - |\n| data-unchecked |  非选中时的内容 | string/ReactNode | - |\n| size |  开关大小，可选值：`large` `default` `small` | string | default |\n'}}]);