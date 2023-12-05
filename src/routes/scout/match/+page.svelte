<script lang="ts">
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
</script>

<h1>Match Scout</h1>

<!-- TODO: add components here -->

<form
  method="post"
  use:enhance={({ formData }) => {
    handleSubmit(formData);
  }}>
  <button type="submit">Submit</button>
</form>
