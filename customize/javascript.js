function customizeSizeAndPosition() {
    var e = "customizeDiv",
        t = 1;
    document.getElementById(e).style.height = stageHeight + "px", document.getElementById(e).style.width = stageWidth + "px", document.getElementById(e).style.top = "0px", document.getElementById(e).style.left = "0px";
    e = "customize", t = 1;
    document.getElementById(e).style.width = Math.round(.7 * stageWidth) + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = Math.round(stageHeight / 2) - Math.round(parseInt(document.getElementById(e).style.height) / 2) + "px", document.getElementById(e).style.left = Math.round(stageWidth / 2) - Math.round(parseInt(document.getElementById(e).style.width) / 2) + "px", parseInt(document.getElementById(e).style.height) > .7 * stageHeight && (document.getElementById(e).style.height = .7 * stageHeight + "px", document.getElementById(e).style.width = Math.round(parseInt(document.getElementById(e).style.height) * t) + "px", document.getElementById(e).style.top = Math.round(stageHeight / 2) - Math.round(parseInt(document.getElementById(e).style.height) / 2) + "px", document.getElementById(e).style.left = Math.round(stageWidth / 2) - Math.round(parseInt(document.getElementById(e).style.width) / 2) + "px"), 400 < parseInt(document.getElementById(e).style.width) && (document.getElementById(e).style.width = "400px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = Math.round(stageHeight / 2) - Math.round(parseInt(document.getElementById(e).style.height) / 2) + "px", document.getElementById(e).style.left = Math.round(stageWidth / 2) - Math.round(parseInt(document.getElementById(e).style.width) / 2) + "px"), document.getElementById(e).style.overflow = "visible";
    e = "colorButton1", t = 1;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 7 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = .6 * -parseInt(document.getElementById(e).style.height) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 7 * 0 + "px", document.getElementById(e).style.backgroundColor = colorArray[1];
    e = "colorButton2", t = 1;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 7 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("colorButton1").style.top) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 7 * 1 + "px", document.getElementById(e).style.backgroundColor = colorArray[2];
    e = "colorButton3", t = 1;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 7 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("colorButton1").style.top) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 7 * 2 + "px", document.getElementById(e).style.backgroundColor = colorArray[3];
    e = "colorButton4", t = 1;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 7 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("colorButton1").style.top) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 7 * 3 + "px", document.getElementById(e).style.backgroundColor = colorArray[4];
    e = "colorButton5", t = 1;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 7 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("colorButton1").style.top) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 7 * 4 + "px", document.getElementById(e).style.backgroundColor = colorArray[5];
    e = "colorButton6", t = 1;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 7 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("colorButton1").style.top) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 7 * 5 + "px", document.getElementById(e).style.backgroundColor = colorArray[6];
    e = "colorButton7", t = 1;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 7 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("colorButton1").style.top) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 7 * 6 + "px", document.getElementById(e).style.backgroundColor = colorArray[7];
    e = "colorButton8", t = 1;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 7 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("colorButton1").style.top) + parseInt(document.getElementById("colorButton1").style.height) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 7 * 0 + "px", document.getElementById(e).style.backgroundColor = colorArray[8];
    e = "colorButton9", t = 1;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 7 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("colorButton1").style.top) + parseInt(document.getElementById("colorButton1").style.height) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 7 * 1 + "px", document.getElementById(e).style.backgroundColor = colorArray[9];
    e = "colorButton10", t = 1;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 7 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("colorButton1").style.top) + parseInt(document.getElementById("colorButton1").style.height) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 7 * 2 + "px", document.getElementById(e).style.backgroundColor = colorArray[10];
    e = "colorButton11", t = 1;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 7 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("colorButton1").style.top) + parseInt(document.getElementById("colorButton1").style.height) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 7 * 3 + "px", document.getElementById(e).style.backgroundColor = colorArray[11];
    e = "colorButton12", t = 1;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 7 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("colorButton1").style.top) + parseInt(document.getElementById("colorButton1").style.height) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 7 * 4 + "px", document.getElementById(e).style.backgroundColor = colorArray[12];
    e = "colorButton13", t = 1;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 7 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("colorButton1").style.top) + parseInt(document.getElementById("colorButton1").style.height) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 7 * 5 + "px", document.getElementById(e).style.backgroundColor = colorArray[13];
    e = "colorButton14", t = 1;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 7 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("colorButton1").style.top) + parseInt(document.getElementById("colorButton1").style.height) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 7 * 6 + "px", document.getElementById(e).style.backgroundColor = colorArray[14];
    e = "gif1Button", t = 853 / 480;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 3 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("colorButton14").style.top) + parseInt(document.getElementById("colorButton14").style.height) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 3 * 0 + "px";
    e = "gif2Button", t = 853 / 480;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 3 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("colorButton14").style.top) + parseInt(document.getElementById("colorButton14").style.height) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 3 * 1 + "px";
    e = "gif3Button", t = 853 / 480;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 3 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("colorButton14").style.top) + parseInt(document.getElementById("colorButton14").style.height) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 3 * 2 + "px";
    e = "gif4Button", t = 853 / 480;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 3 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("gif1Button").style.top) + parseInt(document.getElementById("gif1Button").style.height) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 3 * 0 + "px";
    e = "gif5Button", t = 853 / 480;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 3 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("gif1Button").style.top) + parseInt(document.getElementById("gif1Button").style.height) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 3 * 1 + "px";
    e = "gif6Button", t = 853 / 480;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 3 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("gif1Button").style.top) + parseInt(document.getElementById("gif1Button").style.height) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 3 * 2 + "px";
    e = "gif7Button", t = 853 / 480;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 3 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("gif4Button").style.top) + parseInt(document.getElementById("gif4Button").style.height) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 3 * 0 + "px";
    e = "gif8Button", t = 853 / 480;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 3 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("gif4Button").style.top) + parseInt(document.getElementById("gif4Button").style.height) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 3 * 1 + "px";
    e = "gif9Button", t = 853 / 480;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 3 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("gif4Button").style.top) + parseInt(document.getElementById("gif4Button").style.height) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 3 * 2 + "px";
    e = "gif10Button", t = 853 / 480;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 3 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("gif7Button").style.top) + parseInt(document.getElementById("gif7Button").style.height) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 3 * 0 + "px";
    e = "gif11Button", t = 853 / 480;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 3 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("gif7Button").style.top) + parseInt(document.getElementById("gif7Button").style.height) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 3 * 1 + "px";
    e = "gif12Button", t = 853 / 480;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 3 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("gif7Button").style.top) + parseInt(document.getElementById("gif7Button").style.height) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 3 * 2 + "px";
    e = "customButton", t = 4.1;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 2 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("gif12Button").style.top) + parseInt(document.getElementById("gif12Button").style.height) + "px", document.getElementById(e).style.left = "0px";
    e = "defaultButton", t = 4.1;
    document.getElementById(e).style.width = parseInt(document.getElementById("customize").style.width) / 2 + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("customButton").style.top) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("customize").style.width) / 2 + "px";
    e = "customizeExterior", t = 1;
    document.getElementById(e).style.height = stageHeight + "px", document.getElementById(e).style.width = stageWidth + "px", document.getElementById(e).style.top = "0px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.backgroundColor = "#000000", document.getElementById(e).style.opacity = .85
}

