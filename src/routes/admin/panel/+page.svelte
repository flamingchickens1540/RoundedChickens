<script lang="ts">
    // TODO: Figure out if we want to keep a backlog 
    import type {
        TeamMatch,
        Scout,
    } from "$lib/types";
    import TeamMatchesBacklog from "$lib/components/admin/backlog/TeamMatchesBacklog.svelte";
    import QueuedTeamMatches from "$lib/components/admin/queue/QueuedTeamMatches.svelte";
    import AdminRobots from "$lib/components/admin/AdminRobots.svelte";
    import ScoutList from "$lib/components/admin/scouts/ScoutList.svelte";
    import NavOptions from "$lib/components/admin/NavOptions.svelte";
    import { Socket, io } from "socket.io-client"
    import { onMount } from "svelte";
    import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL, PUBLIC_WS_URL } from "$env/static/public";
    
    // todo: get all of these imported via api requests probably
    // TODO: Should the currentTeamMatches be created by the admin?
    export let data;

    let { supabase, session  } = data;
    $: ({ supabase, session } = data);
    const subscribe = supabase
        .channel('admin_panel')
        .on('postgres_changes',{ event: 'INSERT', schema: 'public', table: 'TeamMatches', }, payload => {
            let team_match: TeamMatch = payload.new as TeamMatch;
            completedTeamMatches.push(team_match)
            console.log('New insert into TeamMatches: ', payload)
        })
        .subscribe()
    
    let socket: any//: Socket<ServerToClientEvents, ClientToServerEvents>
    let queuedTeamMatches: TeamMatch[] = []
    let currentTeamMatches: TeamMatch[]  = []
    let completedTeamMatches: TeamMatch[] = []
    let activeScouts: Scout[] = []  

    onMount(() => {
        socket = io(PUBLIC_WS_URL)

        socket.on('connect', () => {
            console.log('Admin connected to server')

            socket.on('completed_team_match_to_admin', (team_match: TeamMatch) => {
                let index = currentTeamMatches.indexOf(team_match);
                currentTeamMatches.splice(index, 1)
                completedTeamMatches.push(team_match)
            })
            // triggered when a scout disconnects
            socket.on('scout_remove', (scout_id: `${string}-${string}-${string}-${string}-${string}`) => {
                for (let i = 0; i < activeScouts.length; i++) {
                    if (activeScouts[i].id == scout_id) {
                        activeScouts.splice(i, 1)
                    }
                }
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
            })
            // when scout submits match
            socket.on('scout_finished', (scout: Scout) => {
                completedTeamMatches.push()
            })
        })

    })

    async function handleNewMatch(event: any) {
        console.log("handle new match called")
        let red_robots: TeamMatch[] = event.detail.red_robots
        let blue_robots: TeamMatch[] = event.detail.blue_robots
        socket.emit('admin_create_match', { red_robots, blue_robots })
        red_robots.forEach(team_match => {
            currentTeamMatches.push(team_match)
        });
        blue_robots.forEach(team_match => {
            currentTeamMatches.push(team_match)
        });
    }

</script>
<div class="mainContainer">
    <h1 class="grid place-content-center text-3xl m-4">Admin Panel</h1>
    <div class="grid grid-cols-2 grid-rows-2 gap-3 h-screen">
        <AdminRobots on:new_match={handleNewMatch}/>
        <QueuedTeamMatches bind:teamMatches={queuedTeamMatches}/>
        <!-- Queued Team Matches -->
        <div class="scoutListButtonHolder">
            <TeamMatchesBacklog bind:team_match_backlog={completedTeamMatches}/>
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