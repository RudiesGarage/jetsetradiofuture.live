///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//Defaults
totalThumbnails = 0;
newDocumentValue = "";
oldDocumentValue = "";
lastTotal = 0;



function loadXML(){

	//1) Generate a random number to prevent loading the cached XML
	randomCacheNumber = Math.floor((Math.random() * 999999999) + 1);


	//2) Load the XML document
	xhttp=new XMLHttpRequest();
	xhttp.open("GET", "editor/items.xml?"+randomCacheNumber, true);
	xhttp.send();


	//3) When the XML document loads 
	xhttp.onreadystatechange=function(){	
	if(xhttp.readyState == 4){
	

		//A) The document can be now be used         
		xmlDocument = xhttp.responseXML;
		newDocumentValue = xmlString(xmlDocument);


		//B) Setup and duplicate items if it is new data
		if(newDocumentValue !== oldDocumentValue){
		oldDocumentValue = xmlString(xmlDocument);


			//1) Define the total number of items
			lastTotal = totalThumbnails;
			totalThumbnails = xmlDocument.getElementsByTagName("item").length-(1);


			//2) Remove all the thumbnails using the lastTotal
			for(d = 1; d <= lastTotal; d++){
			document.getElementById("thumbnail"+d).parentNode.removeChild(document.getElementById("thumbnail"+d));
			}


			//3) Clone and duplicate the thumbnails (start at 1 because the first item 0 already exists)
			for(d = 1; d <= totalThumbnails; d++){

				//1) Select the object you want to clone
				var selectedObject = document.getElementById("thumbnail0");


				//2) Store the clone & give it an ID
				var clonedObject = selectedObject.cloneNode(true);
				clonedObject.id = "thumbnail"+d;
				//clonedObject.setAttribute("id","thumbnail"+d);

		
				//3) Now add it to the document
				document.getElementById("board").appendChild(clonedObject);
				//document.body.appendChild(clonedObject);

			}


			//4) Set the thumbnail image
			for(d = 0; d <= totalThumbnails; d++){

				//1) Reverse all the z depths so the newest is on top
				document.getElementById("thumbnail"+d).style.zIndex = 500-d;


				//2) Define the XML item variables
				document.getElementById("thumbnail"+d).imageLink = xmlDocument.getElementsByTagName("item")[totalThumbnails-d].getElementsByTagName("image")[0].childNodes[0].nodeValue;
				document.getElementById("thumbnail"+d).size = xmlDocument.getElementsByTagName("item")[totalThumbnails-d].getElementsByTagName("size")[0].childNodes[0].nodeValue;
				document.getElementById("thumbnail"+d).xPos = xmlDocument.getElementsByTagName("item")[totalThumbnails-d].getElementsByTagName("xPos")[0].childNodes[0].nodeValue;
				document.getElementById("thumbnail"+d).yPos = xmlDocument.getElementsByTagName("item")[totalThumbnails-d].getElementsByTagName("yPos")[0].childNodes[0].nodeValue;
				document.getElementById("thumbnail"+d).rotation = xmlDocument.getElementsByTagName("item")[totalThumbnails-d].getElementsByTagName("rotation")[0].childNodes[0].nodeValue;

				document.getElementById("thumbnail"+d).myID = d;


				//3) Set the thumbnail images
				document.getElementById("thumbnail"+d).style.display = "none";
				document.getElementById("thumbnail"+d).src = "";
				document.getElementById("thumbnail"+d).src = document.getElementById("thumbnail"+d).imageLink;

				document.getElementById("thumbnail"+d).onload = function() {
				console.log("Loaded Image: "+this.myID);
				document.getElementById("thumbnail"+this.myID).style.display = "block";
				};

			}


			//5) Now launch size and position function so it sizes and positions all the items
			boardSizeAndPosition();

		}


    	}
  	}	
} 



//---------------------------------------------------------------------------------------------------------------------------------------------------------//



function xmlString(doc){

	if(window.ActiveXObject){ 
	return doc.xml; 
	} else {
  	return (new XMLSerializer()).serializeToString(doc);
	}

}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                             // 
//        BOARD        //
//                             //
/////////////////////////////////



