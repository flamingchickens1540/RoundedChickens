import { BACKEND_URL } from "./.env"

// export const plugin = {
//     name: 'sveltekit-socket-io',
//     configureServer(server) {
//         const io = new Server(server.httpServer);

//         // Socket.io stuff goes here

//         // This is located in the svelte config (see above "Socket.IO stuff goes here")
//         io.on('connection', (socket) => {


//             // Generate a random scout_id and send it to the client to display it
//             // let scout_id = `scout ${Math.round(Math.random() * 999999)}`;

//             // socket.to('scout').emit('scout_id', scout_id);
//             // socket.to('admin').emit('')
//             // Receive incoming messages and broadcast them
//             // socket.on('message', (message) => {
//             // 	io.emit('message', {
//             // 		from: username,
//             // 		message: message,
//             // 		time: new Date().toLocaleString()
//             // 	});
//             // });
//         });



//         console.log('SocketIO injected');
//     }
// }
import { Server } from "socket.io"
// import adapter from "svelte-adapter-bun";

// export const server = {}

// sjs might work

// syntax ioServer = function (ctx) {
// 	return #`const io = new Server(server.httpServer)
// 				io.on('connect', (socket => {
// 					socket.emit('eventFromServer', "Hello World")
// 				}))`;
//   }
export const ioServerPlugin = {
    name: "webSocketServer",
    configureServer(server: any) {
        const io = new Server(server.httpServer, {
            cors: {
                origin: BACKEND_URL
            }
        })
        io.on('connect', (socket => {
            socket.emit('eventFromServer', "Hello World")
        }))
    }
}
