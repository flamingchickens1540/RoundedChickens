<script lang="ts">
    export let onclick: () => void
</script>

<button on:click={onclick} class="btn" unselectable="on">
    <div class="bg text">
        <h1 class="text-black dark:text-white"><slot /></h1>
    </div>
</button>

<style>
    .bg {
        background: linear-gradient(145deg, #ffd42a 0%, #FF1616 100%);
        padding: 1.25rem;
        width: 100%;
        border-radius: 1rem;
        filter: drop-shadow(0px 0.7rem 0.7rem rgba(0, 0, 0, 0.25));
    }
    .text {
        font-size: 4rem;
        text-align: center;
        text-wrap: wrap;
        text-shadow: 2px 1px 4px #565656;
        line-height: 4rem;
    }
    .btn {
        display: grid;
        align-items: center;
        margin: 0.5rem;
    }
</style>
