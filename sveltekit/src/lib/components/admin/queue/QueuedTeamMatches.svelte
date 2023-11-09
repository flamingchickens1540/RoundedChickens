<script lang="ts">
    import type { MatchKey, TeamKey, TeamMatch } from "$lib/types";
    import QueuedTeamMatch from "./QueuedTeamMatch.svelte";
    export let teamMatches: TeamMatch[]; // think about where this data should really come from
</script>
<div class="grid grid-flow-row grid-cols-2 outline rounded bg-slate-600">
    <div class="grid place-content-center col-span-2">Queued Team Matches</div>
    {#each teamMatches as teamMatch}
        <QueuedTeamMatch match_key={teamMatch.match_key} team_key={teamMatch.team_key} scout_name={teamMatch.scout_name}/>
    {/each}
</div>