function setupUserDefaults() {
    if (selectedStationNum = 0, console.log("DEFAULT STATION: " + localStorage.lastStation), void 0 !== localStorage.lastStation)
        for (s = 0; s <= stationsArray.length; s++) stationsArray[s] == localStorage.lastStation && (selectedStationNum = s);
    shuffleArray(this[stationsArray[selectedStationNum] + "_tracks"]), shuffleArray(bumpsArray), selectStationTheme()
}

function audioPlayerSizeAndPosition() {
    var t = "audioPlayer",
        e = 1280 / 720;
    document.getElementById(t).style.height = stageHeight + "px", document.getElementById(t).style.width = Math.round(parseInt(document.getElementById("audioPlayer").style.height) * e) + "px", document.getElementById(t).style.left = -(parseInt(document.getElementById("audioPlayer").style.width) - stageWidth) / 2 + "px", document.getElementById(t).style.top = -(parseInt(document.getElementById("audioPlayer").style.height) - stageHeight) / 2 + "px", parseInt(document.getElementById("audioPlayer").style.width) < stageWidth && (document.getElementById(t).style.width = stageWidth + "px", document.getElementById(t).style.height = Math.round(parseInt(document.getElementById("audioPlayer").style.width) / e) + "px", document.getElementById(t).style.left = -(parseInt(document.getElementById("audioPlayer").style.width) - stageWidth) / 2 + "px", document.getElementById(t).style.top = -(parseInt(document.getElementById("audioPlayer").style.height) - stageHeight) / 2 + "px")
}

function playAudioPlayer() {
    "ON" == chat_switchStatus && (stop_chat(), setTimeout(function() {
        run_chat()
    }, 250)), playingStatus = !1, document.getElementById("pauseTrackButton").style.opacity = 1, document.getElementById("pauseTrackButton").style.visibility = "visible", document.getElementById("playTrackButton").style.opacity = 0, document.getElementById("playTrackButton").style.visibility = "hidden", document.getElementById("loadingTrackCircle").style.visibility = "visible", document.getElementById("informationIcon").style.visibility = "hidden", hideInformation(), loadStatic(), songsFinished++, 7 < songsFinished && 1 == flagTicker ? (bumpPos++, bumpPos >= bumpsArray.length && (bumpPos = 0), newTrackName = "Bump", document.getElementById("audioPlayerMP3").src = "radio/stations/bumps/" + bumpsArray[bumpPos] + ".mp3", document.getElementById("audioPlayer").load(), document.getElementById("audioPlayer").play(), songsFinished = 0) : (trackPos++, trackPos >= this[stationsArray[selectedStationNum] + "_tracks"].length && (trackPos = 0), newTrackName = this[stationsArray[selectedStationNum] + "_tracks"][trackPos], console.log("LOADING TRACK: " + newTrackName), document.getElementById("audioPlayerMP3").src = "radio/stations/" + stationsArray[selectedStationNum] + "/" + this[stationsArray[selectedStationNum] + "_tracks"][trackPos] + ".mp3", document.getElementById("audioPlayer").load(), document.getElementById("audioPlayer").play())
}

function forceTrack(t, e) {
    document.getElementById("loadingTrackCircle").style.visibility = "visible", document.getElementById("informationIcon").style.visibility = "hidden", playingStatus = !1, hideInformation(), newTrackName = e, loadStatic(), document.getElementById("audioPlayerMP3").src = "radio/stations/" + t + "/" + e + ".mp3", document.getElementById("audioPlayer").load(), document.getElementById("audioPlayer").play()
}

function skipTrack() {
    0 == shuffle_switch ? playAudioPlayer() : 1 == shuffle_switch && gotoNextStation()
}

function pauseRadio() {
    flagSongRequests = !1, setTimeout(function() {
        document.getElementById("programInformationText").innerHTML = "PAUSED"
    }, 200), document.getElementById("audioPlayer").pause(), document.getElementById("pauseTrackButton").style.opacity = 0, document.getElementById("pauseTrackButton").style.visibility = "hidden", document.getElementById("playTrackButton").style.opacity = 1, document.getElementById("playTrackButton").style.visibility = "visible"
}

function continueRadio() {
    flagSongRequests = !0, document.getElementById("programInformationText").innerHTML = newTrackName, document.getElementById("pauseTrackButton").style.opacity = 1, document.getElementById("pauseTrackButton").style.visibility = "visible", document.getElementById("playTrackButton").style.opacity = 0, document.getElementById("playTrackButton").style.visibility = "hidden", document.getElementById("audioPlayer").play()
}

