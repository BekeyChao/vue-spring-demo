// 先引入垫片，以支持低版本内核，如IE9
import 'babel-polyfill'

import Vue from 'vue'
import Vuex from 'vuex'

import login from './login'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    user
  }
})