function boardSizeAndPosition(){

	///////////////////////////////////
	// OBJECT /////////////////////////

	var objectName = "board";
	var objectRatio = 100/100;

	document.getElementById(objectName).style.height = stageHeight+"px";
	document.getElementById(objectName).style.width = stageWidth+"px";
	document.getElementById(objectName).style.top = 0+"px";
	document.getElementById(objectName).style.left = 0+"px";

	document.getElementById(objectName).style.overflow = "hidden";

	///////////////////////////////////
	// OBJECT /////////////////////////

	var objectName = "boardBackground";
	var objectRatio = 1280/720;

	document.getElementById(objectName).style.height = stageHeight+"px";
	document.getElementById(objectName).style.width = Math.round(parseInt(document.getElementById(objectName).style.height)*objectRatio)+"px";
	document.getElementById(objectName).style.left = -((parseInt(document.getElementById(objectName).style.width)-stageWidth)/2)+"px";
	document.getElementById(objectName).style.top = -((parseInt(document.getElementById(objectName).style.height)-stageHeight)/2)+"px";

	if(parseInt(document.getElementById(objectName).style.width) < stageWidth){
	document.getElementById(objectName).style.width = stageWidth+"px"; 
	document.getElementById(objectName).style.height = Math.round(parseInt(document.getElementById(objectName).style.width)/objectRatio)+"px";
	document.getElementById(objectName).style.left = -((parseInt(document.getElementById(objectName).style.width)-stageWidth)/2)+"px";
	document.getElementById(objectName).style.top = -((parseInt(document.getElementById(objectName).style.height)-stageHeight)/2)+"px";
	}

	///////////////////////////////////
	// THUMBNAILS /////////////////////

	for(t = 0; t <= totalThumbnails; t++){

		///////////////////////////////////
		// OBJECT /////////////////////////

		var objectName = "thumbnail"+t;
		var objectRatio = 100/100;

		document.getElementById(objectName).style.width = (parseInt(document.getElementById("boardBackground").style.width)*document.getElementById(objectName).size)+"px";
		//document.getElementById(objectName).style.height = parseInt(document.getElementById(objectName).style.width)+"px";
		document.getElementById(objectName).style.top = parseInt(document.getElementById("boardBackground").style.top)+(parseInt(document.getElementById("boardBackground").style.height)*document.getElementById(objectName).yPos)+"px";
		document.getElementById(objectName).style.left = parseInt(document.getElementById("boardBackground").style.left)+(parseInt(document.getElementById("boardBackground").style.width)*document.getElementById(objectName).xPos)+"px";

		///////////////////////////////////

		//Rotate thumbnail
		document.getElementById(objectName).style.WebkitPerspectiveOrigin = "50% 50%";
		document.getElementById(objectName).style.MozPerspectiveOrigin = "50% 50%";
		document.getElementById(objectName).style.perspectiveOrigin = "50% 50%";

		document.getElementById(objectName).style.WebkitTransformOrigin = "50% 50%";
		document.getElementById(objectName).style.MozTransformOrigin = "50% 50%";
		document.getElementById(objectName).style.transformOrigin = "50% 50%";

		document.getElementById(objectName).style.WebkitTransformStyle = "preserve-3d";
		document.getElementById(objectName).style.MozTransformStyle = "preserve-3d";
		document.getElementById(objectName).style.transformStyle = "preserve-3d";

		document.getElementById(objectName).style.WebkitTransform = "perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ("+document.getElementById(objectName).rotation+"deg)";
		document.getElementById(objectName).style.MozTransform = "perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ("+document.getElementById(objectName).rotation+"deg)";
		document.getElementById(objectName).style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ("+document.getElementById(objectName).rotation+"deg)";

		///////////////////////////////////

	}

	///////////////////////////////////
	///////////////////////////////////

}



//---------------------------------------------------------------------------------------------------------------------------------------------------------//



function defineBoardButton(){

	///////////////////////////////////
	// BUTTON /////////////////////////

	var objectName = "board";

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
	///////////////////////////////////

}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function boardRuntime(){

	//loadXML();
	setInterval(function(){
	//loadXML();
	}, 7000);


	//BOARD
	allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length] = boardSizeAndPosition;
	allSizeAndPositionFunctionsList[allSizeAndPositionFunctionsList.length-1]();
	defineBoardButton();

}



allRuntimeFunctionsList[allRuntimeFunctionsList.length] = boardRuntime;



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
