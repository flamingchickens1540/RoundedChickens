<script lang="ts">
    import type { PitscoutTodo } from "$lib/types";
    import { createClient } from '@supabase/supabase-js'
    let teams: PitscoutTodo[] = [];

</script>
<header>
    <nav>
        <div
            style="background-color: #D9D9D9"
            class="header-background p-5 flex justify-center items-center"
        >
            <h1 style="color: #1C1C1C;" class="text-4xl center">
                <strong>PIT SCOUT</strong>
            </h1>
            <button />
            <div />
        </div>
    </nav>
</header>
<div style="background-color: #C2C2C2; margin-top: 0rem">
    <br>
{#each teams as team}
    {#if team.done == true}
 <div style="margin-top: 0rem; background-color: #00000033" class="background flex justify-center">
        <button>
        <h3 class="color">{team.teamname}</h3>
    </button>
    </div>
    {:else}
    <div style="margin-top: 0rem;" class="backgroundorange flex justify-center">
        <button>
        <h3 style="color: #FFFFFF">{team.teamname}</h3>
    </button>
    </div>
    {/if}
{/each}
</div>
<style>
    h3 {
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 60px;
line-height: 91.5%;
/* or 55px */
color: #FFFFFF;
    }
    .background {
        /* Rectangle 7 */
        background: #C2C2C2;
        mix-blend-mode: normal;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem;
    }
    .backgroundorange {
        /* Rectangle 7 */
        background: #FF8B00;
        mix-blend-mode: normal;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem;
    }
    .color{
        color: rgba(0, 0, 0, 0.336)
    }
</style>


