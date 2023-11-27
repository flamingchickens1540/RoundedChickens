<!-- IMCOMPLETE -->

<script lang="ts">
  import { enhance } from "$app/forms";

  function handleSubmit(formData: FormData) {
    formData.append("team_key", "frc1540");
    formData.append("isRobot", "true");
    //TODO: bunny ids
    //TODO: attach images
  }
</script>

<h1>Image Scout</h1>

<!-- TODO: add components here -->

<form
  method="post"
  use:enhance={({ formData }) => {
    handleSubmit(formData);
  }}
>
  <button type="submit">Submit</button>
</form>