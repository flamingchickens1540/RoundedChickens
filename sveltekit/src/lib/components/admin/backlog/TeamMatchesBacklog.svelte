<script lang="ts">
    import type { TeamMatch } from "$lib/types";
    import TeamMachLogged from "./TeamMachLogged.svelte";
    import Scroller from "$lib/components/utils/Scroller.svelte";

    export let team_match_backlog: TeamMatch[];
    let index: number, offset: number, progress: number;
    let top = 0.1;
	let threshold = 0.5;
	let bottom = 0.9;
</script>

<Scroller {top} {threshold} {bottom} bind:index bind:offset bind:progress>
    <div class="grid gap-3" slot="foreground">
        {#each team_match_backlog as team_match}
            <TeamMachLogged team_match={team_match}/>
        {/each}
    </div>
</Scroller>