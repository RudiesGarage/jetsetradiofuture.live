///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                    // 
//       EDITOR       //
//                    //
////////////////////////



//Defaults
var stageHeight;
var stageWidth;
selectedSize = .2;



function editorSizeAndPosition(){

	///////////////////////////////////
	// OBJECT /////////////////////////

	var objectName = "editor";
	var objectRatio = 100/100;

	document.getElementById(objectName).style.height = stageHeight+"px";
	document.getElementById(objectName).style.width = stageWidth+"px";
	document.getElementById(objectName).style.top = 0+"px";
	document.getElementById(objectName).style.left = 0+"px";

	document.getElementById(objectName).style.backgroundColor = "rgba(0, 0, 0, 0.8)";

	///////////////////////////////////
	// OBJECT /////////////////////////

	var objectName = "loadingCircle";
	var objectRatio = 59/110;

	document.getElementById(objectName).style.width = Math.ceil(32*magnification)+"px";
	document.getElementById(objectName).style.height = Math.ceil(32*magnification)+"px";
	document.getElementById(objectName).style.left = Math.round(stageWidth/2)-Math.round(parseInt(document.getElementById(objectName).style.width)/2)+"px";
	document.getElementById(objectName).style.top = Math.round(stageHeight/2)-Math.round(parseInt(document.getElementById(objectName).style.height)/2)+"px";

	///////////////////////////////////
	// OBJECT /////////////////////////

	var objectName = "selectedImage";
	var objectRatio = 300/300;

	document.getElementById(objectName).style.width = (parseInt(document.getElementById("boardBackground").style.width)*selectedSize)+"px";
	//document.getElementById(objectName).style.height = Math.round(parseInt(document.getElementById(objectName).style.width)/objectRatio)+"px";

	document.getElementById(objectName).style.left = (stageWidth/2)-(document.getElementById("selectedImage").offsetWidth/2)+"px";	
	document.getElementById(objectName).style.top = (stageHeight/2)-(document.getElementById("selectedImage").offsetHeight/2)+"px";

	///////////////////////////////////
	// OBJECT /////////////////////////

	var objectName = "prevPreviewButton";
	var objectRatio = 300/300;

	document.getElementById(objectName).style.width = Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.08)+"px";
	document.getElementById(objectName).style.height = Math.round(parseInt(document.getElementById(objectName).style.width)/objectRatio)+"px";
	document.getElementById(objectName).style.left = Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.03)+"px";	
	document.getElementById(objectName).style.top = Math.round(stageHeight/2)-Math.round(parseInt(document.getElementById(objectName).style.height)/2)+"px";

	///////////////////////////////////
	// OBJECT /////////////////////////

	var objectName = "nextPreviewButton";
	var objectRatio = 300/300;

	document.getElementById(objectName).style.width = Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.08)+"px";
	document.getElementById(objectName).style.height = Math.round(parseInt(document.getElementById(objectName).style.width)/objectRatio)+"px";
	document.getElementById(objectName).style.left = stageWidth-parseInt(document.getElementById(objectName).style.width)-Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.03)+"px";	
	document.getElementById(objectName).style.top = Math.round(stageHeight/2)-Math.round(parseInt(document.getElementById(objectName).style.height)/2)+"px";

	///////////////////////////////////
	// OBJECT /////////////////////////

	var objectName = "linkTextFieldBackground";
	var objectRatio = 500/80;

	document.getElementById(objectName).style.height = parseInt(document.getElementById("prevPreviewButton").style.height)+"px";
	document.getElementById(objectName).style.width = Math.round(parseInt(document.getElementById(objectName).style.height)*objectRatio)+"px";
	document.getElementById(objectName).style.left = Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.03)+"px";	
	//document.getElementById(objectName).style.top = Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.00)+"px";
	document.getElementById(objectName).style.top = stageHeight-Math.round(parseInt(document.getElementById(objectName).style.height)*1.35)+"px";

	///////////////////////////////////
	// OBJECT /////////////////////////

	var objectName = "linkTextFieldNotice";
	var objectRatio = 500/80;

	document.getElementById(objectName).style.height = parseInt(document.getElementById("linkTextFieldBackground").style.height)+"px";
	document.getElementById(objectName).style.width = parseInt(document.getElementById("linkTextFieldBackground").style.width)+"px";
	document.getElementById(objectName).style.left = parseInt(document.getElementById("linkTextFieldBackground").style.left)+"px";	
	document.getElementById(objectName).style.top = parseInt(document.getElementById("linkTextFieldBackground").style.top)+"px";

	///////////////////////////////////
	// TEXT FIELD /////////////////////

	var objectName = "linkTextField";
	var objectRatio = 0;

	document.getElementById(objectName).style.height = parseInt(document.getElementById("linkTextFieldBackground").style.height)+"px";
	document.getElementById(objectName).style.width = parseInt(document.getElementById("linkTextFieldBackground").style.width)*.96+"px";
	document.getElementById(objectName).style.left = parseInt(document.getElementById("linkTextFieldBackground").style.left)*1.3+"px";	
	document.getElementById(objectName).style.top = parseInt(document.getElementById("linkTextFieldBackground").style.top)+"px";

	// Settings //

	document.getElementById(objectName).style.fontFamily = "Arial, Helvetica, sans-serif";
	//document.getElementById(objectName).style.fontFamily = "regularfont";

	document.getElementById(objectName).style.fontSize = Math.round(parseInt(document.getElementById(objectName).style.height)*.42)+"px";
	//document.getElementById(objectName).style.textIndent = Math.round(parseInt(document.getElementById(objectName).style.height)*.15)+"px";
	document.getElementById(objectName).style.lineHeight = "2.7";
	document.getElementById(objectName).style.textAlign = "left";
	//document.getElementById(objectName).style.textTransform = "uppercase";

	document.getElementById(objectName).readOnly = false;
	document.getElementById(objectName).wrap = "off";
	//document.getElementById(objectName).maxLength = "10";

	document.getElementById(objectName).style.color = "#ffffff";
	document.getElementById(objectName).style.backgroundColor = "#ff0000";
	document.getElementById(objectName).style.backgroundColor = "transparent";

	///////////////////////////////////
	// OBJECT /////////////////////////

	var objectName = "smallButton";
	var objectRatio = 300/300;

	document.getElementById(objectName).style.width = Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.08)+"px";
	document.getElementById(objectName).style.height = Math.round(parseInt(document.getElementById(objectName).style.width)/objectRatio)+"px";
	document.getElementById(objectName).style.left = Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.03)+"px";	
	//document.getElementById(objectName).style.top = stageHeight-parseInt(document.getElementById(objectName).style.height)-Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.03)+"px";
	document.getElementById(objectName).style.top = Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.03)+"px";

	///////////////////////////////////
	// OBJECT /////////////////////////

	var objectName = "mediumButton";
	var objectRatio = 300/300;

	document.getElementById(objectName).style.width = Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.08)+"px";
	document.getElementById(objectName).style.height = Math.round(parseInt(document.getElementById(objectName).style.width)/objectRatio)+"px";
	document.getElementById(objectName).style.left = Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.12)+"px";	
	//document.getElementById(objectName).style.top = stageHeight-parseInt(document.getElementById(objectName).style.height)-Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.03)+"px";
	document.getElementById(objectName).style.top = Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.03)+"px";

	///////////////////////////////////
	// OBJECT /////////////////////////

	var objectName = "largeButton";
	var objectRatio = 300/300;

	document.getElementById(objectName).style.width = Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.08)+"px";
	document.getElementById(objectName).style.height = Math.round(parseInt(document.getElementById(objectName).style.width)/objectRatio)+"px";
	document.getElementById(objectName).style.left = Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.21)+"px";	
	//document.getElementById(objectName).style.top = stageHeight-parseInt(document.getElementById(objectName).style.height)-Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.03)+"px";
	document.getElementById(objectName).style.top = Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.03)+"px";

	///////////////////////////////////
	// OBJECT /////////////////////////

	var objectName = "rotateLeftButton";
	var objectRatio = 300/300;

	document.getElementById(objectName).style.width = Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.08)+"px";
	document.getElementById(objectName).style.height = Math.round(parseInt(document.getElementById(objectName).style.width)/objectRatio)+"px";
	document.getElementById(objectName).style.left = Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.03)+"px";	
	//document.getElementById(objectName).style.top = stageHeight-parseInt(document.getElementById(objectName).style.height)*2-Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.03)*1.4+"px";
	document.getElementById(objectName).style.top = parseInt(document.getElementById(objectName).style.height)*1.52+"px";

	///////////////////////////////////
	// OBJECT /////////////////////////

	var objectName = "rotateRightButton";
	var objectRatio = 300/300;

	document.getElementById(objectName).style.width = Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.08)+"px";
	document.getElementById(objectName).style.height = Math.round(parseInt(document.getElementById(objectName).style.width)/objectRatio)+"px";
	document.getElementById(objectName).style.left = Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.12)+"px";	
	//document.getElementById(objectName).style.top = stageHeight-parseInt(document.getElementById(objectName).style.height)*2-Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.03)*1.4+"px";
	document.getElementById(objectName).style.top = parseInt(document.getElementById(objectName).style.height)*1.52+"px";

	///////////////////////////////////
	// OBJECT /////////////////////////

	var objectName = "saveButton";
	var objectRatio = 300/80;

	document.getElementById(objectName).style.width = Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.28)+"px";
	document.getElementById(objectName).style.height = Math.round(parseInt(document.getElementById(objectName).style.width)/objectRatio)+"px";
	document.getElementById(objectName).style.left = stageWidth-parseInt(document.getElementById(objectName).style.width)-Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.03)+"px";	
	document.getElementById(objectName).style.top = stageHeight-parseInt(document.getElementById(objectName).style.height)*2-Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.03)*1.4+"px";

	///////////////////////////////////
	// OBJECT /////////////////////////

	var objectName = "cancelButton";
	var objectRatio = 300/80;

	document.getElementById(objectName).style.width = Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.28)+"px";
	document.getElementById(objectName).style.height = Math.round(parseInt(document.getElementById(objectName).style.width)/objectRatio)+"px";
	document.getElementById(objectName).style.left = stageWidth-parseInt(document.getElementById(objectName).style.width)-Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.03)+"px";	
	document.getElementById(objectName).style.top = stageHeight-parseInt(document.getElementById(objectName).style.height)-Math.round(parseInt(document.getElementById("loadingLogo").style.width)*.03)+"px";

	///////////////////////////////////
	// OBJECT /////////////////////////

	var objectName = "editorTouchboard";
	var objectRatio = 300/80;

	document.getElementById(objectName).style.width = parseInt(document.getElementById("editor").style.width)+"px";
	document.getElementById(objectName).style.height = parseInt(document.getElementById("editor").style.height)+"px";
	document.getElementById(objectName).style.left = 0+"px";	
	document.getElementById(objectName).style.top = 0+"px";
	//document.getElementById(objectName).style.backgroundColor = "#ff0000";

	///////////////////////////////////

}



