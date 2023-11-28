<script>
      export let placeholdertitle = "Sample Text";
      export let src = "https://cultofthepartyparrot.com/parrots/hd/parrot.gif";
      export let classes = "";
</script>

<header
      style="width:fit-content"
      class="bg-slate-200 rounded-3xl p-4 m-4 content-center"
>
      <h1><strong>{placeholdertitle.toUpperCase()}<strong /></strong></h1>
      <img {src} class={classes} alt="insert image here" />
</header>
