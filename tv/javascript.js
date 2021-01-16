function tvFrameSizeAndPosition()
	{
	var t="tvFrame";
	document.getElementById(t).style.height="100%",document.getElementById(t).style.width="100%"
}
var tvFrame_timeOut;
function tvFrameSwitch()
	{
	"DEFAULT"==tvFrame_switchStatus?(tvFrame_switchStatus="OFF",document.getElementById("tvButton").style.opacity=.55,document.getElementById("tvFrame").style.transition="all 0s ease-out",document.getElementById("tvFrame").style.MozTransition="all 0s ease-out",document.getElementById("tvFrame").style.WebkitTransition="all 0s ease-out",document.getElementById("tvFrame").style.opacity=0,document.getElementById("tvFrame").style.visibility="hidden",document.getElementById("tvFrame").style.left=stageWidth+"px"):"OFF"==tvFrame_switchStatus?("ON"==wallFrame_switchStatus&&wallFrameSwitch(),"ON"==chat_switchStatus&&chatSwitch(),tvFrame_switchStatus="ON",document.getElementById("tvButton").style.opacity=1,menuForceBottom=!0,document.getElementById("worldIcon").style.visibility="hidden",document.getElementById("dateTextField").style.visibility="hidden",document.getElementById("tvFrame").src="tv/APP/index.html",document.getElementById("tvFrame").style.visibility="visible",document.getElementById("tvFrame").style.left="0px",document.getElementById("tvFrame").style.transition="opacity .4s ease-out",document.getElementById("tvFrame").style.MozTransition="opacity .4s ease-out",document.getElementById("tvFrame").style.WebkitTransition="opacity .4s ease-out",document.getElementById("tvFrame").style.opacity=1,"ON"==radio_switchStatus&&radioSwitch(),clearTimeout(tvFrame_timeOut)):"ON"==tvFrame_switchStatus&&("ON"==chat_switchStatus&&chatSwitch(),tvFrame_switchStatus="OFF",document.getElementById("tvButton").style.opacity=.55,menuForceBottom=!1,document.getElementById("worldIcon").style.visibility="visible",document.getElementById("dateTextField").style.visibility="visible",document.getElementById("tvFrame").src="",document.getElementById("tvFrame").style.transition="opacity .4s ease-out",document.getElementById("tvFrame").style.MozTransition="opacity .4s ease-out",document.getElementById("tvFrame").style.WebkitTransition="opacity .4s ease-out",document.getElementById("tvFrame").style.opacity=0,"OFF"==radio_switchStatus&&radioSwitch(),tvFrame_timeOut=setTimeout(function()
		{
		document.getElementById("tvFrame").style.visibility="hidden",document.getElementById("tvFrame").style.left=stageWidth+"px",document.getElementById("audioPlayer").play(),continueRadio()
	}
	,500))
}
function tvFrameRuntime()
	{
	allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length]=tvFrameSizeAndPosition,allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length-1](),tvFrameSwitch()
}
document.getElementById("tvFrame").style.backgroundColor="#00178c",tvFrame_switchStatus="DEFAULT",allRuntimeFunctionsList[allRuntimeFunctionsList.length]=tvFrameRuntime;
