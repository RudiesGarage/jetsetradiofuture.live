function wallFrameSizeAndPosition() {
    var t = "wallFrame";
    document.getElementById(t).style.height = "100%", document.getElementById(t).style.width = "100%"
}
var wallFrame_timeOut;
document.getElementById("wallFrame").style.backgroundColor = "#000000";
var chatLinkWall_Status = !(wallFrame_switchStatus = "DEFAULT");

function wallFrameSwitch() {
    detectChatStringLink = document.getElementById("messageTextField").value.substring(0, 4), chatLinkWall_Status = "http" == detectChatStringLink, "DEFAULT" == wallFrame_switchStatus ? (wallFrame_switchStatus = "OFF", document.getElementById("wallButton").style.opacity = .55, document.getElementById("wallFrame").style.transition = "all 0s ease-out", document.getElementById("wallFrame").style.MozTransition = "all 0s ease-out", document.getElementById("wallFrame").style.WebkitTransition = "all 0s ease-out", document.getElementById("wallFrame").style.opacity = 0, document.getElementById("wallFrame").style.visibility = "hidden", document.getElementById("wallFrame").style.left = stageWidth + "px") : "OFF" == wallFrame_switchStatus ? ("ON" == tvFrame_switchStatus && tvFrameSwitch(), "ON" == chat_switchStatus && chatSwitch(), wallFrame_switchStatus = "ON", document.getElementById("wallButton").style.opacity = 1, menuForceBottom = !0, document.getElementById("worldIcon").style.visibility = "hidden", document.getElementById("dateTextField").style.visibility = "hidden", document.getElementById("wallFrame").src = 1 == chatLinkWall_Status ? "wall/APP/index.html?link=" + document.getElementById("messageTextField").value : "wall/APP/index.html", document.getElementById("wallFrame").style.visibility = "visible", document.getElementById("wallFrame").style.left = "0px", document.getElementById("wallFrame").style.transition = "opacity .4s ease-out", document.getElementById("wallFrame").style.MozTransition = "opacity .4s ease-out", document.getElementById("wallFrame").style.WebkitTransition = "opacity .4s ease-out", document.getElementById("wallFrame").style.opacity = 1, "ON" == radio_switchStatus && radioSwitch(), clearTimeout(wallFrame_timeOut)) : "ON" == wallFrame_switchStatus && (window.focus(), "ON" == chat_switchStatus && chatSwitch(), wallFrame_switchStatus = "OFF", document.getElementById("wallButton").style.opacity = .55, menuForceBottom = !1, document.getElementById("worldIcon").style.visibility = "visible", document.getElementById("dateTextField").style.visibility = "visible", document.getElementById("wallFrame").src = "", document.getElementById("wallFrame").style.transition = "opacity .4s ease-out", document.getElementById("wallFrame").style.MozTransition = "opacity .4s ease-out", document.getElementById("wallFrame").style.WebkitTransition = "opacity .4s ease-out", document.getElementById("wallFrame").style.opacity = 0, "OFF" == radio_switchStatus && radioSwitch(), wallFrame_timeOut = setTimeout(function () {
        document.getElementById("wallFrame").style.visibility = "hidden", document.getElementById("wallFrame").style.left = stageWidth + "px"
    }, 500))
}

function wallFrameRuntime() {
    allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length] = wallFrameSizeAndPosition, allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length - 1](), wallFrameSwitch()
}
allRuntimeFunctionsList[allRuntimeFunctionsList.length] = wallFrameRuntime;
