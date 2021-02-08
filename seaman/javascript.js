function seamanFrameSizeAndPosition() {
    e = "seamanFrame";
    document.getElementById(e).style.height = "100%", document.getElementById(e).style.width = "100%";
    var e = "closeSeamanFrameButton";
    document.getElementById(e).style.height = parseInt(document.getElementById("information").style.height) + "px", document.getElementById(e).style.width = Math.round(1 * parseInt(document.getElementById(e).style.height)) + "px", document.getElementById(e).style.top = "0px", document.getElementById(e).style.left = stageWidth - parseInt(document.getElementById(e).style.width) + "px"
}
function seamanFrameSwitch() {
    null == this.seamanFrame_switchStatus ? (document.getElementById("seamanFrame").style.transition = "all 0s ease-out", document.getElementById("seamanFrame").style.MozTransition = "all 0s ease-out", document.getElementById("seamanFrame").style.WebkitTransition = "all 0s ease-out", document.getElementById("seamanFrame").style.opacity = 0, document.getElementById("seamanFrame").style.visibility = "hidden", document.getElementById("seamanFrame").style.left = stageWidth + "px", document.getElementById("closeSeamanFrameButton").style.visibility = "hidden", seamanFrame_switchStatus = "OFF") : "OFF" == seamanFrame_switchStatus ? ("ON" == radio_switchStatus && radioSwitch(), "ON" == tvFrame_switchStatus && tvFrameSwitch(), "ON" == graffitiFrame_switchStatus && graffitiFrameSwitch(), "ON" == chat_switchStatus && chatSwitch(), menuForceBottom = !0, menuSizeAndPosition(), document.getElementById("worldIcon").style.visibility = "hidden", document.getElementById("dateTextField").style.visibility = "hidden", document.getElementById("seamanFrame").src = "seaman/APP/index.html", document.getElementById("seamanFrame").style.visibility = "visible", document.getElementById("seamanFrame").style.left = "0px", document.getElementById("seamanFrame").style.transition = "opacity .4s ease-out", document.getElementById("seamanFrame").style.MozTransition = "opacity .4s ease-out", document.getElementById("seamanFrame").style.WebkitTransition = "opacity .4s ease-out", document.getElementById("seamanFrame").style.opacity = 1, seamanFrame_switchStatus = "TRANSITIONING", setTimeout(function() {
        seamanFrame_switchStatus = "ON"
    }, 500)) : "ON" == seamanFrame_switchStatus && (menuForceBottom = !1, menuSizeAndPosition(), document.getElementById("worldIcon").style.visibility = "visible", document.getElementById("dateTextField").style.visibility = "visible", document.getElementById("seamanFrame").src = "", document.getElementById("seamanFrame").style.transition = "opacity .4s ease-out", document.getElementById("seamanFrame").style.MozTransition = "opacity .4s ease-out", document.getElementById("seamanFrame").style.WebkitTransition = "opacity .4s ease-out", document.getElementById("seamanFrame").style.opacity = 0, seamanFrame_switchStatus = "TRANSITIONING", setTimeout(function() {
        document.getElementById("seamanFrame").style.visibility = "hidden", document.getElementById("seamanFrame").style.left = stageWidth + "px", seamanFrame_switchStatus = "OFF"
    }, 500))
}
function defineSeamanFrameButtons() {
    "ontouchmove" in document.documentElement ? document.getElementById("closeSeamanFrameButton").ontouchstart = function(e) {
        document.getElementById("seamanFrame").contentWindow.document.getElementById("inputSpeechTextField").value = "", document.getElementById("seamanFrame").contentWindow.document.getElementById("inputSpeechTextField").blur(), seamanFrameSwitch(), e.preventDefault()
    } : document.getElementById("closeSeamanFrameButton").onmousedown = function(e) {
        document.getElementById("seamanFrame").contentWindow.document.getElementById("inputSpeechTextField").value = "", document.getElementById("seamanFrame").contentWindow.document.getElementById("inputSpeechTextField").blur(), seamanFrameSwitch(), e.preventDefault()
    }
}
function seamanFrameRuntime() {
    allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length] = seamanFrameSizeAndPosition, allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length - 1](), seamanFrameSwitch(), defineSeamanFrameButtons()
}
document.getElementById("seamanFrame").style.backgroundColor = "#fac400", allRuntimeFunctionsList[allRuntimeFunctionsList.length] = seamanFrameRuntime;
