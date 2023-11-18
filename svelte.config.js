import adapter from "svelte-adapter-bun";
import { vitePreprocess } from '@sveltejs/kit/vite';
import { Server } from "socket.io"

const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		vite: {
			plugins: [
				{
					name: 'sveltekit-socket-io',
					configureServer(server) {
						const io = new Server(server.httpServer);

						// Socket.io stuff goes here

						// This is located in the svelte config (see above "Socket.IO stuff goes here")
						io.on('connection', (socket) => {
							// Generate a random scout_id and send it to the client to display it
							let scout_id = `scout ${Math.round(Math.random() * 999999)}`;

							socket.to('scout').emit('scout_id', scout_id);
							socket.to('admin').emit('')
							// Receive incoming messages and broadcast them
							// socket.on('message', (message) => {
							// 	io.emit('message', {
							// 		from: username,
							// 		message: message,
							// 		time: new Date().toLocaleString()
							// 	});
							// });
						});

						

						console.log('SocketIO injected');
					}
				}
			]
		}
	}
};

export default config;
