<script lang="ts">
    import figmacheck from "$lib/assets/figmacheck.png"
    import figmax from "$lib/assets/figmax.png"
    import switchon from "$lib/assets/switchon.png"
</script>

<h1 id="heading">HYBRID - 1540A</h1>


<div id="body" class="justify-center">
    <h1 style="color: white;">Shots</h1>
    <div class="grid grid-cols-2 grid-rows-1 place-content-center">
        <button>
            <center><img src={figmacheck} alt="" class="buttonimg"></center>
        </button>
        <button>
            <center><img src={figmax} alt="" class="buttonimg"></center>
        </button>
    </div>
    <div class="grid grid-cols-1 grid-rows-2 place-content-center">
        <button id="switch">
            <p class="buttontext">Disabled</p>
            <img src="" alt="">
        </button>
        <button id="switch">
            <p class="buttontext"><img src={switchon} alt="" id="switchimg">Taxied</p>
        </button>
    </div>
</div>
  
<style lang="postcss">
    #heading {
        background-color: #2C2C2C;
        color: white;
        font-size: 50px;
    }
    #body {
      border: 1px solid black;
      background: #1C1C1C;
      padding: 20px 50px 20px 50px;
      text-align: center;
      color: white;
    }
    button {
        /* display: inline-block; */
        height: 120px;
        padding: 0;
        margin: 0;
        vertical-align: top;
        width: 120px;
        border-radius: 12px;
    }
    .buttonimg {
        height: 120px;
        width: 120px;
    }
    .buttontext {
        color: white;
        padding: 3%;
        text-align: left;
    }
    #switch {
        background-color: #2C2C2C;
        height: 50px;
        padding: 0;
        margin: 0px;
        display: flex;
        flex-direction: row;
    }
    #switchimg {
        width: 50px;
        height: 25px;
        float: right;
    }
</style>