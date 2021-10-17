function menuSizeAndPosition() {
    document.getElementById("menu").style.width = 1.3 * parseInt(document.getElementById("information").style.height) + "px", document.getElementById("menu").style.height = stageHeight + "px", document.getElementById("menu").style.left = stageWidth - +parseInt(document.getElementById("menu").style.width) + "px", document.getElementById("menu").style.top = "0px", menuGap = .1 * parseInt(document.getElementById("menu").style.width);
    document.getElementById("radioButton").style.width = parseInt(document.getElementById("menu").style.width) + "px", document.getElementById("radioButton").style.height = Math.round(parseInt(document.getElementById("radioButton").style.width) / (200 / 150)) + "px", document.getElementById("radioButton").style.top = menuGap + 0 * parseInt(document.getElementById("radioButton").style.height) + "px", document.getElementById("radioButton").style.left = "0px";
    document.getElementById("tvButton").style.width = parseInt(document.getElementById("menu").style.width) + "px", document.getElementById("tvButton").style.height = Math.round(parseInt(document.getElementById("tvButton").style.width) / (200 / 150)) + "px", document.getElementById("tvButton").style.top = menuGap + +parseInt(document.getElementById("tvButton").style.height) + "px", document.getElementById("tvButton").style.left = "0px";
    document.getElementById("wallButton").style.width = parseInt(document.getElementById("menu").style.width) + "px", document.getElementById("wallButton").style.height = Math.round(parseInt(document.getElementById("wallButton").style.width) / (200 / 150)) + "px", document.getElementById("wallButton").style.top = menuGap + 2 * parseInt(document.getElementById("wallButton").style.height) + "px", document.getElementById("wallButton").style.left = "0px";
    document.getElementById("chatButton").style.width = parseInt(document.getElementById("menu").style.width) + "px", document.getElementById("chatButton").style.height = Math.round(parseInt(document.getElementById("chatButton").style.width) / (200 / 150)) + "px", document.getElementById("chatButton").style.top = menuGap + 3 * parseInt(document.getElementById("chatButton").style.height) + "px", document.getElementById("chatButton").style.left = "0px";
    document.getElementById("merchButton").style.width = parseInt(document.getElementById("menu").style.width) + "px", document.getElementById("merchButton").style.height = Math.round(parseInt(document.getElementById("merchButton").style.width) / (200 / 150)) + "px", document.getElementById("merchButton").style.top = menuGap + 4 * parseInt(document.getElementById("merchButton").style.height) + "px", document.getElementById("merchButton").style.left = "0px";
    var t = "menuGradient";
    document.getElementById(t).style.width = 2 * parseInt(document.getElementById("menu").style.width) + "px", document.getElementById(t).style.height = stageHeight + "px", document.getElementById(t).style.top = "0px", document.getElementById(t).style.left = stageWidth - parseInt(document.getElementById(t).style.width) + "px"
}

function menuSwitch() {
    null == this.menu_switchStatus ? (document.getElementById("menu").style.visibility = "visible", menu_switchStatus = "ON", menuPosition = stageWidth, document.getElementById("menu").style.transform = "translate3d(" + menuPosition + "px, 0px, 0px)", document.getElementById("menu").style.MozTransform = "translate3d(" + menuPosition + "px, 0px, 0px)", document.getElementById("menu").style.WebkitTransform = "translate3d(" + menuPosition + "px, 0px, 0px)") : "OFF" == menu_switchStatus ? (document.getElementById("menu").style.visibility = "visible", menu_switchStatus = "ON") : "ON" == menu_switchStatus && (document.getElementById("menu").style.visibility = "hidden", menu_switchStatus = "OFF")
}

function animateMenu() {
    menuPosition = stageWidth, document.getElementById("menu").style.transform = "translate3d(" + menuPosition + "px, 0px, 0px)", document.getElementById("menu").style.MozTransform = "translate3d(" + menuPosition + "px, 0px, 0px)", document.getElementById("menu").style.WebkitTransform = "translate3d(" + menuPosition + "px, 0px, 0px)", setTimeout(function() {
        document.getElementById("menu").style.transition = "all 1s ease-out", document.getElementById("menu").style.MozTransition = "all 1s ease-out", document.getElementById("menu").style.WebkitTransition = "all 1s ease-out", document.getElementById("menu").style.transform = "translate3d(0px, 0px, 0px)"
    }, 100), setTimeout(function() {
        document.getElementById("menu").style.transition = "all 0s ease-out", document.getElementById("menu").style.MozTransition = "all 0s ease-out", document.getElementById("menu").style.WebkitTransition = "all 0s ease-out"
    }, 2e3)
}

function defineMenuButtons() {
    document.getElementById("radioButton").ontouchstart = function(t) {
        ("ON" == radio_switchStatus ? remoteSwitch : radioSwitch)(), t.preventDefault()
    }, document.getElementById("radioButton").onmousedown = function(t) {
        ("ON" == radio_switchStatus ? remoteSwitch : radioSwitch)()
    };
    document.getElementById("tvButton").ontouchstart = function(t) {
        tvFrameSwitch(), t.preventDefault()
    }, document.getElementById("tvButton").onmousedown = function(t) {
        tvFrameSwitch()
    };
    document.getElementById("wallButton").ontouchstart = function(t) {
        wallFrameSwitch(), t.preventDefault()
    }, document.getElementById("wallButton").onmousedown = function(t) {
        wallFrameSwitch()
    };
    var t = "chatButton";
    document.getElementById(t).ontouchstart = function(t) {
        chatSwitch(), t.preventDefault()
    }, document.getElementById(t).onmousedown = function(t) {
        chatSwitch()
    }, document.getElementById("merchButton").style.display = "none", document.getElementById("merchLink").setAttribute("href", "https://jsrl.bigcartel.com/"), document.getElementById("merchLink").setAttribute("target", "_blank")
}

function merchPromo() {
    setTimeout(function() {
        document.getElementById("merchButton").style.display = "block"
    }, timeExtension)
}

function menuRuntime() {
    allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length] = menuSizeAndPosition, allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length - 1](), menuSwitch(), defineMenuButtons(), merchPromo()
}
extensionMinutes = 1, timeExtension = 60 * extensionMinutes * 1e3, allRuntimeFunctionsList[allRuntimeFunctionsList.length] = menuRuntime;