<script lang="ts">
  import Submit from "$lib/components/Submit.svelte";
</script>

<h3 class="flex justify-center">THANK YOU!</h3>
<div class="center">
  <Submit />
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
    margin: 2rem;
  }
  .center {
    /* display: grid;
  place-items: center;
  place-items: bottom;
  position: relative; */
    position: fixed;
    left: 50%;
    bottom: 0.1rem;
    transform: translate(-50%, -50%);
    margin: 0 auto;
  }
</style>
