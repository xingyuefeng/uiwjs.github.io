(window.webpackJsonp=window.webpackJsonp||[]).push([[343],{607:function(n,e){n.exports='Form 表单\n===\n\n由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据\n\n```jsx\nimport { Form, FormItem } from \'uiw\';\n```\n\n## 自定义校验\n\n\x3c!--DemoStart,bgWhite--\x3e \n```js\nconst Demo = () => (\n  <div>\n    <Form\n      onSubmit={({initial, current}) => {\n        const errorObj = {};\n        if (current.userName.startsWith(\'u\')) {\n          errorObj.userName = `姓名 ${current.userName} 不能以 ‘u’ 开头`;\n        }\n        if (!current.checkboxOne) {\n          errorObj.checkboxOne = \'一个多选条件 为必填\';\n        }\n        if (!current.terms) {\n          errorObj.terms = \'必须统一服务条款\';\n        }\n        if(Object.keys(errorObj).length > 0) {\n          const err = new Error();\n          err.filed = errorObj;\n          throw err;\n        }\n      }}\n      onSubmitError={(error) => {\n        if (error.filed) {\n          return { ...error.filed };\n        }\n        return null;\n      }}\n      fields={{\n        userName: {\n          initialValue: \'uiw\',\n          label: \'姓名\',\n          help: \'以“u”开头的名字将在此处显示错误信息\'\n        },\n        age: {\n          initialValue: \'9\',\n          label: \'年龄\',\n          children: <Input type="number" />\n        },\n        checkbox: {\n          initialValue: [\'四川菜\'],\n          label: \'选择你想吃的菜\',\n          children: (\n            <Checkbox.Group>\n              <div>菜系</div>\n              <Checkbox value="四川菜">四川菜</Checkbox>\n              <Checkbox value="湖北菜">湖北菜</Checkbox>\n              <Checkbox value="西北菜">西北菜</Checkbox>\n              <Checkbox value="新疆菜">新疆菜</Checkbox>\n              <Checkbox value="东北菜">东北菜</Checkbox>\n              <div style={{ marginTop: 10 }}>家常菜</div>\n              <Checkbox value="红烧武昌鱼">红烧武昌鱼</Checkbox>\n              <Checkbox value="麻婆豆腐">麻婆豆腐</Checkbox>\n              <Checkbox value="北京烤鸭">北京烤鸭</Checkbox>\n            </Checkbox.Group>\n          )\n        },\n        checkboxOne: {\n          inline: true,\n          label: \'一个多选条件\',\n          children: <Checkbox value="1">四川菜</Checkbox>\n        },\n        switch: {\n          inline: true,\n          initialValue: true,\n          label: \'开启\',\n          children: <Switch />\n        },\n        radioGroup: {\n          inline: true,\n          initialValue: \'男\',\n          label: \'单选\',\n          children: (\n            <RadioGroup name="other">\n              <Radio value="男">男</Radio>\n              <Radio value="女">女</Radio>\n              <Radio value="人妖" disabled>人妖</Radio>\n              <Radio value="未知">未知</Radio>\n            </RadioGroup>\n          )\n        },\n        textarea: {\n          initialValue: \'\',\n          label: \'多行文本输入框\',\n          children: <Textarea placeholder="请输入内容" />\n        },\n        terms: {\n          validator: (currentValue) => {\n            return !currentValue ? \'必须统一服务条款\' : null;\n          },\n          style: { marginBottom: 0 },\n          children: <Checkbox value="1">已阅读并同意<a href="#">服务条款</a></Checkbox>\n        }\n      }}\n    >\n      {({ fields, state, canSubmit }) => {\n        console.log(\'fields:--\x3e\', state);\n        return (\n          <div style={{ maxWidth: 500 }}>\n            <Row gutter={10}>\n              <Col>{fields.userName}</Col>\n              <Col>{fields.age}</Col>\n            </Row>\n            <Row gutter={10}>\n              <Col>{fields.checkbox}</Col>\n              <Col>{fields.checkboxOne}</Col>\n            </Row>\n            <Row gutter={10}>\n              <Col>{fields.radioGroup}</Col>\n            </Row>\n            <Row gutter={10}>\n              <Col>{fields.switch}</Col>\n            </Row>\n            <Row gutter={10}>\n              <Col>{fields.textarea}</Col>\n            </Row>\n            <Row gutter={10}>\n              <Col fixed>\n                <Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>\n              </Col>\n              <Col fixed align="middle">\n                {fields.terms}\n              </Col>\n            </Row>\n          </div>\n        )\n      }}\n    </Form>\n  </div>\n)\n```\n\x3c!--End--\x3e\n\n## 水平登录栏\n\n\x3c!--DemoStart,bgWhite--\x3e \n```js\nconst Demo = () => (\n  <div>\n    <Form\n      onSubmit={({initial, current}) => {\n        const errorObj = {};\n        if (!current.username) {\n          errorObj.username = \'用户名不能为空！\';\n        }\n        if (!current.password) {\n          errorObj.password = \'密码不能为空！\';\n        }\n        if(Object.keys(errorObj).length > 0) {\n          const err = new Error();\n          err.filed = errorObj;\n          Notify.error({ title: \'提交失败！\', description: \'请确认提交表单是否正确！\' });\n          throw err;\n        }\n        console.log(\'--\x3e>\', initial, current);\n        Notify.success({ title: \'提交成功！\', description: \'恭喜你登录成功！\' });\n      }}\n      onSubmitError={(error) => {\n        if (error.filed) {\n          return { ...error.filed };\n        }\n        return null;\n      }}\n      fields={{\n        username: {\n          labelClassName: \'fieldLabel\',\n          labelFor: \'username-inline\',\n          children: <Input preIcon="user" id="username-inline" />\n        },\n        password: {\n          labelClassName: \'fieldLabel\',\n          labelFor: \'password-inline\',\n          children: <Input preIcon="lock" id="password-inline" type="password" />\n        },\n      }}\n    >\n      {({ fields, state, canSubmit }) => {\n        console.log(\'fields:\', state);\n        return (\n          <Row gutter={10}>\n            <Col fixed>{fields.username}</Col>\n            <Col fixed>{fields.password}</Col>\n            <Col>\n              <Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>\n            </Col>\n          </Row>\n        )\n      }}\n    </Form>\n  </div>\n)\n```\n\x3c!--End--\x3e\n\n## 登录\n\n\x3c!--DemoStart,bgWhite--\x3e \n```js\nconst Demo = () => (\n  <div>\n    <Form\n      onSubmit={({initial, current}) => {\n        console.log(\'--\x3e>\', initial, current);\n      }}\n      fields={{\n        username: {\n          labelClassName: \'fieldLabel\',\n          labelStyle: { width: 60 },\n          labelFor: \'username\',\n          children: <Input preIcon="user" id="username" />\n        },\n        password: {\n          labelClassName: \'fieldLabel\',\n          labelStyle: { width: 60 },\n          labelFor: \'password\',\n          children: <Input preIcon="lock" id="password" type="password" />\n        },\n        terms: {\n          validator: (currentValue) => !currentValue ? \'必须统一服务条款\' : null,\n          children: <Checkbox value="1">已阅读并同意</Checkbox>\n        }\n      }}\n    >\n      {({ fields, state, canSubmit }) => {\n        console.log(\'fields:\', state);\n        return (\n          <div>\n            <Row>\n              <Col>{fields.username}</Col>\n            </Row>\n            <Row>\n              <Col>{fields.password}</Col>\n            </Row>\n            <Row>\n              <Col fixed align="middle">{fields.terms}</Col>\n              <Col fixed style={{ marginTop: -4 }}><a href="#">服务条款</a></Col>\n            </Row>\n            <Row>\n              <Col fixed>\n                <Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>\n              </Col>\n            </Row>\n          </div>\n        )\n      }}\n    </Form>\n  </div>\n)\n```\n\x3c!--End--\x3e\n\n## 表单提交\n\n\x3c!--DemoStart,bgWhite--\x3e \n```js\nconst Demo = () => (\n  <div>\n    <Form\n      onSubmit={({initial, current}) => {\n        console.log(\'--\x3e>\', initial, current);\n      }}\n      fields={{\n        firstName: {\n          labelClassName: \'fieldLabel\',\n          labelStyle: { width: 60 },\n          inline: true,\n          label: \'姓氏\'\n        },\n        lastName: {\n          labelClassName: \'fieldLabel\',\n          labelStyle: { width: 60 },\n          initialValue: \'先生\',\n          inline: true,\n          label: \'名字\',\n        },\n        email: {\n          labelClassName: \'fieldLabel\',\n          labelStyle: { width: 60 },\n          // initialValue: \'\',\n          validator: (currentValue) => {\n            return currentValue.length < 2 ? \'Password must be 8+ characters\' : null;\n          },\n          inline: true,\n          label: \'Email\',\n        },\n        select: {\n          labelClassName: \'fieldLabel\',\n          labelStyle: { width: 60 },\n          inline: true,\n          label: \'选择器\',\n          children: (\n            <Select>\n              <Select.Option>Choose an item...</Select.Option>\n              <Select.Option value="1">One</Select.Option>\n              <Select.Option value="2">Two</Select.Option>\n              <Select.Option value="3">Three</Select.Option>\n              <Select.Option value="4">Four</Select.Option>\n            </Select>\n          ),\n        },\n      }}\n    >\n      {({ fields, state, canSubmit }) => {\n        console.log(\'fields:\', state);\n        return (\n          <div>\n            <Row style={{ marginBottom: 10 }}>\n              <Col>{fields.firstName}</Col>\n              <Col>{fields.lastName}</Col>\n            </Row>\n            <Row>\n              <Col>{fields.email}</Col>\n              <Col>{fields.select}</Col>\n            </Row>\n            <Row>\n              <Col />\n              <Col fixed align="bottom"><Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button></Col>\n            </Row>\n          </div>\n        )\n      }}\n    </Form>\n  </div>\n)\n```\n\x3c!--End--\x3e\n\n## FormItem 竖排\n\n对组件 `FormItem` 竖排展示示例。\n\n\x3c!--DemoStart,bgWhite--\x3e \n```js\nconst Demo = () => (\n  <div>\n    <FormItem\n      label="可选字段"\n      labelFor="basic-input"\n      help={<span>在上面的字段中输入一个值</span>}\n    >\n      <Input id="basic-input" type="text"/>\n    </FormItem>\n    <FormItem\n      label="用户名"\n      labelFor="username-input"\n      help="用户名长度至少为8个字符串。"\n      hasError={true}\n    >\n      <Input id="username-input" type="text"/>\n    </FormItem>\n  </div>\n)\n```\n\x3c!--End--\x3e\n\n\n## FormItem 横排\n\n对组件 `FormItem` 横排展示示例。\n\n\x3c!--DemoStart,bgWhite--\x3e \n```js\nconst Demo = () => (\n  <div>\n    <FormItem\n      inline={true}\n      label="可选字段"\n      labelFor="basic-input-inline"\n      help={<span>在上面的字段中输入一个值</span>}\n    >\n      <Input id="basic-input-inline" type="text"/>\n    </FormItem>\n    <FormItem\n      inline={true}\n      label="用户名"\n      labelFor="username-input-inline"\n      labelClassName="username"\n      help="用户名长度至少为8个字符串。"\n      hasError={true}\n    >\n      <Input id="username-input-inline" type="text"/>\n    </FormItem>\n  </div>\n)\n```\n\x3c!--End--\x3e\n\n## Form\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| fields | 设置字段 | object | - |\n| children | 回调 {`fields`, `state`} | node/function | - |\n| onSubmit | 提交回调 {`initial`, `current`}  | function | - |\n| onSubmitError | 调用 `onSubmit` 抛出的任何错误。从字段名称返回对象映射。  | function | - |\n| resetOnSubmit | 在 `onSubmit` 成功后将表单重置为其初始状态。| bool | `true` |\n\n```js\n// => fields\n{\n  firstName: {\n    initialValue: \'王\',\n    inline: true,\n    label: \'姓\',\n    labelClassName: \'fieldLabel\',\n    labelStyle: { width: 60 },\n    children: <Input type="number" />\n  },\n}\n```\n\n## FormItem\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| label | 表单标题展示 | string | - |\n| labelClassName | 表单标题样式名称 | string | - |\n| labelStyle | 表单标题样式 | object | - |\n| labelFor | 列的宽度相对于同一网格中其他列的比率 | number | - |\n| help | 提示信息 | Enum{`top`, `middle`, `bottom`, `baseline`} | - |\n| hasError | 如果为true，则应用错误CSS。转动边框并帮助文字变红。 | number | - |'}}]);