function loadStatic() {
    0 == staticSwitch ? (staticSwitch = !0, document.getElementById("staticPlayerMP3").src = "radio/stations/static.mp3", document.getElementById("staticPlayer").load(), document.getElementById("staticPlayer").addEventListener("canplaythrough", function() {
        document.getElementById("staticPlayer").loop = !0, 0 == playingStatus && document.getElementById("staticPlayer").play()
    })) : 0 == playingStatus && document.getElementById("staticPlayer").play()
}

function radioSwitch() {
    null == this.radio_switchStatus ? (radio_switchStatus = "ON", document.getElementById("radioButton").style.opacity = 1) : "OFF" == radio_switchStatus ? ("ON" == tvFrame_switchStatus && tvFrameSwitch(), "ON" == wallFrame_switchStatus && wallFrameSwitch(), "ON" == chat_switchStatus && chatSwitch(), radio_switchStatus = "ON", document.getElementById("radioButton").style.opacity = 1) : "ON" == radio_switchStatus && (radio_switchStatus = "OFF", document.getElementById("radioButton").style.opacity = .55)
}

function informationSizeAndPosition() {
    var t = "information";
    document.getElementById(t).style.height = Math.round(.07 * stageHeight) + "px", document.getElementById(t).style.width = stageWidth + "px", document.getElementById(t).style.left = "0px", document.getElementById(t).style.top = stageHeight - parseInt(document.getElementById("information").style.height) + "px", 50 < parseInt(document.getElementById(t).style.height) && (document.getElementById(t).style.height = "50px", document.getElementById(t).style.width = stageWidth + "px", document.getElementById(t).style.left = "0px", document.getElementById(t).style.top = stageHeight - parseInt(document.getElementById("information").style.height) + "px"), document.getElementById(t).style.top = stageHeight - 2 * parseInt(document.getElementById("information").style.height) + "px", document.getElementById(t).style.overflow = "visible";
    t = "informationIcon";
    document.getElementById(t).style.height = parseInt(document.getElementById("information").style.height) + "px", document.getElementById(t).style.width = Math.round(+parseInt(document.getElementById(t).style.height)) + "px", document.getElementById(t).style.left = "0px", document.getElementById(t).style.top = "0px";
    t = "informationIconColor";
    document.getElementById(t).style.height = parseInt(document.getElementById("informationIcon").style.height) + "px", document.getElementById(t).style.width = parseInt(document.getElementById("informationIcon").style.width) + "px", document.getElementById(t).style.left = "0px", document.getElementById(t).style.top = "0px", document.getElementById(t).style.visibility = "hidden";
    t = "programInformationText";
    document.getElementById(t).style.height = Math.round(.7 * parseInt(document.getElementById("information").style.height)) + "px", document.getElementById(t).style.width = parseInt(document.getElementById("information").style.width) - 2.85 * parseInt(document.getElementById("information").style.height) + "px", document.getElementById(t).style.left = parseInt(document.getElementById("informationIcon").style.width) + Math.round(.051 * parseInt(document.getElementById("information").style.height)) + "px", document.getElementById(t).style.top = Math.round(.22 * parseInt(document.getElementById("information").style.height)) + "px", document.getElementById(t).style.fontFamily = "lightfont", document.getElementById(t).style.fontSize = Math.round(.52 * parseInt(document.getElementById("programInformationText").style.height)) + "px", document.getElementById(t).style.color = "#FFFFFF", document.getElementById(t).style.textAlign = "left", document.getElementById(t).style.lineHeight = "1.5", document.getElementById(t).style.whiteSpace = "nowrap", document.getElementById(t).style.textTransform = "uppercase";
    t = "loadingTrackCircle";
    document.getElementById(t).style.height = parseInt(document.getElementById("information").style.height) + "px", document.getElementById(t).style.width = parseInt(document.getElementById("information").style.height) + "px", document.getElementById(t).style.left = .07 * parseInt(document.getElementById(t).style.width) + "px", document.getElementById(t).style.top = "0px";
    t = "nextTrackButton";
    document.getElementById(t).style.height = parseInt(document.getElementById("information").style.height) + "px", document.getElementById(t).style.width = parseInt(document.getElementById("information").style.height) + "px", document.getElementById(t).style.left = stageWidth - 1.07 * parseInt(document.getElementById(t).style.width) + "px", document.getElementById(t).style.top = "0px";
    t = "pauseTrackButton";
    document.getElementById(t).style.height = parseInt(document.getElementById("information").style.height) + "px", document.getElementById(t).style.width = parseInt(document.getElementById("information").style.height) + "px", document.getElementById(t).style.left = stageWidth - 1.81 * parseInt(document.getElementById(t).style.width) + "px", document.getElementById(t).style.top = "0px";
    t = "playTrackButton";
    document.getElementById(t).style.height = parseInt(document.getElementById("pauseTrackButton").style.height) + "px", document.getElementById(t).style.width = parseInt(document.getElementById("pauseTrackButton").style.width) + "px", document.getElementById(t).style.left = parseInt(document.getElementById("pauseTrackButton").style.left) + "px", document.getElementById(t).style.top = parseInt(document.getElementById("pauseTrackButton").style.top) + "px";
    t = "progressBar";
    document.getElementById(t).style.height = Math.round(.09 * parseInt(document.getElementById("information").style.height)) + "px", document.getElementById(t).style.width = "0px", document.getElementById(t).style.left = "0px", document.getElementById(t).style.top = 0 - parseInt(document.getElementById(t).style.height) + "px";
    t = "progressBarBackground";
    document.getElementById(t).style.height = parseInt(document.getElementById("progressBar").style.height) + "px", document.getElementById(t).style.width = stageWidth + "px", document.getElementById(t).style.left = "0px", document.getElementById(t).style.top = parseInt(document.getElementById("progressBar").style.top) + "px";
    t = "informationBackground";
    document.getElementById(t).style.height = parseInt(document.getElementById("information").style.height) + "px", document.getElementById(t).style.width = parseInt(document.getElementById("information").style.width) + "px", document.getElementById(t).style.left = "0px", document.getElementById(t).style.top = "0px", document.getElementById(t).style.backgroundColor = "#000000", document.getElementById(t).style.opacity = .5
}

