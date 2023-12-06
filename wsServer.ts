import express, { type Express } from 'express';
import { Server } from "socket.io"
import type { TeamKey, TeamMatch } from "./src/lib/types"
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

/// TODO: Refactor to use scout rooms instead of arrays, safer and more effective for communication
class ScoutManager {
    /// A list of robots to be scouted
    robot_queue: TeamKey[]

    constructor() {
        this.robot_queue = ['frc1540', 'frc1425', 'frc1542']
    }

    /// Returns a scout for the robot or null
    async get_next_scout(): Promise<string | undefined> {
        let scouts = await io.in('pending_scouts').fetchSockets()
        let scout = scouts.pop()
        return scout?.id
    }

    /// Returns a robot for this scout or null
    get_next_robot(): TeamKey | null {
        let robot = this.robot_queue.pop()
        return robot ? robot : null
    }

    // Removes the client_id if it exists
    async free_scout(client_id: string) {
        let assinged_scouts = (await io.in('assigned_scouts').fetchSockets())
        assinged_scouts.forEach((socket) => {
            if (socket.id == client_id)
                socket.leave('assigned_scouts')
        })
    }

    /// Returns a corresponding team and scout for each currently avaliable scout
    /// Puts the remaining teams in the robot queue
    async create_match(robots: { red_robots: TeamKey[], blue_robots: TeamKey[] }): Promise<{ team: TeamKey, clientId: string | undefined }[]> {
        let ret: { team: TeamKey, clientId: string | undefined }[] = []
        let scouts: string[] = (await io.in('pending_scouts').fetchSockets()).map(val => { return val.id });
        if (scouts.length > 0) {
            robots.red_robots.forEach(async (team) => {
                let scout = await this.get_next_scout()
                if (scout != null) 
                    this.robot_queue.push(team)
                else 
                    ret.push({ team, clientId: scouts.pop() })
            })

            robots.blue_robots.forEach(async (team) => {
                let scout = await this.get_next_scout()
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
    
    socket.on('scout_req_team', (scout_id: `${string}-${string}-${string}-${string}-${string}`) => { // scout_id is not the same as client_id
        if (!socket.rooms.has('pending_scouts') && !socket.rooms.has('assigned_scouts')) {
            socket.join('pending_scouts')
            console.log("Added " + scout_id + " to the pending_scouts room");
            let robot: TeamKey | null =  manager.get_next_robot()
            if (robot != null) {
                socket.leave('pending_scouts')
                console.log("Removed " + scout_id + " from the pending_scouts room")
                socket.join('assigned_scouts')
                socket.emit('assign_team', robot)
            }
        }
    });

    socket.on('admin_create_match', async (robots: { red_robots: TeamKey[], blue_robots: TeamKey[] }) => {
        let scout_matches = await manager.create_match(robots)
        // This system would be much more efficient if the class could emit to specific clients
        scout_matches.forEach((scout_match) => {
            let id = scout_match.clientId as string // There being no avaliable clients is checked in create_match() so this cast is safe
            // socket.broadcast.to(id)
            socket.broadcast.to(id).emit('assign_team', scout_match.team) 
        })
    });

    // { team_match, scout_id }
    socket.on('scout_submit_team', (data: { team_match: TeamMatch, client_id: `${string}-${string}-${string}-${string}-${string}` }) => {
        socket.leave('assigned_scouts')
        let team_match = data.team_match
        if (team_match.data == null) {
            socket.emit('completed_match_needed')
        }
        console.log(team_match)
        // Submit match to database here
    })

    socket.on('disconnect', () => {
        console.log("a user disconnected");
    });

});
server.listen(ws_port, () => {
    console.log("listening on port: " + ws_port)
});
