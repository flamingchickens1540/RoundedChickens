<script lang="ts">
    import type { TeamMatch } from "$lib/types";

    export let team_match: TeamMatch;
</script>

<div class="grid grid-cols-3 grid-rows-1 place-items-center p-2 dark:bg-[#1C1C1C] bg-[#C2C2C2] dark:text-white Poppins text-black rounded-3xl shadow-lg">
    <div class="dark:text-white text-black text-2xl font-black">{team_match.match_key}</div>
    <div class="dark:text-white text-black text-2xl font-black">{team_match.team_key}</div>
    {#if team_match != null}
        <div class="grid place-items-end bg-[#49A078] rounded-3xl p-2 dark:text-white text-black text-xl font-black">Complete</div>
    {:else}
        <div class="grid place-items-end bg-[#ED1C24] rounded-3xl p-2 dark:text-white text-black text-xl font-black">Waiting</div>
    {/if}
</div>