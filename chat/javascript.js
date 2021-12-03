function chatSizeAndPosition() {
    var e = "chat";
    subtraction = 0, 1 == flagInformation && ("DEFAULT" != tvFrame_switchStatus && "OFF" != tvFrame_switchStatus || "DEFAULT" != wallFrame_switchStatus && "OFF" != wallFrame_switchStatus || (subtraction += 1.1 * parseInt(document.getElementById("information").style.height))), 1 == flagTicker && ("DEFAULT" != tvFrame_switchStatus && "OFF" != tvFrame_switchStatus || "DEFAULT" != wallFrame_switchStatus && "OFF" != wallFrame_switchStatus || (subtraction += parseInt(document.getElementById("information").style.height))), document.getElementById(e).style.height = stageHeight - subtraction + "px", document.getElementById(e).style.width = stageWidth + "px", document.getElementById(e).style.top = "0px", document.getElementById(e).style.left = "0px";
    e = "chatTextField";
    document.getElementById(e).style.width = parseInt(document.getElementById("chat").style.width) - Math.round(.15 * parseInt(document.getElementById("information").style.height)) - Math.round(.15 * parseInt(document.getElementById("information").style.height)) - .8 * parseInt(document.getElementById("radioButton").style.width) + "px", document.getElementById(e).style.height = parseInt(document.getElementById("chat").style.height) - Math.round(2.4 * parseInt(document.getElementById("information").style.height)) + "px", document.getElementById(e).style.left = Math.round(.15 * parseInt(document.getElementById("information").style.height)) + "px", document.getElementById(e).style.top = Math.round(1.58 * parseInt(document.getElementById("information").style.height)) + "px", document.getElementById(e).style.fontFamily = "regularfont", "S" == selectedFontSize && (document.getElementById(e).style.fontSize = Math.round(.35 * parseInt(document.getElementById("information").style.height)) + "px"), "M" == selectedFontSize && (document.getElementById(e).style.fontSize = Math.round(.4 * parseInt(document.getElementById("information").style.height)) + "px"), "L" == selectedFontSize && (document.getElementById(e).style.fontSize = Math.round(.45 * parseInt(document.getElementById("information").style.height)) + "px"), document.getElementById(e).style.lineHeight = "1.3", document.getElementById(e).style.textAlign = "left", document.getElementById(e).readOnly = !0, document.getElementById(e).wrap = "on", document.getElementById(e).style.color = "#FFFFFF";
    e = "sendButton";
    document.getElementById(e).style.transition = "top .3s ease-out", document.getElementById(e).style.MozTransition = "top .3s ease-out", document.getElementById(e).style.WebkitTransition = "top .3s ease-out", document.getElementById(e).style.height = Math.round(.65 * parseInt(document.getElementById("information").style.height)) + "px", document.getElementById(e).style.width = Math.round(parseInt(document.getElementById(e).style.height) * (215 / 105)) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("chat").style.width) - parseInt(document.getElementById(e).style.width) - Math.round(.12 * parseInt(document.getElementById("information").style.height)) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("chat").style.height) - parseInt(document.getElementById(e).style.height) - Math.round(.15 * parseInt(document.getElementById("information").style.height)) + "px";
    e = "messageTextField";
    document.getElementById(e).style.transition = "top .3s ease-out", document.getElementById(e).style.MozTransition = "top .3s ease-out", document.getElementById(e).style.WebkitTransition = "top .3s ease-out", document.getElementById(e).style.height = parseInt(document.getElementById("sendButton").style.height) + "px", document.getElementById(e).style.width = parseInt(document.getElementById("chat").style.width) - Math.round(1.55 * parseInt(document.getElementById("sendButton").style.width)) + "px", document.getElementById(e).style.left = Math.round(.15 * parseInt(document.getElementById("information").style.height)) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("chat").style.height) - parseInt(document.getElementById(e).style.height) - Math.round(.15 * parseInt(document.getElementById("information").style.height)) + "px", document.getElementById(e).style.fontFamily = "lightfont", document.getElementById(e).style.fontSize = .6 * parseInt(document.getElementById(e).style.height) + "px", document.getElementById(e).style.textAlign = "left", document.getElementById(e).readOnly = !1, document.getElementById(e).wrap = "off", document.getElementById(e).style.backgroundColor = "transparent", document.getElementById("chatTextField").scrollTop = document.getElementById("chatTextField").scrollHeight - document.getElementById("chatTextField").offsetHeight, smallerFontSize = .45 * parseInt(document.getElementById(e).style.height);
    e = "closeChatButton";
    document.getElementById(e).style.width = 1.35 * parseInt(document.getElementById("radioButton").style.height) + "px", document.getElementById(e).style.height = Math.round(+parseInt(document.getElementById(e).style.width)) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("chat").style.width) - 1.76 * parseInt(document.getElementById(e).style.width) + "px", document.getElementById(e).style.top = "0px";
    e = "colorPickerButton";
    document.getElementById(e).style.width = 1.05 * parseInt(document.getElementById("radioButton").style.height) + "px", document.getElementById(e).style.height = Math.round(+parseInt(document.getElementById(e).style.width)) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("chat").style.width) - 1.1 * parseInt(document.getElementById(e).style.width) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("chat").style.height) - 1.7 * parseInt(document.getElementById(e).style.height) + "px";
    e = "fontSizeButton";
    document.getElementById(e).style.width = 1.25 * parseInt(document.getElementById("radioButton").style.height) + "px", document.getElementById(e).style.height = Math.round(+parseInt(document.getElementById(e).style.width)) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("chat").style.width) - 1.03 * parseInt(document.getElementById(e).style.width) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("chat").style.height) - 2.1 * parseInt(document.getElementById(e).style.height) + "px";
    e = "chatImagesButton";
    document.getElementById(e).style.width = 1.25 * parseInt(document.getElementById("radioButton").style.height) + "px", document.getElementById(e).style.height = Math.round(+parseInt(document.getElementById(e).style.width)) + "px", document.getElementById(e).style.left = parseInt(document.getElementById("chat").style.width) - 1.03 * parseInt(document.getElementById(e).style.width) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("chat").style.height) - 2.75 * parseInt(document.getElementById(e).style.height) + "px";
    e = "timestampTextField";
    document.getElementById(e).style.height = Math.round(.5 * parseInt(document.getElementById("worldIcon").style.height)) + "px", document.getElementById(e).style.width = stageWidth + "px", document.getElementById(e).style.left = Math.round(.12 * parseInt(document.getElementById("worldIcon").style.height)) + "px", document.getElementById(e).style.top = Math.round(.87 * parseInt(document.getElementById("worldIcon").style.height)) + "px", document.getElementById(e).style.fontFamily = "regularfont", document.getElementById(e).style.fontSize = Math.round(.35 * parseInt(document.getElementById("timestampTextField").style.height)) + "px", document.getElementById(e).style.color = "#FFFFFF", document.getElementById(e).style.textAlign = "left", document.getElementById(e).style.lineHeight = "1", document.getElementById(e).style.opacity = .9
}

