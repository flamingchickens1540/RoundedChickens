<!-- IMCOMPLETE -->

<script lang="ts">
    import { enhance } from "$app/forms";
    import Switch from "$lib/components/switch.svelte";
    import type { TeamKey } from "$lib/types";
    
    let photos: FileList;
    let team_key: TeamKey;
    let is_robot: boolean

    function removeFile(photo: File) {
        const file = Array.from(photos).indexOf(photo)
        photos = Array.from(photos).filter(
            (_, i) => i !== file
        ) as unknown as FileList
    }

    function handleSubmit(formData: FormData) {
        
        formData.append("team_key", team_key);
        formData.append("isRobot", `${is_robot}`);
        Array.from(photos).forEach((photo) => {
            formData.append("photo", photo)
        })
        
    }
</script>

<form
    method="post"
    use:enhance={({ formData }) => {
        handleSubmit(formData);
    }}
>
    <!-- <ImgUpload options={}/> -->
</form>

<div class="makeUpload">
    <input type="file" multiple accept="image/*" bind:files={photos} />
    <div class="photoRight">
        {#if photos}
            <Switch bind:checked={is_robot}></Switch>
            {#each photos as photo}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <h2>Selected</h2>
                <button on:click={() => removeFile(photo)}>
                    <img src={URL.createObjectURL(photo)} alt={photo.name} />
                </button>
            {/each}
        {/if}
    </div>
</div>
