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

const nextBtn = document.getElementById("next-btn");

const prevBtn = document.getElementById("prev-btn");

const progressBar = document.getElementById('playbar-progress');
const largePlayIcon = document.getElementById("large-play-icon");

const gainBarValue = document.getElementById("gain-bar");
const personalLinks = document.getElementById("personal-links");
const personalLinksContainer = document.getElementById("personal-links-container");
const projectName = document.getElementById("project-name");
const StationCollection = document.getElementsByClassName("station-grid-box");


let baseurl = "https://jsrfl.us-east-1.linodeobjects.com/music/stations/";
audio.src = 'https://jsrfl.us-east-1.linodeobjects.com/music/artists/2 Mello/2 Mello - 24 Hour Party People.mp3';

console.log("Currently Playing: " + audio.src);
audio.load();


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
    currentStation = stationData.stationName;
    app.style.backgroundImage = "url(./stations/" + currentStation + "/images/wallpaper.jpg)";
    graffitiSoul.src = "./stations/" + currentStation + "/images/icon.png";
    currentPlaylist = stationData.songList;
    //get random  song index 
    currentSongIndex = currentPlaylist.length * Math.random() | 0;
    currentHowl = currentPlaylist[currentSongIndex];
    console.log(currentHowl)
    audio.src = baseurl + "/" + currentStation + "/" + currentHowl + '.mp3'

}


//load inital settings
getStationData("classic")
    .then((res) => setStation(res))
    .catch((err) => console.log(err));

// Set Load Station function for station elements 
for (let i = 0; i < StationCollection.length; i++) {
    StationCollection[i].onclick = function() {
        radioModal.style.display = "";
        const stationselected = StationCollection[i].getAttribute("data");

        getStationData(stationselected)
            .then((res) => setStation(res))
            .catch((err) => console.log(err));
    };
}


const keyboardModal = document.getElementById('keyboard-modal');
const radioModal = document.getElementById('radio-modal');

const waveformLinearButton = document.getElementById('waveform-linear-button');

const rainbowButton = document.getElementById('rainbow-button');

let selectedVisualizer = "waveformLinear";
let selectedColor = "rainbowD3";
let selectedBackgroundDirection = "45deg";

if (window.innerWidth <= 824) {
    personalLinks.style.top = "38px";
}

const visualizerObj = {

    waveformLinear: {
        button: waveformLinearButton,
        visualizer: waveformLinear,
        prev: "fullScreen",
        next: "waveformCircle",
    }
};

const colorObj = {
    rainbowD3: {
        button: rainbowButton,
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


document.getElementById('radio-link').onclick = () => {
    radioModal.style.display = "block";
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
        visualizerObj[selectedVisualizer].visualizer(analyser, colorObj[selectedColor].color);
        const svg_ = document.getElementById('visualizer-svg');
        svg_.style.width = "100%";
        svg_.style.height = "95vh";
    }
};

const switchVisualizer = (newVisualizer) => {
    if (selectedVisualizer !== newVisualizer) {
        visualizerObj[selectedVisualizer].button.classList.remove("active-visualizer");
        selectedVisualizer = newVisualizer;
        visualizerObj[selectedVisualizer].button.classList.add("active-visualizer");
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

nextBtn.onclick = () => {
    if (!contextCreated) {
        createContext();
    }
    currentSongIndex++;
    if (currentSongIndex > currentPlaylist.length - 1) {
        currentSongIndex = 0;
    }
    currentHowl = currentPlaylist[currentPlaylist.length * Math.random() | 0];
    console.log(currentHowl)

    audio.src = baseurl + "/" + currentStation + "/" + currentHowl + '.mp3'
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
    currentHowl = currentPlaylist[currentPlaylist.length * Math.random() | 0];
    console.log(currentHowl)
    audio.src = baseurl + "/" + currentStation + "/" + currentHowl + '.mp3'
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
    if (e.keyCode === 65) prevColor();
    if (e.keyCode === 68) nextColor();


    if (e.keyCode === 82) {
        setRandomColors();
    }

    if (e.keyCode === 81) {
        rotateBackgroundLeft();
    }

    if (e.keyCode === 69) {
        rotateBackgroundRight();
    }

    if (e.keyCode === 87) prevVisualizer();
    if (e.keyCode === 83) nextVisualizer();

    if (e.keyCode === 70) switchFullScreen();
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
    currentHowl = currentPlaylist[currentPlaylist.length * Math.random() | 0];
    console.log(currentHowl)
    audio.src = baseurl + "/" + currentStation + "/" + currentHowl + '.mp3'
    audio.play();
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
        personalLinks.style.top = "38px";
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