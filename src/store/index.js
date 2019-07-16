import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  counter: 10
}

const mutations = {
  // payload也可以是基本数据类型
  changeCounter (state, payload = 10) {
    state.counter += payload
  },
  // payload也可以是引用数据类型
  changeCounterObj (state, payload) {
    state.counter += payload.amount || 10
  }
}

const getters = {
  counterGetter (state, getters) {
    return state.counter
  }
}

const actions = {
  // 参数context对象： 与 store 实例具有相同方法和属性
  changeCounterSync ({state, commit, dispatch}, payload) {
    setTimeout(() => {
      commit('changeCounter', payload)
    }, 1000)
  },
  changeCounterSync1 (context, payload) {
    setTimeout(() => {
      context.commit('changeCounter', payload)
    }, 1000)
  }
}

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  getters,
  actions
})

export default store
