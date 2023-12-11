<script lang="ts">
    import { browser } from '$app/environment';
    export let lambda: () => void

    if (browser) {
        let button = document.getElementById("btn")!;

        button.addEventListener("mousedown", function() {
            button.style.boxShadow = '0 0 4px rgba(0, 0, 0, 0.2)'
        });

        button.addEventListener("mouseup", function() {
            button.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2)'
        });
    }
</script>

<button
    on:click={lambda}
    id="btn"
    class="hoveranim dark:bg-[#1C1C1C] bg-[#C2C2C2] dark:text-white Poppins text-black rounded-3xl shadow-lg font-black w-full h-full hover:shadow-xl"
>
    <slot class="shadow-md " />
</button>

<style>
    .hoveranim {
        transition: all 0.1s ease-in-out;
    }
</style>
