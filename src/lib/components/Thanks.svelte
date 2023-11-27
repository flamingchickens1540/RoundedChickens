<script lang="ts">
  import Submit from "$lib/components/Submit.svelte";
</script>

<h3 class="flex justify-center">THANK YOU!</h3>
<div class="hi">
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
    margin-bottom: 90%;
    margin-top: 2rem;
  }
  .hi{
    position: absolute;
    bottom: 0%;
    left: 15%;
    right:15%
  }
</style>
