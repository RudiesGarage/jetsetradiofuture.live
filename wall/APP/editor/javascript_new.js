var stageHeight, stageWidth;

function editorSizeAndPosition() {
    document.getElementById("editor").style.height = stageHeight + "px", document.getElementById("editor").style.width = stageWidth + "px", document.getElementById("editor").style.top = "0px", document.getElementById("editor").style.left = "0px", document.getElementById("editor").style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    document.getElementById("loadingCircle").style.width = Math.ceil(32 * magnification) + "px", document.getElementById("loadingCircle").style.height = Math.ceil(32 * magnification) + "px", document.getElementById("loadingCircle").style.left = Math.round(stageWidth / 2) - Math.round(parseInt(document.getElementById("loadingCircle").style.width) / 2) + "px", document.getElementById("loadingCircle").style.top = Math.round(stageHeight / 2) - Math.round(parseInt(document.getElementById("loadingCircle").style.height) / 2) + "px";
    document.getElementById("selectedImage").style.width = parseInt(document.getElementById("boardBackground").style.width) * selectedSize + "px", document.getElementById("selectedImage").style.left = stageWidth / 2 - document.getElementById("selectedImage").offsetWidth / 2 + "px", document.getElementById("selectedImage").style.top = stageHeight / 2 - document.getElementById("selectedImage").offsetHeight / 2 + "px";
    document.getElementById("prevPreviewButton").style.width = Math.round(1.25 * parseInt(document.getElementById("loadingCircle").style.width)) + "px", document.getElementById("prevPreviewButton").style.height = Math.round(+parseInt(document.getElementById("prevPreviewButton").style.width)) + "px", document.getElementById("prevPreviewButton").style.left = Math.round(.25 * parseInt(document.getElementById("loadingCircle").style.width)) + "px", document.getElementById("prevPreviewButton").style.top = Math.round(stageHeight / 2) - Math.round(parseInt(document.getElementById("prevPreviewButton").style.height) / 2) + "px";
    document.getElementById("nextPreviewButton").style.width = Math.round(1.25 * parseInt(document.getElementById("loadingCircle").style.width)) + "px", document.getElementById("nextPreviewButton").style.height = Math.round(+parseInt(document.getElementById("nextPreviewButton").style.width)) + "px", document.getElementById("nextPreviewButton").style.left = stageWidth - parseInt(document.getElementById("nextPreviewButton").style.width) - Math.round(.25 * parseInt(document.getElementById("loadingCircle").style.width)) + "px", document.getElementById("nextPreviewButton").style.top = Math.round(stageHeight / 2) - Math.round(parseInt(document.getElementById("nextPreviewButton").style.height) / 2) + "px";
    document.getElementById("linkTextFieldBackground").style.height = parseInt(document.getElementById("prevPreviewButton").style.height) + "px", document.getElementById("linkTextFieldBackground").style.width = Math.round(6.25 * parseInt(document.getElementById("linkTextFieldBackground").style.height)) + "px", document.getElementById("linkTextFieldBackground").style.left = Math.round(.03 * parseInt(document.getElementById("loadingLogo").style.width)) + "px", document.getElementById("linkTextFieldBackground").style.top = stageHeight - Math.round(1.35 * parseInt(document.getElementById("linkTextFieldBackground").style.height)) + "px";
    document.getElementById("linkTextFieldNotice").style.height = parseInt(document.getElementById("linkTextFieldBackground").style.height) + "px", document.getElementById("linkTextFieldNotice").style.width = parseInt(document.getElementById("linkTextFieldBackground").style.width) + "px", document.getElementById("linkTextFieldNotice").style.left = parseInt(document.getElementById("linkTextFieldBackground").style.left) + "px", document.getElementById("linkTextFieldNotice").style.top = parseInt(document.getElementById("linkTextFieldBackground").style.top) + "px";
    document.getElementById("linkTextField").style.height = parseInt(document.getElementById("linkTextFieldBackground").style.height) + "px", document.getElementById("linkTextField").style.width = .96 * parseInt(document.getElementById("linkTextFieldBackground").style.width) + "px", document.getElementById("linkTextField").style.left = 1.3 * parseInt(document.getElementById("linkTextFieldBackground").style.left) + "px", document.getElementById("linkTextField").style.top = parseInt(document.getElementById("linkTextFieldBackground").style.top) + "px", document.getElementById("linkTextField").style.fontFamily = "Arial, Helvetica, sans-serif", document.getElementById("linkTextField").style.fontSize = Math.round(.42 * parseInt(document.getElementById("linkTextField").style.height)) + "px", document.getElementById("linkTextField").style.lineHeight = "2.7", document.getElementById("linkTextField").style.textAlign = "left", document.getElementById("linkTextField").readOnly = !1, document.getElementById("linkTextField").wrap = "off", document.getElementById("linkTextField").style.color = "#ffffff", document.getElementById("linkTextField").style.backgroundColor = "#ff0000", document.getElementById("linkTextField").style.backgroundColor = "transparent";
    document.getElementById("smallButton").style.width = Math.round(1.25 * parseInt(document.getElementById("loadingCircle").style.width)) + "px", document.getElementById("smallButton").style.height = Math.round(+parseInt(document.getElementById("smallButton").style.width)) + "px", document.getElementById("smallButton").style.left = Math.round(.25 * parseInt(document.getElementById("loadingCircle").style.width)) + "px", document.getElementById("smallButton").style.top = Math.round(.25 * parseInt(document.getElementById("loadingCircle").style.width)) + "px";
    document.getElementById("mediumButton").style.width = Math.round(1.25 * parseInt(document.getElementById("loadingCircle").style.width)) + "px", document.getElementById("mediumButton").style.height = Math.round(+parseInt(document.getElementById("mediumButton").style.width)) + "px", document.getElementById("mediumButton").style.left = Math.round(1.65 * parseInt(document.getElementById("loadingCircle").style.width)) + "px", document.getElementById("mediumButton").style.top = Math.round(.25 * parseInt(document.getElementById("loadingCircle").style.width)) + "px";
    document.getElementById("largeButton").style.width = Math.round(1.25 * parseInt(document.getElementById("loadingCircle").style.width)) + "px", document.getElementById("largeButton").style.height = Math.round(+parseInt(document.getElementById("largeButton").style.width)) + "px", document.getElementById("largeButton").style.left = Math.round(3.05 * parseInt(document.getElementById("loadingCircle").style.width)) + "px", document.getElementById("largeButton").style.top = Math.round(.25 * parseInt(document.getElementById("loadingCircle").style.width)) + "px";
    document.getElementById("rotateLeftButton").style.width = Math.round(1.25 * parseInt(document.getElementById("loadingCircle").style.width)) + "px", document.getElementById("rotateLeftButton").style.height = Math.round(+parseInt(document.getElementById("rotateLeftButton").style.width)) + "px", document.getElementById("rotateLeftButton").style.left = Math.round(.25 * parseInt(document.getElementById("loadingCircle").style.width)) + "px", document.getElementById("rotateLeftButton").style.top = Math.round(1.65 * parseInt(document.getElementById("loadingCircle").style.width)) + "px";
    document.getElementById("rotateRightButton").style.width = Math.round(1.25 * parseInt(document.getElementById("loadingCircle").style.width)) + "px", document.getElementById("rotateRightButton").style.height = Math.round(+parseInt(document.getElementById("rotateRightButton").style.width)) + "px", document.getElementById("rotateRightButton").style.left = Math.round(1.65 * parseInt(document.getElementById("loadingCircle").style.width)) + "px", document.getElementById("rotateRightButton").style.top = Math.round(1.65 * parseInt(document.getElementById("loadingCircle").style.width)) + "px";
    document.getElementById("saveButton").style.width = Math.round(3.9 * parseInt(document.getElementById("loadingCircle").style.width)) + "px", document.getElementById("saveButton").style.height = Math.round(parseInt(document.getElementById("saveButton").style.width) / 3.75) + "px", document.getElementById("saveButton").style.left = stageWidth - parseInt(document.getElementById("saveButton").style.width) - Math.round(.25 * parseInt(document.getElementById("loadingCircle").style.width)) + "px", document.getElementById("saveButton").style.top = stageHeight - 2 * parseInt(document.getElementById("saveButton").style.height) - Math.round(.4 * parseInt(document.getElementById("loadingCircle").style.width)) + "px";
    document.getElementById("cancelButton").style.width = Math.round(3.9 * parseInt(document.getElementById("loadingCircle").style.width)) + "px", document.getElementById("cancelButton").style.height = Math.round(parseInt(document.getElementById("cancelButton").style.width) / 3.75) + "px", document.getElementById("cancelButton").style.left = stageWidth - parseInt(document.getElementById("cancelButton").style.width) - Math.round(.25 * parseInt(document.getElementById("loadingCircle").style.width)) + "px", document.getElementById("cancelButton").style.top = stageHeight - parseInt(document.getElementById("cancelButton").style.height) - Math.round(.25 * parseInt(document.getElementById("loadingCircle").style.width)) + "px";
    var e = "editorTouchboard";
    document.getElementById(e).style.width = parseInt(document.getElementById("editor").style.width) + "px", document.getElementById(e).style.height = parseInt(document.getElementById("editor").style.height) + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = "0px"
}

