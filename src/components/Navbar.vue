<template>
  <nav class="z-50 fixed w-screen h-16 top-0 bg-white dark:bg-primary" :class="[{ 'shadow-lg dark:shadow-lg-invert': solid || scrollAmount }]"
    :style="{ '--tw-bg-opacity': solid ? 1 : scrollAmount / 100 }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center" :class="[solid ? 'text-blue dark:text-white' : 'text-white']">
          <g-link class="h-8 w-8 mr-8" to="/">
            <svg class="h-8" viewBox="0 0 179 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M170.887 181.824H178.615L157.781 152.15V181.824C157.782 195.925 153.411 209.679 145.27 221.193C137.128 232.706 125.618 241.412 112.323 246.111V229.449L66.8496 164.415V246.111C53.5547 241.412 42.0439 232.706 33.9026 221.193C25.7613 209.679 21.3901 195.925 21.3911 181.824V152.15L0.557129 181.824H8.27747C3.85177 201.599 6.78483 222.309 16.5276 240.077C26.2703 257.845 42.1548 271.453 61.2075 278.354C72.6554 282.502 82.5587 290.056 89.5861 300C96.6106 290.056 106.512 282.502 117.957 278.354C137.01 271.453 152.895 257.845 162.637 240.077C172.38 222.309 175.313 201.599 170.887 181.824Z" fill="currentColor"/>
              <path d="M157.774 83.3769C157.774 81.1676 156.897 79.0486 155.335 77.4857C153.774 75.9228 151.655 75.0438 149.446 75.0419H112.315V156.738L66.8495 91.7046V75.0419H22.3716C20.6846 76.9265 18.4652 78.2546 16.0069 78.8505C13.5487 79.4464 10.9674 79.2819 8.60468 78.3789C6.24193 77.4759 4.20898 75.8768 2.77477 73.7933C1.34056 71.7098 0.572674 69.2399 0.572674 66.7105C0.572674 64.181 1.34056 61.7112 2.77477 59.6277C4.20898 57.5441 6.24193 55.9451 8.60468 55.0421C10.9674 54.139 13.5487 53.9746 16.0069 54.5705C18.4652 55.1663 20.6846 56.4944 22.3716 58.3791H149.446C152.729 58.3791 155.979 59.0257 159.011 60.2821C162.044 61.5384 164.799 63.3799 167.12 65.7012C169.44 68.0226 171.281 70.7784 172.536 73.8112C173.792 76.844 174.438 80.0945 174.437 83.3769V113.702C175.686 114.789 176.707 116.113 177.44 117.598C178.173 119.082 178.604 120.698 178.708 122.35C178.812 124.003 178.586 125.66 178.044 127.224C177.501 128.789 176.654 130.23 175.55 131.465C174.446 132.699 173.108 133.701 171.613 134.414C170.119 135.127 168.498 135.536 166.844 135.616C165.19 135.697 163.536 135.449 161.979 134.885C160.422 134.321 158.993 133.454 157.774 132.333V83.3769Z" fill="currentColor"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M89.5978 49.9952C103.404 49.9952 114.595 38.8034 114.595 24.9976C114.595 11.1918 103.404 0 89.5978 0C75.7921 0 64.6003 11.1918 64.6003 24.9976C64.6003 38.8034 75.7921 49.9952 89.5978 49.9952ZM89.5182 37.5169C96.4211 37.5169 102.017 31.921 102.017 25.0181C102.017 18.1152 96.4211 12.5193 89.5182 12.5193C82.6153 12.5193 77.0194 18.1152 77.0194 25.0181C77.0194 31.921 82.6153 37.5169 89.5182 37.5169Z" fill="currentColor"/>
            </svg>
          </g-link>
          <div class="hidden md:block">
            <a :href="`/${$i18n.locale}/#services`" class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" :class="[solid ? 'text-blue dark:text-blue-50' : 'text-white']">{{$t('menu.services')}}</a>
            <g-link to="/references" class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" :class="[solid ? 'text-blue dark:text-blue-50' : 'text-white']">{{$t('menu.references')}}</g-link>
            <a :href="`/${$i18n.locale}/#contact`" class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" :class="[solid ? 'text-blue dark:text-blue-50' : 'text-white']">{{$t('menu.contact')}}</a>
          </div>
        </div>
        <ThemeToggler class="ml-auto mr-2" :class="[solid ? 'text-primary dark:text-blue-50' : 'text-white']" />
        <LocaleDropdown/>
        <div class="-mr-2 flex md:hidden">
          <button @click="toggle"
            type="button"
            class="ml-2 inline-flex items-center justify-center p-2 rounded-md focus:outline-none text-blue dark:text-white"
            :class="[solid ? 'text-primary' : 'text-white']"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg v-if="!open" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" fill="currentColor" />
            </svg>
            <svg v-else class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div id="mobile-menu" class="bg-white text-primary dark:bg-primary dark:text-white md:hidden">
      <div v-if="open" class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a :href="`/${$i18n.locale}/#services`" class="block px-3 py-2 rounded-md text-base font-medium">{{$t('menu.services')}}</a>
        <g-link to="/references" class="block px-3 py-2 rounded-md text-base font-medium">{{$t('menu.references')}}</g-link>
        <a :href="`/${$i18n.locale}/#contact`" class="block px-3 py-2 rounded-md text-base font-medium">{{$t('menu.contact')}}</a>
      </div>
    </div>
  </nav>
</template>

<script>
import ThemeToggler from './ThemeToggler.vue'
import LocaleDropdown from './LocaleDropdown.vue'

export default {
  components: {
    ThemeToggler,
    LocaleDropdown
  },
  props: {
    isScrolled: {
      type: Boolean,
      default: false
    },

    scrollAmount: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    solid () {
      return !this.$route.name?.includes('home') || this.isScrolled
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
}
</script>
