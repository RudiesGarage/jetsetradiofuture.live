function loadXML() {
    console.log("Loading WALL..."), randomCacheNumber = Math.floor(999999999 * Math.random() + 1), xhttp = new XMLHttpRequest, xhttp.open("GET", "editor/items.xml?" + randomCacheNumber, !0), xhttp.send(), xhttp.onreadystatechange = function() {
        if (4 == xhttp.readyState && (console.log("Data Loaded..."), xmlDocument = xhttp.responseXML, newDocumentValue = xmlString(xmlDocument), newDocumentValue !== oldDocumentValue)) {
            for (oldDocumentValue = xmlString(xmlDocument), console.log("Preparing NEW IMAGES..."), lastTotal = totalThumbnails, totalThumbnails = xmlDocument.getElementsByTagName("item").length - 1, d = 1; d <= lastTotal; d++) document.getElementById("thumbnail" + d).parentNode.removeChild(document.getElementById("thumbnail" + d));
            for (d = 1; d <= totalThumbnails; d++) {
                var e = document.getElementById("thumbnail0").cloneNode(!0);
                e.id = "thumbnail" + d, document.getElementById("board").appendChild(e)
            }
            for (d = 0; d <= totalThumbnails; d++) document.getElementById("thumbnail" + d).style.zIndex = 500 - d, document.getElementById("thumbnail" + d).imageLink = xmlDocument.getElementsByTagName("item")[totalThumbnails - d].getElementsByTagName("image")[0].childNodes[0].nodeValue, document.getElementById("thumbnail" + d).size = xmlDocument.getElementsByTagName("item")[totalThumbnails - d].getElementsByTagName("size")[0].childNodes[0].nodeValue, document.getElementById("thumbnail" + d).xPos = xmlDocument.getElementsByTagName("item")[totalThumbnails - d].getElementsByTagName("xPos")[0].childNodes[0].nodeValue, document.getElementById("thumbnail" + d).yPos = xmlDocument.getElementsByTagName("item")[totalThumbnails - d].getElementsByTagName("yPos")[0].childNodes[0].nodeValue, document.getElementById("thumbnail" + d).rotation = xmlDocument.getElementsByTagName("item")[totalThumbnails - d].getElementsByTagName("rotation")[0].childNodes[0].nodeValue, document.getElementById("thumbnail" + d).myID = d, document.getElementById("thumbnail" + d).style.display = "none", document.getElementById("thumbnail" + d).src = "", document.getElementById("thumbnail" + d).src = document.getElementById("thumbnail" + d).imageLink, document.getElementById("thumbnail" + d).onload = function() {
                document.getElementById("thumbnail" + this.myID).style.display = "block"
            };
            boardSizeAndPosition()
        }
    }
}

function xmlString(e) {
    return window.ActiveXObject ? e.xml : (new XMLSerializer).serializeToString(e)
}

function boardSizeAndPosition() {
    var e = "board",
        n = 1;
    document.getElementById(e).style.height = stageHeight + "px", document.getElementById(e).style.width = stageWidth + "px", document.getElementById(e).style.top = "0px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.overflow = "hidden";
    e = "boardBackground", n = 1280 / 720;
    for (document.getElementById(e).style.height = stageHeight + "px", document.getElementById(e).style.width = Math.round(parseInt(document.getElementById(e).style.height) * n) + "px", document.getElementById(e).style.left = -(parseInt(document.getElementById(e).style.width) - stageWidth) / 2 + "px", document.getElementById(e).style.top = -(parseInt(document.getElementById(e).style.height) - stageHeight) / 2 + "px", parseInt(document.getElementById(e).style.width) < stageWidth && (document.getElementById(e).style.width = stageWidth + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / n) + "px", document.getElementById(e).style.left = -(parseInt(document.getElementById(e).style.width) - stageWidth) / 2 + "px", document.getElementById(e).style.top = -(parseInt(document.getElementById(e).style.height) - stageHeight) / 2 + "px"), t = 0; t <= totalThumbnails; t++) {
        e = "thumbnail" + t, n = 1;
        document.getElementById(e).style.width = parseInt(document.getElementById("boardBackground").style.width) * document.getElementById(e).size + "px", document.getElementById(e).style.top = parseInt(document.getElementById("boardBackground").style.top) + parseInt(document.getElementById("boardBackground").style.height) * document.getElementById(e).yPos + "px", document.getElementById(e).style.left = parseInt(document.getElementById("boardBackground").style.left) + parseInt(document.getElementById("boardBackground").style.width) * document.getElementById(e).xPos + "px", document.getElementById(e).style.WebkitPerspectiveOrigin = "50% 50%", document.getElementById(e).style.MozPerspectiveOrigin = "50% 50%", document.getElementById(e).style.perspectiveOrigin = "50% 50%", document.getElementById(e).style.WebkitTransformOrigin = "50% 50%", document.getElementById(e).style.MozTransformOrigin = "50% 50%", document.getElementById(e).style.transformOrigin = "50% 50%", document.getElementById(e).style.WebkitTransformStyle = "preserve-3d", document.getElementById(e).style.MozTransformStyle = "preserve-3d", document.getElementById(e).style.transformStyle = "preserve-3d", document.getElementById(e).style.WebkitTransform = "perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(" + document.getElementById(e).rotation + "deg)", document.getElementById(e).style.MozTransform = "perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(" + document.getElementById(e).rotation + "deg)", document.getElementById(e).style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(" + document.getElementById(e).rotation + "deg)"
    }
}

