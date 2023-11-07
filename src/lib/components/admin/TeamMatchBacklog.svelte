<script lang="ts">
    import type { QueueTeamMatch } from "$lib/types";
    import TeamMachLogged from "./TeamMachLogged.svelte";

    export let team_match_backlog: QueueTeamMatch[];
</script>

{#each team_match_backlog as team_match}
    <TeamMachLogged team_match={team_match}/>
{/each}