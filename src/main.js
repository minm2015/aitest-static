import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/ant-design-vue.js'
import '@/assets/css/app.scss';
import contentmenu from 'v-contextmenu';
import 'v-contextmenu/dist/index.css';
import Components from '@/components'; // 公共组件
import commonenum from '@/config/enum.js'; // 全局变量
import Arrays from "@/assets/js/array.js";

Vue.use(contentmenu)
Vue.use(Components)
Vue.config.productionTip = false
Vue.prototype.COMMON_ENUM = commonenum
Vue.prototype.Arrays = Arrays

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
