<template>
  <div id="app">
    <Navbar :inverse="isOnTop" />
    <main class="bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-gray-50">
      <router-view/>
    </main>
    <Contact />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Contact from './views/Contact'
import Navbar from './components/Navbar'

const throttle = (fn, delay) => {
  let timeoutID = null
  return () => {
    timeoutID = setTimeout(() => {
      clearTimeout(timeoutID)
      fn()
    }, delay)
  }
}

export default {
  components: {
    Contact,
    Navbar
  },
  data () {
    return {
      isOnTop: false
    }
  },
  computed: {
    ...mapGetters({ theme: 'getTheme' })
  },
  watch: {
    theme (newTheme, oldTheme) {
      newTheme === 'light'
        ? document.querySelector('html').classList.remove('dark')
        : document.querySelector('html').classList.add('dark')
    }
  },
  beforeMount () {
    this.$store.dispatch('initTheme')
  },
  mounted () {
    console.log(this.theme)
    window.addEventListener('scroll', throttle(this.handleScroll, 100))
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (ev) {
      this.isOnTop = (window.scrollY || window.scrollTop) > 80
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
