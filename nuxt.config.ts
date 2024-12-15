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
  modules: ['@nuxt/eslint', [
    '@nuxtjs/google-fonts',
    {
      Inter: '200..700',
      preload: true,
    },
  ], 'nuxt-swiper'],
  css: ['~/styles/index.scss'],
  nitro: {
    prerender: {
      ignore: [/^(?!\/profile(\/.*)?$).*/],
      routes: [...profiles],
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