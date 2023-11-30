<script lang="ts">
    import type { MatchKey, TeamKey, TeamMatch } from "$lib/types";
    import QueuedTeamMatch from "./QueuedTeamMatch.svelte";
    export let teamMatches: TeamMatch[]; // think about where this data should really come from
    import Button from "$lib/components/utils/Button.svelte";
</script>
<div class="dark:bg-[#2C2C2C] bg-[#D9D9D9] rounded-lg h-full">
    <div class="grid grid-flow-row grid-cols-2 overflow-scroll queuedMatches">
        {#each teamMatches as teamMatch}
                <QueuedTeamMatch match_key={teamMatch.match_key} team_key={teamMatch.team_key} scout_name={teamMatch.scout_name}/>
        {/each}
    
    </div>
    <div class="col-span-2 h-14 text-3xl font-black align-bottom m-2" >
        <Button><span class="text-green-500">+1</span> Team Match</Button>
    </div>
</div>

<style>
    .queuedMatches {
        overflow-y: auto;
        overflow: scroll;

    }
</style>
