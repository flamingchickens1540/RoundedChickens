<script lang="ts">
    import type { MatchKey, TeamKey } from "$lib/types";
    export let match_key: MatchKey;
    export let team_key: TeamKey;
    export let scout_name: string;
</script>

<div
    class="grid grid-rows-2 grid-cols-7 dark:bg-[#1C1C1C] bg-[#C2C2C2] place-content-center rounded-2xl mainMargin h-full"
>
    <div
        class="col-span-7 grid place-content-center dark:text-white text-black"
    >
        Match: {match_key}
    </div>
    <!-- <button class="grid place-content-center outline m-2 bg-red-600 rounded">X</button> -->
    <div
        class="grid place-content-center col-span-4 dark:text-white text-black"
    >
        Team: {team_key}
    </div>
    <div
        class="grid place-content-center col-span-2 rounded bg-purple-500 align-middle m-2 dark:text-white text-black"
    >
        {scout_name}
    </div>
</div>

<style>
    .mainMargin {
        margin: 0.57rem;
        margin-top: 0.57rem;
        margin-bottom: 0.57rem;
    }
</style>
