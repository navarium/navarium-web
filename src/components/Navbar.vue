<template>
  <nav class="z-50 fixed w-screen" :class="[`bg-white dark:bg-primary dark:bg-opacity-${scrollval}`, { 'shadow-lg': solid }, solid ? '' : `bg-opacity-${scrollval}` ]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <button class="h-8 w-8 mr-8" :class="[solid ? 'text-blue dark:text-white' : 'text-white']" @click="logoClick">
            <img svg-inline src="@/assets/images/navarium.svg" class="h-8 w-8" alt="Navarium Logo">
          </button>
          <div class="hidden md:block">
            <router-link :to="{ name: 'home', hash: '#services'}" class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" :class="[solid ? 'text-blue dark:text-blue-50' : 'text-white']">{{$t('menu.services')}}</router-link>
            <router-link :to="{ name: 'references' }" class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" :class="[solid ? 'text-blue dark:text-blue-50' : 'text-white']">{{$t('menu.references')}}</router-link>
            <router-link :to="{ name: 'home', hash: '#contact'}" class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" :class="[solid ? 'text-blue dark:text-blue-50' : 'text-white']">{{$t('menu.contact')}}</router-link>
          </div>
        </div>
        <ThemeToggler class="ml-auto p-4" :class="[solid ? 'text-blue dark:text-blue-50' : 'text-white']" />
        <LocaleDropdown/>
        <div class="-mr-2 flex md:hidden">
          <button @click="() => toggleMenu(!isMenuOpen)"
            type="button"
            class="ml-2 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            :class="[solid ? 'text-primary' : 'text-white']"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg v-if="!isMenuOpen" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div id="mobile-menu" class="bg-white md:hidden">
      <div v-if="isMenuOpen" class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link :to="{ name: 'home', hash: '#services'}" class="text-primary hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{{$t('menu.services')}}</router-link>
        <router-link :to="{ name: 'references' }" class="text-primary hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{{$t('menu.references')}}</router-link>
        <router-link :to="{ name: 'home', hash: '#contact'}" class="text-primary hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{{$t('menu.contact')}}</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LocaleDropdown from './LocaleDropdown'
import ThemeToggler from './ThemeToggler'

export default {
  name: 'hero',
  components: {
    LocaleDropdown,
    ThemeToggler
  },
  props: {
    isScrolled: {
      type: Boolean,
      default: false
    },

    scrollval: {
      type: Number,
      default: 0
    }

  },
  computed: {
    ...mapGetters(['isMenuOpen', 'getNavbarToggle']),
    solid () {
      return !this.getNavbarToggle || this.isScrolled
    }
  },
  methods: {
    ...mapActions(['toggleMenu']),
    logoClick () {
      if (this.$route.path !== '/') {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