function defineBoardButton() {
    var e = "board";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        (0 == localStorage.canCountValue ? displayEmptyNotice : editorSwitch)(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        (0 == localStorage.canCountValue ? displayEmptyNotice : editorSwitch)(), e.preventDefault()
    }
}

function canCountSizeAndPosition() {
    document.getElementById("canCount").style.height = 2.8 * Math.ceil(32 * magnification) + "px", document.getElementById("canCount").style.width = Math.round(parseInt(document.getElementById("canCount").style.height) / (100 / 150)) + "px", document.getElementById("canCount").style.left = "0px", document.getElementById("canCount").style.top = stageHeight - parseInt(document.getElementById("canCount").style.height) - Math.round(2.8 * Math.ceil(32 * magnification) * .25) + "px";
    document.getElementById("canIcon").style.height = parseInt(document.getElementById("canCount").style.height) + "px", document.getElementById("canIcon").style.width = Math.round(+parseInt(document.getElementById("canIcon").style.height)) + "px", document.getElementById("canIcon").style.left = "0px", document.getElementById("canIcon").style.top = "0px";
    document.getElementById("canCountText").style.height = Math.round(.33 * parseInt(document.getElementById("canCount").style.height)) + "px", document.getElementById("canCountText").style.width = parseInt(document.getElementById("canCount").style.width) + "px", document.getElementById("canCountText").style.left = Math.round(.74 * parseInt(document.getElementById("canCount").style.height)) + "px", document.getElementById("canCountText").style.top = Math.round(.48 * parseInt(document.getElementById("canCount").style.height)) + "px", document.getElementById("canCountText").style.fontFamily = "jetsetfont", document.getElementById("canCountText").style.fontSize = Math.round(.9 * parseInt(document.getElementById("canCountText").style.height)) + "px", document.getElementById("canCountText").style.color = "#FF0000", document.getElementById("canCountText").style.textAlign = "left", document.getElementById("canCountText").style.lineHeight = "1.1", document.getElementById("canCountText").style.whiteSpace = "nowrap", document.getElementById("canCountText").style.textTransform = "uppercase", document.getElementById("canCountText").style.webkitTextStroke = "1px black";
    var e = "emptyNotice";
    document.getElementById(e).style.width = .75 * stageWidth + "px", document.getElementById(e).style.height = Math.round(+parseInt(document.getElementById(e).style.width)) + "px", document.getElementById(e).style.top = Math.round(stageHeight / 2) - Math.round(parseInt(document.getElementById(e).style.height) / 2) + "px", document.getElementById(e).style.left = Math.round(stageWidth / 2) - Math.round(parseInt(document.getElementById(e).style.width) / 2) + "px", parseInt(document.getElementById(e).style.height) > .75 * stageHeight && (document.getElementById(e).style.height = .75 * stageHeight + "px", document.getElementById(e).style.width = Math.round(+parseInt(document.getElementById(e).style.height)) + "px", document.getElementById(e).style.top = Math.round(stageHeight / 2) - Math.round(parseInt(document.getElementById(e).style.height) / 2) + "px", document.getElementById(e).style.left = Math.round(stageWidth / 2) - Math.round(parseInt(document.getElementById(e).style.width) / 2) + "px"), 500 < parseInt(document.getElementById(e).style.width) && (document.getElementById(e).style.width = "500px", document.getElementById(e).style.height = Math.round(+parseInt(document.getElementById(e).style.width)) + "px", document.getElementById(e).style.top = Math.round(stageHeight / 2) - Math.round(parseInt(document.getElementById(e).style.height) / 2) + "px", document.getElementById(e).style.left = Math.round(stageWidth / 2) - Math.round(parseInt(document.getElementById(e).style.width) / 2) + "px")
}

function updateCanCount() {
    null == localStorage.canCountValue && (localStorage.canCountValue = 3), localStorage.canCountValue < 0 && (localStorage.canCountValue = 0), 99 < localStorage.canCountValue && (localStorage.canCountValue = 99), document.getElementById("canCountText").innerHTML = localStorage.canCountValue
}

function checkCanCount() {
    setInterval(function() {
        updateCanCount()
    }, 6e4)
}
var displayEmptyTimeout;

function displayEmptyNotice() {
    clearTimeout(displayEmptyTimeout), document.getElementById("emptyNotice").style.visibility = "visible", displayEmptyTimeout = setTimeout(function() {
        document.getElementById("emptyNotice").style.visibility = "hidden"
    }, 3200)
}

function boardRuntime() {
    loadXML(), setInterval(function() {
        loadXML()
    }, 7e3), allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length] = boardSizeAndPosition, allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length - 1](), defineBoardButton(), allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length] = canCountSizeAndPosition, allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length - 1](), updateCanCount(), checkCanCount()
}
totalThumbnails = 0, newDocumentValue = "", oldDocumentValue = "", lastTotal = 0, document.getElementById("emptyNotice").style.visibility = "hidden", allRuntimeFunctionsList[allRuntimeFunctionsList.length] = boardRuntime;