<script lang="ts">
    import type { Scout } from "$lib/types";

    export let activeScouts: Scout[];
</script>

<div class="lastMatchText dark:bg-[#2C2C2C] bg-[#D9D9D9] rounded-lg h-full scroller shadow-lg">
    {#each activeScouts as scout}
        <div class="grid grid-rows-1 grid-cols-2 p-4 m-4 dark:text-white text-black dark:bg-[#1C1C1C] bg-[#D9D9D9] rounded-3xl">
            <div>{scout.name}</div>
            {#if scout.is_assigned}
                <div class="grid place-content-center bg-green-500 rounded p-2">Assigned</div>
            {:else}
                <div class="grid place-content-center bg-red-500 rounded p-2">Waiting</div>  
            {/if}
            
        </div>
    {/each}
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