function quickSizeSelectedImage() {
    currentXCenter = parseInt(document.getElementById("selectedImage").style.left) + document.getElementById("selectedImage").offsetWidth / 2, currentYCenter = parseInt(document.getElementById("selectedImage").style.top) + document.getElementById("selectedImage").offsetHeight / 2, document.getElementById("selectedImage").style.width = parseInt(document.getElementById("boardBackground").style.width) * selectedSize + "px", document.getElementById("selectedImage").style.left = currentXCenter - document.getElementById("selectedImage").offsetWidth / 2 + "px", document.getElementById("selectedImage").style.top = currentYCenter - document.getElementById("selectedImage").offsetHeight / 2 + "px"
}

function editorSwitch() {
    null == this.editor_switchStatus ? (document.getElementById("editor").style.transition = "all 0s ease-out", document.getElementById("editor").style.MozTransition = "all 0s ease-out", document.getElementById("editor").style.WebkitTransition = "all 0s ease-out", document.getElementById("editor").style.opacity = 0, document.getElementById("editor").style.visibility = "hidden", editor_switchStatus = "OFF") : "OFF" == editor_switchStatus ? (document.getElementById("linkTextField").blur(), editorSizeAndPosition(), rotationSetting = 0, updateRotation(), document.getElementById("loadingCircle").style.opacity = 1, document.getElementById("selectedImage").style.display = "none", document.getElementById("saveButton").style.opacity = .3, document.getElementById("saveButton").style.pointerEvents = "none", document.getElementById("selectedImage").src = "", document.getElementById("selectedImage").src = "editor/library/" + selectionPosition + ".png", document.getElementById("editor").style.visibility = "visible", document.getElementById("editor").style.transition = "opacity .5s ease-out", document.getElementById("editor").style.MozTransition = "opacity .5s ease-out", document.getElementById("editor").style.WebkitTransition = "opacity .5s ease-out", document.getElementById("editor").style.opacity = 1, editor_switchStatus = "TRANSITIONING", setTimeout(function () {
        editor_switchStatus = "ON"
    }, 500)) : "ON" == editor_switchStatus && (document.getElementById("editor").style.transition = "opacity .5s ease-out", document.getElementById("editor").style.MozTransition = "opacity .5s ease-out", document.getElementById("editor").style.WebkitTransition = "opacity .5s ease-out", document.getElementById("editor").style.opacity = 0, editor_switchStatus = "TRANSITIONING", setTimeout(function () {
        document.getElementById("editor").style.visibility = "hidden", editor_switchStatus = "OFF"
    }, 500))
}

