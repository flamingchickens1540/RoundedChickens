<script lang="ts">
    import type { FixedLengthArray, MatchKey, TeamMatch, TeamKey } from "$lib/types";
    import TeamMatchBacklog from "$lib/components/admin/TeamMatchBacklog.svelte";
    import QueuedTeamMatches from "$lib/components/admin/QueuedTeamMatches.svelte";
    import AdminRobots from "$lib/components/admin/AdminRobots.svelte";
    import Matches from "$lib/components/IDK/Matches.svelte";

    let teamMatches: TeamMatch[] = [
            {team_key:"frc1425", match_key:"2023orbb_qm67", scout_name:"Crow", scout_id:"", data: null},
            {team_key:"frc1425", match_key:"2023orbb_qm67", scout_name:"Crow", scout_id:"", data: null},
            {team_key:"frc1425", match_key:"2023orbb_qm67", scout_name:"Crow", scout_id:"", data: null},
            {team_key:"frc1425", match_key:"2023orbb_qm67", scout_name:"Crow", scout_id:"", data: null},
            {team_key:"frc1425", match_key:"2023orbb_qm67", scout_name:"Crow", scout_id:"", data: null},
            {team_key:"frc1425", match_key:"2023orbb_qm67", scout_name:"Crow", scout_id:"", data: null}];
    let robots: string[][] = [[], []]
    
</script>

<h1 class="grid place-content-center text-3xl m-4">Admin Panel</h1>

<div class="grid grid-cols-2 grid-rows-2 gap-3 m-4">
    <AdminRobots bind:robots={robots}/>
    <QueuedTeamMatches teamMatches={teamMatches}/>
    <!-- Queued Team Matches -->
    <TeamMatchBacklog team_match_backlog={teamMatches}/>
</div>