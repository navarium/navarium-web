<template>
  <div>
    <Hero class="w-screen h-screen" />
    <div class="relative z-10 w-screen bg-white dark:bg-gray-900">
      <Introduction />
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Services />
        <References />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Hero from '../views/Hero'
import Introduction from '../views/Introduction'
import Services from '../views/Services'
import References from '../views/References'

export default {
  components: {
    Hero,
    Introduction,
    Services,
    References
  },
  mounted () {
    this.setNavbarToggle(true)
  },
  methods: {
    ...mapActions(['setNavbarToggle'])
  },
  beforeDestroy () {
    this.setNavbarToggle(false)
  }
}
</script>
