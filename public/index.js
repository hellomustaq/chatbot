var head = document.getElementsByTagName('head')[0];
var body = document.getElementsByTagName('body')[0];

var div = document.createElement("div");
div.id = "talentAI"
body.appendChild(div)

var js = document.createElement("script");
js.src = "https://cdn.statically.io/gh/hellomustaq/chatbot/9ff6b2a9/public/script-link.js";
js.id = "vue-app-js";
js.defer = true;
js.async = true;
head.appendChild(js);

var css = document.createElement('link');
css.id = "vue-app-css";
css.rel = "stylesheet";
css.type = "text/css";
css.href = "https://cdn.statically.io/gh/hellomustaq/chatbot/9ff6b2a9/dist/css/app.dfd8b130.css";
head.appendChild(css);