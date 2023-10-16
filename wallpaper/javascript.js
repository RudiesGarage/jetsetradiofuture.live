function graffitiSoulSizeAndPosition() {
    document.getElementById("graffitiSoulFrame").style.width = .75 * parseInt(document.getElementById("remote").style.width) + "px", document.getElementById("graffitiSoulFrame").style.height = Math.round(+parseInt(document.getElementById("graffitiSoulFrame").style.width)) + "px", document.getElementById("graffitiSoulFrame").style.top = Math.round(stageHeight / 2) - Math.round(parseInt(document.getElementById("graffitiSoulFrame").style.height) / 2) + "px", document.getElementById("graffitiSoulFrame").style.left = Math.round(stageWidth / 2) - Math.round(parseInt(document.getElementById("graffitiSoulFrame").style.width) / 2) + "px";
    var e = "graffitiSoul";
    document.getElementById(e).style.height = parseInt(document.getElementById("graffitiSoulFrame").style.height) + "px", document.getElementById(e).style.width = parseInt(document.getElementById("graffitiSoulFrame").style.width) + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = "0px"
}

function hideGraffitiSoul() {
    flagGraffitiSoul = !1, document.getElementById("graffitiSoul").style.visibility = "hidden"
}

function showGraffitiSoul() {
    flagGraffitiSoul = !0, document.getElementById("graffitiSoul").style.visibility = "visible"
}
rotationDegree = 0;
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

function animateGraffitiSoul() {
    1 == flagGraffitiSoul && (requestAnimationFrame(animateGraffitiSoul), rotationDegree += 1.5, 360 < rotationDegree && (rotationDegree = 0), document.getElementById("graffitiSoul").style.transformStyle = "preserve-3d", document.getElementById("graffitiSoul").style.MozTransformStyle = "preserve-3d", document.getElementById("graffitiSoul").style.WebkitTransformStyle = "preserve-3d", document.getElementById("graffitiSoul").style.perspectiveOrigin = "50% 50%", document.getElementById("graffitiSoul").style.MozPerspectiveOrigin = "50% 50%", document.getElementById("graffitiSoul").style.WebkitPerspectiveOrigin = "50% 50%", document.getElementById("graffitiSoul").style.transformOrigin = "50% 50%", document.getElementById("graffitiSoul").style.MozTransformOrigin = "50% 50%", document.getElementById("graffitiSoul").style.WebkitTransformOrigin = "50% 50%", document.getElementById("graffitiSoul").style.transform = "perspective(700px) rotateX(0deg) rotateY(" + rotationDegree + "deg) rotateZ(0deg)", document.getElementById("graffitiSoul").style.MozTransform = "perspective(700px) rotateX(0deg) rotateY(" + rotationDegree + "deg) rotateZ(0deg)", document.getElementById("graffitiSoul").style.WebkitTransform = "perspective(700px) rotateX(0deg) rotateY(" + rotationDegree + "deg) rotateZ(0deg)")
}

function defineGraffitiSoulButton() {
    var e = "graffitiSoulFrame";
    document.getElementById(e).ontouchstart = function(e) {
        ("ON" == radio_switchStatus ? remoteSwitch : radioSwitch)(), e.preventDefault()
    }, document.getElementById(e).onmousedown = function(e) {
        ("ON" == radio_switchStatus ? remoteSwitch : radioSwitch)()
    }
}

