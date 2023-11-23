import adapter from "svelte-adapter-bun";
import { vitePreprocess } from '@sveltejs/kit/vite';
import { ioServerPlugin } from "./webSocketPlugin.js"

const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
	}
};

export default config;
