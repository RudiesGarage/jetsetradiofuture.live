function defineAllRequiredFunctions() {
    for (x = 0; x < allRuntimeFunctionsList.length; x++) allRuntimeFunctionsList[x]()
}

function allSizeAndPosition() {
    window.scrollTo(0, 0), stageHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0, stageWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0, stageWidth > stageHeight ? magnification = stageWidth / 680 : stageHeight > stageWidth && (magnification = stageHeight / 680), 1 < magnification && (magnification = 1);
    for (var e = 0; e < allSizeAndPositionFunctionsList.length; e++) allSizeAndPositionFunctionsList[e]()
}

function retrieveMousePositions(e) {
    if (null != e.touches) {
        var t = e.touches[0];
        mouseX = t.pageX, mouseY = t.pageY
    } else mouseX = e.pageX, mouseY = e.pageY
}

function detectMousePositionsAndGestures() {
    "ontouchmove" in document.documentElement ? (window.document.ontouchstart = function(e) {
        mouseDown = !0, gestureDrag = !0, retrieveMousePositions(e), gestureX_Start = mouseX, gestureX_End = mouseX, gestureXDistance_Dragged = 0, gestureY_Start = mouseY, gestureY_End = mouseY, gestureYDistance_Dragged = 0, allowClick = !0
    }, window.document.ontouchend = function(e) {
        mouseDown = !1, gestureDrag = !1, checkForAllGestures(), gestureX_Start = 0, gestureX_End = 0, gestureXDistance_Dragged = 0, gestureY_Start = 0, gestureY_End = 0, gestureYDistance_Dragged = 0, allowClick = !0
    }, window.document.ontouchmove = function(e) {
        retrieveMousePositions(e), 1 == gestureDrag && (gestureX_End = mouseX, gestureXDistance_Dragged = gestureX_Start - gestureX_End, gestureY_End = mouseY, gestureYDistance_Dragged = gestureY_Start - gestureY_End, allowClick = !(5 < gestureXDistance_Dragged || gestureXDistance_Dragged < -5 || 5 < gestureYDistance_Dragged || gestureYDistance_Dragged < -5), checkForAllGestures())
    }) : (window.document.onmousedown = function(e) {
        mouseDown = !0, gestureDrag = !0, retrieveMousePositions(e), gestureX_Start = mouseX, gestureX_End = mouseX, gestureXDistance_Dragged = 0, gestureY_Start = mouseY, gestureY_End = mouseY, gestureYDistance_Dragged = 0, allowClick = !0, e.preventDefault()
    }, window.document.onmouseup = function(e) {
        mouseDown = !1, gestureDrag = !1, checkForAllGestures(), gestureX_Start = 0, gestureX_End = 0, gestureXDistance_Dragged = 0, gestureY_Start = 0, gestureY_End = 0, gestureYDistance_Dragged = 0, allowClick = !0
    }, document.onmouseout = function(e) {
        mouseDown = !1
    }, window.document.onmousemove = function(e) {
        retrieveMousePositions(e), 1 == gestureDrag && (gestureX_End = mouseX, gestureXDistance_Dragged = gestureX_Start - gestureX_End, gestureY_End = mouseY, gestureYDistance_Dragged = gestureY_Start - gestureY_End, allowClick = !(5 < gestureXDistance_Dragged || gestureXDistance_Dragged < -5 || 5 < gestureYDistance_Dragged || gestureYDistance_Dragged < -5), checkForAllGestures())
    })
}

function checkForAllGestures() {
    0 == gestureDrag && gestureXDistance_Dragged < 20 * magnification && gestureXDistance_Dragged > -20 * magnification && gestureYDistance_Dragged < 20 * magnification && gestureYDistance_Dragged > -20 * magnification && "function" == typeof clickGesture && clickGesture(), 1 == gestureDrag && gestureYDistance_Dragged > 20 * magnification && (gestureDrag = !1, "function" == typeof upGesture && upGesture()), 1 == gestureDrag && gestureYDistance_Dragged < -20 * magnification && (gestureDrag = !1, "function" == typeof downGesture && downGesture()), 1 == gestureDrag && gestureXDistance_Dragged > 20 * magnification && (gestureDrag = !1, "function" == typeof leftGesture && leftGesture()), 1 == gestureDrag && gestureXDistance_Dragged < -20 * magnification && (gestureDrag = !1, "function" == typeof rightGesture && rightGesture())
}

function gesturesRuntime() {
    setTimeout(function() {}, 500)
}

function queryValue(e) {
    for (var t = window.location.search.substring(1).split("&"), n = 0; n < t.length; n++) {
        var s = t[n].split("=");
        if (s[0] == e) return s[1]
    }
    return !1
}

function shuffleArray(e) {
    for (var t = e.length, n = 0, s = 0; 0 !== t;) s = Math.floor(Math.random() * t), n = e[--t], e[t] = e[s], e[s] = n
}
allRuntimeFunctionsList = new Array, magnification = 0, allSizeAndPositionFunctionsList = new Array, window.addEventListener("resize", function() {
    allSizeAndPosition()
}), window.addEventListener("orientationchange", function() {
    allSizeAndPosition()
}), window.addEventListener("touchmove", function(e) {
    e.preventDefault()
}, !1), mouseX = 0, mouseY = 0, mouseDown = !1, gestureDrag = !1, allowClick = !1, gestureX_Start = 0, gestureX_End = 0, gestureXDistance_Dragged = 0, gestureY_Start = 0, gestureY_End = 0, gestureYDistance_Dragged = 0, allRuntimeFunctionsList[allRuntimeFunctionsList.length] = gesturesRuntime, window.onpageshow = function(e) {
    e.persisted && (document.body.style.display = "none", location.reload())
};