function chatSwitch() {
    chatSizeAndPosition(), null == this.chat_switchStatus ? (document.getElementById("chatButton").style.opacity = .55, document.getElementById("chat").style.transition = "all 0s ease-out", document.getElementById("chat").style.MozTransition = "all 0s ease-out", document.getElementById("chat").style.WebkitTransition = "all 0s ease-out", document.getElementById("chat").style.opacity = 0, document.getElementById("chat").style.visibility = "hidden", chat_switchStatus = "OFF") : "OFF" == chat_switchStatus ? (document.getElementById("chatButton").style.opacity = 1, document.getElementById("closeChatButton").style.opacity = 1, document.getElementById("worldIcon").style.visibility = "visible", document.getElementById("dateTextField").style.visibility = "visible", document.getElementById("chat").style.top = "0px", document.getElementById("chat").style.visibility = "visible", document.getElementById("chat").style.transition = "opacity .4s ease-out", document.getElementById("chat").style.MozTransition = "opacity .4s ease-out", document.getElementById("chat").style.WebkitTransition = "opacity .4s ease-out", document.getElementById("chat").style.opacity = 1, 0 == savedUsername && (document.getElementById("messageTextField").style.color = "#ffe60c", document.getElementById("messageTextField").value = defaultLoginInstructions), chat_switchStatus = "TRANSITIONING", setTimeout(function() {
        1 == savedUsername && document.getElementById("messageTextField").focus(), chat_switchStatus = "ON", run_chat()
    }, 500)) : "ON" == chat_switchStatus && (document.getElementById("messageTextField").blur(), document.getElementById("chatButton").style.opacity = .55, document.getElementById("closeChatButton").style.opacity = 0, "OFF" == radio_switchStatus && (document.getElementById("worldIcon").style.visibility = "hidden", document.getElementById("dateTextField").style.visibility = "hidden"), radio_switchStatus, document.getElementById("chat").style.transition = "opacity .4s ease-out", document.getElementById("chat").style.MozTransition = "opacity .4s ease-out", document.getElementById("chat").style.WebkitTransition = "opacity .4s ease-out", document.getElementById("chat").style.opacity = 0, chat_switchStatus = "TRANSITIONING", setTimeout(function() {
        document.getElementById("chat").style.top = stageHeight + "px", document.getElementById("chat").style.visibility = "hidden", chat_switchStatus = "OFF", stop_chat()
    }, 500))
}

