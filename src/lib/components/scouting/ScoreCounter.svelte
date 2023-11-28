<script lang="ts">
    import { ScoreCounter } from "flock-ui";
    export let counterValue : number;
</script>

<style>
    .scoreCounter {
        flex-direction: row;
        display: flex;
        background-color: bisque;
        border-radius: 10px;
        padding: 3px;
        width: fit-content;
    }

    #minus {
        width: 50px;
        text-align: center;
        background-color: red;
        border-radius: 10px;
    }

    #add {
        width: 50px;
        text-align: center;
        background-color: green;
        border-radius: 10px;
    }

    #value {
        width: 20px;
        text-align: center;
    }
</style>

<ScoreCounter value={counterValue} let:change let:value>
    <div class="scoreCounter">
        <button id="minus" on:click={() => change(-1)}>
            -1
        </button>
        <div id="value">
            {value}
        </div>
        <button id="add" on:click={() => change(1)}>
            +1
        </button>
    </div>
</ScoreCounter>