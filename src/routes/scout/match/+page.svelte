<script lang="ts">
    export let data
    let { session } = data

    import { enhance } from "$app/forms";
    import { onMount, onDestroy } from 'svelte'
    import { io } from "socket.io-client"
    import type { TeamKey } from "$lib/types";
    import { PUBLIC_WS_URL } from "$env/static/public";
    import { match } from "$lib/stores/stores";
    
    let socket: any;

    onMount(() => {
        console.log("here")
        socket = io(PUBLIC_WS_URL)
        
        socket.emit('scout_req_team', session?.user.id as string)
        console.log("here")
        socket = io(PUBLIC_WS_URL)

        socket.on('hiFromServer', () => {
            console.log("Client connected to ws server")
        })

        socket.on('assign_team', (team: TeamKey ) => {
            $match.team_key = team
            console.log(team)
        })
    })

    onDestroy(() => {
        if (socket) {
            socket.disconnect();
        }
    });

    function handleSubmit(formData: FormData) {
        formData.append("team_key", $match.team_key);
        formData.append("match_key", $match.match_key);
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
    }
</script>

<h1>Match Scout</h1>

<<<<<<< HEAD
<CatlystCarousel style="height:200px" speed={2} snapSeconds={0.2} shouldSnap={true}>
    <div>test 1</div>
    <div>test 2</div>
</CatlystCarousel> 
=======
    import HybridLocation from "$lib/components/scouting/match/hybrid/HybridLocation.svelte";
    import HybridShots from "$lib/components/scouting/match/hybrid/HybridShots.svelte";
    import Teleop from "$lib/components/Leaderboard.svelte"
    import type { Positions } from "$lib/types";
    let hybrid_position: Positions;
</script>
>>>>>>> f6ba2158ea86986650dc2fe1e84d4c2ea9ba2a9d
=======
<!-- TODO: add components here -->

<form
    method="post"
    use:enhance={({ formData }) => {
        handleSubmit(formData);
    }}
>
    <button type="submit">Submit</button>
</form>
>>>>>>> e78f3225c56d15ce3aab9fa4dc2420575c05381c