//---------------------------------------------------------------------------------------------------------------------------------------------------//



function quickSizeSelectedImage(){

	//1) Determine current centerpoint
	currentXCenter = parseInt(document.getElementById("selectedImage").style.left)+(document.getElementById("selectedImage").offsetWidth/2);
	currentYCenter = parseInt(document.getElementById("selectedImage").style.top)+(document.getElementById("selectedImage").offsetHeight/2);


	//2) Resize the image
	document.getElementById("selectedImage").style.width = (parseInt(document.getElementById("boardBackground").style.width)*selectedSize)+"px";


	//3) Reposition the selectedImage
	document.getElementById("selectedImage").style.left = currentXCenter-(document.getElementById("selectedImage").offsetWidth/2)+"px";	
	document.getElementById("selectedImage").style.top = currentYCenter-(document.getElementById("selectedImage").offsetHeight/2)+"px";

}



//---------------------------------------------------------------------------------------------------------------------------------------------------//



//Defaults to prevent flickering
document.getElementById("editor").style.WebkitBackfaceVisibility = "hidden";



function editorSwitch(){
	
	//1) Defaults initially so the menu is not showing the first time
	if(this.editor_switchStatus == null){

		document.getElementById("editor").style.transition = 'all 0s ease-out';
		document.getElementById("editor").style.MozTransition = 'all 0s ease-out';
		document.getElementById("editor").style.WebkitTransition = 'all 0s ease-out';
		document.getElementById("editor").style.opacity = 0;

		document.getElementById("editor").style.visibility = "hidden";
		editor_switchStatus = "OFF";


	//2) If the switch is OFF show the object
	} else if(editor_switchStatus == "OFF"){

		//Default unfocus the linkTextField
		document.getElementById("linkTextField").blur();


		//Default editor sizing & no rotation
		editorSizeAndPosition();
		rotationSetting = 0;
		updateRotation();


		//Show the loading circle and hide the selectedImage before loading and dont allow the save button to be pressed
		document.getElementById("loadingCircle").style.opacity = 1;
		document.getElementById("selectedImage").style.display = "none";

		document.getElementById("saveButton").style.opacity = .3;
		document.getElementById("saveButton").style.pointerEvents = "none";


		//Default the selected image
		document.getElementById("selectedImage").src = "";
		document.getElementById("selectedImage").src = "editor/library/"+selectionPosition+".png";

		document.getElementById("editor").style.visibility = "visible";
		document.getElementById("editor").style.transition = 'opacity .5s ease-out';
		document.getElementById("editor").style.MozTransition = 'opacity .5s ease-out';
		document.getElementById("editor").style.WebkitTransition = 'opacity .5s ease-out';
		document.getElementById("editor").style.opacity = 1;

		editor_switchStatus = "TRANSITIONING";
		setTimeout(function(){
		editor_switchStatus = "ON";
		}, 500);


	//3) If the switch is OFF slide the object to show it
	} else if(editor_switchStatus == "ON"){

		document.getElementById("editor").style.transition = 'opacity .5s ease-out';
		document.getElementById("editor").style.MozTransition = 'opacity .5s ease-out';
		document.getElementById("editor").style.WebkitTransition = 'opacity .5s ease-out';
		document.getElementById("editor").style.opacity = 0;

		editor_switchStatus = "TRANSITIONING";
		setTimeout(function(){
		document.getElementById("editor").style.visibility = "hidden";
		editor_switchStatus = "OFF";
		}, 500);
	}
}




