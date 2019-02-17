(window.webpackJsonp=window.webpackJsonp||[]).push([[363],{615:function(n,o){n.exports="Timestamp 时间戳\n===\n\n用于时间格式化，时间格式化的部分是组件基于 [time-stamp](https://github.com/jonschlinkert/time-stamp) 更改。\n\n```jsx\nimport { Timestamp } from 'uiw';\n\nconsole.log(Timestamp('YYYY/MM/DD mm:ss'));\n//=> 2019-02-16 02:18\nconsole.log(Timestamp.utc());\n//=> 2019-02-16\n```\n\n## 基础实例\n\n\x3c!--DemoStart--\x3e \n```js\nconst Demo = () => {\n  return (\n    <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>\n      <Tag title=\"Timestamp('YYYY ? MM # DD')\" color=\"#1C7CEB\">{Timestamp('YYYY ? MM # DD')}</Tag>\n      <Divider />\n      <Tag title=\"Timestamp.utc()\">{Timestamp.utc()}</Tag>\n      <Divider />\n      {Timestamp('YYYY / MM / DD', new Date(1987, 2, 4))}\n    </div>\n  );\n};\n```\n\x3c!--End--\x3e\n\n## 格式化时间\n\n```js\nconsole.log(Timestamp('YYYYMMDD'));\n//=> 20190217\nconsole.log(Timestamp.utc('YYYYMMDD'));\n//=> 20190217\n\nconsole.log(Timestamp('YYYYMMDD:ss'));\n//=> 20190217:24\nconsole.log(Timestamp.utc('YYYYMMDD:ss'));\n//=> 20190217:24\n\nconsole.log(Timestamp('YYYY/MM/DD:mm:ss'));\n//=> 2019/02/17:46:24\nconsole.log(Timestamp.utc('YYYY/MM/DD:mm:ss'));\n//=> 2019/02/17:46:24\n\nconsole.log(Timestamp('YYYY:MM:DD'));\n//=> 2019:02:17\nconsole.log(Timestamp.utc('YYYY:MM:DD'));\n//=> 2019:02:17\n\nconsole.log(Timestamp('[YYYY:MM:DD]'));\n//=> [2019:02:17]\nconsole.log(Timestamp.utc('[YYYY:MM:DD]'));\n//=> [2019:02:17]\n\nconsole.log(Timestamp('YYYY/MM/DD'));\n//=> 2019/02/17\nconsole.log(Timestamp.utc('YYYY/MM/DD'));\n//=> 2019/02/17\n\nconsole.log(Timestamp('YYYY:MM'));\n//=> 2019:02\nconsole.log(Timestamp.utc('YYYY:MM'));\n//=> 2019:02\n\nconsole.log(Timestamp('YYYY'));\n//=> 2019\nconsole.log(Timestamp.utc('YYYY'));\n//=> 2019\n\nconsole.log(Timestamp('MM'));\n//=> 10\nconsole.log(Timestamp.utc('MM'));\n//=> 10\n\nconsole.log(Timestamp('DD'));\n//=> 26\nconsole.log(Timestamp.utc('DD'));\n//=> 26\n\nconsole.log(Timestamp('HH'));\n//=> 00\nconsole.log(Timestamp.utc('HH'));\n//=> 04\n\nconsole.log(Timestamp('mm'));\n//=> 46\nconsole.log(Timestamp.utc('mm'));\n//=> 46\n\nconsole.log(Timestamp('ss'));\n//=> 24\nconsole.log(Timestamp.utc('ss'));\n//=> 24\n\nconsole.log(Timestamp('ms'));\n//=> 186\nconsole.log(Timestamp.utc('ms'));\n//=> 186\n```\n\n## 时区转换\n\n`TZC` 为时区转换，有个应用场景，服务器时间时区，将时区转换成跟客户端时区一致，例如西面是转换到东八区时间。\n\n\x3c!--DemoStart--\x3e \n```js\nconst Demo = () => {\n  const date = Timestamp.tzc('Wed Nov 22 2017 02:06:01 GMT+100 (CST)', 8);\n  console.log('date:', date);\n  return (\n    <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>\n      {Timestamp('YYYY / MM / DD', new Date(date))}\n      <Divider />\n      {date.toString()}\n    </div>\n  );\n};\n```\n\x3c!--End--\x3e\n\n## API\n\n```js\nTimestamp(rule: String, date: Date, utc: Number);\nTimestamp.utc(rule: String, date: Date);\nTimestamp.tzc(date: Date, timeZone: Number);\n```\n\n## 格式化规则\n\n| 参数 | 说明 | 中文说明 | 实例 |\n|--------- |-------- |--------- |-------- |\n| `YYYY` | full year | 年 | 例：`2019` |\n| `MM` | month | 月 | 例：`02` |\n| `DD` | day | 天 | 例: `05` |\n| `HH` | hours | 时 | 例: `12` |\n| `mm` | minutes | 分钟 | 例: `59` |\n| `ss` | seconds | 秒 | 例: `09` |\n| `ms` | milliseconds | 毫秒 | 例: `532` |\n"}}]);