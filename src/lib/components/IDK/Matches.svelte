<script lang="ts">
    export let header: string;

    export let subHeader: string[];

    export let redAlliance: string[];
    export let blueAlliance: string[];
</script>

<div class="match darkTheme">
    {#if header != undefined}
        <header class="header">
            {header}
        </header>
    {/if}

    {#if typeof subHeader == "string"}
        <div class="subHeader">
            {subHeader}
        </div>
    {:else if typeof subHeader != "undefined"}
        <div class="tags">
            {#each subHeader as tag}
                <div class="tag">
                    {tag}
                </div>
            {/each}
        </div>
    {/if}

    <div class="alliance">
        {#each redAlliance as teamNumber, index}
            <div class="team" style="background-color: red;">
                <!-- slot used so that the team numbers are changeable in admin dashboard -->
                <slot alliance={"red"} teamNumber={teamNumber} index={index}/>
            </div>
        {/each}
    </div>

    <div class="alliance">
        {#each blueAlliance as teamNumber, index}
            <div class="team" style="background-color: blue;">
                <slot alliance={"blue"} teamNumber={teamNumber} index={index}/>
            </div>
        {/each}
    </div>
</div>

<style>
    .subHeader {
        color: white;
    }

    .header {
        color: white;
    }

    .tags {
        flex-direction: row;
        display: flex;
    }

    .alliance {
        flex-direction: row;
        display: flex;
    }

    .team {
        border-radius: 10px;
        width: 50px;
        text-align: center;
    }

    .tag {
        background-color: purple;
        border-radius: 20px;
        padding: 10px;
        width: fit-content;
    }

    .match {
        background-color: white;
        border-radius: 20px;
        width: fit-content;
        padding: 10px;
    }
</style>