function showInformation() {
    document.getElementById("programInformationText").innerHTML = newTrackName
}

function hideInformation() {
    document.getElementById("programInformationText").innerHTML = "Loading..."
}

function updateProgressBar() {
    document.getElementById("audioPlayer").addEventListener("timeupdate", function() {
        percentageComplete = this.currentTime / this.duration, document.getElementById("progressBar").style.width = Math.round(stageWidth * percentageComplete) + "px", 0 < this.currentTime && (document.getElementById("loadingTrackCircle").style.visibility = "hidden", document.getElementById("informationIcon").style.visibility = "visible", 1 == flagGraffitiSoul && (document.getElementById("graffitiSoul").style.visibility = "visible")), 0 < this.currentTime && this.currentTime < 2 && (document.getElementById("staticPlayer").pause(), showInformation())
    }, !1)
}

function defineInformationButtons() {
    document.getElementById("informationIcon").ontouchstart = function(t) {
        document.getElementById("informationIcon").style.opacity = .3, remoteSwitch(), setTimeout(function() {
            document.getElementById("informationIcon").style.opacity = 1
        }, 250), t.preventDefault()
    }, document.getElementById("informationIcon").onmousedown = function(t) {
        document.getElementById("informationIcon").style.opacity = .3, remoteSwitch(), setTimeout(function() {
            document.getElementById("informationIcon").style.opacity = 1
        }, 250)
    };
    document.getElementById("informationBackground").ontouchstart = function(t) {
        document.getElementById("informationIcon").style.opacity = .3, remoteSwitch(), setTimeout(function() {
            document.getElementById("informationIcon").style.opacity = 1
        }, 250), t.preventDefault()
    }, document.getElementById("informationBackground").onmousedown = function(t) {
        document.getElementById("informationIcon").style.opacity = .3, remoteSwitch(), setTimeout(function() {
            document.getElementById("informationIcon").style.opacity = 1
        }, 250)
    };
    document.getElementById("nextTrackButton").ontouchstart = function(t) {
        document.getElementById("nextTrackButton").style.opacity = .3, setTimeout(function() {
            document.getElementById("nextTrackButton").style.opacity = 1
        }, 250), skipTrack(), t.preventDefault()
    }, document.getElementById("nextTrackButton").onmousedown = function(t) {
        document.getElementById("nextTrackButton").style.opacity = .3, setTimeout(function() {
            document.getElementById("nextTrackButton").style.opacity = 1
        }, 250), skipTrack()
    };
    document.getElementById("pauseTrackButton").ontouchstart = function(t) {
        pauseRadio(), t.preventDefault()
    }, document.getElementById("pauseTrackButton").onmousedown = function(t) {
        pauseRadio()
    };
    var t = "playTrackButton";
    document.getElementById(t).ontouchstart = function(t) {
        continueRadio(), t.preventDefault()
    }, document.getElementById(t).onmousedown = function(t) {
        continueRadio()
    }
}

