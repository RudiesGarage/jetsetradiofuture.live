function defineAllRequiredFunctions() {
    for (x = 0; x < allRuntimeFunctionsList.length; x++) allRuntimeFunctionsList[x]()
}

function allSizeAndPosition() {
    window.scrollTo(0, 0), stageHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0, stageWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0, stageWidth > stageHeight ? magnification = stageWidth / 680 : stageHeight > stageWidth && (magnification = stageHeight / 680), 1 < magnification && (magnification = 1);
    for (var n = 0; n < allSizeAndPositionFunctionsList.length; n++) allSizeAndPositionFunctionsList[n]()
}

function queryValue(n) {
    var i = window.location.search.substring(1);
    console.log("Complete Query: " + i);
    var e = i.split("&");
    console.log("Variables: " + e);
    for (var t = 0; t < e.length; t++) {
        var o = e[t].split("=");
        if (o[0] == n) return o[1]
    }
    return !1
}

function retrieveMousePositions(n) {
    var i;
    mouseY = null != n.touches ? (i = n.touches[0], mouseX = i.pageX, i.pageY) : (mouseX = n.pageX, n.pageY)
}
preferredInterfaceColor = "light", allRuntimeFunctionsList = new Array, magnification = 0, allSizeAndPositionFunctionsList = new Array, window.addEventListener("resize", function() {
    allSizeAndPosition()
}), window.addEventListener("orientationchange", function() {
    allSizeAndPosition()
}), window.addEventListener("touchmove", function(n) {
    n.preventDefault()
}, !1), window.onpageshow = function(n) {
    n.persisted && (document.body.style.display = "none", location.reload())
}, mouseX = 0, mouseY = 0;