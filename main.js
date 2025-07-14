import App from './App'

// // 引入全局组件
// import divider from './components/common/divider.vue';
// Vue.component('divider',divider)
// console.log('Divider component:', Divider) // 确认是否成功导入


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


// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif