import { sveltekit } from '@sveltejs/kit/vite'
import { resolve } from 'path'

const path = (dir) => resolve(__dirname, dir)

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'#components': path('src/components'),
			'#utils': path('src/utils'),
			'#shared': path('src/shared'),
			'#hooks': path('src/hooks'),
			'#stores': path('src/contexts'),
			'#data': path('src/shared/data'),
			'#mocks': path('src/shared/data/mocks'),
			'#types': path('src/shared/types'),
		}
	}
}

export default config
