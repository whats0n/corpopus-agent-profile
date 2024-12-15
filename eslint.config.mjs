// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
    },
  },
  {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
    files: ['src/pages/**/*.vue', 'src/layouts/**/*.vue'],
  },
)
