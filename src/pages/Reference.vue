<template>
  <div>
    <div v-if="!reference">
      {{$t('section.references.404')}}
    </div>
    <div v-else class="py-20">
      <header class="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 class="text-6xl text-medium">
          {{ reference[`title_${$i18n.locale}`] }}
        </h1>
        <p class="text-sm">
          {{ Intl.DateTimeFormat($i18n.locale).format(new Date(reference.published_at)) }}
        </p>
      </header>

      <Carousel :perPage="1" :perPageCustom="[[768, 2], [1024, 3]]">
        <slide v-for="image in reference.images" :key="image.id" >
          <img class="block h-auto w-full" :src="apiUrl + image.url" alt="Reference image">
        </slide>
      </Carousel>

      <footer class="flex items-center justify-between leading-none p-2 md:p-4">
        <div v-html="renderDescription(reference[`description_${$i18n.locale}`])"></div>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import marked from 'marked'
import { Carousel, Slide } from 'vue-carousel'

const apiUrl = process.env.VUE_APP_IMAGE_PATH_PREFIX

export default {
  name: 'reference',
  components: {
    Carousel,
    Slide
  },
  data () {
    return {
      reference: null,
      apiUrl,
      description: ''
    }
  },
  async created () {
    if (!this.getReferences.length) {
      await this.initReferences()
    }
    this.reference = await this.showReference(this.$route.params.id)
  },
  computed: {
    ...mapGetters(['getReferences'])
  },
  methods: {
    ...mapActions(['initReferences', 'showReference']),
    renderDescription (description) {
      return description ? marked(description) : ''
    }
  }
}
</script>
