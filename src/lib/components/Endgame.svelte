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
<button on:click={() => handlestar(i+1)}><svg width="54" height="53" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M53.9129 19.9478H33.3362L26.9565 0L20.5768 19.9478H0L16.6232 32.2579L10.3333 52.1158L26.9565 39.8057L43.5796 52.1158L37.1999 32.1681L53.9129 19.9478Z" fill="#FFAA00"/>
    </svg>
    </button>
{:else}
<button on:click={() => handlestar(i+1)}><svg width="54" height="53" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M53.9129 19.9478H33.3362L26.9565 0L20.5768 19.9478H0L16.6232 32.2579L10.3333 52.1158L26.9565 39.8057L43.5796 52.1158L37.1999 32.1681L53.9129 19.9478Z" fill="#FFAA00"/>
    <path d="M53.9129 19.9478H33.3362L26.9565 0L20.5768 19.9478H0L16.6232 32.2579L10.3333 52.1158L26.9565 39.8057L43.5796 52.1158L37.1999 32.1681L53.9129 19.9478Z" fill="#EDEDED"/>
    </svg>
    </button>
{/if}
{/each}<br><br>
<h4>Parked?</h4>
<Switch bind:checked={parked}></Switch>
<h4>Broken?</h4>
<Switch bind:checked={broken}></Switch>
<h4>Dead?</h4>
<Switch bind:checked={dead}></Switch>
<h4>Notes</h4>
<textarea cols="30" rows="4">enter notes here...</textarea>
</div>