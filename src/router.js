import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import Reference from './pages/Reference.vue'
import References from './pages/References.vue'
import Contact from './pages/Contact.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/reference/:id',
      name: 'reference',
      component: Reference
    },
    {
      path: '/references',
      name: 'references',
      component: References
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
        offset: { x: 0, y: 50 }
      }
    }
    return { x: 0, y: 0 }
  }
})