function customizeSwitch() {
    null == this.customize_switchStatus ? (document.getElementById("customizeDiv").style.transition = "all 0s ease", document.getElementById("customizeDiv").style.MozTransition = "all 0s ease", document.getElementById("customizeDiv").style.WebkitTransition = "all 0s ease", document.getElementById("customizeDiv").style.opacity = 0, document.getElementById("customizeDiv").style.visibility = "hidden", customize_switchStatus = "OFF") : "OFF" == customize_switchStatus ? (document.getElementById("customizeDiv").style.visibility = "visible", document.getElementById("customizeDiv").style.transition = "opacity .5s ease", document.getElementById("customizeDiv").style.MozTransition = "opacity .5s ease", document.getElementById("customizeDiv").style.WebkitTransition = "opacity .5s ease", document.getElementById("customizeDiv").style.opacity = 1, remote_switchStatus = "ON", remoteSwitch(), customize_switchStatus = "TRANSITIONING", setTimeout(function() {
        customize_switchStatus = "ON"
    }, 500)) : "ON" == customize_switchStatus && (hideWallpaperSelector(), document.getElementById("customizeDiv").style.transition = "opacity .5s ease", document.getElementById("customizeDiv").style.MozTransition = "opacity .5s ease", document.getElementById("customizeDiv").style.WebkitTransition = "opacity .5s ease", document.getElementById("customizeDiv").style.opacity = 0, customize_switchStatus = "TRANSITIONING", setTimeout(function() {
        document.getElementById("customizeDiv").style.visibility = "hidden", customize_switchStatus = "OFF"
    }, 500))
}

