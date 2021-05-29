<template>
  <div id="app">
    <Navbar :isScrolled="isScrolled" />
    <main class="bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-gray-50">
      <router-view/>
    </main>
    <Contact class="relative z-10" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
      isScrolled: false
    }
  },
  computed: {
    ...mapGetters({ theme: 'getTheme' })
  },
  watch: {
    theme (newTheme) {
      this.setThemeClass(newTheme)
    }
  },
  created () {
    this.initTheme()
    this.setThemeClass(this.getTheme)
  },
  mounted () {
    window.addEventListener('scroll', throttle(this.handleScroll, 100))
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapActions(['initTheme']),
    handleScroll (ev) {
      this.isScrolled = (window.scrollY || window.scrollTop) > 80
    },
    setThemeClass (theme) {
      theme === 'light'
        ? document.querySelector('html').classList.remove('dark')
        : document.querySelector('html').classList.add('dark')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