function guiSwitchSizeAndPosition() {
    var t = "guiSwitchON";
    document.getElementById(t).style.width = .7 * parseInt(document.getElementById("informationIcon").style.width) + "px", document.getElementById(t).style.height = Math.round(+parseInt(document.getElementById(t).style.width)) + "px", 1 == flagInformation ? document.getElementById(t).style.top = parseInt(document.getElementById("information").style.top) - 1.3 * parseInt(document.getElementById(t).style.height) + "px" : document.getElementById(t).style.top = stageHeight - 1.3 * parseInt(document.getElementById(t).style.height) + "px", document.getElementById(t).style.left = stageWidth - 1.3 * parseInt(document.getElementById(t).style.width) + "px";
    t = "guiSwitchOFF";
    document.getElementById(t).style.width = parseInt(document.getElementById("guiSwitchON").style.width) + "px", document.getElementById(t).style.height = parseInt(document.getElementById("guiSwitchON").style.height) + "px", document.getElementById(t).style.top = parseInt(document.getElementById("guiSwitchON").style.top) + "px", document.getElementById(t).style.left = parseInt(document.getElementById("guiSwitchON").style.left) + "px"
}

function defaultGUISwitchSettings() {
    document.getElementById("guiSwitchON").style.display = "block", document.getElementById("guiSwitchOFF").style.display = "none", document.getElementById("guiSwitchON").style.opacity = .5, document.getElementById("guiSwitchOFF").style.opacity = .5
}

function defineGUISwitchButtons() {
    document.getElementById("guiSwitchON").ontouchstart = function(t) {
        document.getElementById("guiSwitchON").style.display = "none", document.getElementById("guiSwitchOFF").style.display = "block", document.getElementById("information").style.display = "none", flagInformation = !1, hideTicker(), flagTicker = !1, chatSizeAndPosition(), guiSwitchSizeAndPosition(), t.preventDefault()
    }, document.getElementById("guiSwitchON").onmousedown = function(t) {
        document.getElementById("guiSwitchON").style.display = "none", document.getElementById("guiSwitchOFF").style.display = "block", document.getElementById("information").style.display = "none", flagInformation = !1, hideTicker(), flagTicker = !1, chatSizeAndPosition(), guiSwitchSizeAndPosition(), t.preventDefault()
    };
    var t = "guiSwitchOFF";
    document.getElementById(t).ontouchstart = function(t) {
        document.getElementById("guiSwitchON").style.display = "block", document.getElementById("guiSwitchOFF").style.display = "none", document.getElementById("information").style.display = "block", flagInformation = !0, showTicker(), flagTicker = !0, chatSizeAndPosition(), guiSwitchSizeAndPosition(), t.preventDefault()
    }, document.getElementById(t).onmousedown = function(t) {
        document.getElementById("guiSwitchON").style.display = "block", document.getElementById("guiSwitchOFF").style.display = "none", document.getElementById("information").style.display = "block", flagInformation = !0, showTicker(), flagTicker = !0, chatSizeAndPosition(), guiSwitchSizeAndPosition(), t.preventDefault()
    }
}

function radioRuntime() {
    allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length] = audioPlayerSizeAndPosition, allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length - 1](), radioSwitch(), setupUserDefaults(), allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length] = informationSizeAndPosition, allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length - 1](), updateProgressBar(), defineInformationButtons(), allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length] = guiSwitchSizeAndPosition, allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length - 1](), defaultGUISwitchSettings(), defineGUISwitchButtons()
}
stationsArray = new Array, bumpsArray = new Array, selectedStationNum = 0, trackPos = -1, bumpPos = -1, playingStatus = !1, songsFinished = 7, shuffle_switch = !1, document.getElementById("audioPlayer").addEventListener("canplaythrough", function() {
    document.getElementById("audioPlayer").play()
}), checkMessagesSwitch = !1, document.getElementById("audioPlayer").onplaying = function() {
    0 == checkMessagesSwitch && 0 < songsFinished && (checkMessagesSwitch = !0, beginEventsLoading()), playingStatus = !0
}, document.getElementById("audioPlayer").addEventListener("ended", function() {
    0 == shuffle_switch ? playAudioPlayer() : 1 == shuffle_switch && gotoNextStation()
}, !1), flagSongRequests = !0, staticSwitch = !1, document.getElementById("loadingTrackCircle").style.visibility = "hidden", document.getElementById("progressBar").style.backgroundColor = "#FFE222", document.getElementById("progressBarBackground").style.backgroundColor = "#FFFFFF", document.getElementById("progressBarBackground").style.opacity = .25, flagInformation = !0, flagTicker = !0, flagGraffitiSoul = !0, allRuntimeFunctionsList[allRuntimeFunctionsList.length] = radioRuntime;