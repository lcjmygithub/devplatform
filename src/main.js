import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios"
import HeaderTile from "./components/common/HeaderTitle.vue"
import scrollComponet from "./components/common/scrollComponet.vue"
import scrollTop from "./components/common/scrollTop.vue"
import "../static/css/init.css"
import VueClipboard from 'vue-clipboard2'
import store from './store'
import VueBus from './untils/$bus' ;
import JsonViewer from 'vue-json-viewer'
Vue.use(JsonViewer)
Vue.use(VueClipboard)
Vue.use(ElementUI)
Vue.use(VueBus)
Vue.config.productionTip = false
Vue.component("myTile",HeaderTile)
Vue.component("myscroll",scrollComponet)
Vue.component("scrollTop",scrollTop)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
