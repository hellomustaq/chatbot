var head = document.getElementsByTagName('head')[0];
var body = document.getElementsByTagName('body')[0];

var div = document.createElement("div");
div.id = "app"
body.appendChild(div)

var js = document.createElement("script");
js.src = "https://raw.githack.com/hellomustaq/chatbot/master/public/script-link.js";
js.id = "vue-app-js";
js.defer = true;
js.async = true;
head.appendChild(js);

var css = document.createElement('link');
css.id = "vue-app-css";
css.rel = "stylesheet";
css.type = "text/css";
css.href = "https://raw.githack.com/hellomustaq/chatbot/master/dist/css/app.3351c57d.css";
head.appendChild(css); 


var css1 = document.createElement('link');
css1.id = "vue-app-css1";
css1.rel = "stylesheet";
css1.type = "text/css";
css1.href = "https://raw.githack.com/hellomustaq/chatbot/master/dist/css/chunk-vendors.e42e700a.css";
head.appendChild(css1); 