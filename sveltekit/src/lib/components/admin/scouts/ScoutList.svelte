<script lang="ts">
    import type { Scout } from "$lib/types";

    export let activeScouts: Scout[];
</script>

<div class="grid grid-flow-row grid-col-1 place-items-center p-3 outline rounded">
    {#each activeScouts as scout}
        <div class="grid grid-rows-1 grid-cols-2 outline rounded p-3">
            <div>{scout.name}</div>
            {#if scout.is_assigned}
                <div class="grid place-items-center bg-green-500 rounded p-1">Assigned</div>
            {:else}
                <div class="grid place-items-center bg-red-500 rounded p-1">Waiting</div>  
            {/if}
            
        </div>
    {/each}
</div>