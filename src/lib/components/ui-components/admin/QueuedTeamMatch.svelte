<script lang="ts">
    import type { MatchKey, TeamKey } from "$lib/types";
    export let match_key: MatchKey;
    export let team_key: TeamKey;
    export let scout_name: string;
</script>

<div class="grid grid-rows-2 grid-cols-2 row-span-2">
    <!-- Delete Button -->
    <button>X</button>
    <h4>Key: {match_key}</h4>
    <h4>Team: {team_key}</h4>
    <div>{scout_name}</div>
</div>