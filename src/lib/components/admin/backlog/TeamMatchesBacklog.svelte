<script lang="ts">
    import type { TeamMatchKeys } from "$lib/types";
    import TeamMachLogged from "./TeamMatchLogged.svelte";

    export let team_match_backlog: TeamMatchKeys[];

</script>
<div class="grid grid-col-1 dark:bg-[rgb(44,44,44)] bg-[#D9D9D9] rounded-lg h-full">
    <div class="lastMatchText dark:text-white text-black">Last match:
        {#if team_match_backlog.length > 0}
            {team_match_backlog[1].match_key}
        {:else}
            No matches logged
        {/if}
    </div>

    <div class="scroller mb-3">
        <div class="grid gap-3 m-3">
            {#each team_match_backlog as team_match}
                <TeamMachLogged team_match={team_match}/>
            {/each}
        </div>
    </div>
</div>

<style>
    .scroller {
        box-sizing: border-box;
        overflow-y: auto;
        overflow: scroll;
    }
    .lastMatchText {
        font-size: 2rem;
        font-style:calc(var(--font-style) * 1.5) ;
        font-weight: 600;
        margin-left: 1rem;
    }
</style>