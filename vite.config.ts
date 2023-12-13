import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { webSocketServer } from './wsPluginVite';

export default defineConfig({
	build: {
		rollupOptions: {

		}
	},
	server: {
        port: 3000
    },
    preview: {
        port: 3000
    },
	plugins: [sveltekit(), webSocketServer], // if azalea fails at socket io, we can convert her code to a plugin instead
	optimizeDeps: { exclude: ["fsevents"] },
});