<button class="btn">
    <div class="bg text">
        <h1><slot /></h1>
    </div>
</button>

<style>
    .bg {
        background-color: #2c2c2c;
        padding: 0.7rem;
        width: 100%;
        border-radius: 1rem;
        filter: drop-shadow(0px 0.7rem 0.7rem rgba(0, 0, 0, 0.25));
    }
    .text {
        color: #ffffff;
        font-size: 1.5rem;
        text-align: center;
        text-wrap: wrap;
        text-shadow: 2px 1px 4px #000000;
    }
    .btn {
        display: grid;
        align-items: center;
        margin: 0.5rem;
    }
</style>