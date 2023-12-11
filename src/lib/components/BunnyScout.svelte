<script>
    export let number = 1;
    import Switch from "$lib/components/Switchorange.svelte";
    export let notes = "";
    let mech = false;
    export let mechstring = "Mech";
    $: if (mech == true) {
        mechstring = "Stuffed";
        mechstring = mechstring;
    }
    $: if (mech == false) {
        mechstring = "Mech";
        mechstring = mechstring;
    }
</script>

<div style="margin: 0.5rem;" class="background">
    <div class="grid grid-cols-7 grid-rows-1">
        <h3 style="width: 0%; col-span-2">Bunny</h3>
        <h3 class="col-start-4" style="color: #FFB800; width: 0%;">
            #{number}
        </h3>
    </div>
    <div
        class="backgroundreal grid grid-cols-10 grid-rows-1 place-items-center"
    >
        <h5 class="col-start-2">Mech</h5>
        <div class="col-start-5">
            <Switch bind:checked={mech} />
        </div>
        <h5 class="col-start-8">Stuffed</h5>
    </div>
    <br />
    <h3>Notes</h3>
    <label class="textareaContainer">
        <textarea
            placeholder="Write here!"
            rows="5"
            bind:value={notes}
            class="backgroundreal grid justify-center"
        />
    </label>
</div>

<style>
    .background {
        /* Rectangle 7 */
        background: #2c2c2c;
        mix-blend-mode: normal;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        padding: 1rem;
        margin: 0.5rem;
    }
    .backgroundreal {
        /* Rectangle 7 */
        background: #1c1c1c;
        mix-blend-mode: normal;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        padding: 0.5rem;
        margin: 1rem;
    }
    h3 {
        font-family: "Poppins";
        font-style: bold;
        font-weight: 700;
        font-size: 40px;
        line-height: 91.5%;
        /* or 32px */
        color: white;
        margin: 1rem;
    }
    h5 {
        font-family: "Poppins";
        font-style: bold;
        font-weight: 700;
        font-size: 25px;
        line-height: 91.5%;
        /* or 32px */
        color: white;
        margin: 1rem;
    }
    textarea {
        width: 100%;
        margin: 0;
        padding: 0;
        border-width: 0;
    }
    .textareaContainer {
        display: block;
        padding: 2rem;
        padding-left: 0%;
        padding-top: 0%;
    }
</style>