function wallpaperImageSizeAndPosition() {
    var e = "wallpaperImage";
    document.getElementById(e).style.height = stageHeight + "px", document.getElementById(e).style.width = stageWidth + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = "0px";
    e = "wallpaperImageTop";
    document.getElementById(e).style.height = stageHeight + "px", document.getElementById(e).style.width = "auto", document.getElementById(e).style.left = stageWidth / 2 - document.getElementById(e).offsetWidth / 2 + "px", document.getElementById(e).style.top = stageHeight / 2 - document.getElementById(e).offsetHeight / 2 + "px", document.getElementById(e).offsetWidth < stageWidth && (document.getElementById(e).style.width = stageWidth + "px", document.getElementById(e).style.height = "auto", document.getElementById(e).style.left = stageWidth / 2 - document.getElementById(e).offsetWidth / 2 + "px", document.getElementById(e).style.top = stageHeight / 2 - document.getElementById(e).offsetHeight / 2 + "px");
    e = "wallpaperImageBottomClone";
    document.getElementById(e).style.height = stageHeight + "px", document.getElementById(e).style.width = "auto", document.getElementById(e).style.left = stageWidth / 2 - document.getElementById(e).offsetWidth / 2 + "px", document.getElementById(e).style.top = stageHeight / 2 - document.getElementById(e).offsetHeight / 2 + "px", document.getElementById(e).offsetWidth < stageWidth && (document.getElementById(e).style.width = stageWidth + "px", document.getElementById(e).style.height = "auto", document.getElementById(e).style.left = stageWidth / 2 - document.getElementById(e).offsetWidth / 2 + "px", document.getElementById(e).style.top = stageHeight / 2 - document.getElementById(e).offsetHeight / 2 + "px")
}

function wallpaperImageSizeAndPositionOLD() {
    var e = "wallpaperImage",
        t = 1280 / 720;
    document.getElementById(e).style.height = stageHeight + "px", document.getElementById(e).style.width = Math.round(parseInt(document.getElementById(e).style.height) * t) + "px", document.getElementById(e).style.left = -(parseInt(document.getElementById(e).style.width) - stageWidth) / 2 + "px", document.getElementById(e).style.top = -(parseInt(document.getElementById(e).style.height) - stageHeight) / 2 + "px", parseInt(document.getElementById(e).style.width) < stageWidth && (document.getElementById(e).style.width = stageWidth + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.left = -(parseInt(document.getElementById(e).style.width) - stageWidth) / 2 + "px", document.getElementById(e).style.top = -(parseInt(document.getElementById(e).style.height) - stageHeight) / 2 + "px");
    e = "wallpaperImageTop", t = 1280 / 720;
    document.getElementById(e).style.height = parseInt(document.getElementById("wallpaperImage").style.height) + "px", document.getElementById(e).style.width = parseInt(document.getElementById("wallpaperImage").style.width) + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = "0px";
    e = "wallpaperImageBottomClone", t = 1280 / 720;
    document.getElementById(e).style.height = parseInt(document.getElementById("wallpaperImage").style.height) + "px", document.getElementById(e).style.width = parseInt(document.getElementById("wallpaperImage").style.width) + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = "0px"
}

function change_wallpaperImage(e) {
    setTimeout(function() {
        document.getElementById("wallpaperImageBottomClone").style.display = "block", document.getElementById("wallpaperImage").style.visibility = "visible", document.getElementById("menuGradient").style.visibility = "visible", document.getElementById("wallpaperImageTop").style.transition = "opacity 0s ease-out", document.getElementById("wallpaperImageTop").style.MozTransition = "opacity 0s ease-out", document.getElementById("wallpaperImageTop").style.WebkitTransition = "opacity 0s ease-out", document.getElementById("wallpaperImageTop").style.opacity = 0, null == e ? document.getElementById("wallpaperImageTop").src = "radio/stations/" + stationsArray[selectedStationNum] + "/images/wallpaper.jpg" : void 0 !== e && (flagWallpaperImage = !1, document.getElementById("wallpaperImageTop").src = "", document.getElementById("wallpaperImageTop").src = e), wallpaperImageSizeAndPosition()
    }, 100), 1 == detectWallpaperLoad && (document.getElementById("wallpaperImageTop").onload = function() {
        wallpaperImageSizeAndPosition(), setTimeout(function() {
            document.getElementById("wallpaperImageTop").style.transition = "opacity .5s ease-out", document.getElementById("wallpaperImageTop").style.MozTransition = "opacity .5s ease-out", document.getElementById("wallpaperImageTop").style.WebkitTransition = "opacity .5s ease-out", document.getElementById("wallpaperImageTop").style.opacity = 1
        }, 100), setTimeout(function() {
            document.getElementById("wallpaperImageBottomClone").style.display = "none", document.getElementById("wallpaperImageBottomClone").src = document.getElementById("wallpaperImageTop").src
        }, 1e3)
    }, detectWallpaperLoad = !1)
}

