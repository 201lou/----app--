// store/index.js
import { createStore } from 'vuex'

// 创建 Vuex store 实例（Vue3 风格）
export default createStore({
  state: {
    loginStatus: false,
	user:{}
  },
  mutations: {
    // 登录
	login(state,user){
		state.loginStatus = true
		state.user = user
		uni.setStorageSync('user',JSON.stringify(user));
	}
  },
  actions: {},
  modules: {}
})