function defineTextFieldFocus() {
    document.getElementById("messageTextField").onfocus = function() {
        0 == savedUsername && (document.getElementById(this.id).value = "")
    }
}

function changeFontSize() {
    document.getElementById("fontSizeButton").style.opacity = .55, setTimeout(function() {
        document.getElementById("fontSizeButton").style.opacity = 1
    }, 250), "S" == selectedFontSize ? (selectedFontSize = "M", chatSizeAndPosition()) : "M" == selectedFontSize ? (selectedFontSize = "L", chatSizeAndPosition()) : "L" == selectedFontSize && (selectedFontSize = "S", chatSizeAndPosition())
}

function changeFontColor() {
    document.getElementById("colorPickerButton").style.opacity = .3, selectedFontColor++, 1 == selectedFontColor ? (document.getElementById("messageTextField").style.color = fontColor1, document.getElementById("colorPickerButton").src = "chat/images/colorPicker1.png", attachedColorPickerString = "!" + fontColor1 + " ") : 2 == selectedFontColor ? (document.getElementById("messageTextField").style.color = fontColor2, document.getElementById("colorPickerButton").src = "chat/images/colorPicker2.png", attachedColorPickerString = "!" + fontColor2 + " ") : 3 == selectedFontColor ? (document.getElementById("messageTextField").style.color = fontColor3, document.getElementById("colorPickerButton").src = "chat/images/colorPicker3.png", attachedColorPickerString = "!" + fontColor3 + " ") : 4 == selectedFontColor ? (document.getElementById("messageTextField").style.color = fontColor4, document.getElementById("colorPickerButton").src = "chat/images/colorPicker4.png", attachedColorPickerString = "!" + fontColor4 + " ") : 5 == selectedFontColor ? (document.getElementById("messageTextField").style.color = fontColor5, document.getElementById("colorPickerButton").src = "chat/images/colorPicker5.png", attachedColorPickerString = "!" + fontColor5 + " ") : 6 == selectedFontColor ? (document.getElementById("messageTextField").style.color = fontColor6, document.getElementById("colorPickerButton").src = "chat/images/colorPicker6.png", attachedColorPickerString = "!" + fontColor6 + " ") : 7 == selectedFontColor ? (document.getElementById("messageTextField").style.color = fontColor7, document.getElementById("colorPickerButton").src = "chat/images/colorPicker7.png", attachedColorPickerString = "!" + fontColor7 + " ") : 8 == selectedFontColor ? (document.getElementById("messageTextField").style.color = fontColor8, document.getElementById("colorPickerButton").src = "chat/images/colorPicker8.png", attachedColorPickerString = "!" + fontColor8 + " ") : 9 == selectedFontColor ? (document.getElementById("messageTextField").style.color = fontColor9, document.getElementById("colorPickerButton").src = "chat/images/colorPicker9.png", attachedColorPickerString = "!" + fontColor9 + " ") : 10 == selectedFontColor && (document.getElementById("messageTextField").style.color = fontColor10, document.getElementById("colorPickerButton").src = "chat/images/colorPicker10.png", attachedColorPickerString = "!" + fontColor10 + " ", selectedFontColor = 0)
}

