export default {
  // state中为需要共享的信息
  state: {
    // 区分是否展示登陆页面的状态
    isLogin: false
  },
  // 必须在mutations中改变state的值，一般调用方法为$store.commit('methodName')
  mutations: {
    loginSuccess (state) {
      state.isLogin = true
    },
    loginFail (state) {
      state.isLogin = false
    }
  },
  // actions异步修改状态,mutations为同步
  actions: {
    loginSuccess ({commit}) {
      commit('loginSuccess')
    },
    loginFail ({commit}) {
      commit('loginFail')
    }
  }
}
