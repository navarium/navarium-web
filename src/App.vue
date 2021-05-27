<template>
  <div id="app">
    <Navbar :inverse="isOnTop" />
    <main>
      <Hero class="w-full h-screen" />
      <Introduction />
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Services />
        <References />
      </div>
    </main>
    <Contact />
  </div>
</template>

<script>
import Hero from './views/Hero'
import Introduction from './views/Introduction'
import Services from './views/Services'
import References from './views/References'
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
    Hero,
    Introduction,
    Services,
    References,
    Contact,
    Navbar
  },
  data () {
    return {
      isOnTop: false
    }
  },
  mounted () {
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
