function menuSizeAndPosition()
	{
	var t="menu",e=1;
	document.getElementById(t).style.width=1.3*parseInt(document.getElementById("information").style.height)+"px",document.getElementById(t).style.height=stageHeight+"px",document.getElementById(t).style.left=stageWidth-parseInt(document.getElementById(t).style.width)+"px",document.getElementById(t).style.top="0px",menuGap=.1*parseInt(document.getElementById(t).style.width);
	t="radioButton",e=200/150;
	document.getElementById(t).style.width=parseInt(document.getElementById("menu").style.width)+"px",document.getElementById(t).style.height=Math.round(parseInt(document.getElementById(t).style.width)/e)+"px",document.getElementById(t).style.top=menuGap+0*parseInt(document.getElementById(t).style.height)+"px",document.getElementById(t).style.left="0px";
	t="tvButton",e=200/150;
	document.getElementById(t).style.width=parseInt(document.getElementById("menu").style.width)+"px",document.getElementById(t).style.height=Math.round(parseInt(document.getElementById(t).style.width)/e)+"px",document.getElementById(t).style.top=menuGap+ +parseInt(document.getElementById(t).style.height)+"px",document.getElementById(t).style.left="0px";
	t="wallButton",e=200/150;
	document.getElementById(t).style.width=parseInt(document.getElementById("menu").style.width)+"px",document.getElementById(t).style.height=Math.round(parseInt(document.getElementById(t).style.width)/e)+"px",document.getElementById(t).style.top=menuGap+2*parseInt(document.getElementById(t).style.height)+"px",document.getElementById(t).style.left="0px";
	t="chatButton",e=200/150;
	document.getElementById(t).style.width=parseInt(document.getElementById("menu").style.width)+"px",document.getElementById(t).style.height=Math.round(parseInt(document.getElementById(t).style.width)/e)+"px",document.getElementById(t).style.top=menuGap+3*parseInt(document.getElementById(t).style.height)+"px",document.getElementById(t).style.left="0px";
	t="merchButton",e=200/150;
	document.getElementById(t).style.width=parseInt(document.getElementById("menu").style.width)+"px",document.getElementById(t).style.height=Math.round(parseInt(document.getElementById(t).style.width)/e)+"px",document.getElementById(t).style.top=menuGap+4*parseInt(document.getElementById(t).style.height)+"px",document.getElementById(t).style.left="0px";
	t="menuGradient",e=200/150;
	document.getElementById(t).style.width=2*parseInt(document.getElementById("menu").style.width)+"px",document.getElementById(t).style.height=stageHeight+"px",document.getElementById(t).style.top="0px",document.getElementById(t).style.left=stageWidth-parseInt(document.getElementById(t).style.width)+"px"
}
function menuSwitch()
	{
	null==this.menu_switchStatus||"OFF"==menu_switchStatus?(document.getElementById("menu").style.visibility="visible",menu_switchStatus="ON"):"ON"==menu_switchStatus&&(document.getElementById("menu").style.visibility="hidden",menu_switchStatus="OFF")
}
function defineMenuButtons()
	{
	var t="radioButton";
	document.getElementById(t).ontouchstart=function(t)
		{
		("ON"==radio_switchStatus?remoteSwitch:radioSwitch)(),t.preventDefault()
	}
	,document.getElementById(t).onmousedown=function(t)
		{
		("ON"==radio_switchStatus?remoteSwitch:radioSwitch)()
	};
	t="tvButton";
	document.getElementById(t).ontouchstart=function(t)
		{
		tvFrameSwitch(),t.preventDefault()
	}
	,document.getElementById(t).onmousedown=function(t)
		{
		tvFrameSwitch()
	};
	t="wallButton";
	document.getElementById(t).ontouchstart=function(t)
		{
		wallFrameSwitch(),t.preventDefault()
	}
	,document.getElementById(t).onmousedown=function(t)
		{
		wallFrameSwitch()
	};
	t="chatButton";
	document.getElementById(t).ontouchstart=function(t)
		{
		chatSwitch(),t.preventDefault()
	}
	,document.getElementById(t).onmousedown=function(t)
		{
		chatSwitch()
	}
	,document.getElementById("merchButton").style.display="none",document.getElementById("merchLink").setAttribute("href","https://jsrl.bigcartel.com/"),document.getElementById("merchLink").setAttribute("target","_blank")
}
function merchPromo()
	{
	setTimeout(function()
		{
		document.getElementById("merchButton").style.display="block"
	}
	,timeExtension),setTimeout(function()
		{
		document.getElementById("merchButton").style.display="none",extensionMinutes=4,timeExtension=60*extensionMinutes*1e3,timeExtension+=Math.floor(Math.random()*timeExtension+1),merchPromo()
	}
	,timeExtension+3e5)
}
function menuRuntime()
	{
	allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length]=menuSizeAndPosition,allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length-1](),menuSwitch(),defineMenuButtons(),merchPromo()
}
extensionMinutes=4,timeExtension=60*extensionMinutes*1e3,timeExtension+=Math.floor(Math.random()*timeExtension+1),allRuntimeFunctionsList[allRuntimeFunctionsList.length]=menuRuntime;
