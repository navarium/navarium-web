<template>
  <section id="services" class="mb-96 z-10">
    <h1 class="h1 text-2xl">{{$t('section.services.title')}}</h1>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-else>
      <article v-for="service in services" :key="service.id" class="text-left">
        <h1>{{ service[`title_${$i18n.locale}`] }}</h1>
        <div v-html="renderDescription(service[`description_${$i18n.locale}`])"></div>
      </article>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import marked from 'marked'
const apiUrl = process.env.NODE_ENV === 'production' ? 'https://navarium-api.herokuapp.com' : 'http://localhost:1337'

export default {
  name: 'services',
  data () {
    return {
      services: [],
      allCategories: [],
      fields: {
        name: '',
        categories: []
      },
      error: null
    }
  },
  async mounted () {
    try {
      const services = await axios.get(`${apiUrl}/references`)
      this.services = services.data
    } catch (error) {
      this.error = error
    }
  },
  methods: {
    renderDescription (description) {
      return description ? marked(description) : ''
    }
  }
}
</script>

<style lang="scss">
.VueCarousel-wrapper {
  margin: 0 -1rem;
}

.VueCarousel-slide {
  padding: 1rem;
}
</style>
