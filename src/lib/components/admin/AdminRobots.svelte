<script lang="ts">
    import type { FixedLengthArray } from "$lib/types";

    export let robots: string[][] = [[]];
    $: {
        if (robots.length < 2) {
            robots = [Array(3).fill(''), Array(3).fill('')];
        }
    }

    import Button from "$lib/components/utils/Button.svelte";
</script>


<div class="grid grid-cols-2 grid-rows-2 dark:bg-[#2C2C2C] bg-[#D9D9D9] rounded-lg">
    <div class="grid grid-cols-1 grid-rows-4 content-center bg-red-500 bg-opacity-10 outline rounded m-3">
        <div class="grid place-content-center">Red Robots</div>
        <input class="outline m-2 rounded" type="text" name="" id="red1" bind:value={robots[0][0]}>
        <input class="outline m-2 rounded" type="text" name="" id="red2" bind:value={robots[0][1]}>
        <input class="outline m-2 rounded" type="text" name="" id="red3" bind:value={robots[0][2]}>
    </div>
    
    <div class="grid grid-cols-1 grid-rows-4 content-center bg-blue-500 bg-opacity-10 outline rounded m-3">
        <div class="grid place-content-center Poppins">Blue Robots</div>
        <input class="outline m-2 rounded" type="text" name="" id="blue1" bind:value={robots[1][0]}>
        <input class="outline m-2 rounded" type="text" name="" id="blue2" bind:value={robots[1][1]}>
        <input class="outline m-2 rounded" type="text" name="" id="blue3" bind:value={robots[1][2]}>
    </div>
    
    <div class="bg-slate-500 bg-opacity-10 col-span-2 outline rounded m-3">
        <p class="grid place-content-center">Match Key</p>
    </div>

    <div class="col-span-2 m-3 h-14 text-3xl font-black" >
        <Button>Create Match</Button>
    </div>
</div>

<style>
     
</style>