function chatImages_SWITCH() {
    if (1 == chatImagesStatus) {
        document.getElementById("chatImagesButton").style.opacity = .55, chatImagesStatus = !1;
        var e = document.getElementsByClassName("imageController");
        for (i = 0; i < e.length; i++) e[i].style.visibility = "hidden", e[i].style.height = "2%"
    } else if (0 == chatImagesStatus) {
        document.getElementById("chatImagesButton").style.opacity = 1, chatImagesStatus = !0;
        e = document.getElementsByClassName("imageController");
        for (i = 0; i < e.length; i++) e[i].style.visibility = "visible", e[i].style.height = "25%"
    }
    chatSizeAndPosition()
}

function changeChatOpacity() {
    0 == chatOpacity_Value ? (document.getElementById("chat").style.backgroundColor = "rgba(0, 0, 0, 0.00)", chatOpacity_Value = !0) : 1 == chatOpacity_Value && (document.getElementById("chat").style.backgroundColor = "rgba(0, 0, 0, 0.80)", chatOpacity_Value = !1), 1 == chatImagesStatus ? document.getElementById("chatImagesButton").style.opacity = 1 : 0 == chatImagesStatus && (document.getElementById("chatImagesButton").style.opacity = .55)
}

function defineChatButtons() {
    var e = "closeChatButton";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        chatSwitch(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        chatSwitch(), e.preventDefault()
    };
    e = "fontSizeButton";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        changeFontSize(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        changeFontSize(), e.preventDefault()
    };
    e = "chatImagesButton";
    "ontouchmove" in document.documentElement ? (document.getElementById(e).ontouchstart = function(e) {
        document.getElementById("chatImagesButton").style.opacity = .55, chatOpacity_switchStatus = !1, chatOpacityTimeOut = setTimeout(function() {
            changeChatOpacity(), chatOpacity_switchStatus = !0
        }, 1200), e.preventDefault()
    }, document.getElementById(e).ontouchend = function(e) {
        clearTimeout(chatOpacityTimeOut), 0 == chatOpacity_switchStatus && chatImages_SWITCH(), e.preventDefault()
    }) : (document.getElementById(e).onmousedown = function(e) {
        document.getElementById("chatImagesButton").style.opacity = .55, chatOpacity_switchStatus = !1, chatOpacityTimeOut = setTimeout(function() {
            changeChatOpacity(), chatOpacity_switchStatus = !0
        }, 1200), e.preventDefault()
    }, document.getElementById(e).onmouseup = function(e) {
        clearTimeout(chatOpacityTimeOut), 0 == chatOpacity_switchStatus && chatImages_SWITCH(), e.preventDefault()
    });
    e = "colorPickerButton";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        changeFontColor(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        changeFontColor(), e.preventDefault()
    };
    e = "sendButton";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        saveChatXML(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        saveChatXML(), e.preventDefault()
    }
}

