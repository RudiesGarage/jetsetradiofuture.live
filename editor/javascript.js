function editorSizeAndPosition() {
    var e = "editor",
        t = 1;
    document.getElementById(e).style.width = Math.round(.7 * stageWidth) + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = Math.round(stageHeight / 2) - Math.round(parseInt(document.getElementById(e).style.height) / 2) + "px", document.getElementById(e).style.left = Math.round(stageWidth / 2) - Math.round(parseInt(document.getElementById(e).style.width) / 2) + "px", parseInt(document.getElementById(e).style.height) > .4 * stageHeight && (document.getElementById(e).style.height = .4 * stageHeight + "px", document.getElementById(e).style.width = Math.round(parseInt(document.getElementById(e).style.height) * t) + "px", document.getElementById(e).style.top = Math.round(stageHeight / 2) - Math.round(parseInt(document.getElementById(e).style.height) / 2) + "px", document.getElementById(e).style.left = Math.round(stageWidth / 2) - Math.round(parseInt(document.getElementById(e).style.width) / 2) + "px"), 500 < parseInt(document.getElementById(e).style.width) && (document.getElementById(e).style.width = "500px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = Math.round(stageHeight / 2) - Math.round(parseInt(document.getElementById(e).style.height) / 2) + "px", document.getElementById(e).style.left = Math.round(stageWidth / 2) - Math.round(parseInt(document.getElementById(e).style.width) / 2) + "px"), document.getElementById(e).style.overflow = "visible";
    e = "eventTypeTextField", t = 0;
    document.getElementById(e).style.width = parseInt(document.getElementById("editor").style.width) + "px", document.getElementById(e).style.height = .05 * parseInt(document.getElementById("editor").style.height) + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = "0px", document.getElementById(e).style.fontFamily = "regularfont", document.getElementById(e).style.fontSize = Math.round(.78 * parseInt(document.getElementById(e).style.height)) + "px", document.getElementById(e).style.lineHeight = "1", document.getElementById(e).style.textAlign = "left", document.getElementById(e).readOnly = !1, document.getElementById(e).wrap = "off", document.getElementById(e).style.color = "#ffffff", document.getElementById(e).style.backgroundColor = "#32c8f2";
    e = "eventVar1TextField", t = 0;
    document.getElementById(e).style.width = parseInt(document.getElementById("editor").style.width) + "px", document.getElementById(e).style.height = .07 * parseInt(document.getElementById("editor").style.height) + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = parseInt(document.getElementById("eventTypeTextField").style.height) + "px", document.getElementById(e).style.fontFamily = "regularfont", document.getElementById(e).style.fontSize = Math.round(.5 * parseInt(document.getElementById(e).style.height)) + "px", document.getElementById(e).style.lineHeight = "1", document.getElementById(e).style.textAlign = "left", document.getElementById(e).readOnly = !1, document.getElementById(e).wrap = "off", document.getElementById(e).style.color = "#ffffff", document.getElementById(e).style.backgroundColor = "#b6b6b6";
    e = "eventVar2TextField", t = 0;
    document.getElementById(e).style.width = parseInt(document.getElementById("editor").style.width) + "px", document.getElementById(e).style.height = .07 * parseInt(document.getElementById("editor").style.height) + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = parseInt(document.getElementById("eventTypeTextField").style.height) + parseInt(document.getElementById("eventVar1TextField").style.height) + "px", document.getElementById(e).style.fontFamily = "regularfont", document.getElementById(e).style.fontSize = Math.round(.5 * parseInt(document.getElementById(e).style.height)) + "px", document.getElementById(e).style.lineHeight = "1", document.getElementById(e).style.textAlign = "left", document.getElementById(e).readOnly = !1, document.getElementById(e).wrap = "off", document.getElementById(e).style.color = "#ffffff", document.getElementById(e).style.backgroundColor = "#a1abd5";
    e = "saveEventButton", t = 1;
    document.getElementById(e).style.height = 2.5 * parseInt(document.getElementById("eventVar1TextField").style.height) + "px", document.getElementById(e).style.width = Math.round(parseInt(document.getElementById(e).style.height) * t) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("editor").style.width) + .1 * parseInt(document.getElementById(e).style.width) + "px", document.getElementById(e).style.top = "0px";
    e = "searchTextField", t = 0;
    document.getElementById(e).style.width = parseInt(document.getElementById("editor").style.width) + "px", document.getElementById(e).style.height = .1 * parseInt(document.getElementById("editor").style.height) + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = 4.3 * parseInt(document.getElementById("eventTypeTextField").style.height) + "px", document.getElementById(e).style.fontFamily = "regularfont", document.getElementById(e).style.fontSize = Math.round(.9 * parseInt(document.getElementById(e).style.height)) + "px", document.getElementById(e).style.lineHeight = "1", document.getElementById(e).style.textAlign = "left", document.getElementById(e).readOnly = !1, document.getElementById(e).style.color = "#000000", document.getElementById(e).style.backgroundColor = "#fffffff";
    e = "resultTextField", t = 0;
    document.getElementById(e).style.width = parseInt(document.getElementById("editor").style.width) + "px", document.getElementById(e).style.height = .05 * parseInt(document.getElementById("editor").style.height) + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = parseInt(document.getElementById("searchTextField").style.top) + parseInt(document.getElementById("searchTextField").style.height) + "px", document.getElementById(e).style.fontFamily = "regularfont", document.getElementById(e).style.fontSize = Math.round(.9 * parseInt(document.getElementById(e).style.height)) + "px", document.getElementById(e).style.textIndent = Math.round(.15 * parseInt(document.getElementById(e).style.height)) + "px", document.getElementById(e).style.lineHeight = "1", document.getElementById(e).style.textAlign = "left", document.getElementById(e).readOnly = !1, document.getElementById(e).style.color = "#000000";
    e = "nextButton", t = 1;
    document.getElementById(e).style.height = parseInt(document.getElementById("searchTextField").style.height) + "px", document.getElementById(e).style.width = Math.round(parseInt(document.getElementById(e).style.height) * t) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("editor").style.width) - 2 * parseInt(document.getElementById(e).style.width) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("searchTextField").style.top) + "px";
    e = "prevButton", t = 1;
    document.getElementById(e).style.height = parseInt(document.getElementById("searchTextField").style.height) + "px", document.getElementById(e).style.width = Math.round(parseInt(document.getElementById(e).style.height) * t) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("editor").style.width) - 3 * parseInt(document.getElementById(e).style.width) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("searchTextField").style.top) + "px";
    e = "saveRequestButton", t = 1;
    document.getElementById(e).style.height = parseInt(document.getElementById("searchTextField").style.height) + "px", document.getElementById(e).style.width = Math.round(parseInt(document.getElementById(e).style.height) * t) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("editor").style.width) - +parseInt(document.getElementById(e).style.width) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("searchTextField").style.top) + "px";
    e = "tickerEditorTextField", t = 0;
    document.getElementById(e).style.width = parseInt(document.getElementById("editor").style.width) + "px", document.getElementById(e).style.height = .8 * parseInt(document.getElementById("editor").style.height) + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = .4 * parseInt(document.getElementById("editor").style.height) + "px", document.getElementById(e).style.fontFamily = "regularfont", document.getElementById(e).style.fontSize = Math.round(.025 * parseInt(document.getElementById(e).style.width)) + "px", document.getElementById(e).style.lineHeight = "1", document.getElementById(e).style.textAlign = "left", document.getElementById(e).readOnly = !1, document.getElementById(e).style.color = "#ffffff", document.getElementById(e).style.backgroundColor = "#a7a7a7", document.getElementById(e).style.padding = "0px";
    e = "saveTickerButton", t = 300 / 90;
    document.getElementById(e).style.width = Math.round(.25 * parseInt(document.getElementById("tickerEditorTextField").style.width)) + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("editor").style.width) - parseInt(document.getElementById(e).style.width) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("tickerEditorTextField").style.top) + parseInt(document.getElementById("tickerEditorTextField").style.height) + "px";
    e = "defaultEditorButton", t = 1;
    document.getElementById(e).style.width = Math.round(.25 * parseInt(document.getElementById("editor").style.width)) + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.left = Math.round(.35 * parseInt(document.getElementById("editor").style.width)) + "px", document.getElementById(e).style.top = 1.1 * -parseInt(document.getElementById(e).style.height) + "px";
    e = "loadEditorButton", t = 1;
    document.getElementById(e).style.width = Math.round(.25 * parseInt(document.getElementById("editor").style.width)) + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.left = Math.round(.55 * parseInt(document.getElementById("editor").style.width)) + "px", document.getElementById(e).style.top = 1.1 * -parseInt(document.getElementById(e).style.height) + "px";
    e = "saveEditorButton", t = 1;
    document.getElementById(e).style.width = Math.round(.25 * parseInt(document.getElementById("editor").style.width)) + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.left = Math.round(.75 * parseInt(document.getElementById("editor").style.width)) + "px", document.getElementById(e).style.top = 1.1 * -parseInt(document.getElementById(e).style.height) + "px";
    e = "editorExterior", t = 1;
    document.getElementById(e).style.height = stageHeight + "px", document.getElementById(e).style.width = stageWidth + "px", document.getElementById(e).style.top = "0px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.backgroundColor = "#000000", document.getElementById(e).style.opacity = .65
}

