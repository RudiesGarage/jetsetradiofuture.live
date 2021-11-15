function previewScreenSizeAndPosition() {
    var e = "previewScreen",
        t = 0;
    document.getElementById(e).style.width = stageWidth + "px", document.getElementById(e).style.height = stageHeight + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = "0px";
    e = "previewLogo", t = 1900 / 1800;
    document.getElementById(e).style.width = stageWidth - Math.round(80 * magnification) - Math.round(80 * magnification) + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = Math.round(stageHeight / 2) - Math.round(parseInt(document.getElementById(e).style.height) / 2) + "px", document.getElementById(e).style.left = Math.round(stageWidth / 2) - Math.round(parseInt(document.getElementById(e).style.width) / 2) + "px", parseInt(document.getElementById(e).style.height) > stageHeight && (document.getElementById(e).style.height = stageHeight + "px", document.getElementById(e).style.width = Math.round(parseInt(document.getElementById(e).style.height) * t) + "px", document.getElementById(e).style.top = Math.round(stageHeight / 2) - Math.round(parseInt(document.getElementById(e).style.height) / 2) + "px", document.getElementById(e).style.left = Math.round(stageWidth / 2) - Math.round(parseInt(document.getElementById(e).style.width) / 2) + "px"), 400 < parseInt(document.getElementById(e).style.width) && (document.getElementById(e).style.width = "400px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.top = Math.round(stageHeight / 2) - Math.round(parseInt(document.getElementById(e).style.height) / 2) + "px", document.getElementById(e).style.left = Math.round(stageWidth / 2) - Math.round(parseInt(document.getElementById(e).style.width) / 2) + "px");
    e = "playButton", t = .375;
    document.getElementById(e).style.width = Math.round(.65 * parseInt(document.getElementById("previewLogo").style.width)) + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById("playButton").style.width) * t) + "px", document.getElementById(e).style.left = Math.round(stageWidth / 2) - Math.round(parseInt(document.getElementById("playButton").style.width) / 2) + "px", document.getElementById(e).style.top = parseInt(document.getElementById("previewLogo").style.top) + .62 * parseInt(document.getElementById("previewLogo").style.height) + "px";
    e = "previewWallpaper", t = 1280 / 720;
    document.getElementById(e).style.height = parseInt(document.getElementById("previewScreen").style.height) + "px", document.getElementById(e).style.width = Math.round(parseInt(document.getElementById("previewWallpaper").style.height) * t) + "px", document.getElementById(e).style.left = Math.round(parseInt(document.getElementById("previewScreen").style.width) / 2) - Math.round(parseInt(document.getElementById("previewWallpaper").style.width) / 2) + "px", document.getElementById(e).style.top = "0px", parseInt(document.getElementById("previewWallpaper").style.width) < parseInt(document.getElementById("previewScreen").style.width) && (document.getElementById(e).style.width = parseInt(document.getElementById("previewScreen").style.width) + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById("previewWallpaper").style.width) / t) + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = Math.round(parseInt(document.getElementById("previewScreen").style.height) / 2) - Math.round(parseInt(document.getElementById("previewWallpaper").style.height) / 2) + "px")
}

function hidePreviewScreen() {
    document.getElementById("previewWallpaper").style.pointerEvents = "none", document.getElementById("playButton").style.visibility = "hidden", document.getElementById("loadingCircle").style.opacity = 1, document.getElementById("remote").style.visibility = "visible", document.getElementById("zoomButton").style.visibility = "visible", document.getElementById("previewScreen").style.opacity = 0, setTimeout(function() {
        document.getElementById("previewScreen").style.visibility = "hidden"
    }, 777), playVideoPlayer(), displayChannelNumber()
}

function definePlayButton() {
    var e = "previewWallpaper";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        hidePreviewScreen(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        hidePreviewScreen(), e.preventDefault()
    }
}

