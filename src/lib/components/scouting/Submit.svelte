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
        if (res.status == 200) { 
            location.reload()
        } else {
            alert("Oops, looks like you forgot to fill out the form")
        }
    }
</script>

<button on:click={submit}>Submit</button>