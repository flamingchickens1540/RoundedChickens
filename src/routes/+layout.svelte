<script>
  import "../app.css";
</script>

<div class="app">
  <div class="boundingBox">
    <slot />
  </div>
</div>

<style>
  .boundingBox {
    display: grid;
    align-items: center;
    justify-content: center;
  }
</style>