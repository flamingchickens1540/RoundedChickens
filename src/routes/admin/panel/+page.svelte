<script lang="ts">
    import { type FixedLengthArray, type MatchKey, type TeamMatch, type TeamKey, type Scout, defaultScout } from "$lib/types";
    import TeamMatchesBacklog from "$lib/components/admin/backlog/TeamMatchesBacklog.svelte";
    import QueuedTeamMatches from "$lib/components/admin/queue/QueuedTeamMatches.svelte";
    import AdminRobots from "$lib/components/admin/AdminRobots.svelte";
    import ScoutList from "$lib/components/admin/scouts/ScoutList.svelte";
    // todo: get all of these imported via api requests probably
    let teamMatches: TeamMatch[] = [
            {team_key:"frc1425", match_key:"2023orbb_qm67", scout_name:"Crow", scout_id:"", data: null},
            {team_key:"frc1425", match_key:"2023orbb_qm67", scout_name:"Crow", scout_id:"", data: null},
            {team_key:"frc1425", match_key:"2023orbb_qm67", scout_name:"Crow", scout_id:"", data: null},
            {team_key:"frc1425", match_key:"2023orbb_qm67", scout_name:"Crow", scout_id:"", data: null},
            {team_key:"frc1425", match_key:"2023orbb_qm67", scout_name:"Crow", scout_id:"", data: null},
            {team_key:"frc1425", match_key:"2023orbb_qm67", scout_name:"Crow", scout_id:"", data: null}
        ];
    let robots: string[][];
    let activeScouts: Scout[] = [
        defaultScout,
        defaultScout,
        defaultScout
    ]
    
</script>

<h1 class="grid place-content-center text-3xl m-4">Admin Panel</h1>

<div class="grid grid-cols-2 grid-rows-2 gap-3 m-4">
    <AdminRobots bind:robots={robots}/>
    <QueuedTeamMatches teamMatches={teamMatches}/>
    <!-- Queued Team Matches -->
    <TeamMatchesBacklog team_match_backlog={teamMatches}/>
    <ScoutList activeScouts={activeScouts}/>
</div>