function showWallpaperImage() {
    document.getElementById("wallpaperImage").style.visibility = "visible", document.getElementById("menuGradient").style.visibility = "visible", flagWallpaperImage = !0
}

function chameleonWallpaperSizeAndPosition() {
    var e = "chameleonWallpaper";
    document.getElementById(e).style.height = stageHeight + "px", document.getElementById(e).style.width = stageWidth + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = "0px"
}

function changeChameleonWallpaper(e) {
    flag_slideshow = !1, document.getElementById("chameleonWallpaper").style.transition = "background-color .5s linear", document.getElementById("chameleonWallpaper").style.MozTransition = "background-color .5s linear", document.getElementById("chameleonWallpaper").style.WebkitTransition = "background-color .5s linear", document.getElementById("chameleonWallpaper").style.backgroundColor = e, document.getElementById("informationIconColor").style.transition = "background-color .5s linear", document.getElementById("informationIconColor").style.MozTransition = "background-color .5s linear", document.getElementById("informationIconColor").style.WebkitTransition = "background-color .5s linear", document.getElementById("informationIconColor").style.backgroundColor = e
}

function slideshowChameleonWallpaper() {
    flag_slideshow = !0, slideshowPosition++, slideshowPosition >= colorArray.length && (slideshowPosition = 1), document.getElementById("chameleonWallpaper").style.transition = "background-color 1.5s linear", document.getElementById("chameleonWallpaper").style.MozTransition = "background-color 1.5s linear", document.getElementById("chameleonWallpaper").style.WebkitTransition = "background-color 1.5s linear", document.getElementById("chameleonWallpaper").style.backgroundColor = colorArray[slideshowPosition]
}

function repeatSlideshow() {
    setTimeout(function() {
        1 == flag_slideshow && slideshowChameleonWallpaper()
    }, 1500)
}

function showWallpaperColor() {
    document.getElementById("wallpaperImage").style.visibility = "hidden", document.getElementById("menuGradient").style.visibility = "hidden", flagWallpaperImage = !1
}

function selectStationTheme() {
    document.getElementById("graffitiSoul").src = "radio/stations/" + stationsArray[selectedStationNum] + "/images/icon.png", document.getElementById("stationDescription").src = "radio/stations/" + stationsArray[selectedStationNum] + "/images/description.png", change_wallpaperImage()
}

function wallpaperRuntime() {
    allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length] = graffitiSoulSizeAndPosition, allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length - 1](), defineGraffitiSoulButton(), allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length] = wallpaperImageSizeAndPosition, allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length - 1](), allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length] = chameleonWallpaperSizeAndPosition, allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length - 1]()
}
detectWallpaperLoad = !0, document.getElementById("chameleonWallpaper").style.transition = "background-color 0s linear", document.getElementById("chameleonWallpaper").style.MozTransition = "background-color 0s linear", document.getElementById("chameleonWallpaper").style.WebkitTransition = "background-color 0s linear", slideshowPosition = 1, flag_slideshow = !1, document.getElementById("chameleonWallpaper").addEventListener("transitionend", repeatSlideshow), document.getElementById("chameleonWallpaper").addEventListener("webkitTransitionEnd", repeatSlideshow), allRuntimeFunctionsList[allRuntimeFunctionsList.length] = wallpaperRuntime;