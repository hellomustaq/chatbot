import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from 'bootstrap-vue'

import VueChatScroll from 'vue-chat-scroll'

Vue.use(BootstrapVue)
Vue.use(VueChatScroll)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#talentAI')
