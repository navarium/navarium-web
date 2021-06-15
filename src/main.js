import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import './assets/styles/tailwind.css'

import VueSmoothScroll from 'vue2-smooth-scroll'
import VueScrollactive from 'vue-scrollactive'
import VueGtm from '@gtm-support/vue2-gtm'

const isProd = process.env.NODE_ENV === 'production'

Vue.use(VueSmoothScroll, {
  offset: -88
})

Vue.use(VueScrollactive)

Vue.use(VueGtm, {
  id: 'GTM-5MRC9NB',
  defer: false, // defaults to false. Script can be set to `defer` to increase page-load-time at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible)
  enabled: isProd, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  debug: !isProd, // Whether or not display console logs debugs (optional)
  loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
  vueRouter: router
})

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to === from) return
  store.dispatch('toggleMenu', false)
  next()
})

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
