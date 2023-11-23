import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { ioServerPlugin } from "./webSocketPlugin.js"

export default defineConfig({
	plugins: [sveltekit(), ioServerPlugin],
	optimizeDeps: { exclude: ["fsevents"] },
});