function defineChatScrollButton() {
    var e = "chatTextField";
    "ontouchmove" in document.documentElement ? (document.getElementById(e).ontouchstart = function(e) {
        retrieveMousePositions(e), scrollTouch = !0, scrollStart = mouseY, scrollStartingPo = document.getElementById("chatTextField").scrollTop
    }, document.getElementById(e).ontouchend = function(e) {
        scrollTouch = !1
    }, document.getElementById(e).ontouchmove = function(e) {
        1 == scrollTouch && (0 < document.getElementById("chatTextField").scrollTop && document.getElementById("chatTextField").scrollTop < document.getElementById("chatTextField").scrollHeight - document.getElementById("chatTextField").offsetHeight ? (retrieveMousePositions(e), scrollDistance = scrollStart - mouseY, document.getElementById("chatTextField").scrollTop = scrollStartingPo + scrollDistance) : (0 == document.getElementById("chatTextField").scrollTop && (document.getElementById("chatTextField").scrollTop = 1, scrollStartingPo = 1), document.getElementById("chatTextField").scrollTop == document.getElementById("chatTextField").scrollHeight - document.getElementById("chatTextField").offsetHeight && (document.getElementById("chatTextField").scrollTop = document.getElementById("chatTextField").scrollTop - 1, scrollStartingPo = document.getElementById("chatTextField").scrollTop - 1), retrieveMousePositions(e), scrollDistance = 0, scrollStart = mouseY)), e.preventDefault()
    }) : (document.getElementById(e).onmousedown = function(e) {
        retrieveMousePositions(e), scrollTouch = !0, scrollStart = mouseY, scrollStartingPo = document.getElementById("chatTextField").scrollTop, e.preventDefault()
    }, document.getElementById(e).onmouseup = function(e) {
        scrollTouch = !1, e.preventDefault()
    }, document.getElementById(e).onmousemove = function(e) {
        1 == scrollTouch && (0 < document.getElementById("chatTextField").scrollTop && document.getElementById("chatTextField").scrollTop < document.getElementById("chatTextField").scrollHeight - document.getElementById("chatTextField").offsetHeight ? (retrieveMousePositions(e), scrollDistance = scrollStart - mouseY, document.getElementById("chatTextField").scrollTop = scrollStartingPo + scrollDistance) : (0 == document.getElementById("chatTextField").scrollTop && (document.getElementById("chatTextField").scrollTop = 1, scrollStartingPo = 1), document.getElementById("chatTextField").scrollTop == document.getElementById("chatTextField").scrollHeight - document.getElementById("chatTextField").offsetHeight && (document.getElementById("chatTextField").scrollTop = document.getElementById("chatTextField").scrollTop - 1, scrollStartingPo = document.getElementById("chatTextField").scrollTop - 1), retrieveMousePositions(e), scrollDistance = 0, scrollStart = mouseY)), e.preventDefault()
    }, document.getElementById(e).onmouseout = function(e) {
        scrollTouch = !1
    })
}
document.getElementById("messageTextField").maxLength = "255", document.getElementById("messageTextField").style.color = "#FFFFFF", document.getElementById("chat").style.backgroundColor = "rgba(0, 0, 0, 0.80)", defaultLoginInstructions = "Enter your desired username before you begin...", selectedFontSize = "S", selectedFontColor = 1, fontColor1 = "#ffffff", fontColor2 = "#ffea00", fontColor3 = "#17ff5e", fontColor4 = "#00eaff", fontColor5 = "#0054ff", fontColor6 = "#9600ff", fontColor7 = "#ff4cd3", fontColor8 = "#ff0000", fontColor9 = "#ff7200", fontColor10 = "#000000", attachedColorPickerString = "!" + fontColor1 + " ", document.getElementById("colorPickerButton").onload = function() {
    setTimeout(function() {
        document.getElementById("colorPickerButton").style.opacity = 1
    }, 150)
}, chatImagesStatus = !0, chatOpacity_Value = !1, scrollTouch = !1, document.getElementById("sendButton").style.pointerEvents = "all", document.onkeydown = function(e) {
    e = (e = e || window.event).keyCode;
    return "ON" == chat_switchStatus && 13 == e && "all" == document.getElementById("sendButton").style.pointerEvents && saveChatXML(), 220 == e ? ("ON" == tvFrame_switchStatus ? -1 == document.getElementById("tvFrame").contentWindow.mediaPosition1 ? document.getElementById("tvFrame").contentWindow.hidePreviewScreen() : document.getElementById("tvFrame").contentWindow.playVideoPlayer() : (document.getElementById("nextTrackButton").style.opacity = .3, document.getElementById("nextTrackButton2").style.opacity = .3, setTimeout(function() {
        document.getElementById("nextTrackButton").style.opacity = 1, document.getElementById("nextTrackButton2").style.opacity = 1
    }, 250), skipTrack()), !1) : 38 == e && "ON" == tvFrame_switchStatus ? (-1 == document.getElementById("tvFrame").contentWindow.mediaPosition1 ? document.getElementById("tvFrame").contentWindow.hidePreviewScreen() : document.getElementById("tvFrame").contentWindow.gotoNextChannel(), !1) : 40 == e && "ON" == tvFrame_switchStatus ? (-1 == document.getElementById("tvFrame").contentWindow.mediaPosition1 ? document.getElementById("tvFrame").contentWindow.hidePreviewScreen() : document.getElementById("tvFrame").contentWindow.gotoPrevChannel(), !1) : void 0
};
var myimage = document.getElementById("chatTextField");

