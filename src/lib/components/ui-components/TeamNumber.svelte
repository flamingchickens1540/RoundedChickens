<script lang="ts">
    export let alliance : string;
    export let teamNumber : string;
</script>

<div
    style="
        border-radius: 10px;
        width: 50px;
        text-align: center;
        background-color: {alliance == "red" ? "red" : "blue"};
    "
>
    {teamNumber}
</div>