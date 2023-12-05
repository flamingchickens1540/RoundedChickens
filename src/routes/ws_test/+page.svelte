<script lang="ts">

import Thanks from "$lib/components/Thanks.svelte"
import { onMount, onDestroy } from 'svelte'
import { scout } from "$lib/stores/stores" // path to scout store
import { io } from "socket.io-client"
import type { TeamKey } from "$lib/types";
    import { PUBLIC_WS_PORT } from "$env/static/public";

let team_key: TeamKey;
let socket: any;

onMount(() => {
    console.log("here") 
    socket = io("ws://localhost:" + PUBLIC_WS_PORT)

    socket.on('hiFromServer', () => {
        console.log("heyo")
    })

    socket.on('assign_team', (data: { team: TeamKey }) => {
        team_key = data.team
    })

})

onDestroy(() => {
    if (socket) {
        socket.disconnect();
    }
  });

function request_match() {
    socket.emit('scout_req_team', $scout.id)
}

// Submission via ws can be done with a different connection from the Submit.svelte element
// The client must tell the ws-server that it submitted so the manager can free the user(or we ignore users)
// Either the client emits to the ws-server and the backend, or the ws-server handles the backend submission

</script>

<div class="grid grid-rows-1 grid-cols-1 place-items-center">
    <button on:click={request_match} class="outline text-white">WS</button>
</div>
<!-- TODO: Here we need the carousel, which I don't think works yet -->
<!-- <Thanks/>/ -->
