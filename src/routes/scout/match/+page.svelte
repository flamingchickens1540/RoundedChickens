<script lang="ts">
<<<<<<< HEAD
<<<<<<< HEAD
    import { CatlystCarousel } from "flock-ui";
=======
  import { enhance } from "$app/forms";

  function handleSubmit(formData: FormData) {
    formData.append("team_key", "frc1540");
    formData.append("match_key", "2023test_qm1");
    formData.append("fielded", "true"); //must be string due to formdata limitations
    formData.append("hybrid_start_location", "far"); //must be string due to formdata limitations
    formData.append("hybrid_shots_hit", "5"); //must be string due to formdata limitations
    formData.append("hybrid_shots_missed", "2"); //must be string due to formdata limitations
    formData.append("hybrid_disabled", "false"); //must be string due to formdata limitations
    formData.append("hybrid_bunnies_scored", "3"); //must be string due to formdata limitations
    formData.append("hybrid_taxi", "true"); //must be string due to formdata limitations
    formData.append("tele_shots_hit", "5"); //must be string due to formdata limitations
    formData.append("tele_shots_missed", "2"); //must be string due to formdata limitations
    formData.append("tele_bunnies_scored", "3"); //must be string due to formdata limitations
    formData.append("tele_bunnies_stolen", "2"); //must be string due to formdata limitations
    formData.append("tele_times_disabled", "2"); //must be string due to formdata limitations
    formData.append("skill", "4"); //must be string due to formdata limitations
    formData.append("parked", "true"); //must be string due to formdata limitations
    formData.append("broke", "false"); //must be string due to formdata limitations
    formData.append("died", "false"); //must be string due to formdata limitations
    formData.append("notes", "great notes about what happened");
  }
>>>>>>> e78f3225c56d15ce3aab9fa4dc2420575c05381c
</script>

<h1>Match Scout</h1>

<<<<<<< HEAD
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
=======
<!-- TODO: add components here -->

<form
  method="post"
  use:enhance={({ formData }) => {
    handleSubmit(formData);
  }}
>
  <button type="submit">Submit</button>
</form>
>>>>>>> e78f3225c56d15ce3aab9fa4dc2420575c05381c
