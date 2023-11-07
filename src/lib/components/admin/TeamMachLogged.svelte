<script lang="ts">
    import type { TeamMatch } from "$lib/types";

    export let team_match: TeamMatch;
</script>

<div class="grid grid-cols-3 grid-rows-1 place-content-center">
    <div>{team_match.match_key}</div>
    <div>{team_match.team_key}</div>
    {#if team_match != null}
        <div class="bg-green-500">Complete</div>
    {:else}
        <div class="bg-red-500">Waiting</div>
    {/if}
</div>