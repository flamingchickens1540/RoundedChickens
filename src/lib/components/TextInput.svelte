<input type="text" on:change={change}>

<script lang="ts">
    import * as stores from '$lib/stores/stores'

    function change(e: any) {
        stores.taxiHybrid.set(e.target.value);
        console.log(e.target.value);
    }
</script>