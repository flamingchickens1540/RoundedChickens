<script lang="ts">
  import { enhance } from "$app/forms";

  function handleSubmit(formData: FormData) {
    formData.append("team_key", "frc1540");
    formData.append("drivetrain", "swerve");
    formData.append("hybrid_type_auto", "true"); //must be string due to formdata limitations
    formData.append("hybrid_type_combo", "false"); //must be string due to formdata limitations
    formData.append("hybrid_type_none", "false"); //must be string due to formdata limitations
    formData.append("hybrid_location_far", "true"); //must be string due to formdata limitations
    formData.append("hybrid_location_mid", "true"); //must be string due to formdata limitations
    formData.append("hybrid_location_close", "false"); //must be string due to formdata limitations
    formData.append("notes", "great notes about what happened");
    // formData.append('bunny_id', ""); //must be string due to formdata limitations
    //TODO: proper bunny logging
  }
</script>

<h1>Pit Scout</h1>

<!-- TODO: add components here -->

<form
  method="post"
  use:enhance={({ formData }) => {
    handleSubmit(formData);
  }}
>
  <button type="submit">Submit</button>
</form>
