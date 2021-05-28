<template>
  <section id="references" class="mb-96 z-10">
    <h1 class="h1 text-2xl">{{$t('section.references.title')}}</h1>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-else>
      <carousel :perPage="1" :perPageCustom="[[768, 2], [1024, 3]]">
        <slide v-for="reference in references" :key="reference.id" >
          <router-link :to="{ name: 'reference', params: { id: reference.id } }">
            <div class="my-1 px-1 w-full">
              <article class="overflow-hidden rounded-lg shadow-lg">
                  <img class="block h-auto w-full" :src="reference.images[0].url" alt="Reference cover photo">
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                      {{ reference[`title_${$i18n.locale}`] }}
                    </h1>
                    <p class="text-grey-darker text-sm">
                      14/4/19
                    </p>
                  </header>
                  <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <div v-html="renderDescription(reference[`description_${$i18n.locale}`])"></div>
                  </footer>
              </article>
            </div>
          </router-link>
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import marked from 'marked'
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'references',
  components: {
    Carousel,
    Slide
  },
  data () {
    return {
      references: [],
      allCategories: [],
      fields: {
        name: '',
        categories: []
      },
      error: null,
      showModal: false,
      modalContent: null
    }
  },
  async created () {
    try {
      this.references = await this.initReferences()
    } catch (error) {
      this.error = error
    }
  },
  methods: {
    ...mapActions(['initReferences']),
    renderDescription (description) {
      return description ? marked(description) : ''
    }
  }
}
</script>
