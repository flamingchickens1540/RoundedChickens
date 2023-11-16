<script lang="ts">
    import type { Scout } from "$lib/types";
    export let array: Scout[] = [];
    
</script>

<header>
    <nav>
        <div
            style="background-color: #D9D9D9;"
            class="header-background p-5 flex justify-center items-center"
        >
            <button>
                <svg
                    class=" absolute fill-slate-50 h-9 m-1 left-8 top-5"
                    viewBox="0 0 45 39"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M28.1994 11.3787H6.22736L12.9524 3.30135C13.2668 2.92301 13.4181 2.43526 13.3729 1.94538C13.3278 1.4555 13.0898 1.00362 12.7115 0.689163C12.3332 0.374703 11.8454 0.223415 11.3555 0.268582C10.8657 0.313748 10.4138 0.551669 10.0993 0.930003L0.836257 12.0457C0.773937 12.1341 0.718208 12.227 0.669522 12.3236C0.669522 12.4162 0.669522 12.4718 0.53984 12.5644C0.455867 12.7768 0.4119 13.003 0.410156 13.2314C0.4119 13.4598 0.455867 13.6859 0.53984 13.8983C0.53984 13.9909 0.539839 14.0465 0.669522 14.1391C0.718208 14.2357 0.773937 14.3286 0.836257 14.417L10.0993 25.5327C10.2735 25.7418 10.4916 25.91 10.7382 26.0253C10.9847 26.1406 11.2537 26.2001 11.5258 26.1997C11.9587 26.2005 12.3782 26.0497 12.7115 25.7736C12.8991 25.618 13.0542 25.427 13.1678 25.2115C13.2815 24.9959 13.3515 24.7601 13.3739 24.5174C13.3963 24.2748 13.3705 24.0301 13.2982 23.7974C13.2259 23.5647 13.1083 23.3486 12.9524 23.1614L6.22736 15.084H28.1994C28.6907 15.084 29.1619 14.8888 29.5094 14.5414C29.8568 14.1939 30.052 13.7227 30.052 13.2314C30.052 12.74 29.8568 12.2688 29.5094 11.9214C29.1619 11.5739 28.6907 11.3787 28.1994 11.3787Z"
                        fill="#1C1C1C"
                    />
                </svg>
            </button>
            <h1 style="color: #1C1C1C;" class="text-4xl center">
                <strong>LEADERBOARD</strong>
            </h1>
            <button>
                <svg
                    class=" absolute fill-slate-50 h-10 m-1 right-6 top-4"
                    viewBox="0 0 45 45"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 0V5.55784H44.4627V0H0ZM0 16.5068V22.0646H44.4627V16.5068H0ZM0 33.1803V38.7382H44.4627V33.1803H0Z"
                        fill="#1C1C1C"
                    />
                </svg>
            </button>
            <div />
        </div>
    </nav>
</header>

<div
    class="grid grid-cols-1 gap-4 grid-flow-row"
    style="background-color: #C2C2C2;"
>
    <div
        style="margin: 1rem"
        class="grid grid-cols-3 grid-rows-1 gap-2 place-items-center"
    >
        <button>
            <div
            class="gridplace-content-center"
            style="background-color: #9747FF; padding: 1.3rem; padding-left: 1.5rem; padding-right: 1.5rem; border-radius: 0.8rem">
            <h4 style="font-size: 1rem"><strong>Scouting</strong></h4>
        </div>
        </button>
        <button>
            <div
                class="grid place-content-center"
                style="background-color: #FF8B00; padding: 1rem; padding-left: 1.5rem; padding-right: 1.5rem; border-radius: 0.8rem">
                <h4><strong>Points</strong></h4>
            </div>
                
        </button>
        <button>
            <div
            class="grid place-content-center"
            style="background-color: #9747FF; padding: 1rem; padding-left: 1.5rem; padding-right: 1.5rem; border-radius: 0.8rem">
            <h4><strong>Coins</strong></h4>
        </div>
        </button>
    </div>
    {#each array as scout, i}
        <div style="margin: 0.5rem" class="background grid grid-cols-10">
            <div
                class="grid col-span-2 place-content-center"
                style="background-color: #FF8B00; padding: 10px; margin: 1rem; border-radius: 10px"
            >
                {i + 1}
            </div>
            <h3 class="col-span-7">{scout.name}</h3>
            <h3 style="margin: 0.5rem;">{scout.coins}</h3>
        </div>
    {/each}
</div>

<style>
    .background {
        /* Rectangle 7 */
        background: #d9d9d9;
        mix-blend-mode: normal;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        padding: 0.2rem;
        margin: 1rem;
    }
    div {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 84%;
        align-items: center;
        color: #ffffff;
    }
    h3 {
        font-family: "Poppins";
        font-style: bold;
        font-weight: 700;
        font-size: 25px;
        line-height: 91.5%;
        color: #1c1c1c;
    }
    

h4{
    /* Chip */
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 1.5rem;
line-height: 84%;
/* or 19px */
align-items: center;
text-align: center;
color: #5D1EAF;
}
</style>