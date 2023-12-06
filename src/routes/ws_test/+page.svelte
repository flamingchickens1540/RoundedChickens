<script lang="ts">
    export let data

    let { session } = data

    import Thanks from "$lib/components/Thanks.svelte"
    import { onMount, onDestroy } from 'svelte'
    import { scout } from "$lib/stores/stores" // path to scout store
    import { io } from "socket.io-client"
    import { defaultTeamMatch, type TeamKey } from "$lib/types";
        import { PUBLIC_WS_URL } from "$env/static/public";

    let team_key: TeamKey;
    let socket: any;

    onMount(() => {
        console.log("here")
        socket = io(PUBLIC_WS_URL)

        socket.on('hiFromServer', () => {
            console.log("Client connected to ws server")
        })

        socket.on('assign_team', (team: TeamKey ) => {
            console.log(team)
        })
    })

    onDestroy(() => {
        if (socket) {
            socket.disconnect();
        }
    });

    function request_match() {
        socket.emit('scout_req_team', session?.user.id as string)
    }

    function submit_match() {
        socket.emit('scout_submit_team', {
            team_match: defaultTeamMatch,
            scout_id: "crow",
        })
    }

    // Submission via ws can be done with a different connection from the Submit.svelte element
    // The client must tell the ws-server that it submitted so the manager can free the user(or we ignore users)
    // Either the client emits to the ws-server and the backend, or the ws-server handles the backend submission

</script>

<div class="grid grid-rows-1 grid-cols-1 place-items-center gap-3">
    <button on:click={request_match} class="outline text-white">REQUEST MATCH</button>
    <button on:click={submit_match} class="outline text-white">SUBMIT</button>
</div>
<!-- TODO: Here we need the carousel, which I don't think works yet -->
<!-- <Thanks/>/ -->
