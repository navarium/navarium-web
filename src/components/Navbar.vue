<template>
  <nav class="z-50 fixed w-full" :class="[ inverse ? 'bg-white': 'bg-transparent', { 'shadow-lg': inverse } ]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <a href="#hero">
              <img v-if="inverse" class="h-8 w-8" src="@/assets/images/logo.png" alt="Navarium Logo">
              <img v-else class="h-8 w-8" src="@/assets/images/logo-white.png" alt="Navarium Logo">
            </a>
          </div>
          <div class="hidden md:block">
            <scrollactive class="ml-10 flex items-baseline space-x-4" :offset="88">
              <a href="#services" class="scrollactive-item hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" :class="[inverse ? 'text-primary' : 'text-white']">{{$t('menu.services')}}</a>
              <a href="#references" class="scrollactive-item hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" :class="[inverse ? 'text-primary' : 'text-white']">{{$t('menu.references')}}</a>
              <a href="#contact" class="scrollactive-item hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" :class="[inverse ? 'text-primary' : 'text-white']">{{$t('menu.contact')}}</a>
            </scrollactive>
          </div>
        </div>
        <LocaleDropdown class="ml-auto"/>
        <div class="-mr-2 flex md:hidden">
          <button @click="toggleMenu"
            type="button"
            class="ml-2 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            :class="[inverse ? 'text-primary' : 'text-white']"
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
      <scrollactive v-if="isMenuOpen" class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#services" @click="toggleMenu(false)" class="text-primary scrollactive-item hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{{$t('menu.services')}}</a>
        <a href="#references" @click="toggleMenu(false)" class="text-primary scrollactive-item hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{{$t('menu.references')}}</a>
        <a href="#contact" @click="toggleMenu(false)" class="text-primary scrollactive-item hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{{$t('menu.contact')}}</a>
      </scrollactive>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LocaleDropdown from './LocaleDropdown'

export default {
  name: 'hero',
  components: {
    LocaleDropdown
  },
  props: {
    inverse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(['isMenuOpen'])
  },
  methods: {
    ...mapActions(['toggleMenu'])
  }
}
</script>

<style lang="scss" scoped>

</style>
