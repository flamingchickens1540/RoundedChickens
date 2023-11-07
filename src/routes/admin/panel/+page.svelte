<script lang="ts">
    import type { FixedLengthArray, MatchKey, QueueTeamMatch, TeamKey } from "$lib/types";
    import QueuedTeamMatches from "$lib/components/ui-components/admin/QueuedTeamMatches.svelte";
    // import QueuedTeamMatch from "$lib/components/ui-components/admin/QueuedTeamMatch.svelte";
    let robots: FixedLengthArray<[
        [string, string, string], // red
        [string, string, string] // blue
    ]> = [["","",""],["","",""]]
    let teamMatches: QueueTeamMatch[] = [
            {team_key:"frc1425", match_key:"2023orbb_qm67", scout_name:"Crow"},
            {team_key:"frc1425", match_key:"2023orbb_qm67", scout_name:"Crow"},
            {team_key:"frc1425", match_key:"2023orbb_qm67", scout_name:"Crow"},
            {team_key:"frc1425", match_key:"2023orbb_qm67", scout_name:"Crow"},
            {team_key:"frc1425", match_key:"2023orbb_qm67", scout_name:"Crow"},
            {team_key:"frc1425", match_key:"2023orbb_qm67", scout_name:"Crow"}];
</script>

<h1>Admin Panel</h1>

<div class="grid grid-cols-2 grid-rows-2">
    <div class="grid grid-cols-2, grid-rows-2">
        <div class="grid grid-cols-1 grid-rows-4 content-center bg-red-500 bg-opacity-10 outline">
            <h3 class="">Red Robots</h3>
            <input class="outline m-2" type="text" name="" id="red1" bind:value={robots[0][0]}>
            <input class="outline m-2" type="text" name="" id="red2" bind:value={robots[0][1]}>
            <input class="outline m-2" type="text" name="" id="red3" bind:value={robots[0][2]}>
        </div>
        
        <div class="grid grid-cols-1 grid-rows-4 content-center bg-blue-500 bg-opacity-10 outline">
            <h3>Blue Robots</h3>
            <input class="outline m-2" type="text" name="" id="blue1" bind:value={robots[1][0]}>
            <input class="outline m-2" type="text" name="" id="blue2" bind:value={robots[1][1]}>
            <input class="outline m-2" type="text" name="" id="blue3" bind:value={robots[1][2]}>
        </div>
        
        <div class="bg-slate-500 bg-opacity-10 col-span-2 outline">
            <h3>Match Key</h3>
        </div>
    </div>
    <QueuedTeamMatches teamMatches={teamMatches}/>
    <!-- Queued Team Matches -->
</div>