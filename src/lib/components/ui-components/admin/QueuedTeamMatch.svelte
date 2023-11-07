<script lang="ts">
    import type { MatchKey, TeamKey } from "$lib/types";
    export let match_key: MatchKey;
    export let team_key: TeamKey;
    export let scout_name: string;
</script>

<div class="grid grid-rows-2 grid-cols-7 row-span-2 outline place-content-center">
    <div class="col-span-6 grid place-content-center">Key: {match_key}</div>
    <button class="grid place-content-center outline">X</button> <!-- Delete Button -->
    <div class="grid place-content-center col-span-3">Team: {team_key}</div>
    <div class="grid place-content-center col-span-2 rounded-md bg-purple-500 align-middle m-2">{scout_name}</div>
</div>