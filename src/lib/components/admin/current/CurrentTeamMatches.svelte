<script lang="ts">
    import type { TeamMatch, TeamMatchKeys } from "$lib/types";
    import CurrentTeamMatch from "./CurrentTeamMatch.svelte";
    export let teamMatches: { keys: TeamMatchKeys, scout_name: string }[]; // think about where this data should really come from
</script>
<div class="grid dark:bg-[#2C2C2C] bg-[#D9D9D9] rounded-lg h-full">
    <div class="grid grid-rows-3 grid-cols-2 gap-2 overflow-scroll queuedMatches">
        {#each teamMatches as teamMatch}
                <CurrentTeamMatch match_key={teamMatch.keys.match_key} team_key={teamMatch.keys.team_key} scout_name={teamMatch.scout_name}/>
        {/each}
    
    </div>
    <!-- <div class="grid place-items-center col-span-2 h-14 text-3xl font-black align-bottom m-2" >
        <Button><span class="text-green-500">+1</span> Team Match</Button>
    </div> -->
</div>

<style>
    .queuedMatches {
        overflow-y: auto;
        overflow: scroll;
    }
</style>
