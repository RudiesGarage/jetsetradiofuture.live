function remoteSizeAndPosition()
	{
	var e="remoteDiv",n=1;
	document.getElementById(e).style.height=stageHeight+"px",document.getElementById(e).style.width=stageWidth+"px",document.getElementById(e).style.top="0px",document.getElementById(e).style.left="0px";
	e="remote",n=1;
	document.getElementById(e).style.width=Math.round(.7*stageWidth)+"px",document.getElementById(e).style.height=Math.round(parseInt(document.getElementById(e).style.width)/n)+"px",document.getElementById(e).style.top=Math.round(stageHeight/2)-Math.round(parseInt(document.getElementById(e).style.height)/2)+"px",document.getElementById(e).style.left=Math.round(stageWidth/2)-Math.round(parseInt(document.getElementById(e).style.width)/2)+"px",parseInt(document.getElementById(e).style.height)>.7*stageHeight&&(document.getElementById(e).style.height=.7*stageHeight+"px",document.getElementById(e).style.width=Math.round(parseInt(document.getElementById(e).style.height)*n)+"px",document.getElementById(e).style.top=Math.round(stageHeight/2)-Math.round(parseInt(document.getElementById(e).style.height)/2)+"px",document.getElementById(e).style.left=Math.round(stageWidth/2)-Math.round(parseInt(document.getElementById(e).style.width)/2)+"px"),400<parseInt(document.getElementById(e).style.width)&&(document.getElementById(e).style.width="400px",document.getElementById(e).style.height=Math.round(parseInt(document.getElementById(e).style.width)/n)+"px",document.getElementById(e).style.top=Math.round(stageHeight/2)-Math.round(parseInt(document.getElementById(e).style.height)/2)+"px",document.getElementById(e).style.left=Math.round(stageWidth/2)-Math.round(parseInt(document.getElementById(e).style.width)/2)+"px"),document.getElementById(e).style.overflow="visible";
	e="stationsTitle",n=8;
	document.getElementById(e).style.width=parseInt(document.getElementById("remote").style.width)+"px",document.getElementById(e).style.height=Math.round(parseInt(document.getElementById(e).style.width)/n)+"px",document.getElementById(e).style.top=.08*parseInt(document.getElementById("remote").style.height)+"px",document.getElementById(e).style.left="0px";
	e="stationDescription",n=1418/300;
	document.getElementById(e).style.width=parseInt(document.getElementById("remote").style.width)+"px",document.getElementById(e).style.height=Math.round(parseInt(document.getElementById(e).style.width)/n)+"px",document.getElementById(e).style.top=.78*parseInt(document.getElementById("remote").style.height)+"px",document.getElementById(e).style.left="0px";
	e="nextStationButton",n=1;
	document.getElementById(e).style.width=parseInt(document.getElementById("remote").style.width)/5+"px",document.getElementById(e).style.height=parseInt(document.getElementById("remote").style.height)/5+"px",document.getElementById(e).style.top=.78*parseInt(document.getElementById("remote").style.height)+"px",document.getElementById(e).style.left=parseInt(document.getElementById("remote").style.width)-parseInt(document.getElementById(e).style.width)/2+"px";
	e="nextStationButtonALT",n=1;
	document.getElementById(e).style.height=.71*parseInt(document.getElementById("remote").style.height)+"px",document.getElementById(e).style.width=stageWidth/2+"px",document.getElementById(e).style.top=.12*parseInt(document.getElementById("remote").style.height)+"px",document.getElementById(e).style.left=.85*parseInt(document.getElementById("remote").style.width)+"px";
	e="prevStationButton",n=1;
	document.getElementById(e).style.width=parseInt(document.getElementById("remote").style.width)/5+"px",document.getElementById(e).style.height=parseInt(document.getElementById("remote").style.height)/5+"px",document.getElementById(e).style.top=parseInt(document.getElementById("remote").style.height)/2-parseInt(document.getElementById(e).style.height)/2+"px",document.getElementById(e).style.top=.78*parseInt(document.getElementById("remote").style.height)+"px",document.getElementById(e).style.left=0-parseInt(document.getElementById(e).style.width)/2+"px";
	e="prevStationButtonALT",n=1;
	document.getElementById(e).style.height=.71*parseInt(document.getElementById("remote").style.height)+"px",document.getElementById(e).style.width=stageWidth/2+"px",document.getElementById(e).style.top=.12*parseInt(document.getElementById("remote").style.height)+"px",document.getElementById(e).style.left=-stageWidth/2+.15*parseInt(document.getElementById("remote").style.width)+"px";
	e="nextTrackButton",n=190/209;
	document.getElementById(e).style.height=parseInt(document.getElementById("remote").style.width)/6+"px",document.getElementById(e).style.width=parseInt(document.getElementById("remote").style.height)/6+"px",document.getElementById(e).style.left=.51*parseInt(document.getElementById("remote").style.width)+"px",document.getElementById(e).style.top=1.02*parseInt(document.getElementById("remote").style.height)+"px";
	e="pauseTrackButton",n=190/209;
	document.getElementById(e).style.height=parseInt(document.getElementById("remote").style.width)/6+"px",document.getElementById(e).style.width=parseInt(document.getElementById("remote").style.height)/6+"px",document.getElementById(e).style.left=.32*parseInt(document.getElementById("remote").style.width)+"px",document.getElementById(e).style.top=1.02*parseInt(document.getElementById("remote").style.height)+"px";
	e="playTrackButton",n=190/209;
	document.getElementById(e).style.height=parseInt(document.getElementById("pauseTrackButton").style.height)+"px",document.getElementById(e).style.width=parseInt(document.getElementById("pauseTrackButton").style.width)+"px",document.getElementById(e).style.left=parseInt(document.getElementById("pauseTrackButton").style.left)+"px",document.getElementById(e).style.top=parseInt(document.getElementById("pauseTrackButton").style.top)+"px";
	e="shuffleOff",n=4;
	document.getElementById(e).style.height=parseInt(document.getElementById("radioButton").style.height)+"px",document.getElementById(e).style.width=Math.round(parseInt(document.getElementById(e).style.height)*n)+"px",document.getElementById(e).style.left=stageWidth/2-parseInt(document.getElementById(e).style.width)/2+"px",document.getElementById(e).style.top="0px";
	e="shuffleOn",n=4;
	document.getElementById(e).style.height=parseInt(document.getElementById("shuffleOff").style.height)+"px",document.getElementById(e).style.width=parseInt(document.getElementById("shuffleOff").style.width)+"px",document.getElementById(e).style.left=parseInt(document.getElementById("shuffleOff").style.left)+"px",document.getElementById(e).style.top=parseInt(document.getElementById("shuffleOff").style.top)+"px";
	e="customizeButton",n=190/209;
	document.getElementById(e).style.height=parseInt(document.getElementById("radioButton").style.height)+"px",document.getElementById(e).style.width=parseInt(document.getElementById("radioButton").style.width)+"px",document.getElementById(e).style.left=stageWidth-+parseInt(document.getElementById(e).style.width)+"px",document.getElementById(e).style.top=.09*parseInt(document.getElementById(e).style.width)+"px";
	e="remoteExterior",n=1;
	document.getElementById(e).style.height=stageHeight+"px",document.getElementById(e).style.width=stageWidth+"px",document.getElementById(e).style.top="0px",document.getElementById(e).style.left="0px",document.getElementById(e).style.backgroundColor="#000000",document.getElementById(e).style.opacity=.85;
	e="stationsMenuList",n=1;
	for(document.getElementById(e).style.height=parseInt(document.getElementById("remote").style.height)+"px",document.getElementById(e).style.width=parseInt(document.getElementById("remote").style.width)+"px",document.getElementById(e).style.top=.12*parseInt(document.getElementById("remote").style.height)+"px",t=0;
	t<totalThumbnails;
	t++)
		{
		itemYPos=Math.floor(t/3),itemXPos=t-3*itemYPos,thumbnailGap=Math.round(20*magnification);
		e="thumbnail"+t,n=1;
		document.getElementById(e).style.width=.75*parseInt(document.getElementById("remote").style.width)+"px",document.getElementById(e).style.height=Math.round(parseInt(document.getElementById(e).style.width)/n)+"px",document.getElementById(e).style.top="0px",document.getElementById(e).style.left=parseInt(document.getElementById(e).style.width)*t+"px"
	}
	e="thumbnailHighlight",n=1920/1080;
	document.getElementById(e).style.height=.12*parseInt(document.getElementById("thumbnail0").style.height)+"px",document.getElementById(e).style.width=parseInt(document.getElementById("thumbnail0").style.width)+"px",document.getElementById(e).style.top="-20px",document.getElementById(e).style.left="0px";
	e="stationsMenuList",n=1;
	calculatedSize=parseInt(document.getElementById("thumbnail0").style.width)*totalThumbnails,document.getElementById(e).style.width=calculatedSize+"px"
}
function generateStationsMenu()
	{
	for(totalThumbnails=stationsArray.length,d=1;
	d<totalThumbnails;
	d++)
		{
		var t=document.getElementById("thumbnail0").cloneNode(!0);
		t.id="thumbnail"+d,document.getElementById("stationsMenuList").appendChild(t)
	}
	for(remoteSizeAndPosition(),d=0;
	d<totalThumbnails;
	d++)document.getElementById("thumbnail"+d).src="radio/stations/"+stationsArray[d]+"/images/icon.png"
}
function remoteSwitch()
	{
	null==this.remote_switchStatus?(document.getElementById("remoteDiv").style.transition="all 0s ease",document.getElementById("remoteDiv").style.MozTransition="all 0s ease",document.getElementById("remoteDiv").style.WebkitTransition="all 0s ease",document.getElementById("remoteDiv").style.opacity=0,document.getElementById("remoteDiv").style.visibility="hidden",remote_switchStatus="OFF",document.getElementById("playTrackButton").style.display="none",document.getElementById("pauseTrackButton").style.display="none",document.getElementById("volumeControl").style.visibility="hidden"):"OFF"==remote_switchStatus?(document.getElementById("playTrackButton").style.display="block",document.getElementById("pauseTrackButton").style.display="block",1==volumeControls&&(document.getElementById("volumeControl").style.visibility="visible"),"OFF"==radio_switchStatus&&radioSwitch(),"ON"==tvFrame_switchStatus?tvFrameSwitch():"ON"==wallFrame_switchStatus?wallFrameSwitch():(0==flagGraffitiSoul&&(document.getElementById("graffitiSoul").style.visibility="visible"),document.getElementById("graffitiSoulFrame").style.zIndex=1,document.getElementById("remoteDiv").style.visibility="visible",document.getElementById("remoteDiv").style.transition="opacity .5s ease",document.getElementById("remoteDiv").style.MozTransition="opacity .5s ease",document.getElementById("remoteDiv").style.WebkitTransition="opacity .5s ease",document.getElementById("remoteDiv").style.opacity=1,remote_switchStatus="TRANSITIONING",setTimeout(function()
		{
		remote_switchStatus="ON"
	}
	,500))):"ON"==remote_switchStatus&&(0==flagGraffitiSoul&&(document.getElementById("graffitiSoul").style.visibility="hidden"),document.getElementById("remoteDiv").style.transition="opacity .5s ease",document.getElementById("remoteDiv").style.MozTransition="opacity .5s ease",document.getElementById("remoteDiv").style.WebkitTransition="opacity .5s ease",document.getElementById("remoteDiv").style.opacity=0,document.getElementById("graffitiSoulFrame").style.zIndex=105,remote_switchStatus="TRANSITIONING",setTimeout(function()
		{
		document.getElementById("remoteDiv").style.visibility="hidden",remote_switchStatus="OFF",document.getElementById("playTrackButton").style.display="none",document.getElementById("pauseTrackButton").style.display="none",document.getElementById("volumeControl").style.visibility="hidden"
	}
	,500))
}
function moveStationMenu()
	{
	document.getElementById("thumbnailHighlight").style.left=parseInt(document.getElementById("thumbnail0").style.width)*selectedStationNum+"px",document.getElementById("stationsMenuList").style.transition="all 1s ease-out",document.getElementById("stationsMenuList").style.MozTransition="all 1s ease-out",document.getElementById("stationsMenuList").style.WebkitTransition="all 1s ease-out",startingGap=.12*parseInt(document.getElementById("remote").style.width),document.getElementById("stationsMenuList").style.left=startingGap+parseInt(document.getElementById("thumbnail0").style.width)*-selectedStationNum+"px"
}
var delayStation;
function gotoNextStation()
	{
	selectedStationNum++,selectedStationNum>=stationsArray.length&&(selectedStationNum=0),moveStationMenu(),document.getElementById("graffitiSoul").src="radio/stations/"+stationsArray[selectedStationNum]+"/images/icon.png",document.getElementById("stationDescription").src="radio/stations/"+stationsArray[selectedStationNum]+"/images/description.png",localStorage.lastStation=stationsArray[selectedStationNum],trackPos=-1,shuffleArray(this[stationsArray[selectedStationNum]+"_tracks"]),songsFinished=0,clearTimeout(delayStation),delayStation=setTimeout(function()
		{
		change_wallpaperImage(),playAudioPlayer()
	}
	,1200)
}
function gotoPrevStation()
	{
	selectedStationNum--,selectedStationNum<0&&(selectedStationNum=stationsArray.length-1),moveStationMenu(),document.getElementById("graffitiSoul").src="radio/stations/"+stationsArray[selectedStationNum]+"/images/icon.png",document.getElementById("stationDescription").src="radio/stations/"+stationsArray[selectedStationNum]+"/images/description.png",localStorage.lastStation=stationsArray[selectedStationNum],trackPos=-1,shuffleArray(this[stationsArray[selectedStationNum]+"_tracks"]),songsFinished=0,clearTimeout(delayStation),delayStation=setTimeout(function()
		{
		change_wallpaperImage(),playAudioPlayer()
	}
	,1200)
}
function defineRemoteButtons()
	{
	document.getElementById("nextStationButton").ontouchstart=function(t)
		{
		document.getElementById("nextStationButton").style.opacity=.3,setTimeout(function()
			{
			document.getElementById("nextStationButton").style.opacity=1
		}
		,250),gotoNextStation(),t.preventDefault()
	}
	,document.getElementById("nextStationButton").onmousedown=function(t)
		{
		document.getElementById("nextStationButton").style.opacity=.3,setTimeout(function()
			{
			document.getElementById("nextStationButton").style.opacity=1
		}
		,250),gotoNextStation()
	};
	document.getElementById("nextStationButtonALT").ontouchstart=function(t)
		{
		document.getElementById("nextStationButton").style.opacity=.3,setTimeout(function()
			{
			document.getElementById("nextStationButton").style.opacity=1
		}
		,250),gotoNextStation(),t.preventDefault()
	}
	,document.getElementById("nextStationButtonALT").onmousedown=function(t)
		{
		document.getElementById("nextStationButton").style.opacity=.3,setTimeout(function()
			{
			document.getElementById("nextStationButton").style.opacity=1
		}
		,250),gotoNextStation()
	};
	document.getElementById("prevStationButton").ontouchstart=function(t)
		{
		document.getElementById("prevStationButton").style.opacity=.3,setTimeout(function()
			{
			document.getElementById("prevStationButton").style.opacity=1
		}
		,250),gotoPrevStation(),t.preventDefault()
	}
	,document.getElementById("prevStationButton").onmousedown=function(t)
		{
		document.getElementById("prevStationButton").style.opacity=.3,setTimeout(function()
			{
			document.getElementById("prevStationButton").style.opacity=1
		}
		,250),gotoPrevStation()
	};
	document.getElementById("prevStationButtonALT").ontouchstart=function(t)
		{
		document.getElementById("prevStationButton").style.opacity=.3,setTimeout(function()
			{
			document.getElementById("prevStationButton").style.opacity=1
		}
		,250),gotoPrevStation(),t.preventDefault()
	}
	,document.getElementById("prevStationButtonALT").onmousedown=function(t)
		{
		document.getElementById("prevStationButton").style.opacity=.3,setTimeout(function()
			{
			document.getElementById("prevStationButton").style.opacity=1
		}
		,250),gotoPrevStation()
	};
	document.getElementById("nextTrackButton").ontouchstart=function(t)
		{
		document.getElementById("nextTrackButton").style.opacity=.3,setTimeout(function()
			{
			document.getElementById("nextTrackButton").style.opacity=1
		}
		,250),skipTrack(),t.preventDefault()
	}
	,document.getElementById("nextTrackButton").onmousedown=function(t)
		{
		document.getElementById("nextTrackButton").style.opacity=.3,setTimeout(function()
			{
			document.getElementById("nextTrackButton").style.opacity=1
		}
		,250),skipTrack()
	};
	document.getElementById("pauseTrackButton").ontouchstart=function(t)
		{
		pauseRadio(),t.preventDefault()
	}
	,document.getElementById("pauseTrackButton").onmousedown=function(t)
		{
		pauseRadio()
	};
	document.getElementById("playTrackButton").ontouchstart=function(t)
		{
		continueRadio(),t.preventDefault()
	}
	,document.getElementById("playTrackButton").onmousedown=function(t)
		{
		continueRadio()
	};
	document.getElementById("shuffleOff").ontouchstart=function(t)
		{
		shuffle_switch=!0,document.getElementById("shuffleOff").style.display="none",document.getElementById("shuffleOn").style.display="block",t.preventDefault()
	}
	,document.getElementById("shuffleOff").onmousedown=function(t)
		{
		shuffle_switch=!0,document.getElementById("shuffleOff").style.display="none",document.getElementById("shuffleOn").style.display="block"
	};
	document.getElementById("shuffleOn").ontouchstart=function(t)
		{
		shuffle_switch=!1,document.getElementById("shuffleOff").style.display="block",document.getElementById("shuffleOn").style.display="none",t.preventDefault()
	}
	,document.getElementById("shuffleOn").onmousedown=function(t)
		{
		shuffle_switch=!1,document.getElementById("shuffleOff").style.display="block",document.getElementById("shuffleOn").style.display="none"
	};
	document.getElementById("customizeButton").ontouchstart=function(t)
		{
		document.getElementById("customizeButton").style.opacity=.55,setTimeout(function()
			{
			document.getElementById("customizeButton").style.opacity=1
		}
		,500),customizeSwitch(),t.preventDefault()
	}
	,document.getElementById("customizeButton").onmousedown=function(t)
		{
		document.getElementById("customizeButton").style.opacity=.55,setTimeout(function()
			{
			document.getElementById("customizeButton").style.opacity=1
		}
		,500),customizeSwitch()
	};
	var t="remoteExterior";
	document.getElementById(t).ontouchstart=function(t)
		{
		remoteSwitch(),t.preventDefault()
	}
	,document.getElementById(t).onmousedown=function(t)
		{
		remoteSwitch()
	}
}
document.getElementById("playTrackButton").style.visibility="hidden",document.getElementById("shuffleOff").style.display="block",document.getElementById("shuffleOn").style.display="none",totalThumbnails=0,volumeControls=null;
var userAgent=navigator.userAgent||navigator.vendor||window.opera;
function volumeSizeAndPosition()
	{
	var t="volumeControl";
	document.getElementById(t).style.width=.65*parseInt(document.getElementById("radioButton").style.width)+"px",document.getElementById(t).style.height=Math.round(parseInt(document.getElementById(t).style.width)/(820/700))+"px",document.getElementById(t).style.top=.28*parseInt(document.getElementById(t).style.width)+"px",document.getElementById(t).style.left=.3*parseInt(document.getElementById(t).style.width)+"px"
}
function adjustVolume()
	{
	"HIGH"==volumeSelection?(document.getElementById("volumeControl").src="remote/images/volumeMED.png",volumeSelection="MED",volumeSetting=.4):"MED"==volumeSelection?(document.getElementById("volumeControl").src="remote/images/volumeLOW.png",volumeSelection="LOW",volumeSetting=.15):"LOW"==volumeSelection&&(document.getElementById("volumeControl").src="remote/images/volumeHIGH.png",volumeSelection="HIGH",volumeSetting=1),document.getElementById("audioPlayer").volume=volumeSetting,document.getElementById("staticPlayer").volume=volumeSetting,"function"==typeof document.getElementById("tvFrame").contentWindow.playVideoPlayer&&(document.getElementById("tvFrame").contentWindow.document.getElementById("videoPlayer").volume=volumeSetting)
}
function defineVolumeButtons()
	{
	var t="volumeControl";
	document.getElementById(t).ontouchstart=function(t)
		{
		adjustVolume(),t.preventDefault()
	}
	,document.getElementById(t).onmousedown=function(t)
		{
		adjustVolume()
	}
}
function guiSwitchSizeAndPosition()
	{
	document.getElementById("guiSwitchON").style.width=.65*parseInt(document.getElementById("radioButton").style.width)+"px",document.getElementById("guiSwitchON").style.height=Math.round(+parseInt(document.getElementById("guiSwitchON").style.width))+"px",document.getElementById("guiSwitchON").style.top=stageHeight-1.1*parseInt(document.getElementById("guiSwitchON").style.height)+"px",document.getElementById("guiSwitchON").style.left=stageWidth-1.1*parseInt(document.getElementById("guiSwitchON").style.width)+"px";
	var t="guiSwitchOFF";
	document.getElementById(t).style.width=parseInt(document.getElementById("guiSwitchON").style.width)+"px",document.getElementById(t).style.height=parseInt(document.getElementById("guiSwitchON").style.height)+"px",document.getElementById(t).style.top=parseInt(document.getElementById("guiSwitchON").style.top)+"px",document.getElementById(t).style.left=parseInt(document.getElementById("guiSwitchON").style.left)+"px"
}
function defaultGUISwitchSettings()
	{
	document.getElementById("guiSwitchON").style.display="block",document.getElementById("guiSwitchOFF").style.display="none",flagInformation=!0,flagTicker=!0,flagGraffitiSoul=!0
}
function defineGUISwitchButtons()
	{
	var t="guiSwitchON";
	"ontouchmove"in document.documentElement?document.getElementById(t).ontouchstart=function(t)
		{
		document.getElementById("guiSwitchON").style.display="none",document.getElementById("guiSwitchOFF").style.display="block",hideGraffitiSoul(),document.getElementById("information").style.display="none",flagInformation=!1,hideTicker(),flagTicker=!1,chatSizeAndPosition(),t.preventDefault()
	}
	:document.getElementById(t).onmousedown=function(t)
		{
		document.getElementById("guiSwitchON").style.display="none",document.getElementById("guiSwitchOFF").style.display="block",hideGraffitiSoul(),document.getElementById("information").style.display="none",flagInformation=!1,hideTicker(),flagTicker=!1,chatSizeAndPosition(),t.preventDefault()
	};
	t="guiSwitchOFF";
	"ontouchmove"in document.documentElement?document.getElementById(t).ontouchstart=function(t)
		{
		document.getElementById("guiSwitchON").style.display="block",document.getElementById("guiSwitchOFF").style.display="none",showGraffitiSoul(),document.getElementById("information").style.display="block",flagInformation=!0,showTicker(),flagTicker=!0,chatSizeAndPosition(),t.preventDefault()
	}
	:document.getElementById(t).onmousedown=function(t)
		{
		document.getElementById("guiSwitchON").style.display="block",document.getElementById("guiSwitchOFF").style.display="none",showGraffitiSoul(),document.getElementById("information").style.display="block",flagInformation=!0,showTicker(),flagTicker=!0,chatSizeAndPosition(),t.preventDefault()
	}
}
function remoteRuntime()
	{
	allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length]=remoteSizeAndPosition,allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length-1](),generateStationsMenu(),moveStationMenu(),remoteSwitch(),defineRemoteButtons(),allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length]=volumeSizeAndPosition,allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length-1](),defineVolumeButtons(),allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length]=guiSwitchSizeAndPosition,allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length-1](),defaultGUISwitchSettings(),defineGUISwitchButtons()
}
deviceType=userAgent.match(/iPad/i)||userAgent.match(/iPhone/i)||userAgent.match(/iPod/i)?"iOS":userAgent.match(/Android/i)?"Android":"Other",volumeControls="iOS"!==deviceType,1==volumeControls?document.getElementById("volumeControl").style.display="block":document.getElementById("volumeControl").style.display="none",volumeSetting=1,volumeSelection="HIGH",allRuntimeFunctionsList[allRuntimeFunctionsList.length]=remoteRuntime;