function videoPlayerSizeAndPosition() {
    var e = "videoFrame";
    document.getElementById(e).style.height = stageHeight + "px", document.getElementById(e).style.width = stageWidth + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = "0px";
    var e = "videoPlayer",
        t = 1280 / 720;
    "fullscreen" == screenLayout && (document.getElementById(e).style.height = stageHeight + "px", document.getElementById(e).style.width = Math.round(parseInt(document.getElementById("videoPlayer").style.height) * t) + "px", document.getElementById(e).style.left = -(parseInt(document.getElementById("videoPlayer").style.width) - stageWidth) / 2 + "px", document.getElementById(e).style.top = -(parseInt(document.getElementById("videoPlayer").style.height) - stageHeight) / 2 + "px", parseInt(document.getElementById("videoPlayer").style.width) < stageWidth && (document.getElementById(e).style.width = stageWidth + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById("videoPlayer").style.width) / t) + "px", document.getElementById(e).style.left = -(parseInt(document.getElementById("videoPlayer").style.width) - stageWidth) / 2 + "px", document.getElementById(e).style.top = -(parseInt(document.getElementById("videoPlayer").style.height) - stageHeight) / 2 + "px")), "fitframe" == screenLayout && (document.getElementById(e).style.width = stageWidth + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById("videoPlayer").style.width) / t) + "px", document.getElementById(e).style.left = -(parseInt(document.getElementById("videoPlayer").style.width) - stageWidth) / 2 + "px", document.getElementById(e).style.top = -(parseInt(document.getElementById("videoPlayer").style.height) - stageHeight) / 2 + "px")
}

