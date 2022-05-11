var stationListcache;

// Shuffle state
// 0 = linear
// 1 = playlist shuffle
// 2 = global shuffle
var shuffleState = 1;

//list of shuffle station names
var shuffleStations = [];

const graffitiSoul = document.getElementById("graffitiSoul");
const playPause = document.getElementById("play-pause");

const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const songBar = document.getElementById("song-name");

const nextBtn = document.getElementById("next-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const prevBtn = document.getElementById("prev-btn");

const progressBar = document.getElementById('playbar-progress');
const largePlayIcon = document.getElementById("large-play-icon");

const gainBarValue = document.getElementById("gain-bar");

const wallpaper = document.getElementById("wallpaper");
var isCustomWallpaper = false;

// Screen mode Mobile = 0; Tablet = 1; Normal = 2; Large = 3;
var screenMode = 0;

// Load screen specific size styles
var w = window.innerWidth;
var fileref = document.createElement("link");

fileref.rel = "stylesheet";
fileref.type = "text/css";
if (w < 640) {
    //Load Mobile CSS
    fileref.id = "mobileCSS";
    fileref.href = "./styles/sm.css";
    screenMode = 0;
} else if (w < 768) {
    //Load Tablet CSS
    fileref.id = "tabletCSS";
    fileref.href = "./styles/md.css";
    screenMode = 1;
} else if (w < 1025) {
    //Load "normal" CSS
    fileref.id = "normalCSS";
    fileref.href = "./styles/lg.css";
    screenMode = 2;
} else {
    //Load Large screen
    fileref.id = "largeCSS";
    fileref.href = "./styles/xl.css";
    screenMode = 3;
}

document.getElementsByTagName("head")[0].appendChild(fileref);
// end style loading

function getStationList() {
    return new Promise((resolve, reject) => {
        // 1. Create a new XMLHttpRequest object
        let xhr = new XMLHttpRequest();

        // 2. Configure it: GET-request for the URL /article/.../load
        xhr.open('GET', './stations/stations.json');
        xhr.responseType = 'json';
        // 3. Send the request over the network
        xhr.send();

        // 4. This will be called after the response is received
        xhr.onload = function() {
            if (xhr.status != 200) { // analyze HTTP status of the response
                alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
            } else { // show the result
                //alert(`Done, got ${xhr.response.length} bytes`); // response is the server response

                if (xhr.response !== null) {
                    stationListcache = xhr.response;
                }
                console.log(xhr.response);
                resolve(xhr.response);
            }
        };

        xhr.onerror = function() {
            console.error("FAILURE TO OBTAIN STATION LIST");
            reject();
        };
    });
}

//Load classic station initally
function getStationData(stationselected) {

    if (stationListcache === undefined && typeof stationListcache == 'undefined') {
        stationselected = "classic";
    } else {
        var isValid = false;
        console.log(stationListcache.stations)
        for (var i = 0; i < stationListcache.stations.length; i++) {
            if (stationselected == stationListcache.stations[i].name) {
                isValid = true;
                break;
            }
        }
        if (!isValid) {
            stationselected = "classic";
        }
    }



    return new Promise((resolve, reject) => {
        // 1. Create a new XMLHttpRequest object
        let xhr = new XMLHttpRequest();

        // 2. Configure it: GET-request for the URL /article/.../load
        xhr.open('GET', './stations/' + stationselected + '/' + stationselected + '.json');
        xhr.responseType = 'json';
        // 3. Send the request over the network
        xhr.send();

        // 4. This will be called after the response is received
        xhr.onload = function() {
            if (xhr.status != 200) { // analyze HTTP status of the response
                alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
            } else { // show the result
                //alert(`Done, got ${xhr.response.length} bytes`); // response is the server response
                console.log(xhr.response);
                resolve(xhr.response);
            }
        };

        xhr.onerror = function() {
            alert("Playlist Request failed");
            reject();
        };
    });
}

// Set Station info locally
function setStation(stationData) {

    if (player) {
        player.pause();
        if (!contextCreated) {
            createContext();
        }

    }

    Howler.unload();
    player = new Player(stationData);
    // document.getElementById('wallpaper').src = stationData.wallpaper;
    pauseBtn.style.display = "none";
    playBtn.style.display = "";
    var r = document.querySelector(':root');
    r.style.setProperty('--primary-color', stationData.colorsObj.colors[0]);

    r.style.setProperty('--primary-dark-color', stationData.colorsObj.colors[1]);

    r.style.setProperty('--secondary-color', stationData.colorsObj.colors[2]);

    r.style.setProperty('--border-color', stationData.colorsObj.colors[3]);

    r.style.setProperty('--border2-color', stationData.colorsObj.colors[4]);

    r.style.setProperty('--outline-color', stationData.colorsObj.colors[5]);

    graffitiSoul.src = "./stations/" + stationData.stationName + "/icon.png";

    if (!isCustomWallpaper) {
        wallpaper.src = "./stations/" + stationData.stationName + "/wallpaper.jpg";
    }

    if (shuffleState != 0) {
        player.shuffle()
    }


    songBar.classList.remove("animation");
    songBar.style.display = "none";

    if (isUnlocked) {
        player.play();
    }


    //Set URL hash to be the urrent station playing
    window.location.hash = `#${stationData.stationName}`;
}





const settingsModal = document.getElementById('settings-modal');
const settingsModalContainer = document.getElementById('settings-modal-container');
const keyboardModal = document.getElementById('keyboard-modal');
const keyboardModalContainer = document.getElementById('keyboard-modal-container');

const radioModal = document.getElementById('radio-modal');
const chatModal = document.getElementById('chat-modal');
//const waveformLinearButton = document.getElementById('waveform-linear-button');

//const rainbowButton = document.getElementById('rainbow-button');

let selectedVisualizer = "waveformLinear";
let selectedColor = "rainbowD3";
let selectedBackgroundDirection = "45deg";


const visualizerObj = {

    waveformLinear: {
        //button: waveformLinearButton,
        visualizer: waveformLinear,
        prev: "fullScreen",
        next: "waveformCircle",
    }
};

const colorObj = {
    rainbowD3: {
        //button: rainbowButton,
        color: d3.interpolateRainbow,
        prev: "greysD3",
        next: "plasmaD3",
    },
};

let contextCreated = false;
let context;
let analyser;
let gain;

const createContext = () => {
    contextCreated = true;
    context = Howler.ctx;
    analyser = context.createAnalyser();
    analyser.minDecibels = -105;
    analyser.maxDecibels = -25;
    analyser.smoothingTimeConstant = 0.8;
    gain = Howler.masterGain;
    if (player.currentSong()) {
        let src = context.createMediaElementSource(player.currentSong()._sounds[0]._node);
        src.connect(gain);
    }
    gain.connect(analyser);
    updateGain(Howler.volume());
    analyser.connect(context.destination);
    createVisualizer();
};


function loadStationModal(Stationresobj) {
    if (Stationresobj !== null) {
        stationListcache = Stationresobj;
    }
    const stationListElem = document.getElementById("stationList");
    //10 is an arbritrary number 
    if (stationListElem.childElementCount <= 10) {
        for (stationindx in stationListcache.stations) {
            const stationobj = stationListcache.stations[stationindx];
            // Outter div
            let li = document.createElement('li');


            li.classList.add('station-row-box');

            // inner div
            let div1 = document.createElement('div');
            div1.classList.add('station-grid-box');
            div1.setAttribute('data', stationobj.name);
            // Set Load Station function for station elements 
            div1.onclick = function() {
                radioModal.style.display = "";
                const stationselected = this.getAttribute("data");

                getStationData(stationselected)
                    .then((res) => setStation(res))
                    .catch((err) => console.log(err));

            };
            //icon
            let stationicon = document.createElement('img');
            stationicon.classList.add('station-grid-image');
            stationicon.classList.add('lazy');
            stationicon.setAttribute('title', stationobj.name);
            // stationicon.setAttribute('alt', stationobj.name);
            stationicon.setAttribute('data-src', "stations/" + stationobj.name + "/icon.png");
            //desc
            let div11 = document.createElement('div');
            div11.classList.add('stationTitle');
            div11.innerHTML = stationobj.description;
            div1.appendChild(stationicon);
            div1.appendChild(div11);
            // shuffle div
            let div2 = document.createElement('div');
            div2.classList.add('stationShuffle');

            //shuffle checkbox if not live
            if (stationobj.isLive === undefined && typeof stationobj.isLive == 'undefined') {
                let shuffinput = document.createElement('input');
                shuffinput.setAttribute('type', "checkbox");
                shuffinput.setAttribute('id', "shuffleCheckBox_" + stationobj.name);
                shuffinput.setAttribute('data', stationobj.name);
                shuffinput.setAttribute('checked', "checked");
                shuffinput.setAttribute('onchange', "updateCheckedState(this)");
                shuffleStations.push(stationobj.name);
                div2.appendChild(shuffinput);
            }
            // supportlink div
            let div3 = document.createElement('div');
            div3.classList.add('stationShuffle');
            //add Support link if it exists
            if (stationobj.supportLink !== undefined && typeof stationobj.supportLink != 'undefined') {
                let supportLink = document.createElement('a');
                supportLink.style.color = "#eee";
                supportLink.style.textDecoration = "underline";
                // Create the text node for anchor element.
                var link = document.createTextNode("Link");


                // Append the text node to anchor element.
                supportLink.appendChild(link);

                // Set the title.
                supportLink.title = "Support the Original Release";
                supportLink.target = "_blank";

                // Set the href property.
                supportLink.href = stationobj.supportLink;
                div3.appendChild(supportLink);
            }

            li.appendChild(div1);
            li.appendChild(div2);

            li.appendChild(div3);
            stationListElem.appendChild(li);
            //     <li class="station-row-box">
            //     <div class="station-grid-box" data="vocaloid">
            //         <img class="station-grid-image lazy" title="vocaloid" alt="vocaloid" data-src="stations/vocaloid/icon.png">
            //         <div class="stationTitle">Funky Vocaloid Tracks</div>

            //     </div>
            //     <div class="stationShuffle">
            //         <input type="checkbox" id="flexCheckDefault" checked="checked">
            //     </div>
            // </li>
        }
    }

    lazyLoadInstance.update();
}

function updateCheckedState(checkboxelem) {
    if (checkboxelem.getAttribute("checked") == "checked") {
        checkboxelem.setAttribute('checked', "");
        shuffleStations.pop(checkboxelem.getAttribute('data'));
    } else {
        checkboxelem.setAttribute('checked', "checked");
        shuffleStations.push(checkboxelem.getAttribute('data'));
    }
}


document.getElementById('radio-link').onclick = () => {
    // Load station list data and cache it when needed
    if (stationListcache === undefined && typeof stationListcache == 'undefined') {
        getStationList()
            .then((res) => loadStationModal(res))
            .catch((err) => console.log(err));
    } else {
        loadStationModal(stationListcache);
    }

    radioModal.style.display = "flex";
};




document.getElementById('chatBtn').onclick = () => {
    chatModal.style.display = "block";
};

// Keyboard Controls Modal Control
document.getElementById('keyboard-controls').onclick = () => {
    keyboardModal.style.display = "block";
};
document.getElementById('setting-controls').onclick = () => {
    settingsModal.style.display = "block";
};


settingsModalContainer.onclick = e => {
    if (e.target === settingsModalContainer) settingsModal.style.display = "none";
};

keyboardModalContainer.onclick = e => {
    if (e.target === keyboardModalContainer) keyboardModal.style.display = "none";
};

radioModal.onclick = e => {
    if (e.target === radioModal) radioModal.style.display = "none";
    //Save settings
    shuffleStations = []
    for (var i = 0; i < stationListcache.stations.length; i++) {
        var stationElem = document.getElementById('shuffleCheckBox_' + stationListcache.stations[i].name);
        if (stationElem) {
            var ischecked = stationElem.getAttribute("checked");
            if (ischecked == "checked") {
                shuffleStations.push(stationListcache.stations[i].name);
            }
        }

    }
};

chatModal.onclick = e => {
    if (e.target === chatModal) chatModal.style.display = "";
};


const createVisualizer = () => {
    if (contextCreated) {

        changeAnimationStatus();
        removeVisualizer();
        try {
            visualizerObj[selectedVisualizer].visualizer(analyser, colorObj[selectedColor].color);
        } catch (e) {
            console.log("not supported in this browser")
        }
        const svg_ = document.getElementById('visualizer-svg');
        svg_.style.width = "100vw";
        svg_.style.height = "95vh";
        svg_.style.position = "absolute";
        svg_.style.zIndex = "1";
    }
};

const switchVisualizer = (newVisualizer) => {
    if (selectedVisualizer !== newVisualizer) {
        //visualizerObj[selectedVisualizer].button.classList.remove("active-visualizer");
        selectedVisualizer = newVisualizer;
        //visualizerObj[selectedVisualizer].button.classList.add("active-visualizer");
        createVisualizer();
    }
};

const prevVisualizer = () => {
    switchVisualizer(visualizerObj[selectedVisualizer].prev);
};
const nextVisualizer = () => {
    switchVisualizer(visualizerObj[selectedVisualizer].next);
};


const updateDisplayTime = () => {
    player.updateDisplayTime();
};

//TODO figure better way to manage static and live states
const switchPlayPause = () => {

    if (player.currentSong() !== null) {
        if (!player.currentSong().playing()) {
            player.play();
            pauseBtn.style.display = "";
            playBtn.style.display = "none";
            largePlayIcon.style.opacity = "";
            largePlayIcon.style.cursor = "";
        } else {
            player.pause();
            pauseBtn.style.display = "none";
            playBtn.style.display = "";
            largePlayIcon.style.opacity = 1;
            largePlayIcon.style.cursor = "pointer";
        }
    }
};




function getGlobalShuffle(stopRecursion) {
    if (stationListcache === undefined && typeof stationListcache == 'undefined' && !stopRecursion) {
        getStationList()
            .then((res) => loadStationModal(res))
            .catch((err) => console.log(err));
    }

}

shuffleBtn.onclick = () => {
    //current shuffle state is linear, make shuffle
    if (shuffleState == 0) {
        shuffleState++;
        document.getElementById('shuffle0').style.display = "none";
        document.getElementById('shuffle1').style.display = "block";
        player.shuffle();
    }
    //current shuffle state is shuffle, make global
    else if (shuffleState == 1) {
        shuffleState++;
        document.getElementById('shuffle1').style.display = "none";
        document.getElementById('shuffle2').style.display = "block";
        getGlobalShuffle(false);
    }
    //current shuffle state is global, make linear
    else {
        shuffleState = 0;
        document.getElementById('shuffle2').style.display = "none";
        document.getElementById('shuffle0').style.display = "block";
        player.linear();
    }
}

nextBtn.onclick = () => {
    //if global shufflestate get next station
    if (shuffleState == 2 && shuffleStations.length != 0) {
        var item = shuffleStations[Math.floor(Math.random() * shuffleStations.length)];
        //load inital settings
        getStationData(item)
            .then((res) => setStation(res))
            .catch((err) => console.log(err));
    } else {
        player.skip('next');
    }
}


prevBtn.onclick = () => {
    player.skip('prev');
}

playPause.onclick = () => {
    switchPlayPause();
};

document.getElementById('large-play').onclick = () => {
    switchPlayPause();
};

document.getElementById('submit').onclick = () => {

    imageExists(document.getElementById('wal').value, function(exists) {
        if (exists) {
            isCustomWallpaper = true;
            wallpaper.src = document.getElementById('wal').value;
        } else {
            //TODO display error message 
            console.log("BAD IMAGE");
        }
    })

    //TODO validate Visualization 

}



// The "callback" argument is called with either true or false
// depending on whether the image at "url" exists or not.
function imageExists(url, callback) {
    var img = new Image();
    img.onload = function() { callback(true); };
    img.onerror = function() { callback(false); };
    img.src = url;
}

//TODO Change to CTRL+KEYCODE when chat exists
document.onkeydown = (e) => {
    //e.preventDefault();
    if (player.currentSong !== null) {

        if (e.keyCode == 32) {
            switchPlayPause();
        }
        if (e.keyCode == 37) {
            var currDur = player.currentSong().seek();

            if (currDur < 5) {
                player.skip('prev');
            } else {
                player.seek(currDur - 5);
            }
            updateDisplayTime();
        }
        if (e.keyCode == 39) {
            var currDur = player.currentSong().seek();
            var finalDur = player.currentSong().duration();
            if (finalDur - currDur < 5) {
                player.skip('next');
            } else {
                player.seek(currDur + 5);
            }
            updateDisplayTime();
        }
        if (e.keyCode === 38) {
            if (Howler.volume() < 0.9) {
                updateGain(Howler.volume() + 0.1);
            } else if (Howler.volume() !== 1) {
                updateGain(1);
            }
        }

        if (e.keyCode === 40) {
            if (Howler.volume() > 0.1) {
                updateGain(Howler.volume() - 0.1);
            } else if (Howler.volume() !== 0) {
                updateGain(0);
            }
        }
        if (e.keyCode === 188) {
            player.skip('prev');
        }
        if (e.keyCode === 190) {
            player.skip('next');
        }
    }
};


const updateGain = (value) => {

    //Keep dividing until the value is in proper units
    while (value > 1) {
        value = value / 10;
    }
    gainBarValue.value = value * 10;
    Howler.volume(value);
};



document.getElementById("playbar").onclick = (e) => {
    if (player.currentSong() !== null) {
        const bounds = e.currentTarget.getBoundingClientRect();
        const percent = ((e.clientX - (bounds.left)) / bounds.width);
        player.seekPer(percent);
    }
};

setInterval(() => {
    if (player) {
        if (player.currentSong() !== null) {
            updateDisplayTime();
        } else {
            progressBar.style.width = "0%";
        }
    }

}, 5000);

window.onresize = () => {
    createVisualizer();
    var w = window.innerWidth;
    var fileref = document.createElement("link");

    fileref.rel = "stylesheet";
    fileref.type = "text/css";
    if (w < 640 && document.getElementById("mobileCSS") == null) {
        //Load Mobile CSS
        fileref.href = "./styles/sm.css";
        fileref.id = "mobileCSS";
    } else if (w < 768 && document.getElementById("tabletCSS") == null) {
        //Load Tablet CSS
        fileref.href = "./styles/md.css";
        fileref.id = "tabletCSS";
    } else if (w < 1025 && document.getElementById("normalCSS") == null) {
        //Load "normal" CSS
        fileref.href = "./styles/lg.css";
        fileref.id = "normalCSS";
    } else if (document.getElementById("largeCSS") == null) {
        //Load Large screen
        fileref.href = "./styles/xl.css";
        fileref.id = "largeCSS";
    }
    document.getElementsByTagName("head")[0].appendChild(fileref);
};

var lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
});

