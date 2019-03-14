(window.webpackJsonp=window.webpackJsonp||[]).push([[364],{637:function(n,e){n.exports='Modal 模态对话框\n===\n\n模态对话框。\n\n\n```jsx\nimport { Modal } from \'uiw\';\n```\n\n### 基本用法\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Modal, ButtonGroup, Button } from \'uiw\';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      visible: false,\n    }\n  }\n  onClick() {\n    this.setState({ visible: !this.state.visible });\n  }\n  onClosed() {\n    this.setState({ visible: false });\n  }\n  render() {\n    return (\n      <div>\n        <Modal\n          title="模态对话框"\n          isOpen={this.state.visible}\n          confirmText="确定按钮"\n          cancelText="取消按钮"\n          icon="information"\n          type="primary"\n          onConfirm={() => console.log(\'您点击了确定按钮！\')}\n          onCancel={() => console.log(\'您点击了取消按钮！\')}\n          onClosed={this.onClosed.bind(this)}\n        >\n          React 可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图，在数据改变时 React 也可以高效地更新渲染界面。\n          <br /><br />\n          以声明式编写UI，可以让你的代码更加可靠，且方便调试。\n          <br /><br />\n          创建好拥有各自状态的组件，再由组件构成更加复杂的界面。\n          <br /><br />\n          无需再用模版代码，通过使用JavaScript编写的组件你可以更好地传递数据，将应用状态和DOM拆分开来。\n          <br /><br />\n          无论你现在正在使用什么技术栈，你都可以随时引入 React 开发新特性。\n          <br /><br />\n          <b>组件</b>\n          <br /><br />\n          React 组件使用一个名为 render() 的方法， 接收数据作为输入，输出页面中对应展示的内容。 下面这个示例中类似XML的写法被称为JSX. 输入的数据通过 this.props 传入 render() 方法。\n          <br /><br />\n          使用 React 的时候也可以不使用 JSX 语法 你可以在 <a href="https://babeljs.io/repl/#?presets=react&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRgD4AJRBEAGhgHcQAnBAEwEJsB6AwgbgChRJY_KAEMAlmDh0YWRiGABXVOgB0AczhQAokiVQAQgE8AkowAUPGDADkdECChWeASl4AlOMOBQAIgHkAssp0aIySpogoaFBUQmISdC48QA" target="_blank">Babel REPL</a> 查看 JSX 是如何被渲染成原生 JavaScript 代码的。\n        </Modal>\n        <ButtonGroup>\n          <Button onClick={this.onClick.bind(this)}>确认对话框</Button>\n        </ButtonGroup>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 延迟关闭对话框\n\n这里是利用 `Promise` 等它执行完成再去关闭窗口\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Modal, ButtonGroup, Button } from \'uiw\';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      visible: false,\n    }\n  }\n  onClick() {\n    this.setState({ visible: !this.state.visible });\n  }\n  onClosed() {\n    this.setState({ visible: false });\n  }\n  render() {\n    return (\n      <div>\n        <Modal\n          title="模态对话框"\n          isOpen={this.state.visible}\n          confirmText="确定按钮"\n          cancelText="取消按钮"\n          type="danger"\n          onCancel={() => console.log(\'您点击了取消按钮！\')}\n          onClosed={this.onClosed.bind(this)}\n          onConfirm={() => {\n            console.log(\'确定回调！, 这里是利用Promise等执行完成再去关闭窗口\');\n            return new Promise((resolve, reject) => {\n              const random = Math.random();\n              console.log(\'测试，随机值大于 0.5 执行 resolve 事件，否则 执行 reject 触发 catch 错误\', random, random > 0.5)\n              setTimeout(random > 0.5 ? resolve : reject, 3000);\n            }).catch(() => {\n              // 可以通过下面方式，阻止弹框消失\n              // throw new Error();\n            });\n          }}\n        >\n          这是一个单击 “<b>确定按钮</b>” 延迟关闭对话框的实例，关闭对话框触发 “<b>onConfirm</b>” 或 “<b>onCancel</b>” 事件。<br /><br /> 这里是利用 <b>Promise</b> 的特性，等它执行完成后，再去关闭窗口，达到延迟关闭的效果。<br /><br />\n          这个测试例子，生成随机值判断是否大于 <b>0.5</b> 执行 <b>resolve</b> 事件，否则 执行 <b>reject</b> 触发 <b>catch</b> 错误。\n        </Modal>\n        <ButtonGroup>\n          <Button onClick={this.onClick.bind(this)}>延迟关闭对话框</Button>\n        </ButtonGroup>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n\n### 表单应用\n\n这里是利用 `Promise` 等它执行完成再去关闭窗口\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Modal, ButtonGroup, Button } from \'uiw\';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      visible: false,\n      loading: false,\n    }\n  }\n  onClick() {\n    this.setState({ visible: !this.state.visible });\n  }\n  onClosed() {\n    this.setState({ visible: false });\n  }\n  onSubmit({ initial, current }) {\n    const errorObj = {};\n    if (current.userName.startsWith(\'u\')) {\n      errorObj.userName = `姓名 ${current.userName} 不能以 ‘u’ 开头`;\n    }\n    if (!current.age || current.age < 18 || current.age > 30) {\n      errorObj.age = \'年龄必须在18 ~ 30岁之间。\';\n    }\n    if (!current.textarea) {\n      errorObj.textarea = \'请输入描述内容\';\n    }\n    if(Object.keys(errorObj).length > 0) {\n      const err = new Error();\n      err.filed = errorObj;\n      throw err;\n    }\n\n    this.setState({ loading: true });\n    setTimeout(() => {\n      this.setState({ loading: false, visible: false });\n      Notify.success({ title: \'提交成功通知！\', description: \'提交内容，。\' });\n    }, 2000);\n  }\n  render() {\n    return (\n      <div>\n        <Modal\n          title="模态对话框"\n          width={900}\n          isOpen={this.state.visible}\n          onClosed={this.onClosed.bind(this)}\n          type="danger"\n          useButton={false}\n        >\n          <Form\n            resetOnSubmit={false}\n            onSubmit={this.onSubmit.bind(this)}\n            onSubmitError={(error) => {\n              if (error.filed) {\n                return { ...error.filed };\n              }\n              return null;\n            }}\n            fields={{\n              userName: {\n                initialValue: \'uiw\',\n                label: \'姓名\',\n                help: \'以“u”开头的名字将在此处显示错误信息\'\n              },\n              age: {\n                initialValue: 9,\n                label: \'年龄\',\n                children: <Input type="number" />\n              },\n              textarea: {\n                initialValue: \'\',\n                label: \'描述说明\',\n                children: <Textarea placeholder="请输入内容" />\n              },\n            }}\n          >\n            {({ fields, state, canSubmit }) => {\n              console.log(\'fields:--\x3e\', state);\n              return (\n                <div>\n                  <Row gutter={10}>\n                    <Col>{fields.userName}</Col>\n                    <Col>{fields.age}</Col>\n                  </Row>\n                  <Row gutter={10}>\n                    <Col>{fields.textarea}</Col>\n                  </Row>\n                  <Row gutter={10} justify="flex-end">\n                    <Col fixed>\n                      <Button loading={this.state.loading} disabled={!canSubmit()} type="primary" htmlType="submit">提交表单</Button>\n                    </Col>\n                  </Row>\n                </div>\n              )\n            }}\n          </Form>\n        </Modal>\n        <ButtonGroup>\n          <Button onClick={this.onClick.bind(this)}>表单中应用</Button>\n        </ButtonGroup>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 自定义页脚\n\n设置 `useButton={false}` 隐藏默认的按钮，再根据自己需求定义按钮。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Modal, ButtonGroup, Button } from \'uiw\';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      visible: false,\n    }\n  }\n  onClick() {\n    this.setState({ visible: !this.state.visible });\n  }\n  onClosed() {\n    this.setState({ visible: false });\n  }\n  render() {\n    return (\n      <div>\n        <Modal\n          title="模态对话框"\n          isOpen={this.state.visible}\n          useButton={false}\n          confirmText="确定按钮"\n          cancelText="取消按钮"\n          icon="information"\n          type="danger"\n          onConfirm={() => console.log(\'您点击了确定按钮！\')}\n          onCancel={() => console.log(\'您点击了取消按钮！\')}\n          onClosed={this.onClosed.bind(this)}\n        >\n          React 可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图，在数据改变时 React 也可以高效地更新渲染界面。\n          <br /><br />\n          以声明式编写UI，可以让你的代码更加可靠，且方便调试。\n          <br /><br />\n          创建好拥有各自状态的组件，再由组件构成更加复杂的界面。\n          <br /><br />\n          无需再用模版代码，通过使用JavaScript编写的组件你可以更好地传递数据，将应用状态和DOM拆分开来。\n          <br /><br />\n          无论你现在正在使用什么技术栈，你都可以随时引入 React 开发新特性。\n          <br /><br />\n          <b>组件</b>\n          <br /><br />\n          React 组件使用一个名为 render() 的方法， 接收数据作为输入，输出页面中对应展示的内容。 下面这个示例中类似XML的写法被称为JSX. 输入的数据通过 this.props 传入 render() 方法。\n          <br /><br />\n          使用 React 的时候也可以不使用 JSX 语法 你可以在 Babel REPL 查看 JSX 是如何被渲染成原生 JavaScript 代码的。\n          <div className="w-modal-footer">\n            <Button type="danger" onClick={this.onClosed.bind(this)} >确定按钮</Button>\n            <Button onClick={this.onClosed.bind(this)} >取消按钮</Button>\n          </div>\n        </Modal>\n        <ButtonGroup>\n          <Button onClick={this.onClick.bind(this)}>确认对话框</Button>\n        </ButtonGroup>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## Props\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| title | 设置标题 | Function(e) | - |\n| onCancel | 取消按钮的回调函数 | Function(e) | - |\n| onConfirm | 点击确定按钮回调 | Function(e) | - |\n| cancelText | 取消按钮文字， | String | - |\n| confirmText | 确认按钮文字 | String | `确认` |\n| icon | 设置对话框右上角图标，设置 `type` 将图标设置不同的颜色。当前属性为 [`<Icon>`](#/components/icon) 组件的 `type` 属性，所以可以参考该组件自定义图标。 | String/ReactNode | - |\n| useButton | 是否使用默认按钮，如果设置 `false` 需要自定义按钮关闭 | Boolean | `true` |\n| type | 按钮类型跟 `<Button>` 组件的 `type` 参数一致，同时会影响按钮颜色。 | String | `light` |\n| width | 设置弹出框宽度 | Number | - |\n| maxWidth | 默认弹出框最大宽度 `500` | Number | `500` |\n| isCloseButtonShown | 是否在对话框的标题中显示关闭按钮。 请注意，只有在提供标题时才会呈现标题。 | Boolean | `true` |\n| isOpen[`<Overlay>`](#/components/overlay) | 对话框是否可见 | Boolean | `false` |\n| maskClosable[`<Overlay>`](#/components/overlay) | 点击遮罩层是否允许关闭 | Boolean | `true` |\n\n更多属性文档请参考 [Overlay](#/components/overlay)。\n'}}]);