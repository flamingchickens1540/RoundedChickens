<script lang="ts">
<<<<<<< HEAD
    import { CatlystCarousel } from "flock-ui";
</script>

<h1>Match Scout</h1>

<CatlystCarousel style="height:200px" speed={2} snapSeconds={0.2} shouldSnap={true}>
    <div>test 1</div>
    <div>test 2</div>
</CatlystCarousel> 
=======
    import HybridLocation from "$lib/components/scouting/match/hybrid/HybridLocation.svelte";
    import HybridShots from "$lib/components/scouting/match/hybrid/HybridShots.svelte";
    import Teleop from "$lib/components/Leaderboard.svelte"
    import type { Positions } from "$lib/types";
    let hybrid_position: Positions;
</script>
>>>>>>> f6ba2158ea86986650dc2fe1e84d4c2ea9ba2a9d
