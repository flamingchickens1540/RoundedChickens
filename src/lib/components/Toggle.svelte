<input type="checkbox" on:change={toggle}>

<script lang="ts">
    import * as stores from '$lib/stores/stores'

    function toggle(e: any) {
        
        stores.taxiHybrid.set(e.target.checked);
    }
</script>