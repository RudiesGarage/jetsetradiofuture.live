// Volume / Gain
var currentVol = 0.5;

// Current loaded playlist
var currentPlaylist = [];
var currentStation = "";

// Current Song/Howl
var currentHowl = "";
var currentSongIndex = 0;

const audio = document.getElementById("audio");

const app = document.getElementById("app");
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
const personalLinks = document.getElementById("personal-links");
const personalLinksContainer = document.getElementById("personal-links-container");
const projectName = document.getElementById("project-name");


let baseurl = "https://jsrfl.us-east-1.linodeobjects.com/music/stations/";
audio.src = './stations/static.mp3';

console.log("Currently Playing: " + audio.src);
audio.load();


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

//Load classic station initally
function getStationData(stationselected) {
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
    pauseBtn.style.display = "none";
    playBtn.style.display = "";
    var r = document.querySelector(':root');
    r.style.setProperty('--primary-color', stationData.colorsObj.colors[0]);

    r.style.setProperty('--primary-dark-color', stationData.colorsObj.colors[1]);

    r.style.setProperty('--secondary-color', stationData.colorsObj.colors[2]);

    r.style.setProperty('--border-color', stationData.colorsObj.colors[3]);

    r.style.setProperty('--border2-color', stationData.colorsObj.colors[4]);

    r.style.setProperty('--outline-color', stationData.colorsObj.colors[5]);

    currentStation = stationData.stationName;
    app.style.backgroundImage = "url(./stations/" + currentStation + "/wallpaper.jpg)";
    graffitiSoul.src = "./stations/" + currentStation + "/icon.png";
    currentPlaylist = stationData.songList;

    shuffle(currentPlaylist)

    //get random  song index 
    currentSongIndex = currentPlaylist.length * Math.random() | 0;
    currentHowl = currentPlaylist[currentSongIndex];
    console.log(currentHowl)
    songBar.classList.remove("animation");
    songBar.style.display = "none";
    audio.src = baseurl + "/" + currentStation + "/" + currentHowl + '.mp3'

    if (!contextCreated) {
        createContext();
    }
    audio.play();
}


//load inital settings
getStationData("classic")
    .then((res) => setStation(res))
    .catch((err) => console.log(err));




const keyboardModal = document.getElementById('keyboard-modal');
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

let AudioContext = window.AudioContext || window.webkitAudioContext;
let contextCreated = false;
let context;
let analyser;
let gain;

const createContext = () => {
    contextCreated = true;
    context = new AudioContext();
    analyser = context.createAnalyser();
    analyser.minDecibels = -105;
    analyser.maxDecibels = -25;
    analyser.smoothingTimeConstant = 0.8;
    gain = context.createGain();
    let src = context.createMediaElementSource(audio);
    src.connect(gain);
    gain.connect(analyser);
    updateGain(currentVol);
    analyser.connect(context.destination);
    createVisualizer();
};


/*
    infoLink.onclick = () => {
        informationModal.style.display = "";
    };

    document.getElementById('close-modal').onclick = () => {
        informationModal.style.display = "none";
    };

    informationModal.onclick = e => {
        if (e.target === informationModal) informationModal.style.display = "none";
    };
*/

let stationListcache;

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
            stationicon.setAttribute('alt', stationobj.name);
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
            let shuffinput = document.createElement('input');
            shuffinput.setAttribute('type', "checkbox");
            shuffinput.setAttribute('id', "flexCheckDefault");
            shuffinput.setAttribute('checked', "checked");
            div2.appendChild(shuffinput);

            li.appendChild(div1);
            li.appendChild(div2);
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

document.getElementById('radio-link').onclick = () => {
    // Load station list data and cache it when needed
    if (stationListcache === undefined && typeof stationListcache == 'undefined') {
        getStationList()
            .then((res) => loadStationModal(res))
            .catch((err) => console.log(err));
    } else {
        loadStationModal(stationListcache);
    }

    radioModal.style.display = "block";
};




document.getElementById('chatBtn').onclick = () => {
    chatModal.style.display = "block";
};

// Keyboard Controls Modal Control
document.getElementById('keyboard-controls').onclick = () => {
    keyboardModal.style.display = "block";
};


document.getElementById('keyboard-close-modal').onclick = () => {
    keyboardModal.style.display = "";
};

keyboardModal.onclick = e => {
    if (e.target === keyboardModal) keyboardModal.style.display = "";
};

radioModal.onclick = e => {
    if (e.target === radioModal) radioModal.style.display = "";
};

chatModal.onclick = e => {
    if (e.target === chatModal) chatModal.style.display = "";
};

let timeOut;

document.onmousemove = () => {
    //showElements();
    // clearTimeout(timeOut);
    //timeOut = setTimeout(() => hideElements(), 3000);
};

