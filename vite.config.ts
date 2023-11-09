<<<<<<< HEAD
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()]
});
=======
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: { exclude: ["fsevents"] },
});
>>>>>>> 6cb2d5f495cee5556f3069a82a1317d7ff753dab