//---------------------------------------------------------------------------------------------------------------------------------------------------//



//When the user puts in their own link hide the notice
document.getElementById("linkTextField").onfocus = function(){

	document.getElementById("linkTextFieldNotice").style.opacity = 0;


};


//---------------------------------------------------------------------------------------------------------------------------------------------------//



document.getElementById("linkTextField").onblur = function(){

	document.getElementById("linkTextField").value = "";
	document.getElementById("linkTextFieldNotice").style.opacity = 1;

};



//---------------------------------------------------------------------------------------------------------------------------------------------------//



//When the user changes the text field begin trying to load the link
document.getElementById("linkTextField").addEventListener("input", checkLink);



function checkLink(){

	//Load the link into the selectedImage
	document.getElementById("selectedImage").src = document.getElementById("linkTextField").value;

}



//---------------------------------------------------------------------------------------------------------------------------------------------------//



//If it DOES NOT load then do not show it
document.getElementById("selectedImage").addEventListener("error", hideSelectedImage);



function hideSelectedImage(){

	document.getElementById("loadingCircle").style.opacity = 1;
	document.getElementById("selectedImage").style.display = "none";

	document.getElementById("saveButton").style.opacity = .3;
	document.getElementById("saveButton").style.pointerEvents = "none";

}



//---------------------------------------------------------------------------------------------------------------------------------------------------//



