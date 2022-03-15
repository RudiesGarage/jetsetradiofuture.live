// Main Server Code 

var winston = require('winston'); // Logging

const logger = winston.createLogger({
  format: winston.format.json(),
  defaultMeta: {service: 'default-service'},
  transports:[
	   new winston.transports.File({filename:'./logs/error.log',level:'error'}),
	   new winston.transports.File({filename:'./logs/verbose.log',level:'info'})
	  ],
  });


var stringSimilarity = require("string-similarity");
var gibberish = require('gibberish-detector');

var http = require('http'); // HTTP Server
var fs = require('fs'); // File system


var URL = require("url").URL; 
var mime = require('mime-types');
const path = require('path');
const xml2js = require('xml2js');
var validUrl = require('valid-url');
const isImageUrl = require('is-image-url');

const got = require('got');
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);
const WebSocket = require('ws');

const server = new WebSocket.Server({
  port: 8080
});

let sockets = [];

console.log("");

const builder = new xml2js.Builder();

const config = require('./config.js'); //Load Env Vars
console.log(`NODE_ENV=${config.NODE_ENV}`);

let baseURL =  "http://" + config.HOST + ":" + config.PORT;
let localPath = config.JSRF_PATH;
const crypto = require('crypto');
const cron = require('node-cron');

// TODO move to different file
// PRE-DEFINED FUNCTIONS

//Get the IP of incomming request
function getIPHash(user_ip){
    if(typeof(user_ip)!='string'){
     return data_p = crypto.createHash('sha256').update("0").digest('hex');
    }else{
      return data_p = crypto.createHash('sha256').update(user_ip).digest('hex');
    }
}

function getMimeType(pathname){
    const ext = path.extname(pathname); // .html
    var mimeType = null;
    //Mime package does not support ~list.js files for some reason, need to do it manually
    if (ext == ".js") {
        mimeType = { 'Content-type': 'application/javascript' };
    } else {
        mimeType = mime.contentType(ext);
    }
    return mimeType;
}

function getServerTime(){
// => 'text/plain'     
            const date_ob = new Date(); //in seconds
            // current date
            // adjust 0 before single digit date
            const date = ("0" + date_ob.getDate()).slice(-2);

            // current month
            const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

            // current year
            const year = date_ob.getFullYear();

            // current hours
            const hours = date_ob.getHours();

            // current minutes
            const minutes = date_ob.getMinutes();

            // current seconds
            const seconds = date_ob.getSeconds();
            const xmlResp = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><data><serverHours>" + hours +
                "</serverHours><serverMinutes>" + minutes +
                "</serverMinutes><serverSeconds>" + seconds +
                "</serverSeconds><serverMonth>" + month +
                "</serverMonth><serverDay>" + date +
                "</serverDay><serverWeekday>" + date_ob.toLocaleString(undefined, {
                    weekday: 'long'
                }) +
                "</serverWeekday><serverYear>" + year +
                "</serverYear><serverFormattedDate>" + date_ob.toLocaleString(undefined, {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }) +
                "</serverFormattedDate><serverTime>" + Date.now() + "</serverTime></data>";
                return xmlResp;
}


function checkChatRequest(msg){
		     console.log(msg);
		     //Type checking
		     if(typeof(msg.chatmessage) == 'string'
		      && typeof(msg.username) == 'string' 
		      && typeof(msg.color)=='string' 
		      && typeof(msg.chatpassword)=='boolean'){
		      
		      // Size Checks
		       if(msg.chatmessage.length < 150 
		       && msg.chatmessage.length > 0
		       && msg.username.length < 20 
		       && msg.username.length >0
		       && msg.color.length == 9){
		       
		        console.log("Correctly formatted request");
		     	return true
		     	
		       }
		     }
		     console.log("BAD CHAT MESSAGE");
		     return false;
}

function sanatize(msg){
     //Sanitize to prevent XSS
     msg = DOMPurify.sanitize(msg);
     msg = msg.replace(';','');
     msg = msg.replace('>','');
     msg = msg.replace('<','');
     msg = msg.replace('(','');
     msg = msg.replace(')','');
     msg = msg.replace('+','');
     return msg
}

var bannedIPs = [];


