<div class="flex">
    <button on:click={downcrememnt}>-</button>
    <p>{currentNumber}</p>
    <button on:click={increment}>+</button>
</div>

<script lang="ts">
    import * as stores from '$lib/stores/stores'

    let currentNumber: number = 0;

    function increment() {
        currentNumber++;
        stores.bunniesHybrid.set(currentNumber);
    }
    function downcrememnt() {
        currentNumber--;
        stores.bunniesHybrid.set(currentNumber);
    }
    
</script>