function playVideoPlayer(e) {
    if (1 == skipFirstTime ? skipFirstTime = !1 : changeStaticColor(), document.getElementById("videoFrame").style.opacity = 0, 1 == selectedChannel && (mediaPosition1++, mediaPosition1 >= totalFiles1 && (mediaPosition1 = 0)), 2 == selectedChannel && (mediaPosition2++, mediaPosition2 >= totalFiles2 && (mediaPosition2 = 0)), 3 == selectedChannel && (mediaPosition3++, mediaPosition3 >= totalFiles3 && (mediaPosition3 = 0)), 4 == selectedChannel && (mediaPosition4++, mediaPosition4 >= totalFiles4 && (mediaPosition4 = 0)), 5 == selectedChannel && (mediaPosition5++, mediaPosition5 >= totalFiles5 && (mediaPosition5 = 0)), 6 == selectedChannel && (mediaPosition6++, mediaPosition6 >= totalFiles6 && (mediaPosition6 = 0)), 7 == selectedChannel && (mediaPosition7++, mediaPosition7 >= totalFiles7 && (mediaPosition7 = 0)), 8 == selectedChannel && (mediaPosition8++, mediaPosition8 >= totalFiles8 && (mediaPosition8 = 0)), 9 == selectedChannel && (mediaPosition9++, mediaPosition9 >= totalFiles9 && (mediaPosition9 = 0)), lastDuration = 0, 1 == searchForContinue && 1 == selectedChannel) {
        for (console.log("Searching CH1"), s = 0; s < filesListArray1.length; s++) filesListArray1[s] == localStorage.ch1LastVideo && (console.log("FOUND: " + localStorage.ch1LastDuration), mediaPosition1 = s, lastDuration = localStorage.ch1LastDuration);
        searchForContinue = !1
    }
    if (1 == searchForContinue && 2 == selectedChannel) {
        for (console.log("Searching CH2"), s = 0; s < filesListArray2.length; s++) filesListArray2[s] == localStorage.ch2LastVideo && (console.log("FOUND: " + localStorage.ch2LastDuration), mediaPosition2 = s, lastDuration = localStorage.ch2LastDuration);
        searchForContinue = !1
    }
    if (1 == searchForContinue && 3 == selectedChannel) {
        for (console.log("Searching CH3"), s = 0; s < filesListArray3.length; s++) filesListArray3[s] == localStorage.ch3LastVideo && (console.log("FOUND: " + localStorage.ch3LastDuration), mediaPosition3 = s, lastDuration = localStorage.ch3LastDuration);
        searchForContinue = !1
    }
    if (1 == searchForContinue && 4 == selectedChannel) {
        for (console.log("Searching CH4"), s = 0; s < filesListArray4.length; s++) filesListArray4[s] == localStorage.ch4LastVideo && (console.log("FOUND: " + localStorage.ch4LastDuration), mediaPosition4 = s, lastDuration = localStorage.ch4LastDuration);
        searchForContinue = !1
    }
    if (1 == searchForContinue && 5 == selectedChannel) {
        for (console.log("Searching CH5"), s = 0; s < filesListArray5.length; s++) filesListArray5[s] == localStorage.ch5LastVideo && (console.log("FOUND: " + localStorage.ch5LastDuration), mediaPosition5 = s, lastDuration = localStorage.ch5LastDuration);
        searchForContinue = !1
    }
    if (1 == searchForContinue && 6 == selectedChannel) {
        for (console.log("Searching CH6"), s = 0; s < filesListArray6.length; s++) filesListArray6[s] == localStorage.ch6LastVideo && (console.log("FOUND: " + localStorage.ch6LastDuration), mediaPosition6 = s, lastDuration = localStorage.ch6LastDuration);
        searchForContinue = !1
    }
    if (1 == searchForContinue && 7 == selectedChannel) {
        for (console.log("Searching CH7"), s = 0; s < filesListArray7.length; s++) filesListArray7[s] == localStorage.ch7LastVideo && (console.log("FOUND: " + localStorage.ch7LastDuration), mediaPosition7 = s, lastDuration = localStorage.ch7LastDuration);
        searchForContinue = !1
    }
    if (1 == searchForContinue && 8 == selectedChannel) {
        for (console.log("Searching CH8"), s = 0; s < filesListArray8.length; s++) filesListArray8[s] == localStorage.ch8LastVideo && (console.log("FOUND: " + localStorage.ch8LastDuration), mediaPosition8 = s, lastDuration = localStorage.ch8LastDuration);
        searchForContinue = !1
    }
    if (1 == searchForContinue && 9 == selectedChannel) {
        for (console.log("Searching CH9"), s = 0; s < filesListArray9.length; s++) filesListArray9[s] == localStorage.ch9LastVideo && (console.log("FOUND: " + localStorage.ch9LastDuration), mediaPosition9 = s, lastDuration = localStorage.ch9LastDuration);
        searchForContinue = !1
    }
    1 == loadPinnedVideo && (lastDuration = 0), 1 == loadPinnedVideo ? (document.getElementById("videoPlayerMP4").src = "https://jetsetradio.live/tv/APP/videoplayer/pinned/pinned.mp4", loadPinnedVideo = !1) : 1 == loadSpecificVideo ? (document.getElementById("videoPlayerMP4").src = e, loadSpecificVideo = !1) : (1 == selectedChannel && (document.getElementById("videoPlayerMP4").src = "https://jetsetradio.live/tv/APP/videoplayer/ch1/" + filesListArray1[mediaPosition1] + ".mp4"), 2 == selectedChannel && (document.getElementById("videoPlayerMP4").src = "https://jetsetradio.live/tv/APP/videoplayer/ch2/" + filesListArray2[mediaPosition2] + ".mp4"), 3 == selectedChannel && (document.getElementById("videoPlayerMP4").src = "https://jetsetradio.live/tv/APP/videoplayer/ch3/" + filesListArray3[mediaPosition3] + ".mp4"), 4 == selectedChannel && (document.getElementById("videoPlayerMP4").src = "https://jetsetradio.live/tv/APP/videoplayer/ch4/" + filesListArray4[mediaPosition4] + ".mp4"), 5 == selectedChannel && (document.getElementById("videoPlayerMP4").src = "https://jetsetradio.live/tv/APP/videoplayer/ch5/" + filesListArray5[mediaPosition5] + ".mp4"), 6 == selectedChannel && (document.getElementById("videoPlayerMP4").src = "https://jetsetradio.live/tv/APP/videoplayer/ch6/" + filesListArray6[mediaPosition6] + ".mp4"), 7 == selectedChannel && (document.getElementById("videoPlayerMP4").src = "https://jetsetradio.live/tv/APP/videoplayer/ch7/" + filesListArray7[mediaPosition7] + ".mp4"), 8 == selectedChannel && (document.getElementById("videoPlayerMP4").src = "https://jetsetradio.live/tv/APP/videoplayer/ch8/" + filesListArray8[mediaPosition8] + ".mp4"), 9 == selectedChannel && (document.getElementById("videoPlayerMP4").src = "https://jetsetradio.live/tv/APP/videoplayer/ch9/" + filesListArray9[mediaPosition9] + ".mp4")), console.log("LOADING"), document.getElementById("videoPlayer").load(), document.getElementById("videoPlayer").play()
}




