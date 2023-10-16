function xmlString(e) {
    return window.ActiveXObject ? e.xml : (new XMLSerializer).serializeToString(e)
}

function saveCounterXML() {
    chatpassword = queryValue("p"), counterPostMessage = "chatpassword=" + chatpassword;
    var e = new XMLHttpRequest;
    e.open("POST", "counter/counter.php", !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.send(counterPostMessage), e.onreadystatechange = function() {
        4 == e.readyState && loadCounterXML()
    }
}

function loadCounterXML() {
    randomCacheNumber = Math.floor(999999999 * Math.random() + 1), counterLoadRequest = new XMLHttpRequest, counterLoadRequest.open("GET", "counter/listeners.xml?" + randomCacheNumber, !0), counterLoadRequest.send(), counterLoadRequest.onreadystatechange = function() {
        4 == counterLoadRequest.readyState && (void 0 === counterLoadRequest.responseXML || null === counterLoadRequest.responseXML || (counterXMLDocument = counterLoadRequest.responseXML, void 0 !== counterXMLDocument.getElementsByTagName("user")[0] && (totalListeners = counterXMLDocument.getElementsByTagName("user").length)))
    }
}

function dateSizeAndPosition() {
    document.getElementById("worldIcon").style.height = 1.3 * parseInt(document.getElementById("radioButton").style.height) + "px", document.getElementById("worldIcon").style.width = Math.round(parseInt(document.getElementById("worldIcon").style.height) * (190 / 209)) + "px", document.getElementById("worldIcon").style.left = "0px", document.getElementById("worldIcon").style.top = "0px";
    var e = "dateTextField";
    document.getElementById(e).style.height = Math.round(.99 * parseInt(document.getElementById("worldIcon").style.height)) + "px", document.getElementById(e).style.width = stageWidth + "px", document.getElementById(e).style.left = Math.round(.9 * parseInt(document.getElementById("worldIcon").style.height)) + "px", document.getElementById(e).style.top = Math.round(.28 * parseInt(document.getElementById("worldIcon").style.height)) + "px", document.getElementById(e).style.fontSize = Math.round(.32 * parseInt(document.getElementById("dateTextField").style.height)) + "px", document.getElementById(e).style.color = "#FFFFFF", document.getElementById(e).style.textAlign = "left", document.getElementById(e).style.lineHeight = "1", document.getElementById(e).style.opacity = .9
}

function updateDisplay() {
    1 == displayData && (document.getElementById("dateTextField").innerHTML = "<regularText>JetSetRadio</regularText><transparentText>.Live</transparentText>"), 2 == displayData && (document.getElementById("dateTextField").innerHTML = "<regularText>On Air</regularText><transparentText> Tokyo-to</transparentText>"), 3 == displayData && (document.getElementById("dateTextField").innerHTML = "<regularText>Listening Now</regularText><transparentText> " + totalListeners + "</transparentText>")
}
var s1, s2, s3;

function runDateSlideshow() {
    clearTimeout(s1), clearTimeout(s2), clearTimeout(s3), document.getElementById("dateTextField").style.transition = "opacity .5s ease-out", document.getElementById("dateTextField").style.MozTransition = "opacity .5s ease-out", document.getElementById("dateTextField").style.WebkitTransition = "opacity .5s ease-out", document.getElementById("dateTextField").style.opacity = 0, s1 = setTimeout(function() {
        displayData += 1, displayData > displayTotal && (displayData = 1), updateDisplay()
    }, 600), s2 = setTimeout(function() {
        document.getElementById("dateTextField").style.transition = "opacity .5s ease-out", document.getElementById("dateTextField").style.MozTransition = "opacity .5s ease-out", document.getElementById("dateTextField").style.WebkitTransition = "opacity .5s ease-out", document.getElementById("dateTextField").style.opacity = 1
    }, 700), s3 = setTimeout(function() {
        runDateSlideshow()
    }, 6e3)
}

function changeWorldIcon() {
    currentWorldIcon++, 15 < currentWorldIcon && (currentWorldIcon = 0), 0 == currentWorldIcon ? document.getElementById("worldIcon").src = "counter/images/worldIcon.png" : document.getElementById("worldIcon").src = "counter/images/icons/" + currentWorldIcon + ".gif"
}

function checkForEditor() {
    0 == queryValue("p") || editorSwitch()
}

function counterButtons() {
    var e = "worldIcon";
    "ontouchmove" in document.documentElement ? (document.getElementById(e).ontouchstart = function(e) {
        document.getElementById("worldIcon").style.opacity = .3, worldIcon_switchStatus = !1, worldIconTimeOut = setTimeout(function() {
            lastMessage = "", loadXML(), checkEvents(), worldIcon_switchStatus = !0
        }, 1200), e.preventDefault()
    }, document.getElementById(e).ontouchend = function(e) {
        document.getElementById("worldIcon").style.opacity = 1, clearTimeout(worldIconTimeOut), 0 == worldIcon_switchStatus && (runDateSlideshow(), checkForEditor()), e.preventDefault()
    }) : (document.getElementById(e).onmousedown = function(e) {
        document.getElementById("worldIcon").style.opacity = .3, worldIcon_switchStatus = !1, worldIconTimeOut = setTimeout(function() {
            lastMessage = "", loadXML(), checkEvents(), worldIcon_switchStatus = !0
        }, 1200), e.preventDefault()
    }, document.getElementById(e).onmouseup = function(e) {
        document.getElementById("worldIcon").style.opacity = 1, clearTimeout(worldIconTimeOut), 0 == worldIcon_switchStatus && (runDateSlideshow(), checkForEditor()), e.preventDefault()
    })
}

function counterRuntime() {
    saveCounterXML(), setInterval(function() {
        saveCounterXML()
    }, 6e4), allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length] = dateSizeAndPosition, allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length - 1](), updateDisplay(), runDateSlideshow(), counterButtons()
}
totalListeners = 1, displayData = 1, displayTotal = 3, currentWorldIcon = 0, totalWorldIcons = 16, allRuntimeFunctionsList[allRuntimeFunctionsList.length] = counterRuntime;