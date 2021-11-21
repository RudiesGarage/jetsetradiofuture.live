var http = require('http');
var fs = require('fs');
var URL = require("url").URL;
var mime = require('mime-types');
const path = require('path');
const xml2js = require('xml2js');
var validUrl = require('valid-url');
const isImageUrl = require('is-image-url');

const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);


const builder = new xml2js.Builder();


const config = require('./config.js'); //Load Env Vars
console.log(`NODE_ENV=${config.NODE_ENV}`);

let baseURL = "http://" + config.HOST + ":" + config.PORT;
let localPath = config.JSRF_PATH;

// Create a server object
http.createServer(function(req, res) {

    // Get the url and parse
    const myUrl = new URL(req.url, baseURL);

    // Get url path
    var pathname = myUrl.pathname;

    const ext = path.extname(pathname); // .html
    var mimeType = null;
    //Mime package does not support ~list.js files for some reason, need to do it manually
    if (ext == ".js") {
        mimeType = { 'Content-type': 'application/javascript' };
    } else {
        mimeType = mime.contentType(ext);
    }

    console.log(req.method + ": " + pathname);
    if (req.method === "GET") {
        if (pathname == "/") {
            pathname = "/index.html";
            mimeType = mime.contentType(path.extname(pathname));
        }
        if (pathname == "/chat/serverTime.php") {
            res.writeHead(200, "text/xml;charset=UTF-8");
            // => 'text/plain'     
            let date_ob = new Date(); //in seconds
            // current date
            // adjust 0 before single digit date
            let date = ("0" + date_ob.getDate()).slice(-2);

            // current month
            let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

            // current year
            let year = date_ob.getFullYear();

            // current hours
            let hours = date_ob.getHours();

            // current minutes
            let minutes = date_ob.getMinutes();

            // current seconds
            let seconds = date_ob.getSeconds();
            res.write("<?xml version=\"1.0\" encoding=\"UTF-8\"?><data><serverHours>" + hours +
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
                "</serverFormattedDate><serverTime>" + seconds + "</serverTime></data>");
            return res.end();
        } else {
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
    } else if (req.method == "POST") {
        if (pathname == "/counter/counter.php") {
            console.log("update  /counter/listeners.xml");
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                try {
                    var msg = JSON.parse(body);
                    //console.log(msg);
                    let date_ob = new Date();
                    // read XML file
                    // why was this not made with sockets?
                    fs.readFile(localPath + "/counter/listeners.xml", "utf-8", (err, data) => {
                        if (err) {
                            throw err;
                        }

                        // convert XML data to JSON object
                        xml2js.parseString(data, (err, result) => {
                            if (err) {
                                throw err;
                            }

                            // add new message
                            result.data.user.push({ ip: "", timestamp: date_ob.getSeconds() });

                            const xml = builder.buildObject(result);
                            // write updated XML string to a file
                            fs.writeFile(localPath + "/counter/listeners.xml", xml, (err) => {
                                if (err) {
                                    throw err;
                                }
                                console.log(`Updated XML is written to a new file.`);
                            });

                        });
                    });
                } catch (e) {
                    console.log(e);
                } finally {
                    res.end();
                }
            });
        } else if (pathname == "/chat/save.php") {
            console.log("update  /chat/messages.xml");
            //TODO update /chat/message.xml
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                try {
                    console.log(body);

                    var msg = JSON.parse(body);

                    //force https
                    msg.chatmessage = msg.chatmessage.replace('http://', 'https://');
                    //Sanitize to prevent XSS
                    msg.chatmessage = DOMPurify.sanitize(msg.chatmessage);

                    console.log(msg.chatmessage);
                    //if the url is a valid image then set image template
                    if (isImageUrl(msg.chatmessage)) {
                        msg.chatmessage = "<br/><a href=\"" + msg.chatmessage + "\" target=\"_blank\" rel=\"noopener\" style=\"color:#00bfc1;\"><img src=\"" + msg.chatmessage + "\" class=\"imageController\" style=\"position:relative;height:25%;z-index:899;image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:pixelated;image-rendering:optimize-contrast;-ms-interpolation-mode:nearest-neighbor;\" onerror=\"this.src=\'" + baseURL + "/media/404.gif\'\"></a>";
                    }
                    let ts = Math.floor(Date.now() / 1000); //in seconds
                    msg = { username: msg.username, text: msg.chatmessage, ip: 0, timestamp: ts, color: msg.color };

                    // read XML file
                    fs.readFile(localPath + "/chat/messages.xml", "utf-8", (err, data) => {
                        if (err) {
                            throw err;
                        }

                        // convert XML data to JSON object
                        xml2js.parseString(data, (err, result) => {
                            if (err) {
                                throw err;
                            }

                            // print JSON object
                            //console.log(JSON.stringify(result, null, 4));

                            //Remove old image
                            delete result.data.message[0];

                            // add new message
                            result.data.message.push(msg);

                            const xml = builder.buildObject(result);
                            // write updated XML string to a file
                            fs.writeFile(localPath + "/chat/messages.xml", xml, (err) => {
                                if (err) {
                                    throw err;
                                }

                                console.log(`Updated XML is written to a new file.`);
                            });

                        });
                    });
                } catch (e) {
                    console.log(e);
                } finally {
                    res.end();
                }
            })
        } else if (pathname == "/wall/APP/editor/save.php") {
            //console.log("update  /wall/APP/editor/items.xml");
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                try {
                    console.log(body);
                    var msg = JSON.parse(body);


                    if (validUrl.isUri(msg.php_imageLink)) {
                        msg = { item: { image: msg.php_imageLink, size: msg.php_imageSize, xPos: msg.php_xPos, yPos: msg.php_yPos, rotation: msg.php_rotationSetting } };

                        // read XML file
                        fs.readFile(localPath + "/wall/APP/editor/items.xml", "utf-8", (err, data) => {
                            if (err) {
                                throw err;
                            }

                            // convert XML data to JSON object
                            xml2js.parseString(data, (err, result) => {
                                if (err) {
                                    throw err;
                                }

                                // print JSON object
                                //console.log(JSON.stringify(result, null, 4));
                                //Remove old image
                                delete result.data.item[0];

                                // add new message
                                result.data.item.push(msg);

                                const xml = builder.buildObject(result);
                                // write updated XML string to a file
                                fs.writeFile(localPath + "/wall/APP/editor/items.xml", xml, (err) => {
                                    if (err) {
                                        throw err;
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
            // //TODO update  /wall/APP/editor/items.xml

        } else {
            console.log("UNKOWN POST HANDLE");
        }
    }


}).listen(config.PORT, function() {

    // The server object listens on port 3000
    console.log(`APP LISTENING ON http://${config.HOST}:${config.PORT}`);
});