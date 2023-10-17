<button class="btn">
    <div class="bg text">
        <h1><slot /></h1>
    </div>
</button>

<style>
    .bg {
        background-color: #2c2c2c;
        padding: 0.5em;
        padding-left: 3em;
        padding-right: 3em;
        border-radius: 0.5em;
        filter: drop-shadow(0px 0.3em 0.3em rgba(0, 0, 0, 0.25));
    }
    .text {
        color: #ffffff;
        font-size: 1.5em;
        text-align: center;
        text-wrap: wrap;
    }
    .btn {
        display: grid;
        align-items: center;
        margin: 0.5em;
    }
</style>