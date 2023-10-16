function loadingScreenSizeAndPosition() {
    var e = "loadingScreen",
        t = 0;
    document.getElementById(e).style.height = stageHeight + "px", document.getElementById(e).style.width = stageWidth + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = "0px";
    e = "loadingLogo", t = 1;
    document.getElementById(e).style.width = stageWidth - Math.round(80 * magnification) - Math.round(80 * magnification) + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) * t) + "px", document.getElementById(e).style.top = Math.round(stageHeight / 2) - Math.round(parseInt(document.getElementById("loadingLogo").style.height) / 2) + "px", document.getElementById(e).style.left = Math.round(stageWidth / 2) - Math.round(parseInt(document.getElementById("loadingLogo").style.width) / 2) + "px";
    420 < parseInt(document.getElementById(e).style.width) && (document.getElementById(e).style.width = "420px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) * t) + "px", document.getElementById(e).style.top = Math.round(stageHeight / 2) - Math.round(parseInt(document.getElementById("loadingLogo").style.height) / 2) + "px", document.getElementById(e).style.left = Math.round(stageWidth / 2) - Math.round(parseInt(document.getElementById("loadingLogo").style.width) / 2) + "px");
    var i = stageHeight;
    parseInt(document.getElementById(e).style.height) > i && (document.getElementById(e).style.height = i + "px", document.getElementById(e).style.width = Math.round(parseInt(document.getElementById(e).style.height) * t) + "px", document.getElementById(e).style.top = Math.round(stageHeight / 2) - Math.round(parseInt(document.getElementById("loadingLogo").style.height) / 2) + "px", document.getElementById(e).style.left = Math.round(stageWidth / 2) - Math.round(parseInt(document.getElementById("loadingLogo").style.width) / 2) + "px");
    e = "loadingStatus", t = 1;
    document.getElementById(e).style.width = Math.round(80 * magnification) + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.left = stageWidth - Math.round(+parseInt(document.getElementById("loadingStatus").style.width)) + "px", document.getElementById(e).style.top = stageHeight - Math.round(+parseInt(document.getElementById("loadingStatus").style.height)) + "px"
}

function showLoadingScreen() {
    document.getElementById("loadingScreen").style.visibility = "visible", document.getElementById("loadingLogo").style.transition = "opacity 0s ease-out", document.getElementById("loadingLogo").style.MozTransition = "opacity 0s ease-out", document.getElementById("loadingLogo").style.WebkitTransition = "opacity 0s ease-out", document.getElementById("loadingLogo").style.opacity = 0, document.getElementById("loadingStatus").style.transition = "opacity 0s ease-out", document.getElementById("loadingStatus").style.MozTransition = "opacity 0s ease-out", document.getElementById("loadingStatus").style.WebkitTransition = "opacity 0s ease-out", document.getElementById("loadingStatus").style.opacity = 0, setTimeout(function() {
        document.getElementById("loadingLogo").style.transition = "opacity 1.2s ease-in", document.getElementById("loadingLogo").style.MozTransition = "opacity 1.2s ease-in", document.getElementById("loadingLogo").style.WebkitTransition = "opacity 1.2s ease-in", document.getElementById("loadingLogo").style.opacity = 1
    }, 250), setTimeout(function() {
        document.getElementById("loadingStatus").style.transition = "opacity 1.0s ease-out", document.getElementById("loadingStatus").style.MozTransition = "opacity 1.0s ease-out", document.getElementById("loadingStatus").style.WebkitTransition = "opacity 1.0s ease-out", document.getElementById("loadingStatus").style.opacity = 1
    }, 900), setTimeout(function() {
        document.getElementById("loadingStatus").className = document.getElementById("loadingStatus").className + " pulseAnimation"
    }, 1900)
}

function hideLoadingScreen() {
    document.getElementById("loadingScreen").style.transition = "opacity 1s ease-in", document.getElementById("loadingScreen").style.MozTransition = "opacity 1s ease-in", document.getElementById("loadingScreen").style.WebkitTransition = "opacity 1s ease-in", document.getElementById("loadingScreen").style.opacity = 0, setTimeout(function() {
        document.getElementById("loadingScreen").style.zIndex = 110, document.getElementById("loadingScreen").style.visibility = "hidden", document.getElementById("loadingScreen").style.transition = "all 0s ease-out", document.getElementById("loadingScreen").style.MozTransition = "all 0s ease-out", document.getElementById("loadingScreen").style.WebkitTransition = "all 0s ease-out", document.getElementById("loadingScreen").style.opacity = 1, document.getElementById("loadingLogo").style.visibility = "hidden", document.getElementById("loadingStatus").style.visibility = "hidden"
    }, 1100)
}

