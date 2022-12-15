import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'

import plugins from './plugins'

// https://vitejs.dev/config/
export default defineConfig({
	plugins,
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
