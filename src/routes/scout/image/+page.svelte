<!-- IMCOMPLETE -->

<script lang="ts">
  import { enhance } from "$app/forms";
  import ImgUpload from "$lib/components/ImgUpload.svelte";
  function handleSubmit(formData: FormData) {
    formData.append("team_key", "frc1540");
    formData.append("isRobot", "true");
    //TODO: bunny ids
    //TODO: attach images
  }
</script>

<form
  method="post"
  use:enhance={({ formData }) => {
    handleSubmit(formData);
  }}
>
 <ImgUpload/>
</form>