// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-08-02",
  future: {
    compatibilityVersion: 4
  },
  modules: [
    '@sidebase/nuxt-auth',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@vee-validate/nuxt',
    'nuxt-icon',
    '@nuxtjs/i18n',
  ],
  veeValidate: {
    autoImports: true,
  },
  auth:{
    isEnabled: true,
    // addDefaultCallbackUrl: '/dashboard',
    // baseURL: '/api/auth',
    baseURL: 'http://localhost:3000/api/auth/',
    provider: {
      type: 'authjs',
    },
    // sessionRefresh: {
    //   enableOnWindowFocus: true,
    //   enablePeriodically: 1000,
      // refreshHandler: RefreshHandler
    // },
    globalAppMiddleware:{
      isEnabled: true,
      allow404WithoutAuth: true,
    }
  },

  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: '123456',
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: '/api' 
    }
  },

})