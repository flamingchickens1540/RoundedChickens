import express, { type Express } from "express";
import http from 'http';
// import { handler } from './build/';
import injectSocketIO from './wsHandler.js';



const app: Express = express();
const server = http.createServer(app);

injectSocketIO(server);

// app.use(handler);

server.listen(3000, () => {
    console.log('Running on http://localhost:3000');
});