function MouseWheelHandler(e) {
    e = window.event || e, e = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
    return document.getElementById("chatTextField").scrollTop = document.getElementById("chatTextField").scrollTop + -30 * e, 0 == document.getElementById("chatTextField").scrollTop && (document.getElementById("chatTextField").scrollTop = 1, scrollStartingPo = 1), document.getElementById("chatTextField").scrollTop == document.getElementById("chatTextField").scrollHeight - document.getElementById("chatTextField").offsetHeight && (document.getElementById("chatTextField").scrollTop = document.getElementById("chatTextField").scrollTop - 1, scrollStartingPo = document.getElementById("chatTextField").scrollTop - 1), !1
}

function xmlString(e) {
    return window.ActiveXObject ? e.xml : (new XMLSerializer).serializeToString(e)
}

function defaultUsername() {
    void 0 !== localStorage.savedUsername && (console.log("SAVED USERNAME FOUND!!!"), username = localStorage.savedUsername, document.getElementById("messageTextField").style.color = "#20e537", document.getElementById("messageTextField").value = "You have JOINED the chat!!!", document.getElementById("messageTextField").focus(), document.getElementById("messageTextField").maxLength = "255", savedUsername = !0, console.log("You have JOINED the chat!!!"), setTimeout(function() {
        document.getElementById("messageTextField").style.color = "#FFFFFF", document.getElementById("messageTextField").value = ""
    }, 1e3))
}

function saveChatXML() {
    var e, t;
    0 == savedUsername && "" !== document.getElementById("messageTextField").value && document.getElementById("messageTextField").value !== defaultLoginInstructions ? (username = document.getElementById("messageTextField").value, "djk" == username && (username = "DJProfessorK"), document.getElementById("messageTextField").style.color = "#20e537", document.getElementById("messageTextField").value = "You have JOINED the chat!!!", document.getElementById("messageTextField").focus(), document.getElementById("messageTextField").maxLength = "255", savedUsername = !0, console.log("You have JOINED the chat!!!"), setTimeout(function() {
        document.getElementById("messageTextField").style.color = "#FFFFFF", document.getElementById("messageTextField").value = ""
    }, 1e3)) : 1 == savedUsername && "" !== document.getElementById("messageTextField").value && (document.getElementById("messageTextField").style.opacity = .3, document.getElementById("sendButton").style.opacity = .1, document.getElementById("sendButton").style.pointerEvents = "none", tmpStr = document.getElementById("messageTextField").value, searchThis = tmpStr.substring(0, 5), "/join" == searchThis && (console.log("SAVING USERNAME"), usernameToSave = tmpStr.slice(6), "djk" == usernameToSave && (usernameToSave = "DJProfessorK"), localStorage.savedUsername = usernameToSave, username = usernameToSave, document.getElementById("messageTextField").value = "Joined!"), e = document.getElementById("messageTextField").value, chatpassword = queryValue("p"), postMessage = JSON.stringify({ chatmessage: e, "username": username, chatpassword: chatpassword, color: attachedColorPickerString }), (t = new XMLHttpRequest).open("POST", "chat/save.php", !0), t.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), t.send(postMessage), console.log("SENDING Chat Message..."), t.onreadystatechange = function() {
        4 == t.readyState && (console.log("Chat Message SENT!"), "none" == document.getElementById("sendButton").style.pointerEvents && (document.getElementById("messageTextField").value = "", document.getElementById("messageTextField").focus(), document.getElementById("messageTextField").style.opacity = 1, document.getElementById("sendButton").style.opacity = 1, document.getElementById("sendButton").style.pointerEvents = "all"), clearTimeout(continuousChatLoading), loadChatXML())
    }, document.getElementById("chatTextField").scrollTop = document.getElementById("chatTextField").scrollHeight)
}
myimage.addEventListener ? (myimage.addEventListener("mousewheel", MouseWheelHandler, !1), myimage.addEventListener("DOMMouseScroll", MouseWheelHandler, !1)) : myimage.attachEvent("onmousewheel", MouseWheelHandler);
var chatDefault = savedUsername = !1,
    xmlDocument = "",
    newXMLDocumentData = "",
    newChatDocumentValue = "",
    oldXMLDocumentData = "",
    oldChatDocumentValue = "",
    lastMessagePosition = "",
    lastMessageValue = "",
    lastTimestampValue = 0,
    messageCounter = 0,
    canConstruct = !0,
    loadingInsert = ":";

