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
    // todo: get all of these imported via api requests probably
    // TODO: Should the teammatches be created by the admin?
    
    let socket: any;

    onMount(() => {
        socket = io()

        socket.on('connection', () => {
            socket.on('completed_team_match_to_admin', (team_match: TeamMatch) => {

            })
        })
    })

    let completedTeamMatches: TeamMatch[] = [defaultTeamMatch, defaultTeamMatch, defaultTeamMatch, defaultTeamMatch, defaultTeamMatch, defaultTeamMatch]
    let activeScouts: Scout[] = [defaultScout, defaultScout, defaultScout]

    function handleMessage(event: any) {
        teamMatches.forEach((team_match) => 
            team_match.match_key = event.detail.key)
        
        teamMatches[0].team_key = event.detail.red_robots[0]
        teamMatches[1].team_key = event.detail.red_robots[1]
        teamMatches[2].team_key = event.detail.red_robots[2]
        teamMatches[3].team_key = event.detail.blue_robots[0]
        teamMatches[4].team_key = event.detail.blue_robots[1]
        teamMatches[5].team_key = event.detail.blue_robots[2]
    }

    

    // Reactive blocks can be used for sending io events from the client
</script>

<h1 class="grid place-content-center text-3xl m-4">Admin Panel</h1>

<div class="grid grid-cols-2 grid-rows-2 gap-3 m-4">
    <AdminRobots on:message={handleMessage} />
    <QueuedTeamMatches {teamMatches} />
    <!-- Queued Team Matches -->
    <TeamMatchesBacklog bind:team_match_backlog={teamMatches} />
    <ScoutList {activeScouts} />
</div>
