import { Elysia } from "elysia";
import { Server } from 'socket.io'
import { handler } from '../build/handler.js'

const port = 3000
const app = new Elysia();

const io = new Server(app)

io.on('connect', (socket => {
    socket.emit('eventFromServer', "Hello World")
}))

app.use(handler)

app.listen(port)