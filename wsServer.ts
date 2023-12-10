import express, { type Express } from 'express';
import { Server } from "socket.io"
import type { Scout, TeamKey, TeamMatch } from "./src/lib/types"
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

    // This is used to send which scouts are avalible or not back to the admin panel
    // socket_id: scout.id
    scout_map: Map<string, Scout>
    constructor() {
        this.robot_queue = []
        this.scout_map = new Map<string, Scout>
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

// TODO: FIGURE OUT HOW TO MAKE IS_ASSIGNED  = FALSE WHEN THE CLIENT SUBMITS DATA(THIS IS WHY I WANTED THE WS_SERVER TO HANDLE SUBMISSION)
// The scout requests a team, if no teams are in the queue, exist, null is returned and the client knows that it is logged in waiting for a team
// When a match is submitted, the manager checks if scouts are waiting, if they are, it sends a the teams back to each of the scouts, otherwise, it puts the robots in a queue
io.on('connect', (socket) => { // io refers to the ws server, socket refers to the specific connection between a client and the server
    console.log("A user connected")
    // we can assume the scout is not assinged yet
    socket.on('scout_req_team', (client_scout: Scout) => {
        if (client_scout.is_assigned == true) { // here we could assume clients only request when they've finished
            console.log("Assigned Scout Requested Match")
            return
        }
        // Syncs scouts between server and client
        // Assume server_scout is always the correct one
        let server_scout: Scout | undefined = manager.scout_map.get(socket.id)
        // this includes data not being synced and the scout not being in the map yet
        if (server_scout === undefined) {
            console.log("here")
            manager.scout_map.set(socket.id, client_scout)
            server_scout = client_scout
        } else if (server_scout !== client_scout) { // client_scout is not updated
            socket.emit('scout_update', server_scout)
        } 
        
        if (!socket.rooms.has('pending_scouts') && !socket.rooms.has('assigned_scouts') && server_scout) {
            socket.join('pending_scouts')
            console.log("Added " + server_scout.id + " Aka " + server_scout.name + " to the pending_scouts room");
            let robot: TeamKey | undefined = manager.get_next_robot()
            if (robot != undefined) {
                console.log("Robot avaliable")
                console.log("Removed " + server_scout.id + " Aka " + server_scout.name + " from the pending_scouts room")
                
                socket.leave('pending_scouts')
                socket.join('assigned_scouts')
                socket.emit('assign_team', robot)

                server_scout.is_assigned = true
            } else {
                console.log("No Robot avaliable")
                console.log("Scout added to queue");

                server_scout.is_assigned = false // attempted to assign readonly property happens here
            }
            // manager.scout_map.set(socket.id, scout)
            socket.broadcast.emit('scout_update', server_scout)
            manager.scout_map.set(socket.id, server_scout    )
        } else {
            console.log("Assigned Scout Requested Match 2")
        }
    });

    socket.on('admin_create_match', async (robots: { red_robots: TeamKey[], blue_robots: TeamKey[] }) => {
        console.log("match being created")
        let scout_matches = await manager.create_match(robots)
        
        scout_matches.forEach((scout_match) => {
            let id: string = scout_match.clientId
            // server_scout will never be undefined because then scout_matches would be empty, because create_match would be running before any scouts have logged in   
            let server_scout = manager.scout_map.get(id)!;
            server_scout.is_assigned = true

            socket.broadcast.to(id).socketsLeave('pending_scouts')
            socket.broadcast.to(id).socketsJoin('assigned_scouts')
            socket.broadcast.to(id).emit('assign_team', scout_match.team) 
            
            socket.emit('scout_update', server_scout) // this could be change to pass back a union containing the specific type change, since it's just a string, I don't care though
        })
    });


    // if a scout submits a match it must be in the scout map
    socket.on('scout_submitted_match', () => {
        let server_scout = manager.scout_map.get(socket.id)
        server_scout!.is_assigned = false
        manager.scout_map.set(socket.id, server_scout!)
    })

    // TODO: FIX, DISCONENCTION CANNOT BE SUBMISSIOn
    // 
    socket.on('disconnecting', () => { // TODO: research what this means exactly
        manager.scout_map.delete(socket.id)
        // This i when they submit a match
        // socket.emit('scout_update', null)
        // if (socket.in('pending_scouts')) {
        //     console.log("Pending scout disconnected")
        // } else if (socket.in('assigned_scouts')) {
        //     console.log("Assigned scout disconnected")
        // } else {
        //     console.log("Admin or useless scout disconnected")
        // }
    })

    socket.on('disconnect', () => {
        // console.log("WS server thinks match was submitted")
        console.log("client: " + socket.id + "disconnected");
    });
});

server.listen(ws_port, () => {
    console.log("Listening on port: " + ws_port)
});