//If it DOES load then show it
document.getElementById("selectedImage").addEventListener("load", showSelectedImage);



function showSelectedImage(){

	document.getElementById("loadingCircle").style.opacity = 0;
	document.getElementById("selectedImage").style.display = "block";


	editorSizeAndPosition();
	rotationSetting = 0;
	updateRotation();


	document.getElementById("saveButton").style.opacity = 1;
	document.getElementById("saveButton").style.pointerEvents = "all";

}



//---------------------------------------------------------------------------------------------------------------------------------------------------------//



//Defaults
libraryTotal = 150;
selectionPosition = Math.floor((Math.random()*libraryTotal)+1);
document.getElementById("selectedImage").src = "editor/library/"+selectionPosition+".png";



function gotoNextSelection(){

	//Defaults
	document.getElementById("linkTextField").blur();


	//Increase selection position
	selectionPosition++;
	if(selectionPosition > libraryTotal){
	selectionPosition = 1;
	}


	//Show the loading circle
	document.getElementById("loadingCircle").style.opacity = 1;
	document.getElementById("selectedImage").style.display = "none";
	document.getElementById("selectedImage").src = "editor/library/"+selectionPosition+".png";

}



//---------------------------------------------------------------------------------------------------------------------------------------------------------//



function gotoPrevSelection(){

	//Defaults
	document.getElementById("linkTextField").blur();


	//Decrease selection position
	selectionPosition--;
	if(selectionPosition < 1){
	selectionPosition = libraryTotal;
	}


	//Show the loading circle
	document.getElementById("loadingCircle").style.opacity = 1;
	document.getElementById("selectedImage").style.display = "none";
	document.getElementById("selectedImage").src = "editor/library/"+selectionPosition+".png";

}



