import fs from 'node:fs'
import path from 'node:path'

const profiles = fs
  .readdirSync(path.resolve(__dirname, './src/content/profile'), 'utf-8')
  .map((file) => `/profile/${file.replace('.json', '')}`)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  srcDir: 'src/',
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  experimental: {
    payloadExtraction: false,
  },
  modules: [
    '@nuxt/eslint',
    [
      '@nuxtjs/google-fonts',
      {
        preload: true,
        families: {
          Inter: [300, 400, 500, 600, 700, 800, 900],
        },
      },
    ],
    'nuxt-swiper',
    'dayjs-nuxt',
  ],
  css: ['~/styles/index.scss', 'leaflet/dist/leaflet.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  appConfig: {
    quoteUrl: 'https://quote.purehousecleaning.com/',
    url: {
      quoteTrustedfew: 'https://quote.trustedfew.com/',
    },
  },
  nitro: {
    static: true,
    prerender: {
      ignore: [/^(?!(\/profile|\/pricing|\/legal)(\/.*)?$).*/],
      routes: [...profiles, '/pricing', '/legal'],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api'],
          additionalData: `
            @use 'sass:math';
            @use 'sass:map';
            @use 'sass:list';
            @use '~/styles/helpers/index.scss' as helpers;
          `,
        },
      },
    },
  },
})
