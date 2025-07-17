import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// import noThing from './components/common/no-thing.vue'; // 确保路径正确
// Vue.component('no-thing', noThing) // Vue2 全局注册

// #ifdef VUE3
import { createSSRApp } from 'vue'
// 引入全局组件
import noThing from './components/common/no-thing.vue';

export function createApp() {
  const app = createSSRApp(App)
  app.component('no-thing', noThing) // Vue3 全局注册
  return {
    app
  }
}
// #endif