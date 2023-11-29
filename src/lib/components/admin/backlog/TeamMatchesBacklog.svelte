<script lang="ts">
    import type { TeamMatch } from "$lib/types";
    import TeamMachLogged from "./TeamMachLogged.svelte";
    import Scroller from "$lib/components/utils/Scroller.svelte";

    export let team_match_backlog: TeamMatch[];
    let index: number, offset: number, progress: number;
    let top = 0.1;
	let threshold = 0.5;
	let bottom = 0.5;
</script>
<div class="grid grid-col-1 outline rounded">
    <div class="lastMatchText">Last match:
        {#if team_match_backlog.length > 0}
            {team_match_backlog[team_match_backlog.length - 1].match_key}
        {:else}
            No matches logged
        {/if}
    </div>

    <div class="overflow-scroll">
        <Scroller {top} {threshold} {bottom} bind:index bind:offset bind:progress>
            <div class="grid gap-3 m-3" slot="foreground">
                {#each team_match_backlog as team_match}
                    <TeamMachLogged team_match={team_match}/>
                {/each}
            </div>
        </Scroller>
    </div>
</div>

<style>
    .lastMatchText {
        font-size: 2rem;
        font-family: Poppins;
        font-style:calc(var(--font-style) * 1.5) ;
        font-weight: 600;
        margin-left: 1rem;
    }
</style>