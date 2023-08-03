// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},

  modules: [
    // ...
    '@pinia/nuxt',
  ],

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  plugins: [
    '/c:/Users/sedej/Documents/Projekti/vitest-test/plugins/02.piniaPlugin.ts',
    '/c:/Users/sedej/Documents/Projekti/vitest-test/plugins/01.helloPlugin.ts',
  ],
})