//---------------------------------------------------------------------------------------------------------------------------------------------------------//



//Defaults
rotationSetting = 0;



function updateRotation(){

	//1) Update the image rotation based on the rotationSetting
	var objectName = "selectedImage";

	document.getElementById(objectName).style.WebkitPerspectiveOrigin = "50% 50%";
	document.getElementById(objectName).style.MozPerspectiveOrigin = "50% 50%";
	document.getElementById(objectName).style.perspectiveOrigin = "50% 50%";

	document.getElementById(objectName).style.WebkitTransformOrigin = "50% 50%";
	document.getElementById(objectName).style.MozTransformOrigin = "50% 50%";
	document.getElementById(objectName).style.transformOrigin = "50% 50%";

	document.getElementById(objectName).style.WebkitTransformStyle = "preserve-3d";
	document.getElementById(objectName).style.MozTransformStyle = "preserve-3d";
	document.getElementById(objectName).style.transformStyle = "preserve-3d";

	document.getElementById(objectName).style.WebkitTransform = "perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ("+rotationSetting+"deg)";
	document.getElementById(objectName).style.MozTransform = "perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ("+rotationSetting+"deg)";
	document.getElementById(objectName).style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ("+rotationSetting+"deg)";
}



//---------------------------------------------------------------------------------------------------------------------------------------------------------//



function rotateLeft(){

	//1) Increase the rotation
	rotationSetting = rotationSetting-22.5;

	if(rotationSetting <= 0){
	rotationSetting = rotationSetting+360;
	}


	//2) Update the image rotation
	updateRotation();

}



//---------------------------------------------------------------------------------------------------------------------------------------------------------//



function rotateRight(){

	//1) Increase the rotation
	rotationSetting = rotationSetting+22.5;

	if(rotationSetting >= 360){
	rotationSetting = rotationSetting-360;
	}


	//2) Update the image rotation
	updateRotation();

}



//---------------------------------------------------------------------------------------------------------------------------------------------------------//



//Defaults
allowDragging = false;