// Create a server object
http.createServer(function(req, res) {
    // Get the requester IP
    var tempIP = "";
    let realIP = req.headers["x-real-ip"];
    if(typeof(realIP) == 'undefined'){
    	//logger.log({level:'error',message:'x-real-ip is undefined'});
    	// if no real ip then check forwarded address:
    	let forwardIP = req.headers["x-forwarded-for"];
    	if(typeof(forwardIP) == 'undefined'){
    		//logger.log({level:'error',message:'X_FORWARDED_FOR is undefined'});
	    	let viaIP = req.headers["via"];
	    	if(typeof(viaIP) == 'undefined'){
    			//logger.log({level:'error',message:'VIA is undefined'});
		    	 tempIP = "0";
	    	}else{
	    	  tempIP = viaIP;
	    	}
    	}else{
    	  tempIP = forwardIP;
    	}
    }else{
	tempIP = realIP;
    }
    
    const data_p = getIPHash(tempIP);
    logger.log({level:'info',message: tempIP + " request " + req.url});
    
    //Check if IP is banned
    if(bannedIPs.includes(data_p)){
     return res.end();
    }	
    
    // Get the url and parse
    var pathname = req.url;
    if (req.url == "/") {
            pathname = "/index.html";
    }
    try{
       // validate url
       const urlReq = new URL(pathname, baseURL);
       pathname = urlReq.pathname;
    }catch (e) {
    	// IF INVALID URL return 404
       console.log(e);
       res.writeHead(302, {
	  'Location': '/',
	  'x-real-ip': req.headers["x-real-ip"],
	  'X_FORWARDED_FOR': req.headers["x-forwarded-for"]
	  //add other headers here...
	});
	return res.end();
    }    
  
    // Get MimeType
    const mimeType = getMimeType(pathname);
    
    // Get Requests
    if (req.method === "GET") {
        // Relay the live stream url
        if (pathname == "/radio/stations/live/Jet%20Set%20Radio%20Live.mp3") {
            got.stream("https://admin.jsrf.live/radio/8000/radio.mp3").pipe(res);
        } 
        // ServerTime Get Request
        else if (pathname == "/chat/serverTime.php") {
            res.writeHead(200, "text/xml;charset=UTF-8");
            // write Current ServerTime
            res.write(getServerTime());
            return res.end();
        } 
        // Otherwise Serve the File as normal
        else {
            fs.readFile(localPath + decodeURI(pathname), function(err, data) {
                if (err) {
                    return console.error(err);
                }
                res.writeHead(200, mimeType);
                // => 'text/plain'    
                res.write(data);
                return res.end();
            });
        }
    } 
    
    // POSTS Requests
    else if (req.method == "POST") {
    
    	// Post to the COUNTER
        if (pathname == "/counter/counter.php") {
            // No need to sanatize since this is actually a GET request in disguise
            req.on('end', () => {
                try {
                    res.writeHead(200, "text/xml;charset=UTF-8");
                    const respData = { listeners: sockets.length  }
                    res.write(JSON.stringify(respData));
                } catch (e) {
                    console.log(e);
                } finally {
                    res.end();
                }
            });
        } 
        
        // POST TO CHAT
        else if (pathname == "/chat/save.php") {
            console.log("update  /chat/messages.xml");
            
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                try {
                    //Validate chat input 
		     
	            var msg = {};
                    try{
                       msg = JSON.parse(body);
                    } 
                    catch(e){
                      console.log(e);
                    }
                    
		    if(checkChatRequest(msg)){
		    
	
                    //force https
                    msg.chatmessage = msg.chatmessage.replace('http://', 'https://');
                    
                    msg.chatmessage = sanatize(msg.chatmessage);
                    
                    msg.username = sanatize(msg.username);

                    
                    /*
                    //if the url is a valid image then set image template
                    if (isImageUrl(msg.chatmessage)) {
                        msg.chatmessage = "<br/><a href=\"" + msg.chatmessage + "\" target=\"_blank\" rel=\"noopener\" style=\"color:#00bfc1;\"><img src=\"" + msg.chatmessage + "\" class=\"imageController\" style=\"position:relative;height:25%;z-index:899;image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:pixelated;image-rendering:optimize-contrast;-ms-interpolation-mode:nearest-neighbor;\" onerror=\"this.src=\'" + baseURL + "/media/404.gif\'\"></a>";
                    } else if (validUrl.isUri(msg.chatmessage)) {
                        msg.chatmessage = "<a href=\"" + msg.chatmessage + "\" target=\"_blank\" rel=\"noopener\" style=\"color:#00bfc1;\">" + msg.chatmessage + "</a>";
                    }
                    */
                   console.log(data_p)
                    msg = { username: msg.username, text: msg.chatmessage, ip: data_p, timestamp: Date.now(), color: msg.color };

                    // read XML file
                    fs.readFile(localPath + "/chat/messages.xml", "utf-8", (err, data) => {
                        if (err) {
                           console.log(err);
    			    logger.log({level:'error',message:err});
                        }

                        // convert XML data to JSON object
                        xml2js.parseString(data, (err, result) => {
                            if (err) {
                                console.log(err);
                                logger.log({level:'error',message:"ERROR PARSING MESSAGES.xml"});
                            }
                            var msg_error = false;
				try{
			     const messages = JSON.parse(JSON.stringify(result.data));
			     //remove numbers when doing comparison
			     var t = messages.message[messages.message.length-1]["text"][0].replace(/[0-9]/g, '');
			     var t2 = msg.text.replace(/[0-9]/g, '');
			     var garb = gibberish.detect(t2);
			     console.log(garb);
			     if(garb>60.0){
			       logger.log({level:'error',message:garb});
			       console.log("MESSAGE IS GARBAGE");
			        return res.end();
			     }
			     
			     console.log(t);
			     console.log(t2);
                            var similarity = stringSimilarity.compareTwoStrings(t, t2);
                            console.log("Similarity "+similarity);
			     if(similarity > 0.4){
			        console.log("MESSAGES too similar");
			        return res.end();
			     }
			     	
                            // WEAK SPAM PROTECTION
		             var count = 0;
		             var totalcount =0;
		             
		             console.log(messages.message.length)
		              for(var i=0;i<messages.message.length-1;i++){		              
		             	//Check if someone posted twice in a row
		             	
				if(messages.message[i]["ip"][0] == data_p){
				 totalcount +=1;
				 if(data_p == messages.message[i+1]["ip"][0]){
				    count +=1;
				 }
				} 
		              }
			      }
			      catch(e){
			       console.log(e);
			       msg_error = true;
			       return res.end();
			      }
			     // Only double post twice
			     if(count <= 7 && totalcount < 20 && !msg_error){
			     
			     //Remove old Message
			     while (result.data.message.length >= 25) {
                                    result.data.message.shift(); //remove first element
                            }
                            
                            //Add new message
                            result.data.message.push(msg);

                            const xml = builder.buildObject(result);
                            // write updated XML string to a file
                            fs.writeFile(localPath + "/chat/messages.xml", xml, (err) => {
                                if (err) {
                                   console.log(err);
                                }

                                console.log(`Updated XML is written to a new file.`);
                            });
			     }else{
			       console.log("MESSAGE BLOCKED");
			     }
                        });
                    });
                    }
                } catch (e) {
                    console.log(e);
                } finally {
                    res.end();
                }
            })
        } 
        
        // Wall Code
        
        else if (pathname == "/wall/APP/editor/save.php") {
            //console.log("update  /wall/APP/editor/items.xml");
            /*
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                try {
                    console.log(body);
                    var msg = JSON.parse(body);


                    if (validUrl.isUri(msg.php_imageLink)) {
                        msg = { item: { image: msg.php_imageLink, size: msg.php_imageSize, xPos: msg.php_xPos, yPos: msg.php_yPos, rotation: msg.php_rotationSetting } 
                        };

                        // read XML file
                        fs.readFile(localPath + "/wall/APP/editor/items.xml", "utf-8", (err, data) => {
                            if (err) {
                                console.log(err);
                            }

                            // convert XML data to JSON object
                            xml2js.parseString(data, (err, result) => {
                                if (err) {
                                   console.log(err);
                                }

                                //Remove old image if 12 or more images are on the wall 
                                while (result.data.item.length >= 12) {
                                    result.data.item.shift(); //remove first element
                                }

                                // add new message
                                result.data.item.push(msg);

                                const xml = builder.buildObject(result);
                                // write updated XML string to a file
                                fs.writeFile(localPath + "/wall/APP/editor/items.xml", xml, (err) => {
                                    if (err) {
                                        console.log(err);
                                    }

                                    console.log(`Updated XML is written to a new file.`);
                                });

                            });
                        });

                    } else {
                        console.log("Invalid url");
                        res.end();
                    }
                } catch (e) {
                    console.log(e);
                } finally {
                    res.end();
                }


            });
*/
        } else {
            console.log("UNKOWN POST HANDLE");
        }
    }


}).listen(config.PORT, function() {

    // The server object listens on port 3000
    console.log(`APP LISTENING ON ${config.HOST}:${config.PORT}`);
});


server.on('connection', function(socket) {
  sockets.push(socket);
  console.log("ACTIVE LISTENERS: " + sockets.length);

  // When you receive a message, send that message to every socket.
  socket.on('message', function(msg) {
    sockets.forEach(s => s.send(msg));
  });

  // When a socket closes, or disconnects, remove it from the array.
  socket.on('close', function() {
    sockets = sockets.filter(s => s !== socket);
  });
});


// Schedule tasks to be run on the server.
cron.schedule('* * * * *', function() {
    console.log('Running a task every minute');
    // Copying sample_file.txt to a different name
    fs.copyFile(localPath + "/counter/listeners_temp.xml", localPath + "/counter/listeners.xml", (err) => {
        if (err) {
            console.log("Oops! An Error Occured:", err);
        } else {
            // Printing the current file name after executing the function
            console.log("File Contents of async_copied_file:");
        }
    });
});




