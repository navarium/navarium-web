<template>
  <section id="references" class="mb-96 z-10">
    <h1 class="h1 text-2xl">{{$t('section.references.title')}}</h1>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-else>
      <carousel :perPage="1" :perPageCustom="[[768, 2], [1024, 3]]">
        <slide v-for="reference in references" :key="reference.id" >
          <article class="text-left">
            <img :src="apiUrl + reference.images[0].url" alt="Reference cover photo">
            <h1>{{ reference[`title_${$i18n.locale}`] }}</h1>
            <div v-html="renderDescription(reference[`description_${$i18n.locale}`])"></div>
          </article>
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import marked from 'marked'
import { Carousel, Slide } from 'vue-carousel'
const apiUrl = process.env.NODE_ENV === 'production' ? 'https://navarium-api.herokuapp.com' : 'http://localhost:1337'

export default {
  name: 'references',
  components: {
    Carousel,
    Slide
  },
  data () {
    return {
      apiUrl,
      references: [],
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
      const references = await axios.get(`${apiUrl}/references`)
      this.references = references.data
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
