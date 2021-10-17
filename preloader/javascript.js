function loadingScreenSizeAndPosition() {
    var e = "loadingScreen",
        t = 0;
    document.getElementById(e).style.height = stageHeight + "px", document.getElementById(e).style.width = stageWidth + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = "0px";
    e = "loadingLogo", t = 1;
    document.getElementById(e).style.width = stageWidth + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = Math.round(stageHeight / 2) - Math.round(parseInt(document.getElementById(e).style.height) / 2) + "px", document.getElementById(e).style.left = Math.round(stageWidth / 2) - Math.round(parseInt(document.getElementById(e).style.width) / 2) + "px", parseInt(document.getElementById(e).style.height) > .99 * stageHeight && (document.getElementById(e).style.height = .99 * stageHeight + "px", document.getElementById(e).style.width = Math.round(parseInt(document.getElementById(e).style.height) * t) + "px", document.getElementById(e).style.top = Math.round(stageHeight / 2) - Math.round(parseInt(document.getElementById(e).style.height) / 2) + "px", document.getElementById(e).style.left = Math.round(stageWidth / 2) - Math.round(parseInt(document.getElementById(e).style.width) / 2) + "px"), 500 < parseInt(document.getElementById(e).style.width) && (document.getElementById(e).style.width = "500px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = Math.round(stageHeight / 2) - Math.round(parseInt(document.getElementById(e).style.height) / 2) + "px", document.getElementById(e).style.left = Math.round(stageWidth / 2) - Math.round(parseInt(document.getElementById(e).style.width) / 2) + "px");
    e = "loadingStatus", t = 1;
    document.getElementById(e).style.width = Math.round(80 * magnification) + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.left = stageWidth - Math.round(+parseInt(document.getElementById("loadingStatus").style.width)) + "px", document.getElementById(e).style.top = stageHeight - Math.round(+parseInt(document.getElementById("loadingStatus").style.height)) + "px", document.getElementById(e).style.display = "none"
}

function showLoadingScreen() {
    document.getElementById("loadingScreen").style.visibility = "visible", document.getElementById("loadingLogo").style.transition = "opacity 0s ease-out", document.getElementById("loadingLogo").style.MozTransition = "opacity 0s ease-out", document.getElementById("loadingLogo").style.WebkitTransition = "opacity 0s ease-out", document.getElementById("loadingLogo").style.opacity = 0, document.getElementById("loadingStatus").style.transition = "opacity 0s ease-out", document.getElementById("loadingStatus").style.MozTransition = "opacity 0s ease-out", document.getElementById("loadingStatus").style.WebkitTransition = "opacity 0s ease-out", document.getElementById("loadingStatus").style.opacity = 0, setTimeout(function() {
        document.getElementById("loadingLogo").style.transition = "opacity 1.2s ease-in", document.getElementById("loadingLogo").style.MozTransition = "opacity 1.2s ease-in", document.getElementById("loadingLogo").style.WebkitTransition = "opacity 1.2s ease-in", document.getElementById("loadingLogo").style.opacity = 1
    }, 250), setTimeout(function() {
        document.getElementById("loadingStatus").style.transition = "opacity 1.0s ease-out", document.getElementById("loadingStatus").style.MozTransition = "opacity 1.0s ease-out", document.getElementById("loadingStatus").style.WebkitTransition = "opacity 1.0s ease-out", document.getElementById("loadingStatus").style.opacity = 1
    }, 900)
}

function hideLoadingScreen() {
    setTimeout(function() {
        document.getElementById("loadingLogo").style.transition = "opacity 1.2s ease-in", document.getElementById("loadingLogo").style.MozTransition = "opacity 1.2s ease-in", document.getElementById("loadingLogo").style.WebkitTransition = "opacity 1.2s ease-in", document.getElementById("loadingLogo").style.opacity = 0
    }, 5e3), setTimeout(function() {
        document.getElementById("loadingScreen").style.transition = "opacity 1s ease-in", document.getElementById("loadingScreen").style.MozTransition = "opacity 1s ease-in", document.getElementById("loadingScreen").style.WebkitTransition = "opacity 1s ease-in", document.getElementById("loadingScreen").style.opacity = 0
    }, 6500), setTimeout(function() {
        document.getElementById("loadingScreen").style.zIndex = 110, document.getElementById("loadingScreen").style.visibility = "hidden", document.getElementById("loadingScreen").style.transition = "all 0s ease-out", document.getElementById("loadingScreen").style.MozTransition = "all 0s ease-out", document.getElementById("loadingScreen").style.WebkitTransition = "all 0s ease-out", document.getElementById("loadingScreen").style.opacity = 1, document.getElementById("loadingLogo").style.visibility = "hidden", document.getElementById("loadingStatus").style.visibility = "hidden", beginTickerLoading()
    }, 7600)
}

function domIsLoaded(e) {
    document.body.style.visibility = "hidden", allSizeAndPosition(), allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length] = loadingScreenSizeAndPosition, allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length - 1](), loadedImages = 0, imageArray = new Array, imageArray[0] = new Image, imageArray[0].src = "preloader/images/logo.png", imageArray[0].addEventListener("load", checkPreloadProgress, !0), imageArray[1] = new Image, imageArray[1].src = "preloader/images/status.png", imageArray[1].addEventListener("load", checkPreloadProgress, !0), window.addEventListener("load", everythingIsLoaded, !0)
}

function checkPreloadProgress() {
    loadedImages++, loadedImages == imageArray.length && (document.body.style.visibility = "visible", showLoadingScreen())
}

function everythingIsLoaded(e) {
    allSizeAndPosition(), defineAllRequiredFunctions(), hideLoadingScreen()
}
document.getElementById("loadingScreen").style.backgroundColor = "#000000", this.addEventListener("DOMContentLoaded", domIsLoaded, !0);