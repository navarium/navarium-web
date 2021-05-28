<template>
  <div>
    <Hero class="w-full h-screen" />
    <Introduction />
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <Services />
      <References />
    </div>
  </div>
</template>

<script>
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
  }
}
</script>
