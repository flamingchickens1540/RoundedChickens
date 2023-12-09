<script lang="ts">
    // TODO: Figure out if we want to keep a backlog 
    import {
        type TeamMatch,
        type Scout,
        defaultScout,
    } from "$lib/types";
    import TeamMatchesBacklog from "$lib/components/admin/backlog/TeamMatchesBacklog.svelte";
    import QueuedTeamMatches from "$lib/components/admin/queue/QueuedTeamMatches.svelte";
    import AdminRobots from "$lib/components/admin/AdminRobots.svelte";
    import ScoutList from "$lib/components/admin/scouts/ScoutList.svelte";
    import NavOptions from "$lib/components/admin/NavOptions.svelte";
    import { io } from "socket.io-client"
    import { onMount } from "svelte";
    import { PUBLIC_WS_URL } from "$env/static/public";
    // todo: get all of these imported via api requests probably
    // TODO: Should the currentTeamMatches be created by the admin?
    
    let socket: any;
    let queuedTeamMatches: TeamMatch[] = []
    let currentTeamMatches: TeamMatch[]  = []
    let completedTeamMatches: TeamMatch[] = []
    let activeScouts: Scout[] = [defaultScout, defaultScout, defaultScout]

    onMount(() => {
        socket = io(PUBLIC_WS_URL)

        socket.on('connection', () => {
            socket.on('completed_team_match_to_admin', (team_match: TeamMatch) => {
                let index = currentTeamMatches.indexOf(team_match);
                currentTeamMatches.splice(index, 1)
                completedTeamMatches.push(team_match)
            })
        })

        socket.on('hiFromServer', console.log("admin connected to socket server"))
    })

    function handleMessage(event: any) {
        (event.detail.currentTeamMatches as TeamMatch[]).forEach(team_match => {
            currentTeamMatches.push(team_match)
        });
    }

    

    // Reactive blocks can be used for sending io events from the client
</script>
<div class="mainContainer">
    <h1 class="grid place-content-center text-3xl m-4">Admin Panel</h1>
    <div class="grid grid-cols-2 grid-rows-2 gap-3 h-screen">
        <AdminRobots on:message={handleMessage}/>
        <QueuedTeamMatches teamMatches={queuedTeamMatches}/>
        <!-- Queued Team Matches -->
        <div class="scoutListButtonHolder">
            <TeamMatchesBacklog team_match_backlog={completedTeamMatches}/>
        </div>
        <div class="grid grid-cols-2 grid-rows-1 gap-3 scoutListButtonHolder">
            <ScoutList activeScouts={activeScouts}/>
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