<script lang="ts">
    import type { MatchKey, TeamKey, QueueTeamMatch } from "$lib/types";
    import QueuedTeamMatch from "./QueuedTeamMatch.svelte";
    export let teamMatches: QueueTeamMatch[]; // think about where this data should really come from
</script>
<div class="grid grid-rows-4 grid-cols-2 outline">
    <h3 class="grid place-content-center col-span-2">Queued Team Matches</h3>
    {#each teamMatches as teamMatch}
        <QueuedTeamMatch match_key={teamMatch.match_key} team_key={teamMatch.team_key} scout_name={teamMatch.scout_name}/>
    {/each}
</div>