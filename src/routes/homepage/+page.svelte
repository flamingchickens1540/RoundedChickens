<script>
    import Header from "$lib/components/Header.svelte"
    import Switch from "$lib/components/Switch.svelte"
    import Radio from "$lib/components/Radio.svelte"
    import ImgHolder from "$lib/components/ImgHolder.svelte"
    import Checkbox from "$lib/components/Checkbox.svelte"
    let acceptTerms = false
</script>
<div style="background-color: blue;">
<Checkbox/>
<Header/>
<br>
<Switch bind:checked={acceptTerms}></Switch>
<Radio/>
<ImgHolder/>
</div>