function defineVideoButton() {
    var e = "videoFrame";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        playVideoPlayer(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        playVideoPlayer(), e.preventDefault()
    }
}

function remoteSizeAndPosition() {
    var e = "remote",
        t = .52;
    document.getElementById(e).style.width = Math.round(.065 * stageHeight) + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", 40 < parseInt(document.getElementById(e).style.width) && (document.getElementById(e).style.width = "40px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px"), document.getElementById(e).style.left = stageWidth - 1.35 * parseInt(document.getElementById(e).style.width) + "px", document.getElementById(e).style.top = stageHeight - 1.23 * parseInt(document.getElementById(e).style.height) + "px";
    e = "remoteBackground", t = .52;
    document.getElementById(e).style.height = parseInt(document.getElementById("remote").style.height) + "px", document.getElementById(e).style.width = parseInt(document.getElementById("remote").style.width) + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = "0px";
    e = "nextChannelButton", t = 1.04;
    document.getElementById(e).style.width = parseInt(document.getElementById("remote").style.width) + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = "0px";
    e = "prevChannelButton", t = 1.04;
    document.getElementById(e).style.width = parseInt(document.getElementById("remote").style.width) + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = parseInt(document.getElementById("remote").style.height) / 2 + "px";
    e = "zoomButton", t = 1.04;
    document.getElementById(e).style.width = parseInt(document.getElementById("remote").style.width) + "px", document.getElementById(e).style.height = Math.round(parseInt(document.getElementById(e).style.width) / t) + "px", document.getElementById(e).style.left = .3 * parseInt(document.getElementById(e).style.width) + "px", document.getElementById(e).style.top = stageHeight - 1.3 * parseInt(document.getElementById(e).style.height) + "px";
    e = "channel1Graphic", t = 340 / 180;
    document.getElementById(e).style.height = 1.5 * parseInt(document.getElementById("remote").style.height) + "px", document.getElementById(e).style.width = Math.round(parseInt(document.getElementById(e).style.height) * t) + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = "0px";
    e = "channel2Graphic", t = 340 / 180;
    document.getElementById(e).style.height = parseInt(document.getElementById("channel1Graphic").style.height) + "px", document.getElementById(e).style.width = parseInt(document.getElementById("channel1Graphic").style.width) + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = "0px";
    e = "channel3Graphic", t = 340 / 180;
    document.getElementById(e).style.height = parseInt(document.getElementById("channel1Graphic").style.height) + "px", document.getElementById(e).style.width = parseInt(document.getElementById("channel1Graphic").style.width) + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = "0px";
    e = "channel4Graphic", t = 340 / 180;
    document.getElementById(e).style.height = parseInt(document.getElementById("channel1Graphic").style.height) + "px", document.getElementById(e).style.width = parseInt(document.getElementById("channel1Graphic").style.width) + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = "0px";
    e = "channel5Graphic", t = 340 / 180;
    document.getElementById(e).style.height = parseInt(document.getElementById("channel1Graphic").style.height) + "px", document.getElementById(e).style.width = parseInt(document.getElementById("channel1Graphic").style.width) + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = "0px";
    e = "channel6Graphic", t = 340 / 180;
    document.getElementById(e).style.height = parseInt(document.getElementById("channel1Graphic").style.height) + "px", document.getElementById(e).style.width = parseInt(document.getElementById("channel1Graphic").style.width) + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = "0px";
    e = "channel7Graphic", t = 340 / 180;
    document.getElementById(e).style.height = parseInt(document.getElementById("channel1Graphic").style.height) + "px", document.getElementById(e).style.width = parseInt(document.getElementById("channel1Graphic").style.width) + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = "0px";
    e = "channel8Graphic", t = 340 / 180;
    document.getElementById(e).style.height = parseInt(document.getElementById("channel1Graphic").style.height) + "px", document.getElementById(e).style.width = parseInt(document.getElementById("channel1Graphic").style.width) + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = "0px";
    e = "channel9Graphic", t = 340 / 180;
    document.getElementById(e).style.height = parseInt(document.getElementById("channel1Graphic").style.height) + "px", document.getElementById(e).style.width = parseInt(document.getElementById("channel1Graphic").style.width) + "px", document.getElementById(e).style.left = "0px", document.getElementById(e).style.top = "0px"
}
var channelGraphic_timeOut;

