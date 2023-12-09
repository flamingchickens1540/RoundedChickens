<script lang="ts">
    import { Match } from "flock-ui";
    import TeamNumber from "./TeamNumber.svelte";

    export let subHeader : number | string[];
    export let redAlliance : string[];
    export let blueAlliance : string[];
</script>

<div 
style="
background-color: white;
border-radius: 20px;
width: fit-content;
padding: 10px;
"
>
    <Match subHeader={subHeader} redAlliance={redAlliance} blueAlliance={blueAlliance} let:alliance let:teamNumber>
        <svelte:fragment slot="header">
            {subHeader}
        </svelte:fragment>

        <svelte:fragment slot="comingUpHeader">
            Coming up...
        </svelte:fragment>

        <svelte:fragment slot="gameStartsIn">
            Game starts in {subHeader}m
        </svelte:fragment>

        <TeamNumber alliance={alliance} teamNumber={teamNumber}></TeamNumber>
    </Match>
</div>