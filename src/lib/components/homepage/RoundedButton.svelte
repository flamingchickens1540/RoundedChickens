<script lang="ts">
    export let onclick: () => void
</script>

<button on:click={onclick} class="btn" unselectable="on">
    <div class="bg text bg-primaryLight dark:bg-primaryDark">
        <h1 class="text-black dark:text-white"><slot /></h1>
    </div>
</button>

<style>
    .bg {
        padding: 0.7rem;
        width: 100%;
        border-radius: 1rem;
        filter: drop-shadow(0px 0.5rem 0.5rem rgba(0, 0, 0, 0.25));
    }
    .text {
        font-size: 1.5rem;
        text-align: center;
        text-wrap: wrap;
        text-shadow: 1px 0.5px 2px #34343400;
    }
    .btn {
        display: grid;
        align-items: center;
        margin: 0.5rem;
    }
</style>