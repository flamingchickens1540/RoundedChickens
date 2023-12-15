// import express, { type Express } from 'express';
import { Server } from "socket.io"
import type { MatchKey, Scout, TeamKey } from "./src/lib/types"

// let ws_port = process.env.PUBLIC_WS_PORT || 8001;

// const app: Express = express();
// const server = http.createServer(app);
// const io = new Server(server, {
//     cors: {
//         origin: "*",
//         // allowedHeaders: ["client-header"],
//         credentials: true,
//         methods: ["GET", "POST"]
//     }
// })

export default function injectSocketIo(server: any) {
    const io = new Server(server, {
        cors: {
            origin: "*",
            // allowedHeaders: ["client-header"],
            credentials: true,
            methods: ["GET", "POST"]
        }
    })
    // TODO: Functionally, every scout in scout_map is active, the infrastructure doesn't utilize this yet though
// It's a mess, probably don't touch it
class ScoutManager {
    /// A list of robots to be scouted
    robot_queue: TeamKey[]
    match_key: MatchKey
    // This is used to send which scouts are avalible or not back to the admin panel
    // socket_id: scout.id
    scout_map: Map<string, Scout>
    constructor() {
        this.robot_queue = []
        this.scout_map = new Map<string, Scout>
        this.match_key = "2023orbb_qm1"
    }

    scout_in_map(scout: Scout): boolean {
        this.scout_map.forEach((value) => {
            if (value == scout) {
                return true
            }
        })
        return false
    }

    /// Returns a robot for this scout or null
    get_next_robot(): TeamKey | undefined {
        return this.robot_queue.pop()
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
    async create_match(red_robots: TeamKey[], blue_robots: TeamKey[]): Promise<{ team: TeamKey, clientId: string }[]> {
        let ret: { team: TeamKey, clientId: string }[] = []
        console.log("Rooms: " + io.sockets.adapter.rooms)

        // This is just being used to check if there are avaliable scouts
        // This fails sometimes
        let scouts: string[] = (await io.in('pending_scouts').fetchSockets()).map(value => value.id)
        console.log(scouts.length)

        // if (scouts.length > 0) {
        red_robots.forEach(async (team) => {
            let scout_id = scouts.pop()
            if (scout_id === undefined)
                this.robot_queue.push(team)
            else {
                console.log("Scout " + scout_id + " assigned to team " + team)
                // The scout needs to be moved to assigned scouts
                ret.push({ team, clientId: scout_id })
            }
        })

        blue_robots.forEach(async (team) => {
            let scout = scouts.pop()
            if (scout == undefined)
                this.robot_queue.push(team)
            else {
                // The scout needs to be moved to assigned scouts
                ret.push({ team, clientId: scout })
            }
        })
        
        return ret
    }
}

let manager = new ScoutManager();

// The scout requests a team, if no teams are in the queue, exist, null is returned and the client knows that it is logged in waiting for a team
// When a match is submitted, the manager checks if scouts are waiting, if they are, it sends a the teams back to each of the scouts, otherwise, it puts the robots in a queue
io.on('connect', (socket) => { // io refers to the ws server, socket refers to the specific connection between a client and the server
    console.log("A user connected")
    // we can assume the scout is not assinged yet
    socket.on('scout_req_team', (client_scout: Scout) => {
        if (manager.scout_in_map(client_scout)) {
            console.log("scout already assigned")
            return
        }
        if (client_scout.is_assigned == true) { // here we could assume clients only request when they've finished
            console.log("Assigned Scout Requested Match")
            return
        }
        console.log(client_scout.name)

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
        } else if (server_scout.is_assigned == true) {
            console.log("Assigned Scout Requested Match")
            return
        } 

        if (!socket.rooms.has('pending_scouts') && !socket.rooms.has('assigned_scouts') && server_scout) {
            socket.join('pending_scouts')
            console.log("Added " + server_scout.id + " Aka " + server_scout.name + " to the pending_scouts room");
            let robot: TeamKey | undefined = manager.get_next_robot()
            if (robot !== undefined) {
                console.log("Robot avaliable")
                console.log("Removed " + server_scout.id + " Aka " + server_scout.name + " from the pending_scouts room")
                
                socket.leave('pending_scouts')
                socket.join('assigned_scouts')
                console.log("match key: ", manager.match_key)
                socket.emit('assign_team', { team_key: robot, match_key: manager.match_key })
               
                io.emit('team_match_assigned_admin', robot, server_scout.name)

                server_scout.is_assigned = true
            } else {
                console.log("No Robot avaliable")
                console.log("Scout added to queue");
                
                server_scout.is_assigned = false // attempted to assign readonly property happens here
            }
            // manager.scout_map.set(socket.id, scout)
            socket.broadcast.emit('scout_update', server_scout)
            manager.scout_map.set(socket.id, server_scout)
        } else {
            console.log("Assigned Scout Requested Match 2")
        }
    });

    socket.on('admin_create_match', async (robots: { red_robots: TeamKey[], blue_robots: TeamKey[], match_key: MatchKey }) => { // pased in as undefined
        console.log("admin create match key 1: " + robots.match_key)
        console.log("match being created")
        let scout_matches = await manager.create_match(robots.red_robots, robots.blue_robots)
        console.log("number of scout_matches: " + scout_matches.length)
        scout_matches.forEach((scout_match) => {
            console.log(scout_match.team)
            console.log(scout_match.clientId)
            console.log("\n")

            let id: string = scout_match.clientId
            // server_scout will never be undefined because then scout_matches would be empty, because create_match would be running before any scouts have logged in   
            let server_scout = manager.scout_map.get(id)!;
            console.log("robots admin match key: " + robots.match_key)
            manager.match_key = robots.match_key
            server_scout.is_assigned = true
            console.log("admin match key: " + manager.match_key)
            socket.broadcast.to(id).socketsLeave('pending_scouts')
            socket.broadcast.to(id).socketsJoin('assigned_scouts')
            socket.broadcast.to(id).emit('assign_team', { team_key: scout_match.team, match_key: manager.match_key }) 

            
            socket.emit('team_match_assigned_admin', scout_match.team, server_scout.name)
            socket.emit('scout_update', server_scout) // this could be change to pass back a union containing the specific type change, since it's just a string, I don't care though
            manager.scout_map.set(id, server_scout)
        })
    });


    // if a scout submits a match it must be in the scout map
    socket.on('scout_submitted_match', () => {
        socket.leave('assigned_scouts')
        let server_scout = manager.scout_map.get(socket.id) as Scout
        server_scout.is_assigned = false
        io.emit('scout_update', server_scout)
        manager.scout_map.delete(socket.id)
        io.emit('team_match_done_admin', server_scout.name) // yes, name is passed here so it can be searched by the admin_dash and removed when needed, infrastructure really should be planned before UI
    })

    // TODO: Make sure disconnecting is handled right
    socket.on('disconnecting', () => {
        manager.scout_map.delete(socket.id)
        io.emit('scout_remove', manager.scout_map.get(socket.id))
    })

    socket.on('disconnect', () => {
        // console.log("WS server thinks match was submitted")
        console.log("client: " + socket.id + "disconnected");
    });
});

}


// server.listen(ws_port, () => {
//     console.log("Listening on port: " + ws_port)
// });