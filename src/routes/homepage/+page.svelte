<script>
    import Header from "$lib/components/Header.svelte"
    import Switch from "$lib/components/switch.svelte"
    let acceptTerms = false
</script>

{acceptTerms}
<Header/>
<br>
<Switch bind:checked={acceptTerms}></Switch>
