<script lang="ts">
    import Switch from "./ui-components/switch.svelte";
</script>
<h1 id="heading">HYBRID - 1540A</h1>


<div id="body" class="justify-center">
    <h1 style="color: white;">Shots</h1>
    <div class="grid grid-cols-2 grid-rows-1 place-content-center">
        <button>
            <center><img src="figmacheck.png" alt="" id="buttonimg"></center>
        </button>
        <button>
            <center><img src="figmax.png" alt="" id="buttonimg"></center>
        </button>
    </div>
    <div class="grid grid-cols-6 grid-rows-2 place-content-center">
        <button id="switch" class="grid col-end-7 col-start-1 content-center">
            <p class="buttontext" style="padding: 5%;">Disabled</p>
            <div class="grid col-start-7"><Switch></Switch></div>
        </button>
        <button id="switch" class="col-start-1 row-start-2 grid col-end-7 content-center">
            <p class="buttontext" style="padding: 5%;">Taxied</p>
            <!-- <img src="switchon.png" alt="" id="switchimg" class="grid col-start-7"> -->
            <div class="grid col-start-7"><Switch></Switch></div>
            
        </button>
    </div>
    <img src="aussieparrot.gif" alt="pretent this is a parrot" id="parrot1">
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
      height: 100%;
    }
    button {
    /* height: 130px; */
    padding: 0;
    margin: 0;
    vertical-align: top;
    /* width: 130px; */
    border-radius: 12px;
    }
    #buttonimg {
        height: 100%;
        width: 100%;
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
        width: 100%;
    }
    #switchimg {
        width: 50px;
        height: 25px;
        float: right;
    }
    #parrot1 {
        height: 5%;
        width: 5%;
    }
</style>