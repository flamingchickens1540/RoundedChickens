<script lang="ts">
    // TODO: Figure out if we want to keep a backlog 
    import {
        type FixedLengthArray,
        type MatchKey,
        type TeamMatch,
        type TeamKey,
        type Scout,
        defaultScout,
        defaultTeamMatch,
    } from "$lib/types";
    import TeamMatchesBacklog from "$lib/components/admin/backlog/TeamMatchesBacklog.svelte";
    import QueuedTeamMatches from "$lib/components/admin/queue/QueuedTeamMatches.svelte";
    import AdminRobots from "$lib/components/admin/AdminRobots.svelte";
    import ScoutList from "$lib/components/admin/scouts/ScoutList.svelte";
    import { io } from "socket.io-client"
    import { onMount } from "svelte";
    import { PUBLIC_WS_PORT } from "$env/static/public";
    // todo: get all of these imported via api requests probably
    // TODO: Should the currentTeamMatches be created by the admin?
    
    let socket: any;
    let queuedTeamMatches: TeamMatch[] = []
    let currentTeamMatches: TeamMatch[]  = []
    let completedTeamMatches: TeamMatch[] = []
    let activeScouts: Scout[] = [defaultScout, defaultScout, defaultScout]

    onMount(() => {
        socket = io('ws://localhost:' + PUBLIC_WS_PORT)

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

<h1 class="grid place-content-center text-3xl m-4">Admin Panel</h1>

<div class="grid grid-cols-2 grid-rows-2 gap-3 m-4">
    <AdminRobots on:message={handleMessage} />
    <QueuedTeamMatches bind:teamMatches={currentTeamMatches} />
    <!-- Queued Team Matches -->
    <TeamMatchesBacklog bind:team_match_backlog={completedTeamMatches} />
    <ScoutList {activeScouts} />
</div>
