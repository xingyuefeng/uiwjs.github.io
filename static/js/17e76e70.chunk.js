(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{678:function(n,e){n.exports='Collapse 折叠面板\n===\n\n可以折叠/展开的内容区域。\n\n```jsx\nimport { Collapse } from \'uiw\';\n```\n\n## 基本用法\n\n可以同时展开多个面板，这个例子默认展开了第一个。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Collapse } from \'uiw\';\n\nReactDOM.render(\n  <div>\n    <Collapse activeKey={[\'1\']} onChange={key=>console.log(key)}>\n      <Collapse.Panel header="大话西游" key="1">\n        <div>曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。 </div>\n        <div>如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。 </div>\n        <div>如果非要在这份爱上加上一个期限，我希望是…… </div>\n        <div>一万年</div>\n      </Collapse.Panel>\n      <Collapse.Panel header="西游·降魔篇" key="2">\n        <div>曾经痛苦，才知道真正的痛苦；曾经执著，才能放下执著；</div>\n        <div>曾经牵挂，才能了无牵挂。</div>\n      </Collapse.Panel>\n      <Collapse.Panel header="国产零零漆" key="3" disabled >\n        <div>古有关云长全神贯注下象棋刮骨疗毒，今有我零零漆聚精会神看A片挖骨取弹头。</div>\n      </Collapse.Panel>\n    </Collapse>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## 手风琴折叠面板\n\n手风琴，每次只打开一个tab。默认打开第一个。`Panel` 的 `key` 属性并非必须。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Collapse, Button } from \'uiw\';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      activeName: \'0\'\n    }\n  }\n  render() {\n    const Panel = Collapse.Panel\n    return (\n      <div>\n        <Button\n          type="primary"\n          style={{marginBottom: \'15px\'}}\n          onClick={() => this.setState({ activeName: this.state.activeName === \'2\'?\'\':\'2\' })}\n        >\n          打开或关闭第三个\n        </Button>\n        <Collapse accordion activeKey={[this.state.activeName]} onChange={key=>console.log(key)}>\n          <Panel header="大话西游">\n            <div>曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。 </div>\n            <div>如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。 </div>\n            <div>如果非要在这份爱上加上一个期限，我希望是…… </div>\n            <div>一万年</div>\n          </Panel>\n          <Panel header="西游·降魔篇">\n            <div>曾经痛苦，才知道真正的痛苦；曾经执著，才能放下执著；</div>\n            <div>曾经牵挂，才能了无牵挂。</div>\n          </Panel>\n          <Panel header="国产零零漆" showArrow={false}>\n            <div>古有关云长全神贯注下象棋刮骨疗毒，今有我零零漆聚精会神看A片挖骨取弹头。</div>\n          </Panel>\n        </Collapse>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## 简洁风格无边框\n\n通过设置`bordered={true}`没有边框的简洁样式。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Collapse } from \'uiw\';\n\nconst Panel = Collapse.Panel;\n\nReactDOM.render(\n  <div>\n    <Collapse accordion bordered={true} activeKey={[]} onChange={key=>console.log(key)}>\n      <Panel header="大话西游">\n        <div>曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。 </div>\n        <div>如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。 </div>\n        <div>如果非要在这份爱上加上一个期限，我希望是…… </div>\n        <div>一万年</div>\n      </Panel>\n      <Panel header="西游·降魔篇">\n        <div>曾经痛苦，才知道真正的痛苦；曾经执著，才能放下执著；</div>\n        <div>曾经牵挂，才能了无牵挂。</div>\n      </Panel>\n      <Panel header="国产零零漆">\n        <div>古有关云长全神贯注下象棋刮骨疗毒，今有我零零漆聚精会神看A片挖骨取弹头。</div>\n      </Panel>\n    </Collapse>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## 自定义面板标题\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Collapse, Icon } from \'uiw\';\n\nconst Panel = Collapse.Panel;\n\nReactDOM.render(\n  <div>\n    <Collapse showArrow={false} activeKey={[\'1\']} onChange={key=>console.log(key)}>\n      <Panel header={<span>大话西游 <Icon type="smile-o"/></span>} key="1">\n        <div>曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。 </div>\n        <div>如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。 </div>\n        <div>如果非要在这份爱上加上一个期限，我希望是…… </div>\n        <div>一万年</div>\n      </Panel>\n      <Panel header={<span>西游·降魔篇 <Icon type="smile-o"/></span>} key="2">\n        <div>曾经痛苦，才知道真正的痛苦；曾经执著，才能放下执著；</div>\n        <div>曾经牵挂，才能了无牵挂。</div>\n      </Panel>\n      <Panel header="国产零零漆" key="3">\n        <div>古有关云长全神贯注下象棋刮骨疗毒，今有我零零漆聚精会神看A片挖骨取弹头。</div>\n      </Panel>\n    </Collapse>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## 指定折叠图标\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Collapse, Icon } from \'uiw\';\n\nconst Panel = Collapse.Panel;\n\nReactDOM.render(\n  <div>\n    <Collapse activeKey={[\'1\']} onChange={key=>console.log(key)}>\n      <Panel icon="caret-down" header={<span>大话西游 <Icon type="smile-o"/></span>} key="1">\n        <div>曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。 </div>\n        <div>如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。 </div>\n        <div>如果非要在这份爱上加上一个期限，我希望是…… </div>\n        <div>一万年</div>\n      </Panel>\n      <Panel icon={<Icon type="down-circle" />} header={<span>西游·降魔篇 <Icon type="smile-o"/></span>} key="2">\n        <div>曾经痛苦，才知道真正的痛苦；曾经执著，才能放下执著；</div>\n        <div>曾经牵挂，才能了无牵挂。</div>\n      </Panel>\n      <Panel icon={<span>折叠-</span>} header="国产零零漆" key="3">\n        <div>古有关云长全神贯注下象棋刮骨疗毒，今有我零零漆聚精会神看A片挖骨取弹头。</div>\n      </Panel>\n    </Collapse>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## Props\n\n### Collapse\n\n| 参数      | 说明    | 类型      |  默认值   |\n|--------- |-------- |---------- |-------- |\n| accordion | 手风琴效果 | Boolean | false |\n| activeKey | 当前激活 tab 面板的 key, accordion 模式下默认第一个元素 | String[]/String | false |\n| showArrow | 在这里使用，表示控制所有的面板图标是否展示 | Boolean | true |\n| bordered | 设置没有边框的简洁样式 | Boolean | false |\n\n### Collapse.Panel\n\n| 参数      | 说明    | 类型      |  默认值   |\n|--------- |-------- |---------- |-------- |\n| disabled | 禁用后的面板展开与否将无法通过用户交互改变 | Boolean | false |\n| header | 面板头内容 | String/ReactNode | - |\n| icon | 指定图标 | String/ReactNode | - |\n| isActive | 是否展开 | Boolean | - |\n| showArrow | 是否显示展开图标 | Boolean | true |\n| key | 面板头内容，非必填 | 对应 activeKey | - |\n'}}]);