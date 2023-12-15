<script lang="ts">
    
    import Switch from "$lib/components/switch.svelte";
    import { match } from "$lib/stores/stores";
    // export let team = "1540 A";
    // export let rating = 0;
    // export let parked = false;
    // export let broken = false;
    // export let dead = false;
    // export let notes = "";

    function handlestar(i: number) {
        $match.data.skill = i;
    }
</script>

<header>
    <nav>
        <div
            style="background-color: #1C1C1C;"
            class="header-background p-3 flex justify-center items-center"
        >
            <h1 style="color: #D9D9D9;" class="text-6xl center">
                <strong>ENDGAME</strong>
            </h1>
            <div />
        </div>
    </nav>
</header>
<div style="background-color: #1C1C1C; margin-top: 0rem">
    <br />
    <h3 style="margin: 1rem;"><strong>Driver Skill</strong></h3>
    <div class="grid grid-cols-5 gap-4 background">
        {#each { length: 5 } as _, i}
            {#if $match.data.skill >= i + 1}
                <button on:click={() => handlestar(i + 1)}
                    ><svg style="transition: 500ms;"
                        width="54"
                        height="53"
                        viewBox="0 0 54 53"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M53.9129 19.9478H33.3362L26.9565 0L20.5768 19.9478H0L16.6232 32.2579L10.3333 52.1158L26.9565 39.8057L43.5796 52.1158L37.1999 32.1681L53.9129 19.9478Z"
                            fill="#FFAA00"
                        />
                    </svg>
                </button>
            {:else}
                <button on:click={() => handlestar(i + 1)}
                    ><svg
                        width="54"
                        height="53"
                        viewBox="0 0 54 53"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M53.9129 19.9478H33.3362L26.9565 0L20.5768 19.9478H0L16.6232 32.2579L10.3333 52.1158L26.9565 39.8057L43.5796 52.1158L37.1999 32.1681L53.9129 19.9478Z"
                            fill="#FFAA00"
                        />
                        <path
                            d="M53.9129 19.9478H33.3362L26.9565 0L20.5768 19.9478H0L16.6232 32.2579L10.3333 52.1158L26.9565 39.8057L43.5796 52.1158L37.1999 32.1681L53.9129 19.9478Z"
                            fill="#1C1C1C"
                        />
                    </svg>
                </button>
            {/if}
        {/each}
    </div>
    <div class="grid grid-cols-5 background">
        <h5 class="col-span-4"><strong>Parked?</strong></h5>
        <Switch bind:checked={$match.data.parked} style="float: right;" />
    </div>
    <div class="grid grid-cols-5 background">
        <h5 class="col-span-4"><strong>Broken?</strong></h5>
        <Switch bind:checked={$match.data.broke} style="float: right;" />
    </div>
    <div class="grid grid-cols-5 background">
        <h5 class="col-span-4"><strong>Died on field?</strong></h5>
        <Switch bind:checked={$match.data.died} style="float: right;" />
    </div>
    <h3 style="margin: 1rem;" class="col-span-2"><strong>Notes</strong></h3>
    <div style="margin: 1rem" class="background">
        <textarea
            placeholder="Write Here"
            bind:value={$match.data.notes}
            rows="3"
            style="background-color: #1C1C1C; width:100%;"
        />
    </div>
    <br />
</div>

<style>
    h3 {
        font-family: "Poppins";
        font-style: bold;
        font-weight: 700;
        font-size: 40px;
        line-height: 91.5%;
        /* or 32px */
        display: flex;

        color: #D9D9D9;
    }
    h5 {
        font-family: "Poppins";
        font-style: bold;
        font-weight: 700;
        font-size: 30px;
        line-height: 91.5%;
        /* or 32px */
        display: flex;

        color: #D9D9D9;
    }
    .background {
        /* Rectangle 7 */
        background: #1C1C1C;
        mix-blend-mode: normal;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem;
    }
</style>
