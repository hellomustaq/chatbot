(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],p=0,m=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},r={app:0},n=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),r=s.n(a);r.a},"43d3":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},n=[],i=s("bc3a"),o=s.n(i),c=s("a7fe"),l=s.n(c),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"support-container"},[s("div",{staticClass:"support-wrapper"},[t.showForm?s("div",{staticClass:"support-form support-start"},[s("div",{staticClass:"support-body",staticStyle:{postition:"relative"}},[this.first?s("div",[s("h3",[t._v("Send Message to Support Team!")]),t.sentMessage?t._e():s("p",[t._v("Use the form below to share your questions, ideas, comments and feedback.")]),this.sentMessage?s("div",{staticClass:"success-message"},[s("p",[t._v("Thanks for your message. Our technical team received your query and working on it, We will get back to you shortly. Typically it may take 24 hours")])]):t._e(),this.error?s("p",{staticClass:"error-message"},[t._v(" Something went wrong! Please try again. ")]):t._e(),t.sentMessage?t._e():s("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",required:"",name:"email",placeholder:"Enter your email!"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"tel",required:"",name:"phone",placeholder:"Enter your phone number!"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control",attrs:{required:"",rows:"3",name:"message",placeholder:"Write message"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),t._m(0)])]):s("div",{staticStyle:{position:"absolute",bottom:"0",width:"100%"}},[t._m(1),s("div",{staticClass:"mesgs"},[s("div",{staticClass:"msg_history"},[t._m(2),t._m(3),s("div",{staticClass:"incoming_msg"},[t._m(4),t._l(this.response,(function(e){return s("div",{key:e,staticClass:"received_msg"},[s("div",{staticClass:"received_withd_msg"},[s("p",[t._v(t._s(e))]),s("span",{staticClass:"time_date"},[t._v(" 11:01 AM | Today")])])])}))],2)]),s("div",{staticClass:"type_msg"},[s("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.sendMessageSingle(e)}}},[t._m(5)])])])])])]):t._e()]),s("a",{staticClass:"support-float",on:{click:function(e){t.showForm=!t.showForm}}},[t.showForm?s("img",{staticClass:"p-13",attrs:{src:"https://img.icons8.com/pastel-glyph/64/000000/cancel.png"}}):s("img",{staticClass:"p-13",attrs:{src:"https://img.icons8.com/ios/50/000000/speech-bubble-with-dots.png"}}),s("img")])])},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group"},[s("button",{staticClass:"form-control btn  btn-success",attrs:{type:"submit"}},[t._v("Send")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"padd"},[s("h4",{staticClass:"text-left text-white"},[t._v("Chatting with supports ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"incoming_msg"},[s("div",{staticClass:"incoming_msg_img"},[s("img",{attrs:{src:"https://ptetutorials.com/images/user-profile.png",alt:"sunil"}})]),s("div",{staticClass:"received_msg"},[s("div",{staticClass:"received_withd_msg"},[s("p",[t._v("Test, which is a new approach to have")]),s("span",{staticClass:"time_date"},[t._v(" 11:01 AM | Yesterday")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"outgoing_msg"},[s("div",{staticClass:"sent_msg"},[s("p",[t._v("Apollo University, Test Data")]),s("span",{staticClass:"time_date"},[t._v(" 11:01 AM | Today")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"incoming_msg_img"},[s("img",{attrs:{src:"https://ptetutorials.com/images/user-profile.png",alt:"sunil"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input_msg_write"},[s("input",{staticClass:"write_msg",attrs:{type:"text",placeholder:"Type a message"}}),s("button",{staticClass:"msg_send_btn",attrs:{type:"submit"}},[s("img",{attrs:{src:"https://img.icons8.com/dotty/80/000000/filled-sent.png"}})])])}];s("f9e3");a["default"].use(l.a,o.a);var m={name:"SupportMessageComponent",data:function(){return{showForm:!1,sentMessage:!1,message:"",email:"",phone:"",error:!1,formData:new FormData,action:"http://127.0.0.1:8000/chatbotV4",first:!0,response:[],singleMessage:""}},mounted:function(){},methods:{sendMessage:function(){var t=this;this.formData.append("messageText",this.message),a["default"].axios.post("http://127.0.0.1:8000/chatbotV4",this.formData,{mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"XMLHttpRequest"}}).then((function(e){t.response.push(e.data.answer),t.first=!1,200==status?t.sentMessage=!0:t.error=!0}))},sendMessageSingle:function(){var t=this;this.formData.append("body",this.message),a["default"].axios.post(this.action,this.formData,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){t.first=!1,t.response.push(e.data.answer),"success"===status?t.sentMessage=!0:t.error=!0}))}}},d=m,f=(s("c205"),s("2877")),g=Object(f["a"])(d,u,p,!1,null,"2cd9f29a",null),v=g.exports;a["default"].use(l.a,o.a);var h={name:"app",components:{HelloWorld:v}},_=h,y=(s("034f"),Object(f["a"])(_,r,n,!1,null,null,null)),b=y.exports,w=s("5f5b");a["default"].use(w["a"]),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(b)}}).$mount("#app")},"85ec":function(t,e,s){},c205:function(t,e,s){"use strict";var a=s("43d3"),r=s.n(a);r.a}});
//# sourceMappingURL=app.6d78b25b.js.map