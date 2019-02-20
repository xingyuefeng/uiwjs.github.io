(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{659:function(n,t){n.exports="CopyToClipboard 复制\n===\n\n将文本到剪切板，复制到剪贴板功能可以应用于各种元素。\n\n```jsx\nimport { CopyToClipboard } from 'uiw';\n```\n\n## 基础实例\n\n\x3c!--DemoStart,bgWhite--\x3e \n```js\nclass Demo extends Component {\n  constructor() {\n    super();\n    this.state = {\n      message: ''\n    }\n  }\n  render() {\n    return (\n      <div>\n        <CopyToClipboard\n          text=\"我被一个连接复制了！\"\n          onClick={() => {\n            this.setState({ message: '复制成功！你可以粘贴了。' }, () => {\n              setTimeout(() => {\n                this.setState({ message: '' });\n              }, 2000);\n            });\n          }}\n        >\n          点击我复制\n        </CopyToClipboard>\n        <div style={{color: '#28a745'}}>{this.state.message}</div>\n      </div>\n    )\n  }\n}\n```\n\x3c!--End--\x3e\n\n## 复制输入框内容\n\n\x3c!--DemoStart,bgWhite--\x3e \n```js\nclass Demo extends Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      copyText: \"生亦何欢，死亦何苦\"\n    }\n  }\n  onChange(e){\n    this.setState({\n      copyText: e.target.value\n    })\n  }\n  render() {\n    const { copyText } = this.state;\n    return (\n      <div>\n        <div>\n          <Input\n            type=\"text\"\n            ref={(input) => this.input = input}\n            value={copyText}\n            onChange={this.onChange.bind(this)}\n          />\n        </div>\n        <CopyToClipboard \n          style={{marginTop:10,display:'inline-block'}} \n          text={copyText}\n          onClick={() => {\n            // 复制提示\n            this.setState({ message: '复制成功！你可以粘贴了。' }, () => {\n              setTimeout(() => {\n                this.setState({ message: '' });\n              }, 2000);\n            });\n            ReactDOM.findDOMNode(this.input).querySelector('input').select();\n          }}\n        >\n          <Button type=\"primary\">点击复制</Button>\n          <span style={{color: '#28a745'}}>{this.state.message}</span>\n        </CopyToClipboard>\n      </div>\n    )\n  }\n}\n```\n\x3c!--End--\x3e\n\n## CopyToClipboard\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| text | 拷贝的文本 | String | - |\n| onClick | 点击事件 | Function(text,isCopy,event) | - |\n"}}]);