function loadChatXML() {
    1 == navigator.onLine && (xmlDocument = "", chatLoadRequest = new XMLHttpRequest, randomCacheNumber = Math.floor(999999999 * Math.random() + 1), chatLoadRequest.open("GET", "chat/messages.xml?" + randomCacheNumber, !0), chatLoadRequest.send(), console.log("Chat Messages - Loading..."), 0 == navigator.onLine && chatLoadRequest.abort(), chatLoadRequest.onreadystatechange = function() {
        if (4 == chatLoadRequest.readyState && void 0 !== chatLoadRequest.responseXML && null !== chatLoadRequest.responseXML) {
            console.log("Chat Messages - LOADED!"), loadingInsert = "<regularText>LAST MESSAGE</regularText><transparentText>: </transparentText>", setTimeout(function() {
                loadingInsert = "<regularText>LAST MESSAGE: </regularText>"
            }, 1e3);
            var e = chatLoadRequest.responseXML;
            if (newChatDocumentValue = xmlString(newXMLDocumentData = e), lastTimestampPosition = newXMLDocumentData.getElementsByTagName("message").length, lastTimestampValue = newXMLDocumentData.getElementsByTagName("timestamp")[lastTimestampPosition - 1].childNodes[0].nodeValue, "" == oldXMLDocumentData) document.getElementById("chatTextField").innerHTML = "", constructStartingPoint = 0;
            else
                for (lastMessagePosition = oldXMLDocumentData.getElementsByTagName("message").length, lastMessageValue = oldXMLDocumentData.getElementsByTagName("text")[lastMessagePosition - 1].childNodes[0].nodeValue, lastUsernameValue = oldXMLDocumentData.getElementsByTagName("username")[lastMessagePosition - 1].childNodes[0].nodeValue, constructStartingPoint = 0, newDocumentLength = newXMLDocumentData.getElementsByTagName("message").length - 1, m = newDocumentLength; 0 <= m; m--)
                    if (selectedMessageValue = newXMLDocumentData.getElementsByTagName("text")[m].childNodes[0].nodeValue, selectedUsernameValue = newXMLDocumentData.getElementsByTagName("username")[m].childNodes[0].nodeValue, selectedMessageValue == lastMessageValue && selectedUsernameValue == lastUsernameValue) {
                        constructStartingPoint = m + 1;
                        break
                    } if (newChatDocumentValue !== oldChatDocumentValue) {
                for (oldXMLDocumentData = newXMLDocumentData, oldChatDocumentValue = newChatDocumentValue, composedMessage = "", m = constructStartingPoint; m < newXMLDocumentData.getElementsByTagName("message").length; m++) {
                    outputUsername = void 0 !== newXMLDocumentData.getElementsByTagName("username")[m].childNodes[0] ? newXMLDocumentData.getElementsByTagName("username")[m].childNodes[0].nodeValue : "ERROR";
                    outputMessage = void 0 !== newXMLDocumentData.getElementsByTagName("text")[m].childNodes[0] ? newXMLDocumentData.getElementsByTagName("text")[m].childNodes[0].nodeValue : "ERROR";
                    // outputColor = void 0 !== newXMLDocumentData.getElementsByTagName("color")[m].childNodes[0] ? newXMLDocumentData.getElementsByTagName("color")[m].childNodes[0].nodeValue : "#ffffff";

                    "ERROR" !== outputUsername && "ERROR" !== outputMessage && (composedMessage = composedMessage + "<font style='color:#006d90;font-family:regularfont;font-weight:bold;pointer-events:none;'>" + outputUsername + "</font><font style='color:#ffffff;'>: " + outputMessage + "</font><br>");

                }

                var t = document.createElement("div");
                for (t.innerHTML = composedMessage; t.firstChild;) document.getElementById("chatTextField").appendChild(t.firstChild);
                if (0 == chatImagesStatus) {
                    var n = document.getElementsByClassName("imageController");
                    for (i = 0; i < n.length; i++) n[i].style.visibility = "hidden", n[i].style.height = "2%"
                }
                0 == scrollTouch && (document.getElementById("chatTextField").scrollTop = document.getElementById("chatTextField").scrollHeight), console.log("NEW Messages Compiled & Appended!")
            }
            canConstruct = !0, clearTimeout(continuousChatLoading), continuousChatLoading = setTimeout(function() {
                loadChatXML()
            }, 4500)
        }
    })
}
var continuousChatLoading, continuousServerDateLoading, continuousRunTime, serverTime = Math.round((new Date).getTime() / 1e3);

