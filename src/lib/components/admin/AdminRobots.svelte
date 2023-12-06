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


<div class="grid grid-cols-2 grid-rows-3 dark:bg-[#2C2C2C] bg-[#D9D9D9] rounded-lg">
    <div class="grid grid-cols-1 grid-rows-4 row-span-2 justify-center content-center dark:bg-[#1C1C1C] bg-[#C2C2C2] dark:text-white text-black rounded-3xl ml-3 mr-3 mt-3">
        <div class="grid place-content-center text-2xl font-black">Red Robots</div>
        <input class=" m-2 text-center dark:bg-[#a70019] bg-[#ff848c] rounded-2xl text-2xl font-black" type="text" name="" id="red1" bind:value={robots[0][0]}>
        <input class=" m-2 text-center dark:bg-[#a70019] bg-[#ff848c] rounded-2xl text-2xl font-black" type="text" name="" id="red2" bind:value={robots[0][1]}>
        <input class=" m-2 text-center dark:bg-[#a70019] bg-[#ff848c] rounded-2xl text-2xl font-black" type="text" name="" id="red3" bind:value={robots[0][2]}>
    </div>
    
    <div class="grid grid-cols-1 grid-rows-4 row-span-2 justify-center content-center dark:bg-[#1C1C1C] bg-[#C2C2C2] dark:text-white text-black rounded-3xl ml-3 mr-3 mt-3">
        <div class="grid place-content-center text-2xl font-black">Blue Robots</div>
        <input class=" m-2 text-center dark:bg-[#00497b] bg-[#6eb0d7] rounded-2xl text-2xl font-black" type="text" name="" id="blue1" bind:value={robots[1][0]}>
        <input class=" m-2 text-center dark:bg-[#00497b] bg-[#6eb0d7] rounded-2xl text-2xl font-black" type="text" name="" id="blue2" bind:value={robots[1][1]}>
        <input class=" m-2 text-center dark:bg-[#00497b] bg-[#6eb0d7] rounded-2xl text-2xl font-black" type="text" name="" id="blue3" bind:value={robots[1][2]}>
    </div>
    
    <div class="col-span-2 m-3 grid dark:bg-[#1C1C1C] bg-[#C2C2C2] rounded-3xl grid-cols-2 grid-rows-2 dark:text-white text-black">
        <p class="grid text-left text-2xl font-black mt-1 ml-3">Match Key</p>
        <div class="text-center grid gap-4 grid-cols-1 grid-rows-4">
            <p>qm = quals</p>
            <p>fm = finals</p>
            <p>rp = replay</p>
            <p>pm = practice</p>
        </div>
        <input class="grid text-center dark:bg-[#2C2C2C] bg-[#D9D9D9] rounded-2xl text-2xl font-black mb-2 ml-3" />
    </div>

    <div class="col-span-2 ml-3 mr-3 mb-3 h-14 text-3xl font-black" >
        <Button>Create Match</Button>
    </div>
</div>

<style>
     
</style>