function displayChannelNumber() {
    document.getElementById("channel1Graphic").style.opacity = 0, document.getElementById("channel2Graphic").style.opacity = 0, document.getElementById("channel3Graphic").style.opacity = 0, document.getElementById("channel4Graphic").style.opacity = 0, document.getElementById("channel5Graphic").style.opacity = 0, document.getElementById("channel6Graphic").style.opacity = 0, document.getElementById("channel7Graphic").style.opacity = 0, document.getElementById("channel8Graphic").style.opacity = 0, document.getElementById("channel9Graphic").style.opacity = 0, document.getElementById("channel" + selectedChannel + "Graphic").style.opacity = 1, clearTimeout(channelGraphic_timeOut), channelGraphic_timeOut = setTimeout(function() {
        document.getElementById("channel1Graphic").style.opacity = 0, document.getElementById("channel2Graphic").style.opacity = 0, document.getElementById("channel3Graphic").style.opacity = 0, document.getElementById("channel4Graphic").style.opacity = 0, document.getElementById("channel5Graphic").style.opacity = 0, document.getElementById("channel6Graphic").style.opacity = 0, document.getElementById("channel7Graphic").style.opacity = 0, document.getElementById("channel8Graphic").style.opacity = 0, document.getElementById("channel9Graphic").style.opacity = 0
    }, 2e3)
}

function gotoNextChannel() {
    selectedChannel++, 9 < selectedChannel && (selectedChannel = 1), displayChannelNumber(), searchForContinue = !0, playVideoPlayer()
}

function gotoPrevChannel() {
    selectedChannel--, selectedChannel < 1 && (selectedChannel = 9), displayChannelNumber(), searchForContinue = !0, playVideoPlayer()
}

function swapScreenLayout() {
    "fullscreen" == screenLayout ? (screenLayout = "fitframe", videoPlayerSizeAndPosition()) : "fitframe" == screenLayout && (screenLayout = "fullscreen", videoPlayerSizeAndPosition())
}

function defineRemoteButtons() {
    var e = "nextChannelButton";
    "ontouchmove" in document.documentElement ? (document.getElementById(e).ontouchstart = function(e) {
        document.getElementById("nextChannelButton").style.opacity = .55, e.preventDefault()
    }, document.getElementById(e).ontouchend = function(e) {
        document.getElementById("nextChannelButton").style.opacity = 1, gotoNextChannel(), e.preventDefault()
    }) : (document.getElementById(e).onmousedown = function(e) {
        document.getElementById("nextChannelButton").style.opacity = .55, e.preventDefault()
    }, document.getElementById(e).onmouseup = function(e) {
        document.getElementById("nextChannelButton").style.opacity = 1, gotoNextChannel(), e.preventDefault()
    });
    e = "prevChannelButton";
    "ontouchmove" in document.documentElement ? (document.getElementById(e).ontouchstart = function(e) {
        document.getElementById("prevChannelButton").style.opacity = .55, e.preventDefault()
    }, document.getElementById(e).ontouchend = function(e) {
        document.getElementById("prevChannelButton").style.opacity = 1, gotoPrevChannel(), e.preventDefault()
    }) : (document.getElementById(e).onmousedown = function(e) {
        document.getElementById("prevChannelButton").style.opacity = .55, e.preventDefault()
    }, document.getElementById(e).onmouseup = function(e) {
        document.getElementById("prevChannelButton").style.opacity = 1, gotoPrevChannel(), e.preventDefault()
    });
    e = "zoomButton";
    "ontouchmove" in document.documentElement ? document.getElementById(e).ontouchstart = function(e) {
        swapScreenLayout(), e.preventDefault()
    } : document.getElementById(e).onmousedown = function(e) {
        swapScreenLayout(), e.preventDefault()
    }
}

