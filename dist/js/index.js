var head = document.getElementsByTagName('head')[0];
var body = document.getElementsByTagName('body')[0];

var div = document.createElement("div");
div.id = "app"
body.appendChild(div)

var js = document.createElement("script");
js.src = "https://raw.githack.com/hellomustaq/chatbot/master/dist/js/vue-app.js";
js.id = "vue-app-js";
js.defer = true;
js.async = true;
head.appendChild(js);

var css = document.createElement('link');
css.id = "vue-app-css";
css.rel = "stylesheet";
css.type = "text/css";
css.href = "https://raw.githack.com/hellomustaq/chatbot/master/dist/css/app.4d7b5103.css";
head.appendChild(css); 