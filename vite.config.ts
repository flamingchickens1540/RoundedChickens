import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		rollupOptions: {

		}
	},
	plugins: [sveltekit()], // if azalea fails at socket io, we can convert her code to a plugin instead
	optimizeDeps: { exclude: ["fsevents"] },
});
