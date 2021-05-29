import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const apiUrl = process.env.VUE_APP_API_URL

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuOpen: false,
    theme: 'dark',
    references: [],
    services: [],
    canNavbarToggle: false
  },
  getters: {
    isMenuOpen: state => state.isMenuOpen,
    getTheme: state => state.theme,
    getReferences: state => state.references,
    getServices: state => state.services,
    getNavbarToggle: state => state.canNavbarToggle
  },
  mutations: {
    SET_MENU_STATUS (state, status) {
      state.isMenuOpen = status
    },
    SET_THEME (state, theme) {
      state.theme = theme
      localStorage.theme = theme
    },
    SET_REFERENCES (state, references) {
      state.references = references
    },
    SET_SERVICES (state, services) {
      state.services = services
    },
    SET_NAVBARTOGGLE (state, inverse) {
      state.canNavbarToggle = inverse
    }
  },
  actions: {
    toggleMenu ({ commit, state }, status = null) {
      commit('SET_MENU_STATUS', status !== null ? status : !state.isMenuOpen)
    },
    initTheme ({ commit }) {
      const cachedTheme = localStorage.theme ? localStorage.theme : false
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
    },
    initReferences ({ commit }) {
      return axios.get(`${apiUrl}/references`)
        .then(({ data }) => {
          commit('SET_REFERENCES', data)
          return data
        })
    },
    getReferenceById ({ commit }, id) {
      return axios.get(`${apiUrl}/references/${id}`)
        .then(({ data }) => {
          commit('SET_REFERENCES', data)
          return data
        })
    },
    showReference ({ commit, state }, id) {
      return state.references.find(ref => ref.id === Number.parseInt(id, 10))
    },
    initServices ({ commit }) {
      return axios.get(`${apiUrl}/services`)
        .then(({ data }) => {
          commit('SET_SERVICES', data)
          return data
        })
    },
    setNavbarToggle ({ commit }, state) {
      commit('SET_NAVBARTOGGLE', state)
    }
  }
})
