<script lang="ts">
    import type { MatchKey, TeamKey } from "$lib/types";
    export let match_key: MatchKey;
    export let team_key: TeamKey;
    export let scout_name: string;
</script>

<div class="grid grid-rows-2 grid-cols-7 outline place-content-center rounded m-3 bg-slate-500">
    <div class="col-span-7 grid place-content-center">Key: {match_key}</div>
    <!-- <button class="grid place-content-center outline m-2 bg-red-600 rounded">X</button> -->
    <div class="grid place-content-center col-span-4">Team: {team_key}</div>
    <div class="grid place-content-center col-span-2 rounded bg-purple-500 align-middle m-2">{scout_name}</div>
</div>