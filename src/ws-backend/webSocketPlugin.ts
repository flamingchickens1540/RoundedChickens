import { Server } from "socket.io"
import { v4 as uuidv4 } from "uuid";
import type { TeamKey, Scout } from "../lib/types"

const PORT = 8001

enum Result {
    Success,
    Failure
}

class ScoutManager {
    robot_queue: TeamKey[];
    active_scouts: string[];

    constructor() {
        this.robot_queue = [];
        this.active_scouts = [];
    }

    deactivate_scout(scout: string): Result {
        const index = this.active_scouts.indexOf(scout);
        if (index > -1) { // only splice array when item is found
            this.active_scouts.splice(index, 1); // 2nd parameter means remove one item only
            return Result.Success
        } else return Result.Failure
    }

    assign_scout(scout: string) {
        if (this.robot_queue.length > 0) {
            this.active_scouts.push(scout);

        }
        return this.robot_queue.pop();
    }

    create_match(robots: TeamKey[]) {
        robots.forEach((team) => {
            this.robot_queue.push(team)
        })
    }

    clear_scouts() {

    }
}

let manager = new ScoutManager();

export const ioServerPlugin = {
    name: "webSocketServer",
    configureServer(server: any) {
        const io = new Server(server.httpServer, {
            cors: {
                origin: "localhost:" + PORT
            }
        })
        io.on('connection', (socket) => {
            console.log("a user connected")
            socket.emit('hiFromServer', "hello");

            socket.on('scout_req_match', (scout_id) => {
                console.log(scout_id);
                socket.broadcast.to(socket.id).emit('assign_team_match', {
                    team: manager.assign_scout(scout_id)
                })
            });

            socket.on('admin_create_match', (robots) => {
                manager.create_match(robots)
            });

            socket.on('disconnect', () => {
                console.log("a user disconnected");

            });

        });
        io.listen(PORT);
    }
}
