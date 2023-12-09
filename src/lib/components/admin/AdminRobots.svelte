<script lang="ts">
    import { PUBLIC_WS_URL } from "$env/static/public";
    import type { MatchKey, TeamKey } from "$lib/types";
    import { io } from "socket.io-client"
    import { createEventDispatcher, onDestroy, onMount } from "svelte";
    import Button from "$lib/components/utils/Button.svelte";


    // export let robots: string[][] = [[]];
    
    let red_robots: TeamKey[] = []
    let blue_robots: TeamKey[] = []
    let match_key: MatchKey
    let socket: any

    const dispatch = createEventDispatcher()
    
    onMount(() => {
        console.log('here')
        socket = io(PUBLIC_WS_URL)
        
        socket.on('hiFromServer', () => {
            console.log("Admin robots connected to server")
        })
    })

    onDestroy(() => {
        if (socket) {
            socket.disconnect();
        }
    });

    function createMatch() {
        socket.emit('admin_create_match', { red_robots, blue_robots })

        dispatch('new_match', {
            key: match_key,
            red_robots: red_robots,
            blue_robots: blue_robots
        })
    }
</script>


<div class="grid grid-cols-2 grid-rows-3 dark:bg-[#2C2C2C] bg-[#D9D9D9] rounded-lg">
    <div class="grid grid-cols-1 grid-rows-4 row-span-2 justify-center content-center dark:bg-[#1C1C1C] bg-[#C2C2C2] dark:text-white text-black rounded-3xl ml-3 mr-3 mt-3">
        <div class="grid place-content-center text-2xl font-black">Red Robots</div>
        <input class=" m-2 text-center dark:bg-[#a70019] bg-[#ff848c] rounded-2xl text-2xl font-black" type="text" name="" id="red1" bind:value={red_robots[0]}>
        <input class=" m-2 text-center dark:bg-[#a70019] bg-[#ff848c] rounded-2xl text-2xl font-black" type="text" name="" id="red2" bind:value={red_robots[1]}>
        <input class=" m-2 text-center dark:bg-[#a70019] bg-[#ff848c] rounded-2xl text-2xl font-black" type="text" name="" id="red3" bind:value={red_robots[2]}>
    </div>
    
    <div class="grid grid-cols-1 grid-rows-4 row-span-2 justify-center content-center dark:bg-[#1C1C1C] bg-[#C2C2C2] dark:text-white text-black rounded-3xl ml-3 mr-3 mt-3">
        <div class="grid place-content-center text-2xl font-black">Blue Robots</div>
        <input class=" m-2 text-center dark:bg-[#00497b] bg-[#6eb0d7] rounded-2xl text-2xl font-black" type="text" name="" id="blue1" bind:value={blue_robots[0]}>
        <input class=" m-2 text-center dark:bg-[#00497b] bg-[#6eb0d7] rounded-2xl text-2xl font-black" type="text" name="" id="blue2" bind:value={blue_robots[1]}>
        <input class=" m-2 text-center dark:bg-[#00497b] bg-[#6eb0d7] rounded-2xl text-2xl font-black" type="text" name="" id="blue3" bind:value={blue_robots[2]}>
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
        <Button lambda={createMatch}>Create Match</Button>
    </div>
</div>

<!-- <div class="grid grid-cols-2, grid-rows-2 rounded outline">
    <div class="grid grid-cols-1 grid-rows-4 content-center bg-red-500 bg-opacity-10 outline rounded m-3">
        <div class="grid place-content-center">Red Robots</div>
        <input class="outline m-2 rounded" type="text" name="" id="red1" bind:value={red_robots[0]}>
        <input class="outline m-2 rounded" type="text" name="" id="red2" bind:value={red_robots[1]}>
        <input class="outline m-2 rounded" type="text" name="" id="red3" bind:value={red_robots[2]}>
    </div>
    
    <div class="grid grid-cols-1 grid-rows-4 content-center bg-blue-500 bg-opacity-10 outline rounded m-3">
        <div class="grid place-content-center">Blue Robots</div>
        <input class="outline m-2 rounded" type="text" name="" id="blue1" bind:value={blue_robots[0]}>
        <input class="outline m-2 rounded" type="text" name="" id="blue2" bind:value={blue_robots[1]}>
        <input class="outline m-2 rounded" type="text" name="" id="blue3" bind:value={blue_robots[2]}>
    </div>
    
    <div class="bg-slate-500 bg-opacity-10 col-span-2 outline rounded m-3">
        <span>Match Key</span>
        <input bind:value={match_key} class="outline m-2 rounded" />
    </div>

    <div on:click={createMatch}>Create Match</div>
</div> -->
