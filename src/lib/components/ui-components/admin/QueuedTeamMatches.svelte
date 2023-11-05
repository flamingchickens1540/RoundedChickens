<script lang="ts">
    import type { MatchKey, TeamKey } from "$lib/types";
    import QueuedTeamMatch from "./QueuedTeamMatch.svelte";
    let teamMatches: {team_key: TeamKey, match_key: MatchKey, scout_name: string}[] = []
</script>
<div class="grid grid-rows-7 grid-cols-2">
    <h3>Queued Team Matches</h3>
    {#each teamMatches as teamMatch}
        <QueuedTeamMatch match_key={teamMatch.match_key} team_key={teamMatch.team_key} scout_name={teamMatch.scout_name}></QueuedTeamMatch>
    {/each}
    </div>