function checkLink() {
    document.getElementById("selectedImage").src = document.getElementById("linkTextField").value
}

function checkLinkQuery(e) {
    null == e && (0 == queryValue("link") || (editorSwitch(), document.getElementById("linkTextFieldNotice").style.opacity = 0, document.getElementById("linkTextField").value = queryValue("link"), checkLink())), void 0 !== e && ("OFF" == editor_switchStatus && editorSwitch(), document.getElementById("linkTextFieldNotice").style.opacity = 0, document.getElementById("linkTextField").value = e, checkLink())
}

function hideSelectedImage() {
    document.getElementById("loadingCircle").style.opacity = 1, document.getElementById("selectedImage").style.display = "none", document.getElementById("saveButton").style.opacity = .3, document.getElementById("saveButton").style.pointerEvents = "none"
}

function showSelectedImage() {
    document.getElementById("loadingCircle").style.opacity = 0, document.getElementById("selectedImage").style.display = "block", editorSizeAndPosition(), rotationSetting = 0, updateRotation(), document.getElementById("saveButton").style.opacity = 1, document.getElementById("saveButton").style.pointerEvents = "all"
}

function gotoNextSelection() {
    document.getElementById("linkTextField").blur(), selectionPosition++, selectionPosition > libraryTotal && (selectionPosition = 1), document.getElementById("loadingCircle").style.opacity = 1, document.getElementById("selectedImage").style.display = "none", document.getElementById("selectedImage").src = "editor/library/" + selectionPosition + ".png"
}

