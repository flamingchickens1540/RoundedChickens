<script lang="ts">
    export let data
    let { session } = data
    
    import Teleop from "$lib/components/Teleop.svelte";
    import Endgame from "$lib/components/scouting/match/endgame/Endgame.svelte";
    import Hybrid from "$lib/components/scouting/match/hybrid/Hybrid.svelte";
    import { enhance } from "$app/forms";
    import { onMount, onDestroy } from 'svelte'
    import { Socket, io } from "socket.io-client"
    import { type Scout, type TeamKey, type MatchKey, HybridLocation } from "$lib/types";
    import { PUBLIC_WS_URL } from "$env/static/public";
    import { match } from "$lib/stores/stores";
    import type { DefaultEventsMap } from "socket.io/dist/typed-events.js";
    import { Confetti } from "svelte-confetti";
    import ToggleConfetti from "$lib/components/ToggleConfetti.svelte";
    import ConfettiOnClick from "$lib/components/ConfettiOnClick.svelte";
    import Siema from "siema";
    
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

        socket.on('assign_team', (data: {team_key: TeamKey, match_key: MatchKey}) => {
            $match.keys.team_key = data.team_key
            $match.keys.match_key = data.match_key
            console.log("Assigned to team: " + data.team_key)
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
        console.log("submit data")
        // socket.emit('scout_submitted_match')
        console.log()
        let h_location;
        if ($match.data?.hybrid.location == HybridLocation.CLOSE) {
            h_location = "close"
        } else if ($match.data?.hybrid.location == HybridLocation.MID) {
            h_location = "mid"
        } else {
            h_location = "far"
        }
        formData.append("team_key", $match.keys.team_key);
        formData.append("match_key", $match.keys.match_key);
        formData.append("fielded", `${($match.data?.fielded)}`); //must be string due to formdata limitations
        formData.append("hybrid_start_location", h_location); //must be string due to formdata limitations
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
        formData.append("notes", $match.data?.notes);
        $match.keys.team_key = ""
        location.reload()
    }
</script>

<div class="grid place-items-center text-white" style="height:fit-content;">
    {#if $match.keys.team_key == ""}
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
                use:enhance={(formData) => {
                    handleSubmit(formData.formData);
               }}
            >
                <ToggleConfetti>
                    <button style="margin: auto;" slot="label">
                        <svg width="100%" height="100%" viewBox="0 0 416 207" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_153_1818)">
                            <rect x="4" y="4" width="400.003" height="191" rx="20" fill="url(#paint0_linear_153_1818)"/>
                            <g filter="url(#filter1_d_153_1818)">
                            <path d="M87.8311 132.525C83.9811 132.525 80.5311 131.9 77.4811 130.65C74.4311 129.4 71.9811 127.55 70.1311 125.1C68.3311 122.65 67.3811 119.7 67.2811 116.25H80.9311C81.1311 118.2 81.8061 119.7 82.9561 120.75C84.1061 121.75 85.6061 122.25 87.4561 122.25C89.3561 122.25 90.8561 121.825 91.9561 120.975C93.0561 120.075 93.6061 118.85 93.6061 117.3C93.6061 116 93.1561 114.925 92.2561 114.075C91.4061 113.225 90.3311 112.525 89.0311 111.975C87.7811 111.425 85.9811 110.8 83.6311 110.1C80.2311 109.05 77.4561 108 75.3061 106.95C73.1561 105.9 71.3061 104.35 69.7561 102.3C68.2061 100.25 67.4311 97.575 67.4311 94.275C67.4311 89.375 69.2061 85.55 72.7561 82.8C76.3061 80 80.9311 78.6 86.6311 78.6C92.4311 78.6 97.1061 80 100.656 82.8C104.206 85.55 106.106 89.4 106.356 94.35H92.4811C92.3811 92.65 91.7561 91.325 90.6061 90.375C89.4561 89.375 87.9811 88.875 86.1811 88.875C84.6311 88.875 83.3811 89.3 82.4311 90.15C81.4811 90.95 81.0061 92.125 81.0061 93.675C81.0061 95.375 81.8061 96.7 83.4061 97.65C85.0061 98.6 87.5061 99.625 90.9061 100.725C94.3061 101.875 97.0561 102.975 99.1561 104.025C101.306 105.075 103.156 106.6 104.706 108.6C106.256 110.6 107.031 113.175 107.031 116.325C107.031 119.325 106.256 122.05 104.706 124.5C103.206 126.95 101.006 128.9 98.1061 130.35C95.2061 131.8 91.7811 132.525 87.8311 132.525ZM127.524 79.35V110.85C127.524 114 128.299 116.425 129.849 118.125C131.399 119.825 133.674 120.675 136.674 120.675C139.674 120.675 141.974 119.825 143.574 118.125C145.174 116.425 145.974 114 145.974 110.85V79.35H158.799V110.775C158.799 115.475 157.799 119.45 155.799 122.7C153.799 125.95 151.099 128.4 147.699 130.05C144.349 131.7 140.599 132.525 136.449 132.525C132.299 132.525 128.574 131.725 125.274 130.125C122.024 128.475 119.449 126.025 117.549 122.775C115.649 119.475 114.699 115.475 114.699 110.775V79.35H127.524ZM199.68 105C202.73 105.65 205.18 107.175 207.03 109.575C208.88 111.925 209.805 114.625 209.805 117.675C209.805 122.075 208.255 125.575 205.155 128.175C202.105 130.725 197.83 132 192.33 132H167.805V79.35H191.505C196.855 79.35 201.03 80.575 204.03 83.025C207.08 85.475 208.605 88.8 208.605 93C208.605 96.1 207.78 98.675 206.13 100.725C204.53 102.775 202.38 104.2 199.68 105ZM180.63 100.65H189.03C191.13 100.65 192.73 100.2 193.83 99.3C194.98 98.35 195.555 96.975 195.555 95.175C195.555 93.375 194.98 92 193.83 91.05C192.73 90.1 191.13 89.625 189.03 89.625H180.63V100.65ZM190.08 121.65C192.23 121.65 193.88 121.175 195.03 120.225C196.23 119.225 196.83 117.8 196.83 115.95C196.83 114.1 196.205 112.65 194.955 111.6C193.755 110.55 192.08 110.025 189.93 110.025H180.63V121.65H190.08ZM276.868 79.35V132H264.043V100.425L252.268 132H241.918L230.068 100.35V132H217.243V79.35H232.393L247.168 115.8L261.793 79.35H276.868ZM298.916 79.35V132H286.091V79.35H298.916ZM346.085 79.35V89.625H332.135V132H319.31V89.625H305.36V79.35H346.085Z" fill="white"/>
                            </g>
                            </g>
                            <defs>
                            <filter id="filter0_d_153_1818" x="0" y="0" width="417" height="207" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="4" dy="4"/>
                            <feGaussianBlur stdDeviation="4"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_153_1818"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_153_1818" result="shape"/>
                            </filter>
                            <filter id="filter1_d_153_1818" x="63.2812" y="78.5996" width="286.803" height="61.9258" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_153_1818"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_153_1818" result="shape"/>
                            </filter>
                            <linearGradient id="paint0_linear_153_1818" x1="4.35375" y1="4" x2="385.047" y2="226.786" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFC145"/>
                            <stop offset="1" stop-color="#ED2C2C"/>
                            </linearGradient>
                            </defs>
                            </svg>
                            </button
                    >
                
                    <Confetti
                        colorArray={[
                            "url(https://cultofthepartyparrot.com/parrots/hd/parrot.gif)",
                            "url(https://cultofthepartyparrot.com/parrots/hd/parrot.gif)",
                        ]}
                    />
                </ToggleConfetti>
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