function videoplayerRuntime() {
    allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length] = previewScreenSizeAndPosition, allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length - 1](), definePlayButton(), allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length] = videoPlayerSizeAndPosition, allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length - 1](), defineVideoButton(), allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length] = remoteSizeAndPosition, allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length - 1](), defineRemoteButtons()
}
screenLayout = "fitframe", loadPinnedVideo = !1, document.getElementById("previewWallpaper").style.opacity = 0, document.getElementById("previewScreen").style.transition = "opacity .7s ease-out", document.getElementById("previewScreen").style.MozTransition = "opacity .7s ease-out", document.getElementById("previewScreen").style.WebkitTransition = "opacity .7s ease-out", document.getElementById("videoFrame").style.backgroundColor = "#000000", document.getElementById("videoPlayer").style.backgroundColor = "#000000", document.getElementById("videoFrame").style.opacity = 0, mediaPosition1 = -1, mediaPosition2 = -1, mediaPosition3 = -1, mediaPosition4 = -1, mediaPosition5 = -1, mediaPosition6 = -1, mediaPosition7 = -1, mediaPosition8 = -1, mediaPosition9 = -1, searchForContinue = !0, loadSpecificVideo = !1, skipFirstTime = !0, lastDuration = 0, document.getElementById("videoPlayer").addEventListener("loadeddata", function() {
    console.log("SETTING DURATION"), document.getElementById("videoPlayer").currentTime = lastDuration
}, !1), document.getElementById("videoPlayer").addEventListener("timeupdate", function() {
    0 < document.getElementById("videoPlayer").currentTime && (console.log("SAVING LAST VIDEO AND DURATION"), 1 == selectedChannel && (localStorage.ch1LastVideo = filesListArray1[mediaPosition1], localStorage.ch1LastDuration = document.getElementById("videoPlayer").currentTime), 2 == selectedChannel && (localStorage.ch2LastVideo = filesListArray2[mediaPosition2], localStorage.ch2LastDuration = document.getElementById("videoPlayer").currentTime), 3 == selectedChannel && (localStorage.ch3LastVideo = filesListArray3[mediaPosition3], localStorage.ch3LastDuration = document.getElementById("videoPlayer").currentTime), 4 == selectedChannel && (localStorage.ch4LastVideo = filesListArray4[mediaPosition4], localStorage.ch4LastDuration = document.getElementById("videoPlayer").currentTime), 5 == selectedChannel && (localStorage.ch5LastVideo = filesListArray5[mediaPosition5], localStorage.ch5LastDuration = document.getElementById("videoPlayer").currentTime), 6 == selectedChannel && (localStorage.ch6LastVideo = filesListArray6[mediaPosition6], localStorage.ch6LastDuration = document.getElementById("videoPlayer").currentTime), 7 == selectedChannel && (localStorage.ch7LastVideo = filesListArray7[mediaPosition7], localStorage.ch7LastDuration = document.getElementById("videoPlayer").currentTime), 8 == selectedChannel && (localStorage.ch8LastVideo = filesListArray8[mediaPosition8], localStorage.ch8LastDuration = document.getElementById("videoPlayer").currentTime), 9 == selectedChannel && (localStorage.ch9LastVideo = filesListArray9[mediaPosition9], localStorage.ch9LastDuration = document.getElementById("videoPlayer").currentTime))
}, !1), document.getElementById("videoPlayer").addEventListener("canplaythrough", function() {
    "function" == typeof parent.tvFrameSwitch && (parent.document.getElementById("audioPlayer").pause(), document.getElementById("videoPlayer").volume = parent.volumeSetting), document.getElementById("videoFrame").style.opacity = 1, document.getElementById("videoPlayer").play()
}), document.getElementById("videoPlayer").addEventListener("ended", function() {
    playVideoPlayer()
}, !1), document.getElementById("videoPlayer").addEventListener("webkitendfullscreen", function() {
    playVideoPlayer()
}, !1), document.getElementById("remote").style.visibility = "hidden", document.getElementById("zoomButton").style.visibility = "hidden", document.getElementById("channel1Graphic").style.opacity = 0, document.getElementById("channel2Graphic").style.opacity = 0, document.getElementById("channel3Graphic").style.opacity = 0, document.getElementById("channel4Graphic").style.opacity = 0, document.getElementById("channel5Graphic").style.opacity = 0, document.getElementById("channel6Graphic").style.opacity = 0, document.getElementById("channel7Graphic").style.opacity = 0, document.getElementById("channel8Graphic").style.opacity = 0, document.getElementById("channel9Graphic").style.opacity = 0, allRuntimeFunctionsList[allRuntimeFunctionsList.length] = videoplayerRuntime;