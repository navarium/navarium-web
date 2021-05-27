import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuOpen: false
  },
  getters: {
    isMenuOpen: state => state.isMenuOpen
  },
  mutations: {
    SET_MENU_STATUS (state, status) {
      state.isMenuOpen = status
    }
  },
  actions: {
    toggleMenu ({ commit, state }, status = null) {
      commit('SET_MENU_STATUS', status !== null ? status : !state.isMenuOpen)
    }
  }
})
