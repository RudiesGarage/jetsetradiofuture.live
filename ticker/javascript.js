function tickerSizeAndPosition()
	{
	var e="ticker",t=0;
	document.getElementById(e).style.height=parseInt(document.getElementById("information").style.height)+"px",document.getElementById(e).style.width=stageWidth+"px",document.getElementById(e).style.left="0px",document.getElementById(e).style.top=stageHeight-parseInt(document.getElementById(e).style.height)+"px",100<parseInt(document.getElementById(e).style.height)&&(document.getElementById(e).style.height="100px",document.getElementById(e).style.width=stageWidth+"px",document.getElementById(e).style.left="0px",document.getElementById(e).style.top=stageHeight-parseInt(document.getElementById(e).style.height)+"px");
	e="tickerNews",t=2.05;
	document.getElementById(e).style.height=parseInt(document.getElementById("ticker").style.height)+"px",document.getElementById(e).style.width=Math.round(parseInt(document.getElementById(e).style.height)*t)+"px",document.getElementById(e).style.left="0px",document.getElementById(e).style.top="0px";
	e="tickerDiv",t=0;
	document.getElementById(e).style.height=parseInt(document.getElementById("ticker").style.height)+"px",document.getElementById(e).style.left="0px",document.getElementById(e).style.top="0px";
	e="tickerTextField",t=0;
	document.getElementById(e).style.height=parseInt(document.getElementById("tickerDiv").style.height)+"px",document.getElementById(e).style.left="0px",document.getElementById(e).style.top="0px",document.getElementById(e).style.fontFamily="lightfont",document.getElementById(e).style.fontSize=.5*parseInt(document.getElementById("tickerDiv").style.height)+"px",document.getElementById(e).style.color="#000000",document.getElementById(e).style.textAlign="left",document.getElementById(e).style.lineHeight="1.8";
	e="tickerBackground",t=1;
	document.getElementById(e).style.height=parseInt(document.getElementById("tickerDiv").style.height)+"px",document.getElementById(e).style.width=stageWidth+"px",document.getElementById(e).style.left="0px",document.getElementById(e).style.top="0px",document.getElementById(e).style.backgroundColor="#000000",document.getElementById(e).style.opacity=.8
}
function updateTicker()
	{
		/*
	document.getElementById("tickerTextField").innerHTML="<font style='color:#999999;'>"+newMessage+"</font><font style='color:#999999;'>"+newMessage+"</font>",tickerPosition=stageWidth,document.getElementById("tickerDiv").style.transform="translate3d("+tickerPosition+"px, 0px, 0px)",document.getElementById("tickerDiv").style.MozTransform="translate3d("+tickerPosition+"px, 0px, 0px)",document.getElementById("tickerDiv").style.WebkitTransform="translate3d("+tickerPosition+"px, 0px, 0px)";
	var e=parseInt(document.getElementById("tickerNews").style.width);
	document.getElementById("tickerNews").style.transform="translate3d("+-e+"px, 0px, 0px)",setTimeout(function()
		{
		parseInt(document.getElementById("tickerNews").style.width);
		document.getElementById("tickerNews").style.transition="all .3s ease-out",document.getElementById("tickerNews").style.MozTransition="all .3s ease-out",document.getElementById("tickerNews").style.WebkitTransition="all .3s ease-out",document.getElementById("tickerNews").style.transform="translate3d(0px, 0px, 0px)"
	}
	,1e3)*/
}
var permaHideTicker;
function hideTicker()
	{
	var e=parseInt(document.getElementById("ticker").style.height);
	document.getElementById("ticker").style.transition="all .3s ease-out",document.getElementById("ticker").style.MozTransition="all .3s ease-out",document.getElementById("ticker").style.WebkitTransition="all .3s ease-out",document.getElementById("ticker").style.transform="translate3d(0px, "+e+"px, 0px)",document.getElementById("ticker").style.MozTransform="translate3d(0px, "+e+"px, 0px)",document.getElementById("ticker").style.WebkitTransform="translate3d(0px, "+e+"px, 0px)",permaHideTicker=setTimeout(function()
		{
		document.getElementById("ticker").style.visibility="hidden"
	}
	,500);
	e=parseInt(document.getElementById("information").style.height);
	document.getElementById("information").style.transition="all .3s ease-out",document.getElementById("information").style.MozTransition="all .3s ease-out",document.getElementById("information").style.WebkitTransition="all .3s ease-out",document.getElementById("information").style.transform="translate3d(0px, "+e+"px, 0px)",document.getElementById("information").style.MozTransform="translate3d(0px, "+e+"px, 0px)",document.getElementById("information").style.WebkitTransform="translate3d(0px, "+e+"px, 0px)"
}
function showTicker()
	{
	clearTimeout(permaHideTicker),document.getElementById("ticker").style.visibility="visible";
	var e=0;
	document.getElementById("ticker").style.transition="all .3s ease-out",document.getElementById("ticker").style.MozTransition="all .3s ease-out",document.getElementById("ticker").style.WebkitTransition="all .3s ease-out",document.getElementById("ticker").style.transform="translate3d(0px, "+e+"px, 0px)",document.getElementById("ticker").style.MozTransform="translate3d(0px, "+e+"px, 0px)",document.getElementById("ticker").style.WebkitTransform="translate3d(0px, "+e+"px, 0px)";
	e=0;
	document.getElementById("information").style.transition="all .3s ease-out",document.getElementById("information").style.MozTransition="all .3s ease-out",document.getElementById("information").style.WebkitTransition="all .3s ease-out",document.getElementById("information").style.transform="translate3d(0px, "+e+"px, 0px)",document.getElementById("information").style.MozTransform="translate3d(0px, "+e+"px, 0px)",document.getElementById("information").style.WebkitTransform="translate3d(0px, "+e+"px, 0px)"
}
function animateTicker()
	{
	requestAnimationFrame(animateTicker),increment=parseInt(document.getElementById("tickerDiv").style.height)/25,tickerPosition-=1.5,document.getElementById("tickerDiv").style.transform="translate3d("+tickerPosition+"px, 0px, 0px)",document.getElementById("tickerDiv").style.MozTransform="translate3d("+tickerPosition+"px, 0px, 0px)",document.getElementById("tickerDiv").style.WebkitTransform="translate3d("+tickerPosition+"px, 0px, 0px)",tickerPosition<-document.getElementById("tickerDiv").offsetWidth/2&&(tickerPosition=0,document.getElementById("tickerDiv").style.transform="translate3d("+tickerPosition+"px, 0px, 0px)",document.getElementById("tickerDiv").style.MozTransform="translate3d("+tickerPosition+"px, 0px, 0px)",document.getElementById("tickerDiv").style.WebkitTransform="translate3d("+tickerPosition+"px, 0px, 0px)")
}
document.getElementById("tickerDiv").style.overflow="visible",document.getElementById("tickerDiv").style.whiteSpace="nowrap",tickerPosition=0;
var tickerLongPress_TimeOut,requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;
function defineTickerButtons()
	{
	var e="ticker";
	"ontouchmove"in document.documentElement?(document.getElementById(e).ontouchstart=function(e)
		{
		ticker_longPress=!1,tickerLongPress_TimeOut=setTimeout(function()
			{
			lastMessage="",loadXML(),ticker_longPress=!0
		}
		,3e3),e.preventDefault()
	}
	,document.getElementById(e).ontouchend=function(e)
		{
		clearTimeout(tickerLongPress_TimeOut),ticker_longPress,e.preventDefault()
	}
	):(document.getElementById(e).onmousedown=function(e)
		{
		ticker_longPress=!1,tickerLongPress_TimeOut=setTimeout(function()
			{
			lastMessage="",loadXML(),ticker_longPress=!0
		}
		,3e3),e.preventDefault()
	}
	,document.getElementById(e).onmouseup=function(e)
		{
		clearTimeout(tickerLongPress_TimeOut),ticker_longPress,e.preventDefault()
	}
	)
}
function xmlStringALT(e)
	{
	return window.ActiveXObject?e.xml:(new XMLSerializer).serializeToString(e)
}
function loadXML()
	{
	console.log("Retrieving TICKER XML information..."),tickerxhttp=new XMLHttpRequest,randomCacheNumber=Math.floor(999999999*Math.random()+1),tickerxhttp.open("GET","ticker/messages.xml?"+randomCacheNumber,!0),tickerxhttp.send(),tickerxhttp.onreadystatechange=function()
		{
		4==tickerxhttp.readyState&&(void 0===tickerxhttp.responseXML||null===tickerxhttp.responseXML||(xmlDocument=tickerxhttp.responseXML,newMessage=xmlDocument.getElementsByTagName("message")[0].childNodes[0].nodeValue,newMessage!==lastMessage&&(updateTicker(),lastMessage=xmlDocument.getElementsByTagName("message")[0].childNodes[0].nodeValue)))
	}
}
function beginTickerLoading()
	{
	"ON"!=radio_switchStatus&&"ON"!=wallFrame_switchStatus||loadXML(),setTimeout(function()
		{
		beginTickerLoading()
	}
	,300001)
}
function tickerRuntime()
	{
	allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length]=tickerSizeAndPosition,allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length-1](),requestAnimationFrame(animateTicker)
}
lastMessage="",allRuntimeFunctionsList[allRuntimeFunctionsList.length]=tickerRuntime;