function editorSwitch() {
    updateCanCount(), null == this.editor_switchStatus ? (document.getElementById("editor").style.transition = "all 0s ease-out", document.getElementById("editor").style.MozTransition = "all 0s ease-out", document.getElementById("editor").style.WebkitTransition = "all 0s ease-out", document.getElementById("editor").style.opacity = 0, document.getElementById("editorExterior").style.transition = "all 0s ease-out", document.getElementById("editorExterior").style.MozTransition = "all 0s ease-out", document.getElementById("editorExterior").style.WebkitTransition = "all 0s ease-out", document.getElementById("editorExterior").style.opacity = 0, document.getElementById("editor").style.visibility = "hidden", document.getElementById("editorExterior").style.visibility = "hidden", editor_switchStatus = "OFF") : "OFF" == editor_switchStatus ? (document.getElementById("editor").style.visibility = "visible", document.getElementById("editor").style.transition = "opacity .5s ease-out", document.getElementById("editor").style.MozTransition = "opacity .5s ease-out", document.getElementById("editor").style.WebkitTransition = "opacity .5s ease-out", document.getElementById("editor").style.opacity = 1, document.getElementById("editorExterior").style.visibility = "visible", document.getElementById("editorExterior").style.transition = "opacity .5s ease-out", document.getElementById("editorExterior").style.MozTransition = "opacity .5s ease-out", document.getElementById("editorExterior").style.WebkitTransition = "opacity .5s ease-out", document.getElementById("editorExterior").style.opacity = .85, editor_switchStatus = "TRANSITIONING", setTimeout(function() {
        editor_switchStatus = "ON"
    }, 500)) : "ON" == editor_switchStatus && (document.getElementById("editor").style.transition = "opacity .5s ease-out", document.getElementById("editor").style.MozTransition = "opacity .5s ease-out", document.getElementById("editor").style.WebkitTransition = "opacity .5s ease-out", document.getElementById("editor").style.opacity = 0, document.getElementById("editorExterior").style.transition = "opacity .5s ease-out", document.getElementById("editorExterior").style.MozTransition = "opacity .5s ease-out", document.getElementById("editorExterior").style.WebkitTransition = "opacity .5s ease-out", document.getElementById("editorExterior").style.opacity = 0, editor_switchStatus = "TRANSITIONING", setTimeout(function() {
        document.getElementById("editor").style.visibility = "hidden", document.getElementById("editorExterior").style.visibility = "hidden", editor_switchStatus = "OFF"
    }, 500))
}