document.onclick = () => {
    // showElements();
    // clearTimeout(timeOut);
    // timeOut = setTimeout(() => hideElements(), 3000);
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
        svg_.style.width = "100%";
        svg_.style.height = "95vh";
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

const prevColor = () => {
    switchColor(colorObj[selectedColor].prev);
};
const nextColor = () => {
    switchColor(colorObj[selectedColor].next);
};

const updateDisplayTime = () => {
    progressBar.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
};

const switchPlayPause = () => {
    if (!contextCreated) {
        createContext();
    }
    if (context && audio.src !== "") {
        if (audio.paused) {
            audio.load();
            audio.play();
            //sound.play();
            pauseBtn.style.display = "";
            playBtn.style.display = "none";
            largePlayIcon.style.opacity = "";
            largePlayIcon.style.cursor = "";
        } else {
            audio.pause();
            //sound.pause();
            pauseBtn.style.display = "none";
            playBtn.style.display = "";
            largePlayIcon.style.opacity = 1;
            largePlayIcon.style.cursor = "pointer";
        }
    }
};

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

shuffleBtn.onclick = () => {
    if (currentPlaylist) {
        shuffle(currentPlaylist);
    }
}

nextBtn.onclick = () => {
    if (!contextCreated) {
        createContext();
    }
    currentSongIndex++;
    if (currentSongIndex > currentPlaylist.length - 1) {
        currentSongIndex = 0;
    }
    currentHowl = currentPlaylist[currentSongIndex];
    console.log(currentHowl)

    audio.src = baseurl + "/" + currentStation + "/" + currentHowl + '.mp3'
    audio.load();
    var promise = audio.play();
    if (promise !== undefined) {
        promise.then(_ => {
            // play started!
        }).catch(error => {
            // play was prevented.
            // Show a "Play" button so that user can start playback.
        });
    }

}

prevBtn.onclick = () => {
    if (!contextCreated) {
        createContext();
    }
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = currentPlaylist.length - 1;
    }
    //currentHowl = currentPlaylist[currentPlaylist.length * Math.random() | 0];
    currentHowl = currentPlaylist[currentSongIndex];
    console.log(currentHowl)
    audio.src = baseurl + "/" + currentStation + "/" + currentHowl + '.mp3'
    audio.load();
    var promise = audio.play();
    if (promise !== undefined) {
        promise.then(_ => {
            // play started!
        }).catch(error => {
            // play was prevented.
            // Show a "Play" button so that user can start playback.
        });
    }
}

playPause.onclick = () => {
    switchPlayPause();
};

document.getElementById('large-play').onclick = () => {
    switchPlayPause();
};


document.onkeydown = (e) => {
    e.preventDefault();
    if (audio.src !== "") {

        if (e.keyCode == 32) {
            switchPlayPause();
        }
        if (e.keyCode == 37) {
            if (audio.currentTime < 5) {
                audio.currentTime = 0;
            } else {
                audio.currentTime -= 5;
            }
            updateDisplayTime();
        }
        if (e.keyCode == 39) {
            if (audio.duration - audio.currentTime < 5) {
                audio.currentTime = audio.duration;
            } else {
                audio.currentTime += 5;
            }
            updateDisplayTime();
        }
        if (e.keyCode === 38) {
            if (gain.gain.value < 0.9) {
                updateGain(gain.gain.value + 0.1);
            } else if (gain.gain.value !== 1) {
                updateGain(1);
            }
        }

        if (e.keyCode === 40) {
            if (gain.gain.value > 0.1) {
                updateGain(gain.gain.value - 0.1);
            } else if (gain.gain.value !== 0) {
                updateGain(0);
            }
        }
    }
};


//TODO update volume
const updateGain = (value) => {
    if (!contextCreated) {
        createContext();
    }
    while (value > 1) {
        value = value / 10;
    }
    gain.gain.value = value;
    gainBarValue.value = value * 10;
};

// document.getElementById("gain-bar").onclick = (e) => {
//     if (context) {
//         const bounds = e.currentTarget.getBoundingClientRect();
//         const percent = ((e.clientX - (bounds.left)) / bounds.width);
//         updateGain(percent);
//     }
// };

// document.getElementById("gain-title").onclick = () => {
//     if (gain.gain.value !== 0) {
//         updateGain(0);
//     } else {
//         updateGain(1);
//     }
// };

audio.onpause = () => {
    pauseBtn.style.display = "none";
    playBtn.style.display = "";
    largePlayIcon.style.opacity = 1;
    largePlayIcon.style.cursor = "pointer";
};

audio.onplay = () => {
    var t = decodeURIComponent(audio.src.substr(audio.src.lastIndexOf('/') + 1, audio.src.lastIndexOf('.') - 1));
    var t = t.substring(0, t.lastIndexOf('.'));
    document.getElementById('track-name').innerHTML = `<span>${t}</span>`;

    songBar.classList.add("animation");
    songBar.style.display = "block";
    pauseBtn.style.display = "";
    playBtn.style.display = "none";
    largePlayIcon.style.opacity = 0;
    largePlayIcon.style.cursor = "";
};

//Check if track name is overflowing
function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}


// on end play next song in the playlist
audio.onended = () => {
    currentSongIndex++;
    if (currentSongIndex > currentPlaylist.length - 1) {
        currentSongIndex = 0;
    }
    currentHowl = currentPlaylist[currentSongIndex];
    console.log(currentHowl)
    audio.src = baseurl + "/" + currentStation + "/" + currentHowl + '.mp3'
    audio.play();
    songBar.classList.remove("animation");
    songBar.style.display = "none";
};

document.getElementById("playbar").onclick = (e) => {
    if (audio.src !== "") {
        const bounds = e.currentTarget.getBoundingClientRect();
        const percent = ((e.clientX - (bounds.left)) / bounds.width);
        audio.currentTime = (percent * audio.duration);
        progressBar.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
        updateDisplayTime();
    }
};

setInterval(() => {
    if (audio.src !== "") {
        updateDisplayTime();
    } else {
        progressBar.style.width = "0%";
    }
}, 1000);

window.onresize = () => {
    createVisualizer();
    if (window.innerWidth <= 824) {
        // personalLinks.style.top = "38px";
        if (personalLinksContainer.style.opacity === "0") {
            // infoLink.style.transform = "translate(0, -38px)";
            personalLinksContainer.style.transform = "translate(0, -38px)";
        }
    } else {
        personalLinks.style.top = "";
        //infoLink.style.transform = "";
        personalLinksContainer.style.transform = "";
    }
};

var lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
});

lazyLoadInstance.update();