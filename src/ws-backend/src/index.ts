import { Server } from "socket.io"
import type { TeamKey, Scout } from "../../lib/types"

const PORT = 8001
const io = new Server(PORT)

const scouts = []

enum Result {
    Success,
    Failure
}

class ScoutManager {
    /// A list of robots to be scouted
    robot_queue: TeamKey[]
    /// A list of scouts waiting for assignment
    pending_scouts: string[]
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
            let scouts: string[] = Array.from(io.sockets.adapter.rooms.get('scouts') as Set<string> ); // TODO: Refactor to count by the number of scout logged in, not the robots
            robots.red_robots.forEach((team, i) => {
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

io.on('connection', (socket) => {
    console.log("a user connected")
    socket.emit('hiFromServer', "hello");


    // The scout requests a team, if no teams are in the queue, exist, null is returned and the client knows that it is logged in waiting for a team
    // When a match is submitted, the manager checks if scouts are waiting, if they are, it sends a the teams back to each of the scouts, otherwise, it puts the robots in a queue
    socket.on('scout_req_team', (scout_id) => {
        socket.join("scouts")
        console.log(scout_id);
        manager.get_next_robot()
    });

    socket.on('admin_create_match', (robots: { red_robots: TeamKey[], blue_robots: TeamKey[] }) => {
        manager.create_match(robots)

    });

    socket.on('disconnect', () => {
        console.log("a user disconnected");

    });

});
io.listen(PORT);
