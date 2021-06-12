<template>
  <section id="references" class="py-10">
    <h1 class="h1 text-4xl font-medium mb-8">{{$t('section.references.title')}}</h1>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-else>
      <Carousel :perPage="1" :perPageCustom="[[768, 2], [1024, 3]]">
        <slide v-for="reference in references" :key="reference.id" >
          <router-link :to="{ name: 'reference', params: { id: reference.id } }">
            <div class="my-1 px-1 w-full">
              <article class="overflow-hidden rounded-lg shadow-lg">
                  <img class="block h-auto w-full" :src="apiUrl + reference.images[0].url" alt="Reference cover photo">
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                      {{ reference[`title_${$i18n.locale}`] }}
                    </h1>
                  </header>
                  <footer class="text-left leading-none p-2 md:p-4">
                    <div v-html="renderDescription(reference[`description_${$i18n.locale}`])"></div>
                  </footer>
              </article>
            </div>
          </router-link>
        </slide>
      </Carousel>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import marked from 'marked'
import { Carousel, Slide } from 'vue-carousel'

const apiUrl = process.env.VUE_APP_IMAGE_PATH_PREFIX

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
      modalContent: null,
      apiUrl
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

<style lang="scss">
.VueCarousel-wrapper {
  margin: 0;
}

.VueCarousel-slide {
  padding: 1rem;
}

.VueCarousel-dot,
.VueCarousel-dot:focus {
  outline: none !important;
}
</style>
