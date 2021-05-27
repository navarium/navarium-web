import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import i18n from './i18n'
import './assets/styles/tailwind.css'

import VueSmoothScroll from 'vue2-smooth-scroll'
import VueScrollactive from 'vue-scrollactive'

Vue.use(VueSmoothScroll, {
  offset: -88
})

Vue.use(VueScrollactive)

Vue.config.productionTip = false

new Vue({
  // router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
