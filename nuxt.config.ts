// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-08-02",
  future: {
    compatibilityVersion: 4
  },
  modules: [
  '@vee-validate/nuxt', 'nuxt-icon', '@nuxtjs/i18n', '@nuxtjs/tailwindcss',
  // '@sidebase/nuxt-auth',
  // '@nuxtjs/tailwindcss',
  ],
  extends: [
    './ui'
  ],
  veeValidate: {
    autoImports: true,
  },
  // auth:{
  //   isEnabled: true,
  //   baseURL: 'http://localhost:3000/api/auth/',
  //   provider: {
  //     type: 'authjs',
  //   },
  //   globalAppMiddleware:{
  //     isEnabled: true,
  //     allow404WithoutAuth: true,
  //   }
  // },

  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: '123456',
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: '/api' 
    }
  },

})