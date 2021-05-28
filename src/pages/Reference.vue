<template>
  <div>
    {{ this.reference }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'reference',
  data () {
    return {
      reference: null
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
    ...mapActions(['initReferences', 'showReference'])
  }
}
</script>