lazyLoadInstance.update();






const checkOnlineStatus = async() => {
    Offline.check();
    // Create a reference for the Wake Lock.
    let wakeLock = null;

    // only try to keep the screen alive if on mobile
    if (screenMode == 0) {
        // create an async function to request a wake lock
        try {
            wakeLock = await navigator.wakeLock.request('screen');
            console.log('Wake Lock is active!');
        } catch (err) {
            // The Wake Lock request has failed - usually system related, such as battery.
            console.log(err);
        }
    }

};

setInterval(async() => {
    await checkOnlineStatus();
}, 60000); //60000 every minute


//TODO 
Offline.options = { // Should we check the connection status immediatly on page load.
    checkOnLoad: false,

    // Should we monitor AJAX requests to help decide if we have a connection.
    interceptRequests: false,

    // Should we automatically retest periodically when the connection is down (set to false to disable).
    reconnect: {
        // How many seconds should we wait before rechecking.
        initialDelay: 3,

        // How long should we wait between retries.
        delay: (1.5, 1)
    },

    // Should we store and attempt to remake requests which fail while the connection is down.
    requests: true,

    // Should we show a snake game while the connection is down to keep the user entertained?
    // It's not included in the normal build, you should bring in js/snake.js in addition to
    // offline.min.js.
    game: false,
    checks: { xhr: { url: '/styles/dots.png' } } //Dots are a small 
}

Offline.on('up', function() {
    // alert('up');
});
Offline.on('down', function() {
    //alert('down')
});