function defaultEditor() {
    document.getElementById("eventTypeTextField").value = "POPUP", document.getElementById("eventVar1TextField").value = "https://jetsetradio.live/media/notice.gif", document.getElementById("eventVar2TextField").value = "empty"
}

function saveEditor() {
    localStorage.storedType = document.getElementById("eventTypeTextField").value, localStorage.storedVar1 = document.getElementById("eventVar1TextField").value, localStorage.storedVar2 = document.getElementById("eventVar2TextField").value
}

function loadEditor() {
    document.getElementById("eventTypeTextField").value = localStorage.storedType, document.getElementById("eventVar1TextField").value = localStorage.storedVar1, document.getElementById("eventVar2TextField").value = localStorage.storedVar2
}

function searchForTrackNext() {
    for (searchTerm = document.getElementById("searchTextField").value, searchTermUppercase = searchTerm.toUpperCase(), trackSearch++, searchTermFlag = !1, t = trackSearch; t <= this[stationsArray[searchStation] + "_tracks"].length - 1; t++) {
        var e = this[stationsArray[searchStation] + "_tracks"][t],
            n = e.toUpperCase();
        if (searchTermFlag = !1, searchTermFlag = n.includes(searchTermUppercase), 1 == searchTermFlag) {
            document.getElementById("resultTextField").value = stationsArray[searchStation] + "/" + e, trackSearch = t;
            break
        }
    }
    0 == searchTermFlag && (autoNext = !0, searchStation += 1, searchStation > stationsArray.length - 1 && (autoNext = !1, searchStation = 0), trackSearch = 0, 1 == autoNext && searchForTrackNext())
}

