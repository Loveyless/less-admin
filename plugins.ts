import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://github.com/antfu/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite'

// https://github.com/antfu/unplugin-vue-components
import Components from 'unplugin-vue-components/vite'

// https://github.com/antfu/unplugin-icons
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import Unocss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'

import progress from 'vite-plugin-progress'

export default [
  vue(),
  vueJsx(),
  AutoImport({
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/, /\.vue\?vue/, // .vue
      /\.md$/, // .md
    ],
    imports: [
      'vue',
      'vue-router',
      'pinia',
      // custom
      {
        axios: [
          // default imports
          ['default', 'axios'], // import { default as axios } from 'axios',
        ],
      },
    ],
    // Enable auto import by filename for default module exports under directories
    defaultExportByFilename: false,
    dirs: [
      './hooks',
      './src/store',
      './src/router',
    ],
    // Filepath to generate corresponding .d.ts file.
    // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
    // Set `false` to disable.
    dts: './auto-imports.d.ts',
    // Auto import inside Vue template
    // see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
    vueTemplate: false,
    // Custom resolvers, compatible with `unplugin-vue-components`
    // see https://github.com/antfu/unplugin-auto-import/pull/23/
    resolvers: [
    ],
    // Generate corresponding .eslintrc-auto-import.json file.
    // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
    eslintrc: {
      enabled: false, // Default `false`
      filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    },
  }),
  Components({
    resolvers: [
      IconsResolver(),
    ],
    // relative paths to the directory to search for components.
    dirs: ['src/components'],
    // 后缀
    extensions: ['vue'],
    dts: true, // enabled by default if `typescript` is installed
    types: [{
      from: 'vue-router',
      names: ['RouterLink', 'RouterView'],
    }],
    version: 3,
  }),
  Icons({
    autoInstall: true,
  }),
  Unocss({
    presets: [
      presetUno(),
      presetAttributify({}),
      presetIcons({
        extraProperties: {
          'display': 'inline-block',
          'vertical-align': 'middle',
        },
      }),
    ],
  }),
  progress(),
] as any
