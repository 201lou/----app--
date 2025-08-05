// store/index.js
import { createStore } from 'vuex'

// 创建 Vuex store 实例（Vue3 风格）
export default createStore({
  state: {
    loginStatus: false
  },
  mutations: {
    changeLoginStatus(state,{num}) {
      state.loginStatus = num
    }
  },
  actions: {},
  modules: {}
})