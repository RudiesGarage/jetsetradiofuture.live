var http = require('http');
var fs = require('fs');
var URL = require("url").URL;
var mime = require('mime');
const path = require('path');
const xml2js = require('xml2js');
var validUrl = require('valid-url');
var nim = require('nimble');
const builder = new xml2js.Builder();
// Create a server object
http.createServer(function(req, res) {

    // http header

    // Get the url and parse

    const myUrl = new URL(req.url, "http://localhost:3000/");

    // Get url path
    var pathname = myUrl.pathname;

    const ext = path.extname(pathname); // .html
    let mimeType = mime.getType("/home/dem/www/jetsetradiofuture" + decodeURI(pathname));
    console.log(req.method + ": " + pathname);
    if (req.method === "GET") {
        if (pathname == "/") {
            pathname = "/index.html";
        }
        if (pathname == "/chat/serverTime.php") {
            res.writeHead(200, "text/xml;charset=UTF-8");
            // => 'text/plain'     
            res.write("<?xml version=\"1.0\" encoding=\"UTF-8\"?><data><serverHours>12</serverHours><serverMinutes>26</serverMinutes><serverSeconds>26</serverSeconds><serverMonth>October</serverMonth><serverDay>14</serverDay><serverWeekday>Thursday</serverWeekday><serverYear>2021</serverYear><serverFormattedDate>October 14, 2021 0:26:26</serverFormattedDate><serverTime>1634171186</serverTime></data>");
            return res.end();
        } else {
            fs.readFile("/home/dem/www/jetsetradiofuture" + decodeURI(pathname), function(err, data) {
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

                    // msg.chatmessage += "&lt;/font&gt;";
                    msg = { username: msg.username, text: msg.chatmessage, ip: 0, timestamp: 0, color: msg.color };

                    // read XML file
                    fs.readFile("/home/dem/www/jetsetradiofuture" + "/chat/messages.xml", "utf-8", (err, data) => {
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
                            fs.writeFile("/home/dem/www/jetsetradiofuture" + "/chat/messages.xml", xml, (err) => {
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
                        fs.readFile("/home/dem/www/jetsetradiofuture" + "/wall/APP/editor/items.xml", "utf-8", (err, data) => {
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
                                fs.writeFile("/home/dem/www/jetsetradiofuture" + "/wall/APP/editor/items.xml", xml, (err) => {
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


}).listen(3000, function() {

    // The server object listens on port 3000
    console.log("server start at port 3000");
});