function retrieveTotalFilesAndFilesList() {
    var totalhttp = new XMLHttpRequest;
    totalhttp.open("GET", "preloader/retrieveTotalFilesAndFilesList.php", !0), totalhttp.send(), totalhttp.onreadystatechange = function() {
        4 == totalhttp.readyState && (totalXML = totalhttp.responseXML, filesListArray9 = null == totalXML ? (filesListArray1 = ["CUTSCENE - Chapter 1 Start"], filesListArray2 = ["Scenescape 1"], filesListArray3 = ["SKATING - Freeskate in Shanghai 80mm"], filesListArray4 = ["GRAFFITI TV - HEIS"], filesListArray5 = ["Arnob - Tomar Jonno (Kadin Lofi Mix)"], filesListArray6 = ["Earth ISS"], filesListArray7 = ["Bob Ross - The Joy of Painting - S01E01 - A Walk in the Woods"], filesListArray8 = ["SURVEILLANCE - Wide Area Persistent Surveillance"], ["Static No Signal"]) : (filesListArray1 = console.log(totalXML.getElementsByTagName("fileListArray1")[0].childNodes[0].nodeValue), filesListArray2 = console.log(totalXML.getElementsByTagName("fileListArray2")[0].childNodes[0].nodeValue), filesListArray3 = console.log(totalXML.getElementsByTagName("fileListArray3")[0].childNodes[0].nodeValue), filesListArray4 = console.log(totalXML.getElementsByTagName("fileListArray4")[0].childNodes[0].nodeValue), filesListArray5 = console.log(totalXML.getElementsByTagName("fileListArray5")[0].childNodes[0].nodeValue), filesListArray6 = console.log(totalXML.getElementsByTagName("fileListArray6")[0].childNodes[0].nodeValue), filesListArray7 = console.log(totalXML.getElementsByTagName("fileListArray7")[0].childNodes[0].nodeValue), filesListArray8 = console.log(totalXML.getElementsByTagName("fileListArray8")[0].childNodes[0].nodeValue), console.log(totalXML.getElementsByTagName("fileListArray9")[0].childNodes[0].nodeValue)), shuffleArray(filesListArray1), shuffleArray(filesListArray2), shuffleArray(filesListArray3), shuffleArray(filesListArray4), shuffleArray(filesListArray5), shuffleArray(filesListArray6), shuffleArray(filesListArray7), shuffleArray(filesListArray8), shuffleArray(filesListArray9), totalFiles1 = filesListArray1.length, totalFiles2 = filesListArray2.length, totalFiles3 = filesListArray3.length, totalFiles4 = filesListArray4.length, totalFiles5 = filesListArray5.length, totalFiles6 = filesListArray6.length, totalFiles7 = filesListArray7.length, totalFiles8 = filesListArray8.length, totalFiles9 = filesListArray9.length, hideLoadingScreen(), console.log("ARRAY OUTPUT: " + filesListArray1), console.log("TOTAL FILES: " + totalFiles1), console.log("FIRST ARRAY ITEM: " + filesListArray1[0]))
    }
}

function shuffleArray(e) {
    for (var t, i, n = e.length; 0 !== n;) i = Math.floor(Math.random() * n), t = e[--n], e[n] = e[i], e[i] = t
}

function domIsLoaded(e) {
    document.body.style.visibility = "hidden", allSizeAndPosition(), allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length] = loadingScreenSizeAndPosition, allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length - 1](), loadedImages = 0, imageArray = new Array, imageArray[0] = new Image, imageArray[0].src = "preloader/images/logo.png", imageArray[0].addEventListener("load", checkPreloadProgress, !0), imageArray[1] = new Image, imageArray[1].src = "preloader/images/status.png", imageArray[1].addEventListener("load", checkPreloadProgress, !0), window.addEventListener("load", everythingIsLoaded, !0)
}

function checkPreloadProgress() {
    loadedImages++, loadedImages == imageArray.length && (document.body.style.visibility = "visible", showLoadingScreen())
}

function requiredImagesAreLoaded() {
    document.body.style.visibility = "visible"
}

function everythingIsLoaded(e) {
    allSizeAndPosition(), defineAllRequiredFunctions(), setTimeout(function() {
        retrieveTotalFilesAndFilesList()
    }, 3500)
}
document.getElementById("loadingScreen").style.backgroundColor = "#00178c", totalFiles1 = 0, totalFiles2 = 0, totalFiles3 = 0, totalFiles4 = 0, totalFiles5 = 0, totalFiles6 = 0, totalFiles7 = 0, totalFiles8 = 0, totalFiles9 = 0, filesListArray1 = new Array, filesListArray2 = new Array, filesListArray3 = new Array, filesListArray4 = new Array, filesListArray5 = new Array, filesListArray6 = new Array, filesListArray7 = new Array, filesListArray8 = new Array, filesListArray9 = new Array, this.addEventListener("DOMContentLoaded", domIsLoaded, !0), loadedImages = 0;