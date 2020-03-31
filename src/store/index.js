/*
vuex最核心的管理对象: store
 */
import Vue from 'vue'
import Vuex from 'vuex'

import login from './module/login'
import state from "./state"

Vue.use(Vuex)

export default new Vuex.Store({
   modules:{
       login
   },
   state
})