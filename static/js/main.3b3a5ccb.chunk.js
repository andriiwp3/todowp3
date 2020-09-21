(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,function(t,e,o){t.exports={TodoControl:"TodoControl-module__TodoControl--1PpU0",completed:"TodoControl-module__completed--2EHq3",left:"TodoControl-module__left--3TLhU",sortItem:"TodoControl-module__sortItem--2bCAP",sortItemActive:"TodoControl-module__sortItemActive--24r0M"}},function(t,e,o){t.exports={TodoItem:"TodoItem-module__TodoItem--2qubm",title:"TodoItem-module__title--3Tmd-",titleCompleted:"TodoItem-module__titleCompleted--kl4Jd",checkbox:"TodoItem-module__checkbox--2TY2Y",checkmark:"TodoItem-module__checkmark--32CP_",actions:"TodoItem-module__actions--2qRUq"}},,,,,,function(t,e,o){t.exports={Layout:"Layout-module__Layout--3zwSa",container:"Layout-module__container--2EkbH",title:"Layout-module__title--ehrrz"}},,,function(t,e,o){t.exports={delete:"Button-module__delete--3Z0Xt",add:"Button-module__add--1I5lE"}},function(t,e,o){t.exports={TodoList:"TodoList-module__TodoList--1NWj1"}},function(t,e,o){t.exports={TodoAdd:"TodoAdd-module__TodoAdd--AI46p"}},,function(t,e,o){t.exports=o(21)},,,,,function(t,e,o){},function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(10),l=o.n(r),c=(o(20),o(14)),d=o(3),i=o(4),u=o(5),s=o(7),m=o(6),p=o(11),h=o.n(p),f=function(t){return a.a.createElement("button",{className:h.a[t.type]||t.type,onClick:t.onClick},t.children)},v=o(1),C=o.n(v),g=function(t){var e=[C.a.sortItem,C.a.sortItemActive].join(" ");return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:C.a.TodoControl},a.a.createElement("p",{className:C.a.completed},"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e: ",t.completed," \u0438\u0437 ",t.length),a.a.createElement("p",{className:C.a.left},"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0441\u0434\u0435\u043b\u0430\u0442\u044c: ",t.length-t.completed)),a.a.createElement("div",{className:C.a.TodoControl},a.a.createElement("div",{className:C.a.sort},t.sortButtons?t.sortButtons.map((function(o){return a.a.createElement(f,{key:o.id,type:t.activeSortButton===o.id?e:C.a.sortItem,onClick:t.onSortButtonClickHandler.bind(void 0,o.id,o.sortParam)},o.text)})):null)))},b=o(12),k=o.n(b),T=o(2),I=o.n(T);function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function E(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var B=a.a.createElement("path",{fill:"currentColor",d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"}),x=function(t){var e=t.svgRef,o=t.title,n=E(t,["svgRef","title"]);return a.a.createElement("svg",y({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"trash",className:"svg-inline--fa fa-trash fa-w-14",role:"img",viewBox:"0 0 448 512",ref:e},n),o?a.a.createElement("title",null,o):null,B)},O=a.a.forwardRef((function(t,e){return a.a.createElement(x,y({svgRef:e},t))})),_=(o.p,function(t){var e=[I.a.title,t.completed?I.a.titleCompleted:null].join(" ");return a.a.createElement("div",{onDoubleClick:t.onDoubleClickHandler,className:I.a.TodoItem},a.a.createElement("div",{className:I.a.checkbox},a.a.createElement("input",{type:"checkbox",checked:t.completed,onChange:t.onTodoChangeHandler}),a.a.createElement("span",{className:I.a.checkmark})),t.edit?a.a.createElement("p",{className:e},a.a.createElement("input",{type:"text",value:t.text,onChange:t.onChangeInput,onBlur:t.onBlurInput,onKeyDown:t.onBlurInput,autoFocus:!0})):a.a.createElement("p",{className:e},a.a.createElement("span",null,t.text.trim())),a.a.createElement("div",{className:I.a.actions},a.a.createElement(f,{type:"delete",onClick:t.onDeleteButtonClick},a.a.createElement(O,null))))}),S=o(13),j=o.n(S);function w(){return(w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function A(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var H=a.a.createElement("path",{fill:"currentColor",d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"}),N=function(t){var e=t.svgRef,o=t.title,n=A(t,["svgRef","title"]);return a.a.createElement("svg",w({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"plus",className:"svg-inline--fa fa-plus fa-w-14",role:"img",viewBox:"0 0 448 512",ref:e},n),o?a.a.createElement("title",null,o):null,H)},P=a.a.forwardRef((function(t,e){return a.a.createElement(N,w({svgRef:e},t))})),D=(o.p,function(t){return a.a.createElement("div",{className:j.a.TodoAdd},a.a.createElement(f,{type:"add",onClick:t.onAddButtonClick},a.a.createElement(P,null)),a.a.createElement("input",{type:"text",placeholder:"What needs to be done?",value:t.addInputText,onChange:t.onInputChange,onKeyDown:t.onAddButtonClick,autoFocus:!0}))}),L=function(t){return a.a.createElement("div",{className:k.a.TodoList},a.a.createElement(g,{completed:t.completedTodos,length:t.todoItems.length,activeSortButton:t.activeSortButton,onSortButtonClickHandler:t.onSortButtonClickHandler,sortButtons:t.sortButtons}),a.a.createElement(D,{addInputText:t.addInputText,onAddButtonClick:t.onAddButtonClick,onInputChange:t.onAddInputChange}),t.todoItems.map((function(e,o){var n=null;return("completed"===t.sortParam&&!0===e.completed||"active"===t.sortParam&&!1===e.completed||"all"===t.sortParam)&&(n=a.a.createElement(_,{key:o,text:e.text,completed:e.completed,onTodoChangeHandler:t.onTodoChangeHandler.bind(void 0,o),edit:e.edited,onDoubleClickHandler:t.onDoubleClickHandler.bind(void 0,o),onChangeInput:t.onChangeInput.bind(void 0,o),onBlurInput:t.onBlurInput.bind(void 0,o),onDeleteButtonClick:t.onDeleteButtonClick.bind(void 0,o)})),n})))},R=o(8),z=o.n(R),J=function(t){Object(s.a)(o,t);var e=Object(m.a)(o);function o(){return Object(i.a)(this,o),e.apply(this,arguments)}return Object(u.a)(o,[{key:"render",value:function(){var t=[z.a.container,"container"].join(" ");return a.a.createElement("div",{className:z.a.Layout},a.a.createElement("main",null,a.a.createElement("div",{className:t},a.a.createElement("h1",{className:z.a.title},"todowp3"),this.props.children)))}}]),o}(n.Component),M=function(t){return t.completed},q=function(t){Object(s.a)(o,t);var e=Object(m.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={},t.onChangeActiveSortParam=function(e,o){t.setState({activeSortButton:e,sortParam:o})},t.onAddTask=function(e){if(("keydown"===e.type&&"Enter"===e.key||"click"===e.nativeEvent.type)&&""!==t.state.addInputText.trim()&&null!==t.state.addInputText.trim()){var o=Object(d.a)(t.state.todos),n={text:t.state.addInputText,completed:!1,edited:!1};o.push(n),t.setState({addInputText:"",todos:o})}},t.onAddInputChange=function(e){t.setState({addInputText:e.target.value})},t.onTodoChangeHandler=function(e){var o=Object(d.a)(t.state.todos),n=Object(c.a)({},o[e]);n.completed=!n.completed,o[e]=n,t.setState({completedTodoCount:n.completed?t.state.completedTodoCount+1:t.state.completedTodoCount-1,todos:o})},t.onDoubleClickHandler=function(e){var o=Object(d.a)(t.state.todos);o[e].edited=!0,t.setState({todos:o})},t.onChangeInput=function(e,o){var n=Object(d.a)(t.state.todos);n[e].text=o.target.value,t.setState({todos:n})},t.onBlurInput=function(e,o){if("keydown"===o.type&&"Enter"===o.key||"blur"===o.nativeEvent.type){var n=Object(d.a)(t.state.todos);n[e].edited=!1,t.setState({todos:n})}},t.onDeleteButtonClick=function(e){var o=Object(d.a)(t.state.todos),n=o[e];o.splice(e,1),t.setState({completedTodoCount:M(n)?t.state.completedTodoCount-1:t.state.completedTodoCount,todos:o})},t}return Object(u.a)(o,[{key:"componentDidMount",value:function(){var t,e=(t="todos",JSON.parse(localStorage.getItem(t)));e&&e.todos.length>0&&void 0!==e?this.setState(e):this.setState({completedTodoCount:0,sortButtons:[{text:"\u0412\u0441\u0435",sortParam:"all",id:0},{text:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435",sortParam:"active",id:1},{text:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b\u0435",sortParam:"completed",id:2}],activeSortButton:0,sortParam:"all",addInputText:"",todos:[]})}},{key:"componentDidUpdate",value:function(){var t,e;t="todos",e=this.state,localStorage.setItem(t,JSON.stringify(e))}},{key:"render",value:function(){return a.a.createElement(J,null,a.a.createElement(L,{addInputText:this.state.addInputText,sortButtons:this.state.sortButtons,sortParam:this.state.sortParam,activeSortButton:this.state.activeSortButton,onSortButtonClickHandler:this.onChangeActiveSortParam,onAddButtonClick:this.onAddTask,onAddInputChange:this.onAddInputChange,todoItems:this.state.todos?this.state.todos:[],completedTodos:this.state.completedTodoCount,todoItemsLength:this.state.length,onTodoChangeHandler:this.onTodoChangeHandler,onDoubleClickHandler:this.onDoubleClickHandler,onChangeInput:this.onChangeInput,onBlurInput:this.onBlurInput,onDeleteButtonClick:this.onDeleteButtonClick}))}}]),o}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.3b3a5ccb.chunk.js.map