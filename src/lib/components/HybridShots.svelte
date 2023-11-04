<head id="head">
    <h1 id="heading">HYBRID - 1540A</h1>
</head>

<body id="body">
    <h1 style="color: white;">Shots</h1>
    <div class="grid-cols-2 grid-rows-1 content-center">
        <button>
            <center><img src="figmacheck.png" alt="" id="buttonimg"></center>
        </button>
        <button>
            <center><img src="figmax.png" alt="" id="buttonimg"></center>
        </button>
    </div>
    <div class="grid-cols-1 grid-rows-2 content-center">
        <button id="switch">
            <p id="buttontext">Disabled</p>
            <img src="" alt="">
        </button>
        <button id="switch">
            <p>Taxied</p>
            <img src="" alt="">
        </button>
    </div>
</body>
  
<style lang="postcss">
    #head {
        background-color: #2C2C2C;
    }
    #heading {
        color: white;
        font-size: 50px;
    }
    #body {
      border: 1px solid black;
      background: #1C1C1C;
      padding: 20px 50px 20px 50px;
      text-align: center;
    }
    button {
    display: inline-block;
    height: 120px;
    padding: 0;
    margin: 0;
    vertical-align: top;
    width: 120px;
    border-radius: 12px;
    }
    #buttonimg {
        height: 120px;
        width: 120px;
    }
    #buttontext {
        color: white;
    }
    #switch {
        background-color: #2C2C2C;
        height: 50px;
        padding: 0;
        margin: 0px;
        width: 245px;
    }
</style>