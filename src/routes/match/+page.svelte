<script lang="ts">
    export let team = "1540 A"
    import Switch from "$lib/components/Switch.svelte"
    let selected = 0
    let parked = false
    let broken = false
    let dead = false

    function handlestar(i: number){
        selected = i
        console.log(i)
        selected = selected
    }
</script>
<div class="content-center">
<h1>{team}</h1><br>
<h4>Skill</h4><br>
{#each {length: 5} as _, i}
{#if selected >= i+1}
<button on:click={() => handlestar(i+1)}><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1024" class="icon" version="1.1"><path d="M923.2 429.6H608l-97.6-304-97.6 304H97.6l256 185.6L256 917.6l256-187.2 256 187.2-100.8-302.4z" fill="#FAD97F"/><path d="M1024 396H633.6L512 21.6 390.4 396H0l315.2 230.4-121.6 374.4L512 770.4l316.8 232L707.2 628 1024 396zM512 730.4l-256 187.2 97.6-302.4-256-185.6h315.2l97.6-304 97.6 304h315.2l-256 185.6L768 917.6l-256-187.2z" fill=""/></svg></button>
{:else}
<button on:click={() => handlestar(i+1)}><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1024" class="icon" version="1.1"><path d="M923.2 429.6H608l-97.6-304-97.6 304H97.6l256 185.6L256 917.6l256-187.2 256 187.2-100.8-302.4z" fill="#FFFFFF"/><path d="M1024 396H633.6L512 21.6 390.4 396H0l315.2 230.4-121.6 374.4L512 770.4l316.8 232L707.2 628 1024 396zM512 730.4l-256 187.2 97.6-302.4-256-185.6h315.2l97.6-304 97.6 304h315.2l-256 185.6L768 917.6l-256-187.2z" fill=""/></svg></button>
{/if}
{/each}<br><br>
<h4>Parked?</h4>
<Switch bind:checked={parked}></Switch>
<h4>Broken?</h4>
<Switch bind:checked={broken}></Switch>
<h4>Dead?</h4>
<Switch bind:checked={dead}></Switch>
<h4>Notes</h4>
<textarea cols="30" rows="4"></textarea>
</div>