function defineEditorButtons(){

	///////////////////////////////////
	// BUTTON /////////////////////////

	var objectName = "nextPreviewButton";

	//'TOUCH' Actions
	if("ontouchmove" in document.documentElement){

		document.getElementById(objectName).ontouchstart = function(event){
		document.getElementById("nextPreviewButton").style.opacity = .5;
		event.preventDefault();
		}

		document.getElementById(objectName).ontouchend = function(event){
		document.getElementById("nextPreviewButton").style.opacity = 1;
		gotoNextSelection();
		event.preventDefault();
		}

	//'MOUSE' Actions
	} else {

		document.getElementById(objectName).onmousedown = function(event){
		document.getElementById("nextPreviewButton").style.opacity = .5;
		event.preventDefault();
		}

		document.getElementById(objectName).onmouseup = function(event){
		document.getElementById("nextPreviewButton").style.opacity = 1;
		gotoNextSelection();
		event.preventDefault();
		}
	}

	///////////////////////////////////
	// BUTTON /////////////////////////

	var objectName = "prevPreviewButton";

	//'TOUCH' Actions
	if("ontouchmove" in document.documentElement){

		document.getElementById(objectName).ontouchstart = function(event){
		document.getElementById("prevPreviewButton").style.opacity = .5;
		event.preventDefault();
		}

		document.getElementById(objectName).ontouchend = function(event){
		document.getElementById("prevPreviewButton").style.opacity = 1;
		gotoPrevSelection();
		event.preventDefault();
		}

	//'MOUSE' Actions
	} else {

		document.getElementById(objectName).onmousedown = function(event){
		document.getElementById("prevPreviewButton").style.opacity = .5;
		event.preventDefault();
		}

		document.getElementById(objectName).onmouseup = function(event){
		document.getElementById("prevPreviewButton").style.opacity = 1;
		gotoPrevSelection();
		event.preventDefault();
		}
	}

	///////////////////////////////////
	// BUTTON /////////////////////////

	var objectName = "editorTouchboard";

	//'TOUCH' Actions
	if("ontouchmove" in document.documentElement){
		document.getElementById(objectName).ontouchstart = function(event){

			retrieveMousePositions(event);
			startingMouseXPos = mouseX;
			startingMouseYPos = mouseY;
			startingImageXPos = parseInt(document.getElementById("selectedImage").style.left);
			startingImageYPos = parseInt(document.getElementById("selectedImage").style.top);
			document.getElementById("selectedImage").style.left = mouseX-(document.getElementById("selectedImage").offsetWidth/2)+"px";	
			document.getElementById("selectedImage").style.top = mouseY-(document.getElementById("selectedImage").offsetHeight/2)+"px";	
			allowDragging = true;
			event.preventDefault();

		}

		document.getElementById(objectName).ontouchend = function(event){

			allowDragging = false;
			event.preventDefault();

		}

		document.getElementById(objectName).ontouchmove = function(event){

			if(allowDragging == true){
			retrieveMousePositions(event);
			differenceX = startingMouseXPos-mouseX;
			differenceY = startingMouseYPos-mouseY;
			document.getElementById("selectedImage").style.left = mouseX-(document.getElementById("selectedImage").offsetWidth/2)+"px";	
			document.getElementById("selectedImage").style.top = mouseY-(document.getElementById("selectedImage").offsetHeight/2)+"px";
			}
			event.preventDefault();
		}

	//'MOUSE' Actions
	} else {
		document.getElementById(objectName).onmousedown = function(event){

			retrieveMousePositions(event);
			startingMouseXPos = mouseX;
			startingMouseYPos = mouseY;
			startingImageXPos = parseInt(document.getElementById("selectedImage").style.left);
			startingImageYPos = parseInt(document.getElementById("selectedImage").style.top);
			document.getElementById("selectedImage").style.left = mouseX-(document.getElementById("selectedImage").offsetWidth/2)+"px";	
			document.getElementById("selectedImage").style.top = mouseY-(document.getElementById("selectedImage").offsetHeight/2)+"px";	
			allowDragging = true;
			event.preventDefault();

		}

		document.getElementById(objectName).onmouseup = function(event){

			allowDragging = false;
			event.preventDefault();

		}

		document.getElementById(objectName).onmouseout = function(event){

			allowDragging = false;
			event.preventDefault();

		}

		document.getElementById(objectName).onmousemove = function(event){

			if(allowDragging == true){
			retrieveMousePositions(event);
			differenceX = startingMouseXPos-mouseX;
			differenceY = startingMouseYPos-mouseY;
			document.getElementById("selectedImage").style.left = mouseX-(document.getElementById("selectedImage").offsetWidth/2)+"px";	
			document.getElementById("selectedImage").style.top = mouseY-(document.getElementById("selectedImage").offsetHeight/2)+"px";	
			}
			event.preventDefault();

		}

	}

	///////////////////////////////////
	// BUTTON /////////////////////////

	var objectName = "rotateLeftButton";

	//'TOUCH' Actions
	if("ontouchmove" in document.documentElement){
		document.getElementById(objectName).ontouchstart = function(event){
		rotateLeft();
		event.preventDefault();
		}

	//'MOUSE' Actions
	} else {
		document.getElementById(objectName).onmousedown = function(event){
		rotateLeft();
		event.preventDefault();
		}
	}

	///////////////////////////////////
	// BUTTON /////////////////////////

	var objectName = "rotateRightButton";

	//'TOUCH' Actions
	if("ontouchmove" in document.documentElement){
		document.getElementById(objectName).ontouchstart = function(event){
		rotateRight();
		event.preventDefault();
		}

	//'MOUSE' Actions
	} else {
		document.getElementById(objectName).onmousedown = function(event){
		rotateRight();
		event.preventDefault();
		}
	}

	///////////////////////////////////
	// BUTTON /////////////////////////

	var objectName = "smallButton";

	//'TOUCH' Actions
	if("ontouchmove" in document.documentElement){
		document.getElementById(objectName).ontouchstart = function(event){
		selectedSize = .2;
		quickSizeSelectedImage();
		event.preventDefault();
		}

	//'MOUSE' Actions
	} else {
		document.getElementById(objectName).onmousedown = function(event){
		selectedSize = .2;
		quickSizeSelectedImage();
		event.preventDefault();
		}
	}

	///////////////////////////////////
	// BUTTON /////////////////////////

	var objectName = "mediumButton";

	//'TOUCH' Actions
	if("ontouchmove" in document.documentElement){
		document.getElementById(objectName).ontouchstart = function(event){
		selectedSize = .25;
		quickSizeSelectedImage();
		event.preventDefault();
		}

	//'MOUSE' Actions
	} else {
		document.getElementById(objectName).onmousedown = function(event){
		selectedSize = .25;
		quickSizeSelectedImage();
		event.preventDefault();
		}
	}

	///////////////////////////////////
	// BUTTON /////////////////////////

	var objectName = "largeButton";

	//'TOUCH' Actions
	if("ontouchmove" in document.documentElement){
		document.getElementById(objectName).ontouchstart = function(event){
		selectedSize = .3;
		quickSizeSelectedImage();
		event.preventDefault();
		}

	//'MOUSE' Actions
	} else {
		document.getElementById(objectName).onmousedown = function(event){
		selectedSize = .3;
		quickSizeSelectedImage();
		event.preventDefault();
		}
	}

	///////////////////////////////////
	// BUTTON /////////////////////////

	var objectName = "saveButton";

	//'TOUCH' Actions
	if("ontouchmove" in document.documentElement){
		document.getElementById(objectName).ontouchstart = function(event){
		saveRequest();
		event.preventDefault();
		}

	//'MOUSE' Actions
	} else {
		document.getElementById(objectName).onmousedown = function(event){
		saveRequest();
		event.preventDefault();
		}
	}

	///////////////////////////////////
	// BUTTON /////////////////////////

	var objectName = "cancelButton";

	//'TOUCH' Actions
	if("ontouchmove" in document.documentElement){
		document.getElementById(objectName).ontouchstart = function(event){
		editorSwitch();
		event.preventDefault();
		}

	//'MOUSE' Actions
	} else {
		document.getElementById(objectName).onmousedown = function(event){
		editorSwitch();
		event.preventDefault();
		}
	}

	///////////////////////////////////
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function saveRequest(){

	//1) Hide the save button & don't allow it to be pressed
	document.getElementById("saveButton").style.opacity = .3;
	document.getElementById("saveButton").style.pointerEvents = "none";


	//2) Define the variables to send to the PHP script
	php_imageLink = document.getElementById("selectedImage").src;
	php_imageSize = selectedSize;
	php_rotationSetting = rotationSetting;

	leftGap = (parseInt(document.getElementById("boardBackground").style.width)-stageWidth)/2;
	topGap = (parseInt(document.getElementById("boardBackground").style.height)-stageHeight)/2;
	calculatedXPos = leftGap+parseInt(document.getElementById("selectedImage").style.left);
	calculatedYPos = topGap+parseInt(document.getElementById("selectedImage").style.top);
	php_xPos = calculatedXPos/parseInt(document.getElementById("boardBackground").style.width);
	php_yPos = calculatedYPos/parseInt(document.getElementById("boardBackground").style.height);


	//3) Replace ampersands in the url
	php_imageLink = php_imageLink.replace("&", "%26amp;"); 


	//4) Structure a POST message
	postMessage = "php_imageLink="+php_imageLink+"&php_imageSize="+php_imageSize+"&php_xPos="+php_xPos+"&php_yPos="+php_yPos+"&php_rotationSetting="+php_rotationSetting;


	//5) Save the xmldata
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST", "editor/save.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send(postMessage);


	//6) When it has saved
	xmlhttp.onreadystatechange=function(){	
	if(xmlhttp.readyState == 4){
	

		setTimeout(function(){

			document.getElementById("saveButton").style.opacity = 1;
			document.getElementById("saveButton").style.pointerEvents = "all";
			loadXML();

			setTimeout(function(){
			editorSwitch();
			}, 500);

		}, 500);

	}
	}	

}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function editorRuntime(){

	//EDITOR
	allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length] = editorSizeAndPosition;
	allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length-1]();
	editorSwitch();
	defineEditorButtons();

}



allRuntimeFunctionsList[allRuntimeFunctionsList.length] = editorRuntime;



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
