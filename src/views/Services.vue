<template>
  <section id="services" class="py-10">
    <h1 class="h1 text-4xl font-medium mb-8">{{$t('section.services.title')}}</h1>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-else class="grid grid-cols-6 gap-4">
      <div class="col-start-2 col-span-4">
        <article v-for="service in services" :key="service.id" class="text-left mb-5">
          <h1 class="text-xl text-center mb-8">{{ service[`title_${$i18n.locale}`] }}</h1>
          <div class="marked" v-html="renderDescription(service[`description_${$i18n.locale}`])"></div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import marked from 'marked'

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
  async created () {
    try {
      this.services = await this.initServices()
    } catch (error) {
      this.error = error
    }
  },
  methods: {
    ...mapActions(['initServices']),
    renderDescription (description) {
      return description ? marked(description) : ''
    }
  }
}
</script>

<style lang="scss">
</style>
