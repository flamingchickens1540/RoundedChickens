<script lang="ts">
  import { enhance } from "$app/forms";
    import Pitscout from "$lib/components/Pitscout.svelte";
  import { pit } from "$lib/stores/stores"
  function handleSubmit(formData: FormData) {
    formData.append("team_key", "frc1540");
    formData.append("drivetrain", `${$pit.drivetrain}`);
    formData.append("hybrid_type_auto", `${$pit.hybrid_type_auto}`); //must be string due to formdata limitations
    formData.append("hybrid_type_combo", `${$pit.hybrid_type_combo}`); //must be string due to formdata limitations
    formData.append("hybrid_type_none", `${$pit.hybrid_type_none}`); //must be string due to formdata limitations
    formData.append("hybrid_location_far", `${$pit.hybrid_location_far}`); //must be string due to formdata limitations
    formData.append("hybrid_location_mid", `${$pit.hybrid_location_mid}`); //must be string due to formdata limitations
    formData.append("hybrid_location_close", `${$pit.hybrid_location_close}`); //must be string due to formdata limitations
    formData.append("notes", `${$pit.notes}`);
    // formData.append('bunny_id', ""); //must be string due to formdata limitations
    //TODO: proper bunny logging
  }
</script>

<h1>Pit Scout</h1>

<Pitscout />

<form
  method="post"
  use:enhance={({ formData }) => {
    handleSubmit(formData);
  }}
>
  <button type="submit">Submit</button>
</form>
