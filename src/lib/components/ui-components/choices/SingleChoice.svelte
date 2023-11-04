<script lang="ts">
    let choices : string[];
    let selected : number;

    function handleClick(index : number) {
        selected = index;
    }
</script>

{#each choices as choice, index}
    <button on:click={() => handleClick(index)}>
        <slot choice={choice} index={index}/>
    </button>
{/each}