function searchForTrackPrev() {
    for (searchTerm = document.getElementById("searchTextField").value, searchTermUppercase = searchTerm.toUpperCase(), trackSearch--, searchTermFlag = !1, t = trackSearch; 0 < t; t--) {
        var e = this[stationsArray[searchStation] + "_tracks"][t],
            n = e.toUpperCase();
        if (searchTermFlag = !1, searchTermFlag = n.includes(searchTermUppercase), 1 == searchTermFlag) {
            document.getElementById("resultTextField").value = stationsArray[searchStation] + "/" + e, trackSearch = t;
            break
        }
    }
    0 == searchTermFlag && (autoNext = !0, --searchStation, searchStation < 0 && (autoNext = !1, searchStation = stationsArray.length - 1), trackSearch = this[stationsArray[searchStation] + "_tracks"].length - 1, 1 == autoNext && searchForTrackPrev())
}

function defineEditorButtons() {
    var e = "editorExterior";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        editorSwitch(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        editorSwitch(), e.preventDefault()
    };
    e = "saveEventButton";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        saveEvent(), editorSwitch(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        saveEvent(), editorSwitch(), e.preventDefault()
    };
    e = "saveTickerButton";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        document.getElementById("tickerEditorTextField").blur(), saveTicker(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        document.getElementById("tickerEditorTextField").blur(), saveTicker(), e.preventDefault()
    };
    e = "nextButton";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        document.getElementById("searchTextField").blur(), searchForTrackNext(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        document.getElementById("searchTextField").blur(), searchForTrackNext(), e.preventDefault()
    };
    e = "prevButton";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        document.getElementById("searchTextField").blur(), searchForTrackPrev(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        document.getElementById("searchTextField").blur(), searchForTrackPrev(), e.preventDefault()
    };
    e = "saveRequestButton";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        document.getElementById("searchTextField").blur(), saveRequest(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        document.getElementById("searchTextField").blur(), saveRequest(), e.preventDefault()
    };
    e = "defaultEditorButton";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        document.getElementById("defaultEditorButton").style.opacity = .55, setTimeout(function() {
            document.getElementById("defaultEditorButton").style.opacity = 1
        }, 250), defaultEditor(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        document.getElementById("defaultEditorButton").style.opacity = .55, setTimeout(function() {
            document.getElementById("defaultEditorButton").style.opacity = 1
        }, 250), defaultEditor(), e.preventDefault()
    };
    e = "saveEditorButton";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        document.getElementById("saveEditorButton").style.opacity = .55, setTimeout(function() {
            document.getElementById("saveEditorButton").style.opacity = 1
        }, 250), saveEditor(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        document.getElementById("saveEditorButton").style.opacity = .55, setTimeout(function() {
            document.getElementById("saveEditorButton").style.opacity = 1
        }, 250), saveEditor(), e.preventDefault()
    };
    e = "loadEditorButton";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        document.getElementById("loadEditorButton").style.opacity = .55, setTimeout(function() {
            document.getElementById("loadEditorButton").style.opacity = 1
        }, 250), loadEditor(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        document.getElementById("loadEditorButton").style.opacity = .55, setTimeout(function() {
            document.getElementById("loadEditorButton").style.opacity = 1
        }, 250), loadEditor(), e.preventDefault()
    };
    e = "canIcon";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        document.getElementById("canIcon").style.opacity = .55, setTimeout(function() {
            document.getElementById("canIcon").style.opacity = 1
        }, 250), localStorage.canCountValue = Number(localStorage.canCountValue) + 3, updateCanCount(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        document.getElementById("canIcon").style.opacity = .55, setTimeout(function() {
            document.getElementById("canIcon").style.opacity = 1
        }, 250), localStorage.canCountValue = Number(localStorage.canCountValue) + 3, updateCanCount(), e.preventDefault()
    }
}