function gotoPrevSelection() {
    document.getElementById("linkTextField").blur(), selectionPosition--, selectionPosition < 1 && (selectionPosition = libraryTotal), document.getElementById("loadingCircle").style.opacity = 1, document.getElementById("selectedImage").style.display = "none", document.getElementById("selectedImage").src = "editor/library/" + selectionPosition + ".png"
}

function updateRotation() {
    var e = "selectedImage";
    document.getElementById(e).style.WebkitPerspectiveOrigin = "50% 50%", document.getElementById(e).style.MozPerspectiveOrigin = "50% 50%", document.getElementById(e).style.perspectiveOrigin = "50% 50%", document.getElementById(e).style.WebkitTransformOrigin = "50% 50%", document.getElementById(e).style.MozTransformOrigin = "50% 50%", document.getElementById(e).style.transformOrigin = "50% 50%", document.getElementById(e).style.WebkitTransformStyle = "preserve-3d", document.getElementById(e).style.MozTransformStyle = "preserve-3d", document.getElementById(e).style.transformStyle = "preserve-3d", document.getElementById(e).style.WebkitTransform = "perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(" + rotationSetting + "deg)", document.getElementById(e).style.MozTransform = "perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(" + rotationSetting + "deg)", document.getElementById(e).style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(" + rotationSetting + "deg)"
}

function rotateLeft() {
    rotationSetting -= 22.5, rotationSetting <= 0 && (rotationSetting += 360), updateRotation()
}

function rotateRight() {
    rotationSetting += 22.5, 360 <= rotationSetting && (rotationSetting -= 360), updateRotation()
}

