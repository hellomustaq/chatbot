(function(t){function e(e){for(var s,r,o=e[0],l=e[1],c=e[2],m=0,g=[];m<o.length;m++)r=o[m],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&g.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(g.length)g.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"3ce2":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"talentAI"}},[a("HelloWorld",{attrs:{msg:"Welcome to Taleant AI"}})],1)},i=[],r=a("bc3a"),o=a.n(r),l=a("a7fe"),c=a.n(l),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"taleantAI-support-container"},[a("div",{staticClass:"taleantAI-support-wrapper"},[t.showForm?a("div",{staticClass:"taleantAI-support-form taleantAI-support-start"},[a("div",{staticClass:"taleantAI-support-body",staticStyle:{postition:"relative"}},[this.first?a("div",[a("h3",{staticClass:"taleantAI-text-left taleantAI-pl-15"},[t._v("Send Message to Alisa!")]),t.sentMessage?t._e():a("p",{staticClass:"taleantAI-welcome-text"},[t._v("Use the form below to share your questions, ideas, comments and feedback.")]),this.sentMessage?a("div",{staticClass:"taleantAI-success-message"},[a("p",[t._v("Thanks for your message. Our technical team received your query and working on it, We will get back to you shortly. Typically it may take 24 hours")])]):t._e(),this.error?a("p",{staticClass:"taleantAI-error-message"},[t._v(" Something went wrong! Please try again. ")]):t._e(),t.sentMessage?t._e():a("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)}}},[a("div",{staticClass:"taleantAI-form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"taleantAI-form-control",attrs:{type:"email",required:"",name:"email",placeholder:"Enter your email!"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"taleantAI-form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"taleantAI-form-control",attrs:{type:"tel",required:"",name:"phone",placeholder:"Enter your phone number!"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._m(0)])]):a("div",{staticStyle:{position:"absolute",bottom:"0",width:"100%",background:"#eaeaea","border-radius":"7px 7px 0 0"}},[t._m(1),a("div",{staticClass:"taleantAI-mesgs"},[a("div",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll"}],staticClass:"taleantAI-msg_history",attrs:{id:"taleantAI-msg_history"}},t._l(this.messageBot,(function(e){return a("div",{key:e},["send"===e.type?a("div",{staticClass:"taleantAI-outgoing_msg"},[a("div",{staticClass:"taleantAI-sent_msg"},[a("p",[t._v(t._s(e.text))]),a("span",{staticClass:"taleantAI-text-right taleantAI-time_date"},[t._v(" "+t._s(t.time)+" | "+t._s(t.date))])])]):a("div",{staticClass:"taleantAI-incoming_msg"},[t._m(2,!0),a("div",{staticClass:"taleantAI-received_msg"},[a("div",{staticClass:"taleantAI-received_withd_msg"},[a("p",[a("span",{domProps:{innerHTML:t._s(e.text.response)}})]),a("span",{staticClass:"taleantAI-text-left taleantAI-time_date"},[t._v(" "+t._s(t.time)+" | "+t._s(t.date))])])])])])})),0),t.typing?a("div",{staticClass:"taleantAI-typing taleantAI-text-left taleantAI-mt-100"},[t._m(3),a("img",{staticClass:"taleantAI-mt--10 taleantAI-typing-img",attrs:{width:"50",height:"40",src:"https://media1.tenor.com/images/ea1209340ee07d9d9dae67dc0d06b4b3/tenor.gif",alt:""}})]):t._e(),a("div",{staticClass:"taleantAI-type_msg"},[a("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.sendMessageSingle(e)}}},[a("div",{staticClass:"taleantAI-input_msg_write"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"taleantAI-write_msg",attrs:{type:"text",placeholder:"Type a message...",required:""},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._m(4)])])])])])])]):t._e()]),a("a",{staticClass:"taleantAI-support-float",on:{click:function(e){t.showForm=!t.showForm}}},[t.showForm?a("img",{staticClass:"taleantAI-p-13",attrs:{alt:"Cancel",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTg2LDEwLjMyYy00MS43NTYxNiwwIC03NS42OCwzMy45MjM4NCAtNzUuNjgsNzUuNjhjMCw0MS43NTYxNiAzMy45MjM4NCw3NS42OCA3NS42OCw3NS42OGM0MS43NTYxNiwwIDc1LjY4LC0zMy45MjM4NCA3NS42OCwtNzUuNjhjMCwtNDEuNzU2MTYgLTMzLjkyMzg0LC03NS42OCAtNzUuNjgsLTc1LjY4ek04NiwxNy4yYzM4LjAzNzk0LDAgNjguOCwzMC43NjIwNiA2OC44LDY4LjhjMCwzOC4wMzc5NCAtMzAuNzYyMDYsNjguOCAtNjguOCw2OC44Yy0zOC4wMzc5NCwwIC02OC44LC0zMC43NjIwNiAtNjguOCwtNjguOGMwLC0zOC4wMzc5NCAzMC43NjIwNiwtNjguOCA2OC44LC02OC44ek01OC40NDY0LDU1LjAwNjRjLTEuMzk5ODIsMC4wMDAzNyAtMi42NTk4NCwwLjg0ODg0IC0zLjE4NjU4LDIuMTQ1NzdjLTAuNTI2NzQsMS4yOTY5MyAtMC4yMTUxNiwyLjc4MzcgMC43ODc5OSwzLjc2MDAxbDI1LjA4NzgxLDI1LjA4NzgxbC0yNS4wODc4MSwyNS4wODc4MWMtMC44OTg2NywwLjg2MjgxIC0xLjI2MDY4LDIuMTQ0MDQgLTAuOTQ2NDEsMy4zNDk1NmMwLjMxNDI3LDEuMjA1NTIgMS4yNTU3LDIuMTQ2OTYgMi40NjEyMiwyLjQ2MTIyYzEuMjA1NTIsMC4zMTQyNyAyLjQ4Njc1LC0wLjA0Nzc0IDMuMzQ5NTYsLTAuOTQ2NDFsMjUuMDg3ODEsLTI1LjA4NzgxbDI1LjA4NzgxLDI1LjA4NzgxYzAuODYyODEsMC44OTg2NyAyLjE0NDA0LDEuMjYwNjggMy4zNDk1NiwwLjk0NjQxYzEuMjA1NTIsLTAuMzE0MjcgMi4xNDY5NiwtMS4yNTU3IDIuNDYxMjIsLTIuNDYxMjJjMC4zMTQyNywtMS4yMDU1MiAtMC4wNDc3NCwtMi40ODY3NSAtMC45NDY0MSwtMy4zNDk1NmwtMjUuMDg3ODEsLTI1LjA4NzgxbDI1LjA4NzgxLC0yNS4wODc4MWMxLjAxNzQyLC0wLjk4ODk3IDEuMzIzMzMsLTIuNTAxMTEgMC43NzAzNCwtMy44MDc3OGMtMC41NTI5OSwtMS4zMDY2NyAtMS44NTE0NSwtMi4xMzk4MyAtMy4yNjk3MSwtMi4wOThjLTAuODkzNzEsMC4wMjY2MyAtMS43NDE5NCwwLjQwMDE0IC0yLjM2NSwxLjA0MTQxbC0yNS4wODc4MSwyNS4wODc4MWwtMjUuMDg3ODEsLTI1LjA4NzgxYy0wLjY0NzY1LC0wLjY2NTc1IC0xLjUzNjk4LC0xLjA0MTM1IC0yLjQ2NTc4LC0xLjA0MTQxeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"}}):a("img",{staticClass:"taleantAI-p-13",attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEJklEQVRoge2aXYhWRRjH/7P77mq4rmZ1U5Rsu7aFfUohRmwSJEkXEV1keR1YCcFS9EVEQXfRB10F3dVFUpGglmUFQeZau8mqrYUblm5mYaD5bh+K76+LeU7vaX0/5pw976zC/uFlOHOeeZ7fnDMzO/OclWY1q1k1kivKEXCppBWSbpTUK+lySd2SusykLOm4pAOSxiUNS9rhnJsoiiG3gD7geWAP9XXMfvW0G3gO6JuJDgwAW4HTBlMBhoGXgTXADcDCGu0WAsuA+4BXgG9SHToNfAjcEqMDfcAHqeD7gUeBy6bhczHwGDCe8rsZ6C2SPQnmgEHgTwv0LXA3UOQcawPuAcYsxiTwSGExgC7g3ZTzQaC9EOe145XsDSUP7R2gq3nLxk4XATtTb6G/IN6Q2FcB+yz2EHB+XkfdwC5z9DEwv2DWEIb5wCfGMJKZAWi3FSSZeHNaxBrCMjfFsiXTsAaesYbDwLwWcobydKVGx5Ohja4HTgLHgZ4WMwYL6AX+AP4BrglpkIzJByLwZRLwYDJnmxmuNMPRVi6xeWVzd68xDjQyfM+M7o3Il0nA/ca4oZ7BApsbvwAdkfmCBXQCv9pc+W85bkvZrJLUIWmTc+5UdMJAOedOStosqVPS7Ul9uiMrrNwWkSuvksl+c1KR7kiypI1Gw8mvhPHMZTi1r2k6P4A7gQngELA6ll3KvtNYx2rdPAyUmzkx20NUdTCW3ZQ2k8DPyXV6aFWmXJ+bonrunhtgu9qe4kHgjlh2KfuGQ2ub3VzSzNFMC39WAfgoqUsPpRErb4qLlUvXWbknqUh3ZKeVt0bDya9VVm4/4w4wDzgBHAU643KFC5gD/Ab8Tb0TI/CWjb01kfmCBaw1xrcbGS3DJ9vGODu38SV8EgSaJfKA983w4Uh8wQLWG9vWEOMemyuTwBUR+IIELAHK+O370tBG66zne6mRw40tfGpq1Jgez9r4DWv4OTOYSQHOw+fVADYB2bZRQAfVfNIQcGGLWBsxdAOfGcPX5E2d2pqdnOPHgeUFszaKvRT4zmLvmPYQx2cuXrRl+RTwdEGs9eKVgCeAv6wTG3K/iToB7jLHRwpz+n//bfiPRN9bnDKwvhWBLrYAXxTst8fewAGq2kjGLGcpg+1KK0dq3QSeknSB/Hl6t6SfJB1zzpGyWST/kbRf0nJJA6ruZCvy2ZEXnHNDGbiyCZ8JB7htSn0JeJX6OoHPI9fTLuDZrG9gqoI+awGXSPpR0oSkXudcxer7Jb0uv/U/ImlQ0mJJ10rqkbTAfu2SJiX9Lv+mfpD0laQh59zh6XQgk4DX7Omts+uLgJfwmUnwm8xoX7NyCbjagMv474cb8fudRG9S5PLYCuH/hnxZY1xXgE+Bs+Y02WzVekjSlfJz46j8v15sl7TFObe/xWyzOqf1L9LUZdNMY79MAAAAAElFTkSuQmCC"}})])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"taleantAI-form-group"},[a("button",{staticClass:"taleantAI-form-control btn  btn-default",attrs:{type:"submit"}},[t._v("Send")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"taleantAI-padd"},[a("h6",{staticClass:"taleantAI-text-left text-white taleantAI-headline"},[t._v("Chatting with Alisa! ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"taleantAI-incoming_msg_img"},[a("img",{attrs:{src:"https://ptetutorials.com/images/user-profile.png",alt:"avater"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"taleantAI-incoming_msg_img"},[a("img",{attrs:{src:"https://ptetutorials.com/images/user-profile.png",alt:"avater"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"taleantAI-msg_send_btn p-2",attrs:{type:"submit"}},[a("img",{attrs:{src:"https://img.icons8.com/dotty/80/000000/filled-sent.png"}})])}];a("0d03"),a("ac1f"),a("1276");s["a"].use(c.a,o.a);var g={name:"SupportMessageComponent",data:function(){return{showForm:!1,sentMessage:!1,message:"",email:"",phone:"",error:!1,formData:new FormData,action:window.location.origin+"/"+this.domainBody+"/bot/",domainBody:"",first:!0,messageBot:[],singleMessage:"",time:"",date:"",typing:!1,response:""}},mounted:function(){this.currentDateTime();var t=window.location.origin,e=t.split(/[// ]+/),a=e[e.length-1],s=a.split(".");this.domainBody=s},methods:{sendMessage:function(){var t=this;s["a"].set(this.messageBot,"send-"+this.random(10),this.message),this.formData.append("email",this.email),this.formData.append("phone",this.phone),this.formData.append("messageText","hello"),this.message="",s["a"].axios.post(this.action,this.formData,{mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"XMLHttpRequest",Authorization:"Token a355b4d3a204c9ca0aef6f6ba2d0c87f3da2ef99"}}).then((function(e){t.response=e,t.sentMessage=!0,console.log(e.data);var a={type:"reply",text:e.data};t.first=!1,setTimeout(function(){this.messageBot.push(a),this.currentDateTime()}.bind(t),1e3)}))},sendMessageSingle:function(){var t=this,e={type:"send",text:this.message};this.messageBot.push(e),s["a"].set(this.messageBot,"send-"+this.random(10),this.message),this.formData.set("messageText",this.message),this.message="",s["a"].axios.post(this.action,this.formData,{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Token a355b4d3a204c9ca0aef6f6ba2d0c87f3da2ef99"}}).then((function(e){console.log(e.data),t.first=!1,t.typing=!0,setTimeout(function(){this.typing=!1;var t={type:"reply",text:e.data};this.messageBot.push(t),this.currentDateTime(),"success"===status?this.sentMessage=!0:this.error=!0}.bind(t),1e3)}))},random:function(t){for(var e="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=0;s<t;s++)e+=a.charAt(Math.floor(Math.random()*a.length));return e},currentDateTime:function(){var t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],e=new Date,a=e.getDate()+" "+t[e.getMonth()]+", "+e.getFullYear();this.time=e.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}),this.date=a}}},d=g,p=(a("aebf"),a("2877")),A=Object(p["a"])(d,u,m,!1,null,"c69d83a8",null),M=A.exports;s["a"].use(c.a,o.a);var w={name:"talentAI",components:{HelloWorld:M}},h=w,f=Object(p["a"])(h,n,i,!1,null,null,null),N=f.exports,C=a("123d"),I=a.n(C);s["a"].use(I.a),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(N)}}).$mount("#talentAI")},aebf:function(t,e,a){"use strict";var s=a("3ce2"),n=a.n(s);n.a}});
//# sourceMappingURL=app.f0d5eb10.js.map