function runTime() {
    timeSinceLastMessage = (serverTime += 1) - lastTimestampValue, formattedTime = Math.floor(timeSinceLastMessage / 60000), 0 < lastTimestampValue ? 0 < formattedTime ? document.getElementById("timestampTextField").innerHTML = loadingInsert + formattedTime + " min ago" : document.getElementById("timestampTextField").innerHTML = loadingInsert + "< 1 min ago" : document.getElementById("timestampTextField").innerHTML = "LAST MESSAGE: "
}

function retrieveServerDate() {
    var e = new XMLHttpRequest;
    e.open("GET", "chat/serverTime.php", !0), e.send(), e.onreadystatechange = function() {
        4 == e.readyState && 200 == e.status && (testXML = e.responseXML, void 0 !== testXML.getElementsByTagName("serverHours")[0] && (serverTime = Number(testXML.getElementsByTagName("serverTime")[0].childNodes[0].nodeValue), console.log("LOADED Server Time: " + serverTime)))
    }
}

function run_chat() {
    console.log("STARTING Chat");
    loadChatXML(), retrieveServerDate(), continuousServerDateLoading = setInterval(function() {
        retrieveServerDate()
    }, 12e4), runTime(), continuousRunTime = setInterval(function() {
        runTime()
    }, 1e3)
}

function stop_chat() {
    clearTimeout(continuousChatLoading), clearInterval(continuousServerDateLoading), clearInterval(continuousRunTime), console.log("STOPPED Chat")
}

function chatRuntime() {
    allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length] = chatSizeAndPosition, allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length - 1](), chatSwitch(), defineTextFieldFocus(), defineChatButtons(), defineChatScrollButton(), defaultUsername()
}
document.getElementById("chatTextField").innerHTML = "<font style='color:#fff000;'>Just a moment...</font>", window.addEventListener("offline", function(e) {
    console.log("NETWORK ERROR WAS DETECTED"), "undefined" == typeof chatLoadRequest || null === chatLoadRequest || chatLoadRequest.abort()
}), window.addEventListener("online", function(e) {
    console.log("NETWORK RECOVERY WAS DETECTED"), "ON" == chat_switchStatus && run_chat()
}), allRuntimeFunctionsList[allRuntimeFunctionsList.length] = chatRuntime;