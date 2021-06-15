<template>
  <div class="px-4">
    <header class="flex items-center justify-between leading-tight pb-2 md:pb-4 pt-20">
      <h1 class="text-6xl text-medium">
        {{$t('section.references.title')}}
      </h1>
    </header>
    <div v-if="!references.length">
      {{$t('section.references.404')}}
    </div>
    <div v-else class="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <router-link v-for="reference in references" :key="reference.id" :to="{ name: 'reference', params: { id: reference.id } }">
        <div class="my-1 px-1 w-full">
          <article class="overflow-hidden rounded-lg shadow-lg">
              <div class="h-56 bg-cover bg-center block w-full" :style="{'background-image': `url(${apiUrl + reference.images[0].url})`}" alt="Reference cover photo"></div>
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
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import marked from 'marked'

const apiUrl = process.env.VUE_APP_IMAGE_PATH_PREFIX

export default {
  name: 'references',
  data () {
    return {
      references: [],
      apiUrl,
      description: ''
    }
  },
  async created () {
    if (!this.getReferences.length) {
      await this.initReferences()
    }
    this.references = this.getReferences
  },
  computed: {
    ...mapGetters(['getReferences'])
  },
  methods: {
    ...mapActions(['initReferences']),
    renderDescription (description) {
      return description ? marked(description) : ''
    }
  }
}
</script>
