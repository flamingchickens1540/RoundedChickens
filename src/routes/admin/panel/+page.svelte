<script lang="ts">
    import type {
        TeamMatch,
        Scout,
        TeamKey,
        MatchKey,
        TeamMatchKeys,
    } from "$lib/types";
    import TeamMatchesBacklog from "$lib/components/admin/backlog/TeamMatchesBacklog.svelte";
    import AdminRobots from "$lib/components/admin/AdminRobots.svelte";
    import ScoutList from "$lib/components/admin/scouts/ScoutList.svelte";
    import NavOptions from "$lib/components/admin/NavOptions.svelte";
    import { io } from "socket.io-client"
    import { onMount } from "svelte";
    import { PUBLIC_WS_URL } from "$env/static/public";
    import CurrentTeamMatches from "$lib/components/admin/current/CurrentTeamMatches.svelte";
    
    // TODO: make sure the supabase stuff works
    export let data;

    let { supabase, session  } = data;
    $: ({ supabase, session } = data);



    supabase // might need to remove the variable
        .channel('room_1')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'TeamMatches', }, payload => {
            let team_match: TeamMatchKeys = payload.new as TeamMatchKeys;
            completed_team_matches.push(team_match)
            console.log('New insert into TeamMatches: ', payload)
        })
        .subscribe()
    
    let socket: any //: Socket<ServerToClientEvents, ClientToServerEvents>
    let current_team_matches: {keys: TeamMatchKeys, scout_name: string }[]  = [] // not working
    let completed_team_matches: TeamMatchKeys[] = []
    let activeScouts: Scout[] = []
    let current_match: MatchKey

    onMount(() => {
        socket = io(PUBLIC_WS_URL)

        socket.on('connect', () => {
            console.log('Admin connected to server')

            // removes current team match when its finished, should be automatically added to completedTeamMatches when logged in supabase
            socket.on('team_match_done_admin', (scout_name: string) => {
                let searchable_team_matches = current_team_matches.map(value => value.scout_name)
                let index = searchable_team_matches.indexOf(scout_name);
                current_team_matches.splice(index, 1)
                current_team_matches = current_team_matches
            })

            // triggered when a scout disconnects
            socket.on('scout_remove', (scout_id: `${string}-${string}-${string}-${string}-${string}`) => {
                for (let i = 0; i < activeScouts.length; i++) {
                    if (activeScouts[i].id == scout_id) {
                        activeScouts.splice(i, 1)
                    }
                }
                activeScouts = activeScouts
            })
            // Probably triggered too much
            socket.on('scout_update', (new_scout: Scout) => {
                let scout_exists = false
                for (let i = 0; i < activeScouts.length; i++) {
                    if (activeScouts[i].id == new_scout.id) {
                        scout_exists = true
                        activeScouts[i] = new_scout
                        break;
                    }
                }
                if (!scout_exists) {
                    activeScouts.push(new_scout)
                }
                activeScouts = activeScouts
            })
            // triggered when the scout is assigned a match
            // exists so the admin knows what robot is currently assigned to the robot 
            socket.on('team_match_assigned_admin', (robot: TeamKey, scout_name: string) => {
                console.log('team match assigned admin')
                let searchable_team_matches = current_team_matches.map(value => value.keys.team_key)
                searchable_team_matches.forEach(value => {
                    if (value == robot) {
                        return; // returns if the team is already being scouted; this should remove the doubling-up bug because I don't know what is causing it(probably async hell stuff)
                    }
                })
                current_team_matches.push(
                    {
                        keys: {
                            team_key: robot,
                            match_key: current_match,
                        }, 
                        scout_name: scout_name ?? ""
                    }
                )
                current_team_matches = current_team_matches
            })
        })

    })

    async function handleNewMatch(event: any) {
        console.log("handle new match called")
        current_match = event.detail.key
        let red_robots: TeamMatch[] = event.detail.red_robots
        let blue_robots: TeamMatch[] = event.detail.blue_robots
        socket.emit('admin_create_match', { red_robots, blue_robots })
    }

</script>
<div class="mainContainer">
    <h1 class="grid place-content-center text-3xl m-4">Admin Panel</h1>
    <div class="grid grid-cols-2 grid-rows-2 gap-3 h-screen">
        <AdminRobots on:new_match={handleNewMatch}/>
        <CurrentTeamMatches bind:teamMatches={current_team_matches}/>
        <!-- Queued Team Matches -->
        <div class="scoutListButtonHolder">
            <TeamMatchesBacklog bind:team_match_backlog={completed_team_matches}/>
        </div>
        <div class="grid grid-cols-2 grid-rows-1 gap-3 scoutListButtonHolder">
            <ScoutList bind:activeScouts={activeScouts}/>
            <NavOptions/>
        </div>
    </div>
</div>

<style>
    .scoutListButtonHolder {
        height: 92%;
    }
    .mainContainer {
        margin: 1rem;
        height: 96vh;
        width: auto;
        place-content: center;
    }
</style>