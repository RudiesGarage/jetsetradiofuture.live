////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////           LOADING SCREEN           //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//Defaults
document.getElementById("loadingScreen").style.backgroundColor = "#00178c";



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



//Defaults
totalFiles1 = 0;
totalFiles2 = 0;
totalFiles3 = 0;
totalFiles4 = 0;
totalFiles5 = 0;
totalFiles6 = 0;
totalFiles7 = 0;
totalFiles8 = 0;
totalFiles9 = 0;


filesListArray1 = new Array();
filesListArray2 = new Array();
filesListArray3 = new Array();
filesListArray4 = new Array();
filesListArray5 = new Array();
filesListArray6 = new Array();
filesListArray7 = new Array();
filesListArray8 = new Array();
filesListArray9 = new Array();



function retrieveTotalFilesAndFilesList(){
/*
	//1) Open a new XMLHttpRequest
	var totalhttp = new XMLHttpRequest();
	totalhttp.open("GET", 'preloader/retrieveTotalFilesAndFilesList.php', true);


	//2) Set the proper header information and send out the request
	//totalhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	totalhttp.send();


	//3) When the ready state has loaded output the response
        totalhttp.onreadystatechange = function(){
        if(totalhttp.readyState == 4){
		//if(totalhttp.status == 200){


		//A) Define the response XML
		//totalXML = totalhttp.responseXML;

		if(totalXML == null){
*/
			filesListArray1 = ["static"];
			filesListArray2 = ["Scenescape 1"];
			filesListArray3 = ["SKATING - Freeskate in Shanghai 80mm"];
			filesListArray4 = ["GRAFFITI TV - HEIS"];
			filesListArray5 = ["SURVEILLANCE - Multiple People Tracking"];
			filesListArray6 = ["Arnob - Tomar Jonno (Kadin Lofi Mix)"];
			filesListArray7 = ["Bob Ross - The Joy of Painting - S01E01 - A Walk in the Woods"];
			filesListArray8 = ["Raw Footage Extraterrestrial"];
			filesListArray9 = ["Static No Signal"];
/*
		} else {

			//if(totalXML.getElementsByTagName("fileListArray1")[0] !== undefined){
			filesListArray1 = eval(totalXML.getElementsByTagName("fileListArray1")[0].childNodes[0].nodeValue);
			filesListArray2 = eval(totalXML.getElementsByTagName("fileListArray2")[0].childNodes[0].nodeValue);
			filesListArray3 = eval(totalXML.getElementsByTagName("fileListArray3")[0].childNodes[0].nodeValue);
			filesListArray4 = eval(totalXML.getElementsByTagName("fileListArray4")[0].childNodes[0].nodeValue);
			filesListArray5 = eval(totalXML.getElementsByTagName("fileListArray5")[0].childNodes[0].nodeValue);
			filesListArray6 = eval(totalXML.getElementsByTagName("fileListArray6")[0].childNodes[0].nodeValue);
			filesListArray7 = eval(totalXML.getElementsByTagName("fileListArray7")[0].childNodes[0].nodeValue);
			filesListArray8 = eval(totalXML.getElementsByTagName("fileListArray8")[0].childNodes[0].nodeValue);
			filesListArray9 = eval(totalXML.getElementsByTagName("fileListArray9")[0].childNodes[0].nodeValue);
			//} 

		}


		//B) Shuffle all the arrays
		shuffleArray(filesListArray1);
		shuffleArray(filesListArray2);
		shuffleArray(filesListArray3);
		shuffleArray(filesListArray4);
		shuffleArray(filesListArray5);
		shuffleArray(filesListArray6);
		shuffleArray(filesListArray7);
		shuffleArray(filesListArray8);
		shuffleArray(filesListArray9);

*/
		//C) Define the total number of files based on the array length
		totalFiles1 = filesListArray1.length;
		totalFiles2 = filesListArray2.length;
		totalFiles3 = filesListArray3.length;
		totalFiles4 = filesListArray4.length;
		totalFiles5 = filesListArray5.length;
		totalFiles6 = filesListArray6.length;
		totalFiles7 = filesListArray7.length;
		totalFiles8 = filesListArray8.length;
		totalFiles9 = filesListArray9.length;


		//D) Hide the loading screen
		hideLoadingScreen();


		//Readout for debugging purposes
		console.log("ARRAY OUTPUT: "+filesListArray1);
		console.log("TOTAL FILES: "+totalFiles1);
		console.log("FIRST ARRAY ITEM: "+filesListArray1[0]);

		//}
     //   }
     //   }

}



//---------------------------------------------------------------------------------------------------------------------------------------------------------//



function shuffleArray(array){

	//Defaults
	var currentIndex = array.length;
	var temporaryValue = 0;
	var randomIndex = 0;
 

  	//1) While there remain elements to shuffle...
  	while(currentIndex !== 0){

    		//A) Pick a remaining element
    		randomIndex = Math.floor(Math.random()*currentIndex);
    		currentIndex = currentIndex-1;


    		//B) Swap it with the current element
    		temporaryValue = array[currentIndex];
    		array[currentIndex] = array[randomIndex];
    		array[randomIndex] = temporaryValue;
  	}
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


	//2) Retrieve the total files before hiding the loading screen (this function will launch the hideLoadingScreen function when it fully loads)
	setTimeout(function(){
	retrieveTotalFilesAndFilesList();
	}, 3500);


	//2b) Or manually just hide the loading screen
	//hideLoadingScreen();
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