function defineEditorTextFieldFocus() {
    var e = "searchTextField";
    document.getElementById(e).onfocus = function() {
        lastTextFieldValue = document.getElementById(this.id).value, document.getElementById(this.id).value = ""
    }, document.getElementById(e).onblur = function() {
        "" == document.getElementById(this.id).value && (document.getElementById(this.id).value = lastTextFieldValue)
    }
}

function xmlString(e) {
    return window.ActiveXObject ? e.xml : (new XMLSerializer).serializeToString(e)
}

function loadTickerData() {
    document.getElementById("tickerEditorTextField").value = "", editortickerxmlhttp = new XMLHttpRequest, randomCacheNumber = Math.floor(999999999 * Math.random() + 1);
    editortickerxmlhttp.open("GET", "ticker/messages.xml?" + randomCacheNumber, !0);
    editortickerxmlhttp.send();
    editortickerxmlhttp.onreadystatechange = function() {
        4 == editortickerxmlhttp.readyState && (xmlDocument = editortickerxmlhttp.responseXML, newMessage = xmlDocument.getElementsByTagName("message")[0].childNodes[0].nodeValue, document.getElementById("tickerEditorTextField").value = newMessage)
    }
}

function saveEvent() {
    document.getElementById("saveEventButton").style.opacity = .3, randomCacheNumber = Math.floor(999999999 * Math.random() + 1), scriptPassword = queryValue("p"), eventTypeSetting = document.getElementById("eventTypeTextField").value, eventVar1Setting = document.getElementById("eventVar1TextField").value + "?" + randomCacheNumber, eventVar2Setting = document.getElementById("eventVar2TextField").value, eventVar1Setting = eventVar1Setting.replace("&", "%26amp;"), eventVar2Setting = eventVar2Setting.replace("&", "%26amp;"), postMessage = "scriptPassword=" + scriptPassword + "&eventType=" + eventTypeSetting + "&eventVar1=" + eventVar1Setting + "&eventVar2=" + eventVar2Setting;
    var e = new XMLHttpRequest;
    e.open("POST", "editor/saveEvent.php", !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.send(postMessage), e.onreadystatechange = function() {
        4 == e.readyState && setTimeout(function() {
            document.getElementById("saveEventButton").style.opacity = 1
        }, 500)
    }
}

function saveRequest() {
    document.getElementById("saveRequestButton").style.opacity = .3, scriptPassword = queryValue("p"), eventTypeSetting = "REQUEST", eventVar1Setting = stationsArray[searchStation], eventVar2Setting = this[stationsArray[searchStation] + "_tracks"][trackSearch], eventVar1Setting = eventVar1Setting.replace("&", "%26amp;"), eventVar2Setting = eventVar2Setting.replace("&", "%26amp;"), postMessage = "scriptPassword=" + scriptPassword + "&eventType=" + eventTypeSetting + "&eventVar1=" + eventVar1Setting + "&eventVar2=" + eventVar2Setting;
    var e = new XMLHttpRequest;
    e.open("POST", "editor/saveEvent.php", !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.send(postMessage), e.onreadystatechange = function() {
        4 == e.readyState && setTimeout(function() {
            document.getElementById("saveRequestButton").style.opacity = 1
        }, 500)
    }
}

function saveTicker() {
    document.getElementById("saveTickerButton").style.opacity = .3, scriptPassword = queryValue("p"), message = document.getElementById("tickerEditorTextField").value, message = message.replace("&", "%26amp;"), postMessage = "scriptPassword=" + scriptPassword + "&message=" + message;
    var e = new XMLHttpRequest;
    e.open("POST", "editor/saveTicker.php", !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.send(postMessage), e.onreadystatechange = function() {
        4 == e.readyState && (setTimeout(function() {
            document.getElementById("saveTickerButton").style.opacity = 1, document.getElementById("tickerEditorTextField").value = "Reloading..."
        }, 500), setTimeout(function() {
            loadTickerData()
        }, 2e3), setTimeout(function() {
            loadXML()
        }, 3500))
    }
}

function canCountSizeAndPosition() {
    document.getElementById("canCount").style.height = .25 * parseInt(document.getElementById("editor").style.height) + "px", document.getElementById("canCount").style.width = Math.round(parseInt(document.getElementById("canCount").style.height) / (100 / 150)) + "px", document.getElementById("canCount").style.left = "0px", document.getElementById("canCount").style.top = 1.2 * -parseInt(document.getElementById("canCount").style.height) + "px";
    document.getElementById("canIcon").style.height = parseInt(document.getElementById("canCount").style.height) + "px", document.getElementById("canIcon").style.width = Math.round(+parseInt(document.getElementById("canIcon").style.height)) + "px", document.getElementById("canIcon").style.left = "0px", document.getElementById("canIcon").style.top = "0px";
    var e = "canCountText";
    document.getElementById(e).style.height = Math.round(.33 * parseInt(document.getElementById("canCount").style.height)) + "px", document.getElementById(e).style.width = parseInt(document.getElementById("canCount").style.width) + "px", document.getElementById(e).style.left = Math.round(.74 * parseInt(document.getElementById("canCount").style.height)) + "px", document.getElementById(e).style.top = Math.round(.48 * parseInt(document.getElementById("canCount").style.height)) + "px", document.getElementById(e).style.fontFamily = "jetsetfont", document.getElementById(e).style.fontSize = Math.round(.9 * parseInt(document.getElementById(e).style.height)) + "px", document.getElementById(e).style.color = "#FF0000", document.getElementById(e).style.textAlign = "left", document.getElementById(e).style.lineHeight = "1.1", document.getElementById(e).style.whiteSpace = "nowrap", document.getElementById(e).style.textTransform = "uppercase", document.getElementById(e).style.webkitTextStroke = "1px black"
}

function updateCanCount() {
    null == localStorage.canCountValue && (localStorage.canCountValue = 3), localStorage.canCountValue < 0 && (localStorage.canCountValue = 0), 99 < localStorage.canCountValue && (localStorage.canCountValue = 99), document.getElementById("canCountText").innerHTML = localStorage.canCountValue
}

function increaseCanCount() {
    setInterval(function() {
        randomCans = Math.floor(3 * Math.random()) + 1, localStorage.canCountValue = Number(localStorage.canCountValue) + randomCans, updateCanCount()
    }, 54e4)
}

function editorRuntime() {
    allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length] = editorSizeAndPosition, allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length - 1](), editorSwitch(), defineEditorButtons(), defaultEditor(), defineEditorTextFieldFocus(), loadTickerData(), allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length] = canCountSizeAndPosition, allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length - 1](), updateCanCount(), increaseCanCount()
}
document.getElementById("searchTextField").value = "Search", document.getElementById("resultTextField").value = "Find any track and launch it from here!", document.getElementById("tickerEditorTextField").value = "Jet Set Radiooo!!!", searchStation = 0, trackSearch = 0, lastSearchTerm = "", allRuntimeFunctionsList[allRuntimeFunctionsList.length] = editorRuntime;