<script lang="ts">
    import type { TeamMatch } from "$lib/types";

    export let team_match: TeamMatch;
</script>

<div class="grid grid-cols-3 grid-rows-1 place-items-center p-2 outline rounded">
    <div>{team_match.match_key}</div>
    <div>{team_match.team_key}</div>
    {#if team_match != null}
        <div class="grid place-items-center bg-green-500 rounded p-1">Complete</div>
    {:else}
        <div class="grid place-items-center bg-red-500 rounded p-1">Waiting</div>
    {/if}
</div>