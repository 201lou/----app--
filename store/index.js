// store/index.js
import { createStore } from 'vuex'

// 创建 Vuex store 实例（Vue3 风格）
export default createStore({
  state: {
    loginStatus: false,
	user:{},
	token:false
  },
  mutations: {
    // 登录
	login(state,user){
		state.loginStatus = true
		state.user = user
		state.token = state.user.token
		uni.setStorageSync('user',JSON.stringify(user));
	},
	// 初始化登录状态
	initUser(state){
		let user = uni.getStorageSync('user');
		if(user) {
			state.user = JSON.parse(user)
			state.loginStatus = true
			state.token = state.user.token
		}
	},
	// 退出登录
	logout(state){
		state.user = {}
		state.loginStatus = false
		state.token = false
		uni.removeStorageSync('user')
	},
	// 修改用户信息（手机号，邮箱，密码）
	editUserInfo(state,{ key,value }) {
		state.user[key] = value
		uni.setStorageSync('user',JSON.stringify(state.user));
	},
	// 修改资料
	editUserUserInfo(state,obj) {
		if(state.user.userinfo){
			state.user.userinfo.sex = obj.sex
			state.user.userinfo.qg = obj.qg
			state.user.userinfo.qg = obj.qg
			state.user.userinfo.path = obj.path
			state.user.userinfo.birthday = obj.birthday
			uni.setStorageSync('user',JSON.stringify(state.user));
		}
	}
  },
  actions: {},
  modules: {}
})