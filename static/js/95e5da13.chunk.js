(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{181:function(e,t,n){},333:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var a=n(19),r=n(23),i=n(5),c=n(6),u=n(13),s=n(20),l=n(14),o=n(15),p=n(16),h=n(2),v=n.n(h),d=n(4),f=n.n(d),b=(n(181),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={current:e.current},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.current!==this.props.current&&this.setState({current:e.current})}},{key:"onClick",value:function(e){var t=this;if(!e.active&&!e.disabled){var n=this.props,a=n.total,r=n.pageSize,i=n.onChange,u=this.state.current,s=Math.ceil(a/r),l={};e.label&&(l.current=e.label),"prev"===e.type&&(l.current=u-1>0?u-1:1),"next"===e.type&&(l.current=u+1<=s?u+1:s),/^(jumpPrev|jumpNext)/.test(e.type)&&e.goto&&(l.current="jumpPrev"===e.type?u-e.goto:u+e.goto,l.current>s&&(l.current=s),l.current<1&&(l.current=1)),this.setState(Object(c.a)({},l),function(){i&&i(t.state.current,a,r)})}}},{key:"initPageSoure",value:function(){var e=this.props,t=e.total,n=e.pageSize,a=this.state.current,r=[{type:"prev",disabled:1===a}],i=Math.ceil(t/n),c=i<=5?i:5,u=0,s=0;for(a>3&&i>5&&r.push({label:1}),a>4&&i>6&&r.push({type:"jumpPrev",label:"•••",goto:5});u<c;){a>3&&i>5&&(s=a-3);var l=(u+=1)+s;i-a==0&&i>5&&(l-=2),i-a==1&&i>5&&(l-=1),l<=i&&r.push({label:l,active:a===l})}return a+3<i&&i>6&&r.push({type:"jumpNext",label:"•••",goto:5}),a+2<i&&i>5&&r.push({label:i}),r.push({type:"next",disabled:a===i}),r}},{key:"render",value:function(){var e,t=this,n=this.props,c=n.prefixCls,u=n.className,s=(n.total,n.current,n.pageSize,n.size),l=n.alignment,o=n.divider,p=(n.onChange,Object(i.a)(n,["prefixCls","className","total","current","pageSize","size","alignment","divider","onChange"])),h=f()(c,u,(e={},Object(r.a)(e,"".concat(c,"-").concat(l),l),Object(r.a)(e,s,s),Object(r.a)(e,"divider",o),e));return v.a.createElement("ul",Object(a.a)({className:h},p),this.initPageSoure().map(function(e,n){var a=v.a.createElement("a",null,e.label);return/^(prev|next)$/.test(e.type)&&(a=v.a.createElement("a",{className:"arrow ".concat(e.type)})),v.a.createElement("li",{className:f()({active:e.active,disabled:e.disabled}),onClick:t.onClick.bind(t,e),key:n},a)}))}}]),t}(v.a.Component));b.defaultProps={prefixCls:"w-pagination",alignment:"left",size:"default",total:0,pageSize:10,current:1,onChange:function(){return null}}},694:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return y});var a=n(61),r=n.n(a),i=n(62),c=n.n(i),u=n(7),s=n.n(u),l=n(10),o=n.n(l),p=n(8),h=n.n(p),v=n(9),d=n.n(v),f=n(11),b=n.n(f),g=n(333),m=n(675),y=function(e){function t(){var e,n;s()(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=h()(this,(e=d()(t)).call.apply(e,[this].concat(r)))).path="packages/core/src/pagination/README.md",n.dependencies={Pagination:g.a,Divider:m.a},n}return b()(t,e),o()(t,[{key:"renderPage",value:function(){var e=c()(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(396).then(n.t.bind(null,650,7));case 2:return t=e.sent,e.abrupt("return",t.default||t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}]),t}(n(106).a)}}]);