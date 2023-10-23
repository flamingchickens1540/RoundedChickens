<script>
  import "../app.css";
  import "@fontsource/poppins"
  import "@fontsource/teko"
</script>

<slot />

<style>
  :global(html) {
    font-family: poppins, sans-serif;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    font-family: teko, sans-serif;
  }
</style>