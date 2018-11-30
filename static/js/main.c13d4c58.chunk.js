(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,a,t){e.exports=t(63)},35:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(26),o=t.n(c),l=(t(35),t(7)),s=t(8),i=t(10),m=t(9),u=t(11),p=t(65),h=t(67),d=t(66),b=t(3),f=t.n(b),v=t(12),E=t(64),y=t(29),g=t(17),C=t(13),N=t.n(C),O=r.a.createContext(),j=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(g.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==a.payload})});case"ADD_CONTACT":return Object(g.a)({},e,{contacts:Object(y.a)(e.contacts).concat([a.payload])});case"UPDATE_CONTACT":return Object(g.a)({},e,{test:console.log("update",e),contacts:e.contacts.map(function(e){return e.id===a.payload.id?e=a.payload:e})});default:return e}},k=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return t.setState(function(a){return j(a,e)})}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({contacts:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(O.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),w=O.Consumer,x=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.showClick=function(e){console.log(e.target),t.setState({showContactInfo:!t.state.showContactInfo})},t.onDeleteClick=function(){var e=Object(v.a)(f.a.mark(function e(a,t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 2:t({type:"DELETE_CONTACT",payload:a});case 3:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,c=a.email,o=a.phone,l=this.state.showContactInfo;return r.a.createElement(w,null,function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n,r.a.createElement("i",{className:"fas fa-sort-down",style:{cursor:"pointer"},onClick:e.showClick}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:function(){return e.onDeleteClick(t,s)}}),r.a.createElement(E.a,{to:"contact/edit/".concat(t)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},o),r.a.createElement("li",{className:"list-group-item"},c)):null)})}}]),a}(n.Component),A=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(w,null,function(e){var a=e.contacts;return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"}," Contact"),"List"),a.map(function(e){return r.a.createElement(x,{key:e.id,contact:e})}))})}}]),a}(n.Component),S=function(e){var a=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},"  ",a," "),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"}),"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"}),"Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"}),"About"))))))};S.defaultProps={branding:"My App"};var T=S,D=t(14),P=t(27),M=t.n(P),_=function(e){var a=e.label,t=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"  ",a," "),r.a.createElement("input",{type:o,name:t,className:M()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};_.defaultProps={type:"text"};var I=_,L=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onChange=function(e){t.setState(Object(D.a)({},e.target.name,e.target.value))},t.onSubmit=function(){var e=Object(v.a)(f.a.mark(function e(a,n){var r,c,o,l,s;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=4;break}return e.abrupt("return",t.setState({errors:{name:"please enter a name"}}));case 4:if(""!==o){e.next=6;break}return e.abrupt("return",t.setState({errors:{email:"please enter an email"}}));case 6:if(""!==l){e.next=8;break}return e.abrupt("return",t.setState({errors:{phone:"please enter a phone Number"}}));case 8:return s={name:c,email:o,phone:l},e.next=11,N.a.post("https://jsonplaceholder.typicode.com/users/",s);case 11:n({type:"ADD_CONTACT",payload:s}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 14:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(w,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"AddContact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(a){return e.onSubmit(a,l)}},r.a.createElement(I,{name:"name",label:"name",type:"text",value:t,placeholder:"enter name",onChange:e.onChange,error:o.name}),r.a.createElement(I,{name:"email",label:"Email",type:"email",value:n,placeholder:"enter email",onChange:e.onChange,error:o.email}),r.a.createElement(I,{name:"phone",label:"Phone Number",type:"text",value:c,placeholder:"enter Phone Number",onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))})}}]),a}(n.Component),B=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onChange=function(e){t.setState(Object(D.a)({},e.target.name,e.target.value))},t.onSubmit=function(){var e=Object(v.a)(f.a.mark(function e(a,n){var r,c,o,l,s,i,m;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),r=t.props.match.params.id,c=t.state,o=c.name,l=c.email,s=c.phone,""!==o){e.next=5;break}return e.abrupt("return",t.setState({errors:{name:"please enter a name"}}));case 5:if(""!==l){e.next=7;break}return e.abrupt("return",t.setState({errors:{email:"please enter an email"}}));case 7:if(""!==s){e.next=9;break}return e.abrupt("return",t.setState({errors:{phone:"please enter a phone Number"}}));case 9:return i={name:o,email:l,phone:s},e.next=12,N.a.put("https://jsonplaceholder.typicode.com/users/".concat(r),i);case 12:m=e.sent,n({type:"UPDATE_CONTACT",payload:m.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 16:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var a,t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,N.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t=e.sent,n=t.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(w,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(a){return e.onSubmit(a,l)}},r.a.createElement(I,{name:"name",label:"name",type:"text",value:t,placeholder:"enter name",onChange:e.onChange,error:o.name}),r.a.createElement(I,{name:"email",label:"Email",type:"email",value:n,placeholder:"enter email",onChange:e.onChange,error:o.email}),r.a.createElement(I,{name:"phone",label:"Phone Number",type:"text",value:c,placeholder:"enter Phone Number",onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Edit Contact",className:"btn btn-light btn-block"}))))})}}]),a}(n.Component),F=function(e){return console.log("match",e),r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"}," About Contact Manager"),r.a.createElement("p",{className:"lead"}," Simple App to manage components "),r.a.createElement("p",{className:"text-secondary"}," Verson 1.0.0 "))},J=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"}," Page Not Found "),r.a.createElement("p",{className:"lead"}," Sorry page does not exist"))},U=(t(60),function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(k,null,r.a.createElement(p.a,{basename:"/contactManager"},r.a.createElement("div",{className:"App"},r.a.createElement(T,{branding:"Content Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:A}),r.a.createElement(d.a,{exact:!0,path:"/contact/add",component:L}),r.a.createElement(d.a,{exact:!0,path:"/contact/edit/:id",component:B}),r.a.createElement(d.a,{exact:!0,path:"/about",component:F}),r.a.createElement(d.a,{component:J}))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.c13d4c58.chunk.js.map