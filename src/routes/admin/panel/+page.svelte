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
<div class="mainContainer">
    <div class="grid grid-cols-2 grid-rows-2 gap-3 h-screen">
        <AdminRobots bind:robots={robots}/>
        <QueuedTeamMatches teamMatches={teamMatches}/>
        <!-- Queued Team Matches -->
        <div class="teamMatchesBacklogHolder">
            <TeamMatchesBacklog team_match_backlog={teamMatches}/>
        </div>
        <div class="grid grid-cols-2 grid-rows-1 gap-3 scoutListButtonHolder">
            <ScoutList activeScouts={activeScouts}/>
            <ScoutList activeScouts={activeScouts}/>
        </div>
    </div>
</div>

<style>
    .teamMatchesBacklogHolder {
        height:50%;
    }
    .scoutListButtonHolder {
        height: 92%;
    }
    .mainContainer {
        margin: 1rem;
        margin-top: 1vh;
        margin-bottom: 1vh;
        height: 96vh;
        width: auto;
        place-content: center;
    }
</style>
