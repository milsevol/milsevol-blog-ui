import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/app.css'
import * as filters from '@/filters'
require('../mock')

Vue.use(ElementUI);
// 全局注册过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
  
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
