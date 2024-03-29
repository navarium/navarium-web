export const languageMixin = {
  data() {
    return {
      localeList: ['hu', 'en', 'de', 'it'],
    }
  },
  methods: {
    setI18nLanguage(lang) {
      this.$i18n.locale = lang
      this.$router.push({
        path: this.$tp(this.$route.path, lang, true),
      })
      return lang
    },
    loadLanguageAsync(lang) {
      // If the same language
      if (this.$i18n.locale === lang) {
        return Promise.resolve(lang)
      }
      // If the language was already loaded
      if (this.$i18n.availableLocales.includes(lang)) {
        return Promise.resolve(this.setI18nLanguage(lang))
      }
      // If the language hasn't been loaded yet
      return import(/* webpackChunkName: "lang-[request]" */ `../locales/${lang}.json`).then(
        messages => {
          this.$i18n.setLocaleMessage(lang, messages.default)
          this.$i18n.availableLocales.push(lang)
          return Promise.resolve(this.setI18nLanguage(lang))
        }
      )
    },  },

}
