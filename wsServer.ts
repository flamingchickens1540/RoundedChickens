import express, { type Express } from 'express';
import { Server } from "socket.io"
import type { TeamKey, TeamMatch } from "./src/lib/types"
import http from 'http';

let ws_port = process.env.PUBLIC_WS_PORT || 8001;

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
    get_next_robot(): TeamKey | undefined {
        let robot = this.robot_queue.pop()
        return robot ? robot : undefined
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
    async create_match(robots: { red_robots: TeamKey[], blue_robots: TeamKey[] }): Promise<{ team: TeamKey, clientId: string }[]> {
        let ret: { team: TeamKey, clientId: string }[] = []
        // This is just being used to check if there are avaliable scouts
        let scouts: string[] = (await io.in('pending_scouts').fetchSockets()).map(val => { return val.id });
        if (scouts.length > 0) {
            robots.red_robots.forEach(async (team) => {
                let scout = await this.get_next_scout()
                if (scout == undefined)
                    this.robot_queue.push(team)
                else {
                    // The scout needs to be moved to assigned scouts
                    ret.push({ team, clientId: scout })
                }
            })

            robots.blue_robots.forEach(async (team) => {
                let scout = await this.get_next_scout()
                if (scout == undefined)
                    this.robot_queue.push(team)
                else {
                    // The scout needs to be moved to assigned scouts
                    ret.push({ team, clientId: scout })
                }
            })
        }
        
        return ret
    }
}

let manager = new ScoutManager();

// The scout requests a team, if no teams are in the queue, exist, null is returned and the client knows that it is logged in waiting for a team
// When a match is submitted, the manager checks if scouts are waiting, if they are, it sends a the teams back to each of the scouts, otherwise, it puts the robots in a queue
io.on('connect', (socket) => { // io refers to the ws server, socket refers to the specific connection between a client and the server
    console.log("A user connected")
    
    socket.on('scout_req_team', (scout_id: `${string}-${string}-${string}-${string}-${string}`) => { // scout_id is not the same as client_id
        if (!socket.rooms.has('pending_scouts') && !socket.rooms.has('assigned_scouts')) {
            socket.join('pending_scouts')
            console.log("Added " + scout_id + " to the pending_scouts room");
            let robot: TeamKey | undefined =  manager.get_next_robot()
            if (robot != undefined) {
                console.log("Robot avaliable")
                console.log("Removed " + scout_id + " from the pending_scouts room")
                socket.leave('pending_scouts')
                socket.join('assigned_scouts')
                socket.emit('assign_team', robot)
            }
        }
    });

    socket.on('admin_create_match', async (robots: { red_robots: TeamKey[], blue_robots: TeamKey[] }) => {
        console.log("match being created")
        let scout_matches = await manager.create_match(robots)
        // This system would be much more efficient if the class could emit to specific clients
        scout_matches.forEach((scout_match) => {
            let id: string = scout_match.clientId

            socket.broadcast.to(id).socketsLeave('pending_scouts')
            socket.broadcast.to(id).socketsJoin('assigned_scouts')
            socket.broadcast.to(id).emit('assign_team', scout_match.team) 
        })
    });

    socket.on('disconnect', () => {
        if (socket.in('assigned_scouts')) {
            console.log("ASSIGNED SCOUT DISCONNECTED\nTEAM MATCH LOST")
        }
        console.log("client: " + socket.id + "disconnected");
    });

});

server.listen(ws_port, () => {
    console.log("Listening on port: " + ws_port)
});
