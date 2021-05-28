import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuOpen: false,
    theme: {}
  },
  getters: {
    isMenuOpen: state => state.isMenuOpen,
    getTheme: state => state.theme
  },
  mutations: {
    SET_MENU_STATUS (state, status) {
      state.isMenuOpen = status
    },
    SET_THEME (state, theme) {
      state.theme = theme
      localStorage.theme = theme
    }
  },
  actions: {
    toggleMenu ({ commit, state }, status = null) {
      commit('SET_MENU_STATUS', status !== null ? status : !state.isMenuOpen)
    },
    initTheme ({ commit }) {
      const cachedTheme = localStorage.theme ? localStorage.theme : false
      //  `true` if the user has set theme to `dark` on browser/OS
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

      if (cachedTheme) {
        commit('SET_THEME', cachedTheme)
      } else if (userPrefersDark) {
        commit('SET_THEME', 'dark')
      } else {
        commit('SET_THEME', 'light')
      }
    },
    toggleTheme ({ commit }) {
      switch (localStorage.theme) {
        case 'light':
          commit('SET_THEME', 'dark')
          break
        default:
          commit('SET_THEME', 'light')
          break
      }
    }
  }
})
