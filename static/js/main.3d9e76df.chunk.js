(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(7),o=c.n(n),a=c(2),s=c(3),i=c(5),l=c(4),r=c(1),m=c.n(r),u=(c(12),c(0)),d=function(e){Object(i.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={today:new Date},e.timerId=0,e.clock=function(){e.setState({today:new Date}),console.info(e.state.today.toLocaleTimeString("en-GB"))},e}return Object(s.a)(c,[{key:"componentDidMount",value:function(){this.timerId=window.setInterval(this.clock,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state.today.toUTCString().slice(-12,-4);return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:this.props.name})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:e})]})}}]),c}(m.a.Component),k=function(e){Object(i.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={hasClock:!0,clockName:"Clock-0"},e.nameId=0,e.clockHidde=function(t){t.preventDefault(),e.state.hasClock&&e.setState({hasClock:!1})},e.clockShow=function(){e.state.hasClock||e.setState({hasClock:!0})},e.changeClockName=function(){if(e.state.hasClock){var t=Date.now().toString().slice(-4);e.setState({clockName:"Clock-".concat(t)})}},e}return Object(s.a)(c,[{key:"componentDidMount",value:function(){document.addEventListener("contextmenu",this.clockHidde),document.addEventListener("click",this.clockShow),this.nameId=window.setInterval(this.changeClockName,3300)}},{key:"componentDidUpdate",value:function(e,t){t.clockName!==this.state.clockName&&console.debug("Renamed from ".concat(t.clockName," to ").concat(this.state.clockName))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.clockHidde),document.removeEventListener("click",this.clockShow)}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),this.state.hasClock&&Object(u.jsx)(d,{name:this.state.clockName})]})}}]),c}(m.a.Component);o.a.render(Object(u.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3d9e76df.chunk.js.map