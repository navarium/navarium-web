<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white"
    >
      <img
        class="h-full w-full object-cover"
        :src="getFlagUrl($i18n.locale)"
        alt="Locale flag"
      />
    </button>
    <button
      v-if="isOpen"
      @click="isOpen = false"
      tabindex="-1"
      class="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"
    ></button>
    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl"
    >
      <button
        v-for="locale in locales"
        :key="locale"
        class="flex items-center w-full px-4 py-2 text-gray-800 hover:bg-primary hover:text-white disabled:opacity-50"
        @click="
          (ev) => {
            selectLocale(locale);
          }
        "
        :disabled="$i18n.locale === locale"
      >
        <div class="h-8 w-8 rounded-full overflow-hidden mr-2">
          <img
            class="h-full w-full object-cover"
            :src="getFlagUrl(locale)"
            alt="Locale flag"
          />
        </div>
        {{ $t(`lang.${locale}`) }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false,
      locales: ['hu', 'en', 'de', 'it']
    }
  },
  created () {
    const handleEscape = (e) => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        this.isOpen = false
      }
    }
    document.addEventListener('keydown', handleEscape)
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('keydown', handleEscape)
    })
  },
  methods: {
    getFlagUrl (locale) {
      const images = require.context('../assets/images/flags', false, /\.svg$/)
      return images('./' + locale + '.svg')
    },
    selectLocale (locale) {
      this.$i18n.locale = locale
      this.isOpen = false
    }
  }
}
</script>
