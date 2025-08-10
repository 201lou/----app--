import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'

import Vuex from 'vuex'

Vue.use(Vuex)
Vue.prototype.$store = store
Vue.config.productionTip = false

App.mpType = 'app'
const app = new Vue({
	store,
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

//引入配置文件
import $C from './common/config.js';

// 挂载助手函数库
import $U from './common/utill.js';

// 引入请求库
import $H from './common/request.js';

import store from './store/index.js'

const checkAuth = (callback,checkPhone = true)=>{
  	// 权限验证
  	if (!store.state.loginStatus) {
  		uni.showToast({
  			title:'请先登录',
			icon:'none'
  		});
  		return uni.navigateTo({
  			url:'/pages/login/login'
  		})
  	}
	// 验证是否绑定手机号
	if(checkPhone && !store.state.user.phone){
		uni.showToast({
			title:'请先登录',
			icon:'none'
		});
		return uni.navigateTo({
			url:'/pages/user-phone/user-phone'
		})
	}
  	callback()
}

// 权限验证跳转
const navigateTo = (options,chechPhone = true)=>{
	if (!store.state.loginStatus) {
		uni.showToast({
			title:'请先登录',
			icon:'none'
		});
		return uni.navigateTo({
			url:'/pages/login/login'
		})
	}
	// 验证是否绑定手机号
	if(checkPhone && !store.state.user.phone){
		uni.showToast({
			title:'请先登录',
			icon:'none'
		});
		return uni.navigateTo({
			url:'/pages/user-phone/user-phone'
		})
	}
	uni.navigateTo(options);
}

export function createApp() {
  const app = createSSRApp(App)
  
  app.component('no-thing', noThing) // Vue3 全局注册
  app.config.globalProperties.$C = $C
  app.config.globalProperties.$U = $U
  app.config.globalProperties.$H = $H
  app.config.globalProperties.$store = store
  app.config.globalProperties.checkAuth = checkAuth
  app.config.globalProperties.navigateTo = navigateTo
  app.use(store)
  return {
    app
  }
}
// #endif