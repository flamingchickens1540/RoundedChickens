
<script>
    let team = ""
</script>

<header>
    <nav>
        <div style="background-color: #D9D9D9;" class="header-background p-5 flex justify-center items-center">
            <button>
                <svg class=" absolute fill-slate-50 h-9 m-1 left-10 top-8" viewBox="0 0 45 39" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.1994 11.3787H6.22736L12.9524 3.30135C13.2668 2.92301 13.4181 2.43526 13.3729 1.94538C13.3278 1.4555 13.0898 1.00362 12.7115 0.689163C12.3332 0.374703 11.8454 0.223415 11.3555 0.268582C10.8657 0.313748 10.4138 0.551669 10.0993 0.930003L0.836257 12.0457C0.773937 12.1341 0.718208 12.227 0.669522 12.3236C0.669522 12.4162 0.669522 12.4718 0.53984 12.5644C0.455867 12.7768 0.4119 13.003 0.410156 13.2314C0.4119 13.4598 0.455867 13.6859 0.53984 13.8983C0.53984 13.9909 0.539839 14.0465 0.669522 14.1391C0.718208 14.2357 0.773937 14.3286 0.836257 14.417L10.0993 25.5327C10.2735 25.7418 10.4916 25.91 10.7382 26.0253C10.9847 26.1406 11.2537 26.2001 11.5258 26.1997C11.9587 26.2005 12.3782 26.0497 12.7115 25.7736C12.8991 25.618 13.0542 25.427 13.1678 25.2115C13.2815 24.9959 13.3515 24.7601 13.3739 24.5174C13.3963 24.2748 13.3705 24.0301 13.2982 23.7974C13.2259 23.5647 13.1083 23.3486 12.9524 23.1614L6.22736 15.084H28.1994C28.6907 15.084 29.1619 14.8888 29.5094 14.5414C29.8568 14.1939 30.052 13.7227 30.052 13.2314C30.052 12.74 29.8568 12.2688 29.5094 11.9214C29.1619 11.5739 28.6907 11.3787 28.1994 11.3787Z" fill="#1C1C1C"/>
                    </svg>
            </button>
            <h1 style="color: #1C1C1C;" class="text-4xl center"><strong>PIT SCOUTING</strong></h1>            
            <button>
            </button>
        <div>
    </nav>
</header>
<div style="background-color: #C2C2C2">
    <br>
<h3 style="margin-top: 0rem">Team Number</h3>
<textarea
            placeholder="e.g. 1540"
            bind:value={team}
            rows="1"
            cols="44"
            class="background grid justify-center"/>
<h3>Drivetrain</h3>
<div class="background grid grid-cols-10 gap-4 grid-rows-2">
    <input style="height: 1.2rem; width: 1.2rem; margin: 0.25rem" type="radio" class="accent-purple-500"> <p>Swerve</p>
    <input style="height: 1.2rem; width: 1.2rem; margin: 0.25rem" type="radio" class="accent-purple-500 col-start-7"> <p class="col-start-8">Tank</p>
    <input style="height: 1.2rem; width: 1.2rem; margin: 0.25rem" type="radio" class="accent-purple-500 row-start-2 col-start-1"> <p class="col-start-2 row-start-2">Other</p>
</div>
<h3>Hybrid Type</h3>
<div class="background grid grid-cols-10 gap-4 grid-rows-2">
    <input style="height: 1.2rem; width: 1.2rem; margin: 0.25rem" type="radio" class="accent-purple-500"> <p class="col-span-5 col-start-2 row-start-1">Full Auto</p>
    <input style="height: 1.2rem; width: 1.2rem; margin: 0.25rem" type="radio" class="accent-purple-500 col-start-6 row-start-1"> <p class="row-start-1 col-start-7 col-span-4">Hybrid</p>
    <input style="height: 1.2rem; width: 1.2rem; margin: 0.25rem" type="radio" class="accent-purple-500 row-start-2 col-start-1"> <p class="col-start-2 row-start-2 col-span-6">No Hybrid</p>
</div>
<h3>Hybrid Location</h3>
<div class="background grid grid-cols-10 gap-4 grid-rows-2">
    <input style="height: 1.2rem; width: 1.2rem; margin: 0.25rem" type="checkbox" class="accent-purple-500"> <p class="col-span-5 col-start-2 row-start-1">Far</p>
    <input style="height: 1.2rem; width: 1.2rem; margin: 0.25rem" type="checkbox" class="accent-purple-500 col-start-6 row-start-1"> <p class="row-start-1 col-start-7 col-span-4">Mid</p>
    <input style="height: 1.2rem; width: 1.2rem; margin: 0.25rem" type="checkbox" class="accent-purple-500 row-start-2 col-start-1"> <p class="col-start-2 row-start-2 col-span-6">Close</p>
</div><br>
<h3>Bunnies</h3>
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
        color: #1c1c1c;
        margin: 1rem;
    }
    .background {
        /* Rectangle 7 */
        background: #d9d9d9;
        mix-blend-mode: normal;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem;
    }
    p{
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 1.2rem;
line-height: 91.5%;
color: #2C2C2C;}
div{
    margin: 0.5rem;
}
</style>