function defineCustomizeButtons() {
    var e = "colorButton1";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[1]), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[1]), e.preventDefault()
    };
    e = "colorButton2";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[2]), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[2]), e.preventDefault()
    };
    e = "colorButton3";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[3]), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[3]), e.preventDefault()
    };
    e = "colorButton4";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[4]), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[4]), e.preventDefault()
    };
    e = "colorButton5";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[5]), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[5]), e.preventDefault()
    };
    e = "colorButton6";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[6]), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[6]), e.preventDefault()
    };
    e = "colorButton7";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[7]), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[7]), e.preventDefault()
    };
    e = "colorButton8";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[8]), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[8]), e.preventDefault()
    };
    e = "colorButton9";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[9]), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[9]), e.preventDefault()
    };
    e = "colorButton10";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[10]), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[10]), e.preventDefault()
    };
    e = "colorButton11";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[11]), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[11]), e.preventDefault()
    };
    e = "colorButton12";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[12]), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[12]), e.preventDefault()
    };
    e = "colorButton13";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[13]), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[13]), e.preventDefault()
    };
    e = "colorButton14";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[14]), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        showWallpaperColor(), changeChameleonWallpaper(colorArray[14]), e.preventDefault()
    };
    e = "gif1Button";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        change_wallpaperImage("wallpaper/images/wallpaper1.gif"), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        change_wallpaperImage("wallpaper/images/wallpaper1.gif"), e.preventDefault()
    };
    e = "gif2Button";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        change_wallpaperImage("wallpaper/images/wallpaper2.gif"), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        change_wallpaperImage("wallpaper/images/wallpaper2.gif"), e.preventDefault()
    };
    e = "gif3Button";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        change_wallpaperImage("wallpaper/images/wallpaper3.gif"), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        change_wallpaperImage("wallpaper/images/wallpaper3.gif"), e.preventDefault()
    };
    e = "gif4Button";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        change_wallpaperImage("wallpaper/images/wallpaper4.gif"), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        change_wallpaperImage("wallpaper/images/wallpaper4.gif"), e.preventDefault()
    };
    e = "gif5Button";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        change_wallpaperImage("wallpaper/images/wallpaper5.gif"), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        change_wallpaperImage("wallpaper/images/wallpaper5.gif"), e.preventDefault()
    };
    e = "gif6Button";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        change_wallpaperImage("wallpaper/images/wallpaper6.gif"), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        change_wallpaperImage("wallpaper/images/wallpaper6.gif"), e.preventDefault()
    };
    e = "gif7Button";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        change_wallpaperImage("wallpaper/images/wallpaper7.gif"), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        change_wallpaperImage("wallpaper/images/wallpaper7.gif"), e.preventDefault()
    };
    e = "gif8Button";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        change_wallpaperImage("wallpaper/images/wallpaper8.gif"), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        change_wallpaperImage("wallpaper/images/wallpaper8.gif"), e.preventDefault()
    };
    e = "gif9Button";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        change_wallpaperImage("wallpaper/images/wallpaper9.gif"), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        change_wallpaperImage("wallpaper/images/wallpaper9.gif"), e.preventDefault()
    };
    e = "gif10Button";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        change_wallpaperImage("wallpaper/images/wallpaper10.gif"), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        change_wallpaperImage("wallpaper/images/wallpaper10.gif"), e.preventDefault()
    };
    e = "gif11Button";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        change_wallpaperImage("wallpaper/images/wallpaper11.gif"), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        change_wallpaperImage("wallpaper/images/wallpaper11.gif"), e.preventDefault()
    };
    e = "gif12Button";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        change_wallpaperImage("wallpaper/images/wallpaper12.gif"), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        change_wallpaperImage("wallpaper/images/wallpaper12.gif"), e.preventDefault()
    };
    e = "customButton";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        document.getElementById("customButton").style.opacity = .3, setTimeout(function() {
            document.getElementById("customButton").style.opacity = 1
        }, 150), showWallpaperSelector(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        document.getElementById("customButton").style.opacity = .3, setTimeout(function() {
            document.getElementById("customButton").style.opacity = 1
        }, 150), showWallpaperSelector(), e.preventDefault()
    };
    e = "defaultButton";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        document.getElementById("defaultButton").style.opacity = .3, setTimeout(function() {
            document.getElementById("defaultButton").style.opacity = 1
        }, 150), selectStationTheme(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        document.getElementById("defaultButton").style.opacity = .3, setTimeout(function() {
            document.getElementById("defaultButton").style.opacity = 1
        }, 150), selectStationTheme(), e.preventDefault()
    };
    e = "customizeExterior";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        customizeSwitch(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        customizeSwitch(), e.preventDefault()
    }
}

