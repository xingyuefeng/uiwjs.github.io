(window.webpackJsonp=window.webpackJsonp||[]).push([[335],{643:function(n,e){n.exports="DatePickerInput 日期选择器输入框\n===\n\n显示一个月的日历，并允许用户选择单个日期。\n\n```jsx\nimport { DatePickerInput } from 'uiw';\n```\n\n\x3c!--DemoStart--\x3e \n```js\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      date: '',\n    };\n  }\n  onChange(selectedDate) {\n    console.log('selectedDate:', selectedDate)\n    this.setState({ date: selectedDate });\n  }\n  render() {\n    return (\n      <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>\n        <DatePickerInput onChange={this.onChange.bind(this)} />\n        <div>{this.state.date ? String(this.state.date) : 'no date'}</div>\n      </div>\n    )\n  }\n}\n```\n\x3c!--End--\x3e\n\n\n## 在表单中使用\n\n\x3c!--DemoStart--\x3e \n```js\nconst boxStyl = { backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' };\n\nconst Demo = () => (\n  <div style={boxStyl}>\n    <Form\n      onSubmit={({initial, current}) => {\n        if(current.date) {\n          Notify.success({\n            title: '提交成功！',\n            description: `表单提交时间成功，时间为：${current.date}`,\n          });\n        } else {\n          Notify.error({\n            title: '提交失败！',\n            description: `表单提交时间成功，时间为：${current.date}，将自动填充初始化值！`,\n          });\n        }\n        console.log('--\x3e>', initial, current);\n      }}\n      fields={{\n        date: {\n          initialValue: new Date(),\n          labelClassName: 'fieldLabel',\n          labelFor: 'date-inline',\n          children: <DatePickerInput id=\"date-inline\" />\n        },\n      }}\n    >\n      {({ fields, state, canSubmit }) => {\n        console.log('fields:', state);\n        return (\n          <Row gutter={10}>\n            <Col fixed>{fields.date}</Col>\n            <Col>\n              <Button disabled={!canSubmit()} type=\"primary\" htmlType=\"submit\">提交</Button>\n            </Col>\n          </Row>\n        )\n      }}\n    </Form>\n  </div>\n)\n```\n\x3c!--End--\x3e\n\n## Props\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| value | 初始时间值 | Date | - |\n| onChange | 选择一天时调用。 | Function(selectedDate:Date) | - |\n| popoverProps | 将参数传递给 [`<Popover>`](#/components/popover) 组件 | Object | - |\n| inputProps | 将参数传递给 [`<Input>`](#/components/input) 组件 | Object | - |\n| datePickerProps | 将参数传递给 [`<DatePicker>`](#/components/date-picker) 组件 | Object | - |"}}]);