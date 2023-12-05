import express, { type Express } from 'express';
import { Server } from "socket.io"
import type { TeamKey } from "./src/lib/types"
import http from 'http';

let frontend_url = process.env.PUBLIC_FRONTEND_URL as string;
let ws_port = process.env.PUBLIC_WS_PORT || 8001;

console.log("FRONTEND: " + frontend_url)

const app: Express = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        // allowedHeaders: ["client-header"],
        credentials: true,
        methods: ["GET", "POST"]
    }
})

enum Result {
    Success,
    Failure
}

/// TODO: Refactor to use scout rooms instead of arrays, safer and more effective for communication
class ScoutManager {
    /// A list of robots to be scouted
    robot_queue: TeamKey[]
    /// A list of scouts waiting for assignment
    pending_scouts: string[] // TODO: Talk with Jack about removing this and all associated code
    /// A list of scouts currently scouting
    assigned_scouts: string[]

    constructor() {
        this.robot_queue = []
        this.pending_scouts = []
        this.assigned_scouts = []
    }

    /// Returns a scout for the robot or null
    get_next_scout(): string | null {
        let scout = this.pending_scouts.pop();
        return scout ? scout : null
    }

    /// Returns a robot for this scout or null
    get_next_robot(): TeamKey | null {
        let robot = this.robot_queue.pop()
        return robot ? robot : null
    }

    free_scout(scout: string): Result {
        const index = this.assigned_scouts.indexOf(scout);
        if (index > -1) { // only splice array when item is found
            this.pending_scouts.splice(index, 1); // 2nd parameter means remove one item only
            return Result.Success
        } else return Result.Failure
    }

    /// Returns a corresponding team and scout for each currently avaliable scout
    /// Puts the remaining teams in the robot queue
    create_match(robots: { red_robots: TeamKey[], blue_robots: TeamKey[] }): { team: TeamKey, clientId: string | undefined }[] {
        let ret: { team: TeamKey, clientId: string | undefined }[] = []

        if (this.pending_scouts.length > 0) {
            let scouts: string[] = Array.from(io.sockets.adapter.rooms.get('pending_scouts') as Set<string> ); // TODO: Refactor to count by the number of scout logged in, not the robots
            robots.red_robots.forEach((team) => {
                let scout = this.get_next_scout()
                if (scout != null) 
                    this.robot_queue.push(team)
                else 
                    ret.push({ team, clientId: scouts.pop() })
            })

            robots.blue_robots.forEach((team) => {
                let scout = this.get_next_scout()
                if (scout != null)
                    this.robot_queue.push(team)
                else 
                    ret.push({ team, clientId: scouts.pop() })
            })
        }
        
        return ret
    }
}

let manager = new ScoutManager();

// The scout requests a team, if no teams are in the queue, exist, null is returned and the client knows that it is logged in waiting for a team
// When a match is submitted, the manager checks if scouts are waiting, if they are, it sends a the teams back to each of the scouts, otherwise, it puts the robots in a queue
io.on('connection', (socket) => { // io refers to the ws server, socket refers to the specific connection between a client and the server
    console.log("a user connected")
    socket.emit('hiFromServer')
    
    socket.on('scout_req_team', (scout_id) => { // scout_id is not the same as client_id
        socket.join('pending_scouts')
        console.log("Added " + scout_id + " to the pending_scouts room");
        let robot: TeamKey | null =  manager.get_next_robot()
        if (robot != null) {
            socket.leave('pending_scouts')
            console.log("Removed " + scout_id + " from the pending_scouts room")
            socket.emit('assign_team', robot)
        } else {
            manager.pending_scouts.push(scout_id) // TODO: remove alll pending_scouts array code
        }
        
    });

    socket.on('admin_create_match', (robots: { red_robots: TeamKey[], blue_robots: TeamKey[] }) => {
        let scout_matches = manager.create_match(robots)
        // This system would be much more efficient if the class could emit to specific clients
        scout_matches.forEach((scout_match) => {
            let id = scout_match.clientId as string // There being no avaliable clients is checked in create_match() so this cast is safe
            socket.broadcast.to(id)
            socket.broadcast.to(id).emit('assign_team', scout_match.team) 
        })
    });

    // { team_match, scout_id }
    socket.on('scout_submit_team' (data) => {

    })

    socket.on('disconnect', () => {
        console.log("a user disconnected");
    });

});
server.listen(ws_port, () => {
    console.log("listening on port: " + ws_port)
});
