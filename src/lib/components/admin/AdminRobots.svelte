<script lang="ts">
    import type { MatchKey, TeamKey } from "$lib/types";
    import { match } from "assert";
    import { io } from "socket.io-client"
    import { createEventDispatcher, onDestroy, onMount } from "svelte";

    let red_robots: TeamKey[]
    let blue_robots: TeamKey[]
    let match_key: MatchKey
    let socket: any

    const dispatch = createEventDispatcher()
    
    onMount(() => {
        socket = io()
        
        socket.on('hiFromServer', () => {
            console.log("heyo")
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


<div class="grid grid-cols-2, grid-rows-2 rounded outline">
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
</div>