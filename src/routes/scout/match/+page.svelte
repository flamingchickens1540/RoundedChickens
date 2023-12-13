<script lang="ts">
    export let data
    let { session } = data
    
    import Teleop from "$lib/components/Teleop.svelte";
    import Endgame from "$lib/components/scouting/match/endgame/Endgame.svelte";
    import Hybrid from "$lib/components/scouting/match/hybrid/Hybrid.svelte";
    import { enhance } from "$app/forms";
    import { onMount, onDestroy } from 'svelte'
    import { Socket, io } from "socket.io-client"
    import type { Scout, TeamKey } from "$lib/types";
    import { PUBLIC_WS_URL } from "$env/static/public";
    import { match } from "$lib/stores/stores";
    import type { DefaultEventsMap } from "socket.io/dist/typed-events.js";
    import Siema from 'siema';
    
    let socket: Socket<DefaultEventsMap, DefaultEventsMap>

    let scout: Scout = {
        id: session?.user.id! as `${string}-${string}-${string}-${string}-${string}`,
        name: session?.user.user_metadata.name,
        is_assigned: false
    }

    onMount(() => {

        new Siema({
            selector: '.siema',
            duration: 200,
            easing: 'ease-in-out',
            perPage: 1,
            startIndex: 0,
            draggable: true,
            multipleDrag: false,
            threshold: 20,
            loop: false,
            rtl: false,
            onInit: () => {},
            onChange: () => {},
        })
        socket = io(PUBLIC_WS_URL)

        socket.on('connect', () => {
            console.log("Client connected to ws server")
        })

        socket.on('assign_team', (team: TeamKey) => {
            $match.keys.team_key = team
            console.log("Assigned to team: " + team)
        })
        
        // supabase id
        socket.emit('scout_req_team', scout)
        
        // const beforeUnloadHandler = (event: any) => {
        //     event.preventDefault()
        //     event.returnVaue = true
        //     alert("Please scout your match")
        //     return "Bad Scout"
        // }
        // window.addEventListener("beforeunload", beforeUnloadHandler)
    })

    onDestroy(() => {
        if (socket) {
            socket.disconnect();
        }
    });

    function handleSubmit(formData: FormData) {
        $match.keys.team_key = "frc0" // this is the default nothing value ig
        console.log("submit data")
        socket.emit('scout_submitted_match')
        formData.append("team_key", $match.keys.team_key);
        formData.append("match_key", $match.keys.match_key);
        formData.append("fielded", `${($match.data?.fielded)}`); //must be string due to formdata limitations
        formData.append("hybrid_start_location", `${$match.data?.hybrid.hybrid_location}`); //must be string due to formdata limitations
        formData.append("hybrid_shots_hit", `${$match.data?.hybrid.shots_hit}`); //must be string due to formdata limitations
        formData.append("hybrid_shots_missed", `${$match.data?.hybrid.shots_missed}`); //must be string due to formdata limitations
        formData.append("hybrid_disabled", `${$match.data?.hybrid.disabled}`); //must be string due to formdata limitations
        formData.append("hybrid_bunnies_scored", `${$match.data?.hybrid.bunnies_scored}`); //must be string due to formdata limitations
        formData.append("hybrid_taxi", `${$match.data?.hybrid.taxi}`); //must be string due to formdata limitations
        formData.append("tele_shots_hit", `${$match.data?.tele.shots_hit}`); //must be string due to formdata limitations
        formData.append("tele_shots_missed", `${$match.data?.tele.shots_missed}`); //must be string due to formdata limitations
        formData.append("tele_bunnies_scored", `${$match.data?.tele.bunnies_scored}`); //must be string due to formdata limitations
        formData.append("tele_bunnies_stolen", `${$match.data?.tele.bunnies_stolen}`); //must be string due to formdata limitations
        formData.append("tele_times_disabled", `${$match.data?.tele.times_disabled}`); //must be string due to formdata limitations
        formData.append("skill", `${$match.data?.skill}`); //must be string due to formdata limitations
        formData.append("parked", `${$match.data?.parked}`); //must be string due to formdata limitations
        formData.append("broke", `${$match.data?.broke}`); //must be string due to formdata limitations
        formData.append("died", `${$match.data?.died}`); //must be string due to formdata limitations
        formData.append("notes", `${$match.data?.notes}`);
        location.reload()
    }
</script>

<div class="grid place-items-center border text-white">
    {#if $match.keys.team_key == "frc0"}
        <div class="grid place-items-center border">
            Match Not Avaliable
        </div>
        <div class="siema"></div> <!--Scuffed but nessesary-->
    {:else}
        <div class="grid place-items-center">Team: {$match.keys.team_key}</div>
        <div class="siema">
            <div style="padding-left:3vh;padding-right:3vh;">
                <Hybrid />
            </div>
            <div style="padding-left:3vh;padding-right:3vh;">
                <Teleop />
            </div>
            <div style="padding-left:3vh;padding-right:3vh;">
                <Endgame />
            </div>
            
            <form
                style="padding-left:3vh;padding-right:3vh;"
                method="post"
                use:enhance={({ formData }) => {
                    handleSubmit(formData);
                }}
            >
                <button class="grid place-items-center rounded-md border" type="submit">Submit</button>
            </form>
        </div>
    {/if}
</div>


<style>
    div {
        font-size:x-large;
        /* min-width: 500px;
        max-width: 500px; */
        color: white;
    }
</style>