function wallpaperSelectorSizeAndPosition() {
    document.getElementById("wallpaperSelector").style.height = 2 * parseInt(document.getElementById("colorButton1").style.height) + 4 * parseInt(document.getElementById("gif1Button").style.height) + "px", document.getElementById("wallpaperSelector").style.width = parseInt(document.getElementById("customize").style.width) + "px", document.getElementById("wallpaperSelector").style.top = parseInt(document.getElementById("colorButton1").style.top) + "px", document.getElementById("wallpaperSelector").style.left = "0px", document.getElementById("wallpaperSelector").style.backgroundColor = "#000000", document.getElementById("wallpaperSelector").style.opacity = .85;
    document.getElementById("wallpaperSelectorTextField").style.width = .8 * parseInt(document.getElementById("wallpaperSelector").style.width) + "px", document.getElementById("wallpaperSelectorTextField").style.height = .08 * parseInt(document.getElementById("wallpaperSelector").style.width) + "px", document.getElementById("wallpaperSelectorTextField").style.top = parseInt(document.getElementById("wallpaperSelector").style.height) / 2 - parseInt(document.getElementById("wallpaperSelectorTextField").style.height) / 2 + "px", document.getElementById("wallpaperSelectorTextField").style.left = parseInt(document.getElementById("wallpaperSelector").style.width) / 2 - parseInt(document.getElementById("wallpaperSelectorTextField").style.width) / 2 + "px", document.getElementById("wallpaperSelectorTextField").style.fontFamily = "regularfont", document.getElementById("wallpaperSelectorTextField").style.fontSize = .7 * parseInt(document.getElementById("wallpaperSelectorTextField").style.height) + "px", document.getElementById("wallpaperSelectorTextField").style.textAlign = "left", document.getElementById("wallpaperSelectorTextField").readOnly = !1, document.getElementById("wallpaperSelectorTextField").wrap = "off", document.getElementById("wallpaperSelectorTextField").style.color = "#FFFFFF", document.getElementById("wallpaperSelectorTextField").style.backgroundColor = "#000000";
    document.getElementById("saveWallpaperSelector").style.height = parseInt(document.getElementById("customButton").style.height) + "px", document.getElementById("saveWallpaperSelector").style.width = parseInt(document.getElementById("customButton").style.width) + "px", document.getElementById("saveWallpaperSelector").style.top = parseInt(document.getElementById("customButton").style.top) + "px", document.getElementById("saveWallpaperSelector").style.left = parseInt(document.getElementById("customButton").style.left) + "px";
    var e = "cancelWallpaperSelector";
    document.getElementById(e).style.height = parseInt(document.getElementById("defaultButton").style.height) + "px", document.getElementById(e).style.width = parseInt(document.getElementById("defaultButton").style.width) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("defaultButton").style.top) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("defaultButton").style.left) + "px"
}

