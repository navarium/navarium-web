<template>
  <section id="hero" class="bg-fixed h-screen w-screen flex items-center justify-center">
    <h1 class="title z-0 text-4xl font-bold md:text-6xl lg:text-8xl text-white ml-auto mr-10 md:m-auto">
      NAVARIUM
    </h1>
    <div class="scroll absolute bottom-5 animate-bounce">
      <img src="@/assets/images/scroll.svg" alt="" class="h-12">
    </div>
  </section>
</template>

<script>
export default {
  name: 'hero'
}
</script>

<style lang="scss" scoped>
#hero {
  background-image: url(../assets/images/hero3.jpg);
  background-size: cover;
}
.title {
  text-shadow: -6px 6px 0 #000;
}
</style>
