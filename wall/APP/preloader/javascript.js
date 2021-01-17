////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////           LOADING SCREEN           //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//Defaults
document.getElementById("loadingScreen").style.backgroundColor = "#00a3e0";



function loadingScreenSizeAndPosition(){
	
	///////////////////////////////////
	// OBJECT /////////////////////////

	var objectName = "loadingScreen";
	var objectRatio = 0;

	document.getElementById(objectName).style.height = stageHeight+"px";
	document.getElementById(objectName).style.width = stageWidth+"px";
	document.getElementById(objectName).style.left = 0+"px";
	document.getElementById(objectName).style.top = 0+"px";

	///////////////////////////////////
	// OBJECT /////////////////////////

	var objectName = "loadingLogo";
	var objectRatio = 1200/1200;

	document.getElementById(objectName).style.width = stageWidth-Math.round(80*magnification)-Math.round(80*magnification)+"px";
	document.getElementById(objectName).style.height = Math.round(parseInt(document.getElementById(objectName).style.width)*objectRatio)+"px";
	document.getElementById(objectName).style.top = Math.round(stageHeight/2)-Math.round(parseInt(document.getElementById("loadingLogo").style.height)/2)+"px";
	document.getElementById(objectName).style.left = Math.round(stageWidth/2)-Math.round(parseInt(document.getElementById("loadingLogo").style.width)/2)+"px";

	//LIMIT
	var objectLimit = 576;

	if(parseInt(document.getElementById(objectName).style.width) > objectLimit){
	document.getElementById(objectName).style.width = objectLimit+"px";
	document.getElementById(objectName).style.height = Math.round(parseInt(document.getElementById(objectName).style.width)*objectRatio)+"px";
	document.getElementById(objectName).style.top = Math.round(stageHeight/2)-Math.round(parseInt(document.getElementById("loadingLogo").style.height)/2)+"px";
	document.getElementById(objectName).style.left = Math.round(stageWidth/2)-Math.round(parseInt(document.getElementById("loadingLogo").style.width)/2)+"px";
	}

	//HEIGHT LIMIT
	var objectHeight = stageHeight;

	if(parseInt(document.getElementById(objectName).style.height) > objectHeight){
	document.getElementById(objectName).style.height = objectHeight+"px";
	document.getElementById(objectName).style.width = Math.round(parseInt(document.getElementById(objectName).style.height)*objectRatio)+"px";
	document.getElementById(objectName).style.top = Math.round(stageHeight/2)-Math.round(parseInt(document.getElementById("loadingLogo").style.height)/2)+"px";
	document.getElementById(objectName).style.left = Math.round(stageWidth/2)-Math.round(parseInt(document.getElementById("loadingLogo").style.width)/2)+"px";
	}

	///////////////////////////////////
	// OBJECT /////////////////////////

	var objectName = "loadingStatus";
	var objectRatio = 89/89;

	document.getElementById(objectName).style.width = Math.round(80*magnification)+"px";
	document.getElementById(objectName).style.height = Math.round(parseInt(document.getElementById(objectName).style.width)/objectRatio)+"px";
	document.getElementById(objectName).style.left = stageWidth-Math.round(parseInt(document.getElementById("loadingStatus").style.width)*1.0)+"px";
	document.getElementById(objectName).style.top = stageHeight-Math.round(parseInt(document.getElementById("loadingStatus").style.height)*1.0)+"px";

	///////////////////////////////////
}



//----------------------------------------------------------------------------------------------------------------------------------------------------------------//



function showLoadingScreen(){

	//1) Show the loading screen
	document.getElementById("loadingScreen").style.visibility = "visible";


	//2) Immediately hide the loadingLogo & the loadingStatus
	document.getElementById("loadingLogo").style.transition = 'opacity 0s ease-out';
	document.getElementById("loadingLogo").style.MozTransition = 'opacity 0s ease-out';
	document.getElementById("loadingLogo").style.WebkitTransition = 'opacity 0s ease-out';
	document.getElementById("loadingLogo").style.opacity = 0;

	document.getElementById("loadingStatus").style.transition = 'opacity 0s ease-out';
	document.getElementById("loadingStatus").style.MozTransition = 'opacity 0s ease-out';
	document.getElementById("loadingStatus").style.WebkitTransition = 'opacity 0s ease-out';
	document.getElementById("loadingStatus").style.opacity = 0;


	//3) Now fade in the loadingLogo
	setTimeout(function(){
	document.getElementById("loadingLogo").style.transition = 'opacity 1.2s ease-in';
	document.getElementById("loadingLogo").style.MozTransition = 'opacity 1.2s ease-in';
	document.getElementById("loadingLogo").style.WebkitTransition = 'opacity 1.2s ease-in';
	document.getElementById("loadingLogo").style.opacity = 1;
	}, 250);


	//4) Then fade in the loadingStatus 
	setTimeout(function(){
	document.getElementById("loadingStatus").style.transition = 'opacity 1.0s ease-out';
	document.getElementById("loadingStatus").style.MozTransition = 'opacity 1.0s ease-out';
	document.getElementById("loadingStatus").style.WebkitTransition = 'opacity 1.0s ease-out';
	document.getElementById("loadingStatus").style.opacity = 1;
	}, 900);


	//5) Finally apply the pulseAnimation CSS class to the loadingStatus 
	setTimeout(function(){
	document.getElementById("loadingStatus").className = document.getElementById("loadingStatus").className + " pulseAnimation";
	//document.getElementById("div1").classList.add("otherclass");
	}, 1900);
}



