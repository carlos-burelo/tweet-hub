import { sveltekit } from '@sveltejs/kit/vite'
import { resolve } from 'path'

const path = dir => resolve(__dirname, dir)

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'#': path('src/components'),
			'#utils': path('src/shared/utils'),
			'#types': path('src/shared/types.d.ts'),
			'#api': path('src/shared/api'),
			'#stores': path('src/contexts'),
			'#data': path('src/shared/data'),
			'#mocks': path('src/shared/mocks'),
			'#models': path('src/models'),
			'#handlers': path('src/handlers')
		}
	}
}

export default config
