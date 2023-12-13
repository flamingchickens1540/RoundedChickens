import injectSocketIO from './wsHandler';

export const webSocketServer = {
    name: 'webSocketServer',
    configureServer(server) {
        injectSocketIO(server.httpServer);
    }
};