function defineEditorButtons() {
    var e = "nextPreviewButton";
    "ontouchmove" in document.documentElement ? (document.getElementById(e).ontouchstart = function (e) {
        document.getElementById("nextPreviewButton").style.opacity = .5, e.preventDefault()
    }, document.getElementById(e).ontouchend = function (e) {
        document.getElementById("nextPreviewButton").style.opacity = 1, gotoNextSelection(), e.preventDefault()
    }) : (document.getElementById(e).onmousedown = function (e) {
        document.getElementById("nextPreviewButton").style.opacity = .5, e.preventDefault()
    }, document.getElementById(e).onmouseup = function (e) {
        document.getElementById("nextPreviewButton").style.opacity = 1, gotoNextSelection(), e.preventDefault()
    });
    e = "prevPreviewButton";
    "ontouchmove" in document.documentElement ? (document.getElementById(e).ontouchstart = function (e) {
        document.getElementById("prevPreviewButton").style.opacity = .5, e.preventDefault()
    }, document.getElementById(e).ontouchend = function (e) {
        document.getElementById("prevPreviewButton").style.opacity = 1, gotoPrevSelection(), e.preventDefault()
    }) : (document.getElementById(e).onmousedown = function (e) {
        document.getElementById("prevPreviewButton").style.opacity = .5, e.preventDefault()
    }, document.getElementById(e).onmouseup = function (e) {
        document.getElementById("prevPreviewButton").style.opacity = 1, gotoPrevSelection(), e.preventDefault()
    });
    e = "editorTouchboard";
    "ontouchmove" in document.documentElement ? (document.getElementById(e).ontouchstart = function (e) {
        retrieveMousePositions(e), startingMouseXPos = mouseX, startingMouseYPos = mouseY, startingImageXPos = parseInt(document.getElementById("selectedImage").style.left), startingImageYPos = parseInt(document.getElementById("selectedImage").style.top), document.getElementById("selectedImage").style.left = mouseX - document.getElementById("selectedImage").offsetWidth / 2 + "px", document.getElementById("selectedImage").style.top = mouseY - document.getElementById("selectedImage").offsetHeight / 2 + "px", allowDragging = !0, e.preventDefault()
    }, document.getElementById(e).ontouchend = function (e) {
        allowDragging = !1, e.preventDefault()
    }, document.getElementById(e).ontouchmove = function (e) {
        1 == allowDragging && (retrieveMousePositions(e), differenceX = startingMouseXPos - mouseX, differenceY = startingMouseYPos - mouseY, document.getElementById("selectedImage").style.left = mouseX - document.getElementById("selectedImage").offsetWidth / 2 + "px", document.getElementById("selectedImage").style.top = mouseY - document.getElementById("selectedImage").offsetHeight / 2 + "px"), e.preventDefault()
    }) : (document.getElementById(e).onmousedown = function (e) {
        retrieveMousePositions(e), startingMouseXPos = mouseX, startingMouseYPos = mouseY, startingImageXPos = parseInt(document.getElementById("selectedImage").style.left), startingImageYPos = parseInt(document.getElementById("selectedImage").style.top), document.getElementById("selectedImage").style.left = mouseX - document.getElementById("selectedImage").offsetWidth / 2 + "px", document.getElementById("selectedImage").style.top = mouseY - document.getElementById("selectedImage").offsetHeight / 2 + "px", allowDragging = !0, e.preventDefault()
    }, document.getElementById(e).onmouseup = function (e) {
        allowDragging = !1, e.preventDefault()
    }, document.getElementById(e).onmouseout = function (e) {
        allowDragging = !1, e.preventDefault()
    }, document.getElementById(e).onmousemove = function (e) {
        1 == allowDragging && (retrieveMousePositions(e), differenceX = startingMouseXPos - mouseX, differenceY = startingMouseYPos - mouseY, document.getElementById("selectedImage").style.left = mouseX - document.getElementById("selectedImage").offsetWidth / 2 + "px", document.getElementById("selectedImage").style.top = mouseY - document.getElementById("selectedImage").offsetHeight / 2 + "px"), e.preventDefault()
    });
    e = "rotateLeftButton";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function (e) {
        rotateLeft(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function (e) {
        rotateLeft(), e.preventDefault()
    };
    e = "rotateRightButton";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function (e) {
        rotateRight(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function (e) {
        rotateRight(), e.preventDefault()
    };
    e = "smallButton";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function (e) {
        selectedSize = .2, quickSizeSelectedImage(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function (e) {
        selectedSize = .2, quickSizeSelectedImage(), e.preventDefault()
    };
    e = "mediumButton";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function (e) {
        selectedSize = .25, quickSizeSelectedImage(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function (e) {
        selectedSize = .25, quickSizeSelectedImage(), e.preventDefault()
    };
    e = "largeButton";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function (e) {
        selectedSize = .3, quickSizeSelectedImage(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function (e) {
        selectedSize = .3, quickSizeSelectedImage(), e.preventDefault()
    };
    e = "saveButton";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function (e) {
        saveRequest(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function (e) {
        saveRequest(), e.preventDefault()
    };
    e = "cancelButton";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function (e) {
        editorSwitch(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function (e) {
        editorSwitch(), e.preventDefault()
    }
}

function saveRequest() {
    document.getElementById("saveButton").style.opacity = .3, document.getElementById("saveButton").style.pointerEvents = "none", php_imageLink = document.getElementById("selectedImage").src, php_imageSize = selectedSize, php_rotationSetting = rotationSetting, leftGap = (parseInt(document.getElementById("boardBackground").style.width) - stageWidth) / 2, topGap = (parseInt(document.getElementById("boardBackground").style.height) - stageHeight) / 2, calculatedXPos = leftGap + parseInt(document.getElementById("selectedImage").style.left), calculatedYPos = topGap + parseInt(document.getElementById("selectedImage").style.top), php_xPos = calculatedXPos / parseInt(document.getElementById("boardBackground").style.width), php_yPos = calculatedYPos / parseInt(document.getElementById("boardBackground").style.height), php_imageLink = php_imageLink.replace("&", "%26amp;"), postMessage = "php_imageLink=" + php_imageLink + "&php_imageSize=" + php_imageSize + "&php_xPos=" + php_xPos + "&php_yPos=" + php_yPos + "&php_rotationSetting=" + php_rotationSetting;
    var e = new XMLHttpRequest;
    e.open("POST", "editor/save.php", !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.send(postMessage), setTimeout(function () {
        document.getElementById("linkTextField").value = "", document.getElementById("linkTextFieldNotice").style.opacity = 1
    }, 1500), e.onreadystatechange = function () {
        4 == e.readyState && setTimeout(function () {
            document.getElementById("saveButton").style.opacity = 1, document.getElementById("saveButton").style.pointerEvents = "all", loadXML(), setTimeout(function () {
                editorSwitch(), localStorage.canCountValue = Number(localStorage.canCountValue) - 1, updateCanCount()
            }, 500)
        }, 500)
    }
}

function editorRuntime() {
    allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length] = editorSizeAndPosition, allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length - 1](), editorSwitch(), defineEditorButtons(), checkLinkQuery()
}
selectedSize = .2, document.getElementById("editor").style.WebkitBackfaceVisibility = "hidden", document.getElementById("linkTextField").onfocus = function () {
    document.getElementById("linkTextFieldNotice").style.opacity = 0
}, document.getElementById("linkTextField").onblur = function () {
    document.getElementById("linkTextField").value = "", document.getElementById("linkTextFieldNotice").style.opacity = 1
}, document.getElementById("linkTextField").addEventListener("input", checkLink), document.getElementById("selectedImage").addEventListener("error", hideSelectedImage), document.getElementById("selectedImage").addEventListener("load", showSelectedImage), libraryTotal = 150, selectionPosition = Math.floor(Math.random() * libraryTotal + 1), document.getElementById("selectedImage").src = "editor/library/" + selectionPosition + ".png", rotationSetting = 0, allowDragging = !1, allRuntimeFunctionsList[allRuntimeFunctionsList.length] = editorRuntime;
