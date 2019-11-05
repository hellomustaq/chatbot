var head = document.getElementsByTagName('head')[0];
var body = document.getElementsByTagName('body')[0];

var div = document.createElement("div");
div.id = "app"
body.appendChild(div)

var js = document.createElement("script");
js.src = "https://cdn.statically.io/gh/hellomustaq/chatbot/f284d28e/public/script-link.js";
js.id = "vue-app-js";
js.defer = true;
js.async = true;
head.appendChild(js);

var css = document.createElement('link');
css.id = "vue-app-css";
css.rel = "stylesheet";
css.type = "text/css";
css.href = "https://cdn.statically.io/gh/hellomustaq/chatbot/f284d28e/dist/css/app.3058bbce.css";
head.appendChild(css); 


var css1 = document.createElement('link');
css1.id = "vue-app-css1";
css1.rel = "stylesheet";
css1.type = "text/css";
css1.href = "https://cdn.statically.io/gh/hellomustaq/chatbot/f284d28e/dist/css/chunk-vendors.e42e700a.css";
head.appendChild(css1); 