//----------------------------------------------------------------------------------------------------------------------------------------------------------------//



function hideLoadingScreen(){

	//1) Fade the loading screen
	document.getElementById("loadingScreen").style.transition = 'opacity 1s ease-in';
	document.getElementById("loadingScreen").style.MozTransition = 'opacity 1s ease-in';
	document.getElementById("loadingScreen").style.WebkitTransition = 'opacity 1s ease-in';
	document.getElementById("loadingScreen").style.opacity = 0;	


	//2) After it has faded out
	setTimeout(function(){

		//A) Move the zIndex of the loadingScreen to the bottom & make the visibility hidden
		document.getElementById("loadingScreen").style.zIndex = 110;
		document.getElementById("loadingScreen").style.visibility = "hidden";


		//B) Now remove any CSS transitions on the loadingScreen and set the opacity to full while it is still hidden
		document.getElementById("loadingScreen").style.transition = 'all 0s ease-out';
		document.getElementById("loadingScreen").style.MozTransition = 'all 0s ease-out';
		document.getElementById("loadingScreen").style.WebkitTransition = 'all 0s ease-out';
		document.getElementById("loadingScreen").style.opacity = 1;


		//C) Now hide the loading logo and status 
		document.getElementById("loadingLogo").style.visibility = "hidden";
		document.getElementById("loadingStatus").style.visibility = "hidden";

	}, 1100);
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//When the DOM loads (aka the various HTML objects that make up your document) begin to domIsLoaded
this.addEventListener("DOMContentLoaded", domIsLoaded, true);



//----------------------------------------------------------------------------------------------------------------------------------------------------------------//



function domIsLoaded(e){
	
	//1) First make the entire body invisible
	document.body.style.visibility = "hidden";


	//2) Launch allSizeAndPosition to initially define the stageHeight & stageWidth
	allSizeAndPosition();
	

	//3) Size and position the loadingScreen & the pageFrame (also add it to the functions list)
	allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length] = loadingScreenSizeAndPosition;
	allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length-1]();


	//4) Defining all the items needed for the loading screen within an array and listen for when they load
	loadedImages = 0;
	imageArray = new Array();

	imageArray[0] = new Image();
	imageArray[0].src = "preloader/images/logo.png";
	imageArray[0].addEventListener("load", checkPreloadProgress, true);

	imageArray[1] = new Image();
	imageArray[1].src = "preloader/images/status.png";
	imageArray[1].addEventListener("load", checkPreloadProgress, true);


	//4) When everything fully loads launch everythingIsLoaded
	window.addEventListener("load", everythingIsLoaded, true);
}



//---------------------------------------------------------------------------------------------------------------------------------------------------//



//Defaults
loadedImages = 0;



function checkPreloadProgress(){

	//1) Increase loadedImages each time an item preloads
	loadedImages++;


	//2) Check loadedImages against the array length total & make the entire body visible when the required images are loaded 
	if(loadedImages == imageArray.length){
	document.body.style.visibility = "visible";
	showLoadingScreen();
	}
}



//---------------------------------------------------------------------------------------------------------------------------------------------------//



function requiredImagesAreLoaded(){

	//1) Now make the entire body visible
	document.body.style.visibility = "visible";
}



//---------------------------------------------------------------------------------------------------------------------------------------------------//



function everythingIsLoaded(e){

	//1) Size and position everything & define all the required functions right before you hide the loading screen
	allSizeAndPosition();
	defineAllRequiredFunctions();


	//2) Hide the loading screen after a brief delay
	setTimeout(function(){
	hideLoadingScreen();
	}, 3500);

}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
