<script lang="ts">
    import HybridLocation from "$lib/components/scouting/match/hybrid/HybridLocation.svelte";
    import type { Positions } from "$lib/types";
    let hybrid_position: Positions;
</script>

<HybridLocation bind:position={hybrid_position}></HybridLocation>
