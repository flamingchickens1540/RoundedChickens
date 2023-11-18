<script lang="ts">
    import HybridLocation from "$lib/components/scouting/match/hybrid/HybridLocation.svelte";
    import HybridShots  from "$lib/components/scouting/match/hybrid/HybridShots.svelte"
    import { CatlystCarousel } from "flock-ui";
</script>

<h1>Match Scout</h1>

<CatlystCarousel style="height:200px" speed={2} snapSeconds={0.2} shouldSnap={true}>
    
    <HybridLocation/>
    <HybridShots/>
</CatlystCarousel> 