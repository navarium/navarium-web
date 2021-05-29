<template>
  <section id="hero" class="relative bg-fixed h-screen w-screen flex items-center justify-center">
    <div class="hero-content relative z-30 h-full w-full flex items-center justify-center">
      <h1 class="title z-0 text-4xl font-bold md:text-6xl lg:text-8xl text-white m-auto">
        NAVARIUM
      </h1>
      <div class="scroll absolute bottom-5 animate-bounce">
        <img src="@/assets/images/scroll.svg" alt="" class="h-12">
      </div>
    </div>
    <video autoplay loop muted class="fixed z-10 w-auto min-w-full min-h-full max-w-none">
      <source src="@/assets/images/waves.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </section>
</template>

<script>
export default {
  name: 'hero'
}
</script>

<style lang="scss" scoped>
.hero-content {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAGUlEQVQYV2NkwAIYCQn+Z2BgACsiqBJuEgA0oAEGG0cSmgAAAABJRU5ErkJggg==)
    repeat;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAANklEQVQoU2NkIAIwElbj+Z+AIs//DAzbGYkwiYEBhyKICTCnYFGEqgCkkFTrME1Asw63ApBCAAoxC1JaZFdnAAAAAElFTkSuQmCC)
    repeat;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAJElEQVQoU2NkYPD8z8CwnZGBACCoAKYfSSF+k8kxEb8jh5WJAKr0BAu0TlpDAAAAAElFTkSuQmCC)
    repeat;
}

.title {
  text-shadow: -6px 6px 0 #000;
}
</style>
