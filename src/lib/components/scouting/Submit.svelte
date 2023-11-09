<script lang="ts">
    import { match } from "$lib/stores/stores"
    async function submit() {
        const res = await fetch("/api/submit/match", {
            method: 'POST',
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify($match),
        });
        if (res.ok) location.reload()
        else {
            alert("Oops, looks like you forgot to fill out every data point")
        }
    }
</script>

<button on:click={submit}>Submit</button>