function showWallpaperSelector() {
    document.getElementById("wallpaperSelectorTextField").value = "https://PASTE IMAGE LINK HERE", document.getElementById("wallpaperSelector").style.visibility = "visible", document.getElementById("wallpaperSelector").style.transition = "opacity .5s ease-out", document.getElementById("wallpaperSelector").style.MozTransition = "opacity .5s ease-out", document.getElementById("wallpaperSelector").style.WebkitTransition = "opacity .5s ease-out", document.getElementById("wallpaperSelector").style.opacity = .85, document.getElementById("customButton").style.display = "none", document.getElementById("defaultButton").style.display = "none", document.getElementById("saveWallpaperSelector").style.display = "block", document.getElementById("cancelWallpaperSelector").style.display = "block"
}

function hideWallpaperSelector() {
    document.getElementById("wallpaperSelectorTextField").blur(), document.getElementById("wallpaperSelector").style.opacity = 0, setTimeout(function() {
        document.getElementById("wallpaperSelector").style.visibility = "hidden"
    }, 500), document.getElementById("saveWallpaperSelector").style.display = "none", document.getElementById("cancelWallpaperSelector").style.display = "none", document.getElementById("customButton").style.display = "block", document.getElementById("defaultButton").style.display = "block"
}

function defineWallpaperSelectorTextFieldFocus() {
    document.getElementById("wallpaperSelectorTextField").onfocus = function() {
        document.getElementById(this.id).value = ""
    }
}

function defineWallpaperSelectorButtons() {
    var e = "saveWallpaperSelector";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        hideWallpaperSelector(), wallpaperSelectorLink = document.getElementById("wallpaperSelectorTextField").value, change_wallpaperImage(wallpaperSelectorLink), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        hideWallpaperSelector(), wallpaperSelectorLink = document.getElementById("wallpaperSelectorTextField").value, change_wallpaperImage(wallpaperSelectorLink), e.preventDefault()
    };
    e = "cancelWallpaperSelector";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        hideWallpaperSelector(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        hideWallpaperSelector(), e.preventDefault()
    }
}

function customizeRuntime() {
    allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length] = customizeSizeAndPosition, allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length - 1](), customizeSwitch(), defineCustomizeButtons(), allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length] = wallpaperSelectorSizeAndPosition, allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length - 1](), hideWallpaperSelector(), defineWallpaperSelectorTextFieldFocus(), defineWallpaperSelectorButtons()
}
colorArray = new Array, colorArray[0] = "", colorArray[1] = "#0008ff", colorArray[2] = "#00edf9", colorArray[3] = "#6600ff", colorArray[4] = "#1cc40d", colorArray[5] = "#ff007e", colorArray[6] = "#ffbf00", colorArray[7] = "#ff0000", colorArray[8] = "#8fb3f9", colorArray[9] = "#c4e9ef", colorArray[10] = "#cbb7e8", colorArray[11] = "#c7f9ce", colorArray[12] = "#f6c5f7", colorArray[13] = "#ffc682", colorArray[14] = "#000000", document.getElementById("saveWallpaperSelector").style.display = "none", document.getElementById("cancelWallpaperSelector").style.display = "none", allRuntimeFunctionsList[allRuntimeFunctionsList.length] = customizeRuntime;