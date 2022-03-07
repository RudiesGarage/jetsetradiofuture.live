window.onload = () => {



    var sound = new Howl({
        src: ['2 Mello - BREAK DOWN BREAK UP ft. Anton Corazza.mp3'],
        html5: true,
        usingWebAudio: true,
        format: ['webm', 'mp3'],
        loop: false,
        autoSuspend: false,
        volume: 0.5,
        onplayerror: function() {
            sound.once('unlock', function() {
                sound.play();
            });
        },
        onplay: function() {
            // Display the duration.
            //duration.innerHTML = self.formatTime(Math.round(sound.duration()));

            // Start updating the progress of the track.
            //requestAnimationFrame(self.step.bind(self));

            // Start the wave animation if we have already loaded
            // wave.container.style.display = 'block';
            //bar.style.display = 'none';
            //pauseBtn.style.display = 'block';
        },
        onload: function() {
            // Start the wave animation.
            //wave.container.style.display = 'block';
            // bar.style.display = 'none';
            // loading.style.display = 'none';
        },
        end: function() {
            console.log('Finished!');
        },
        onunlock: function() {
            console.log('UNLOCKED!');
        },
        onseek: function() {
            console.log('SEEK!');
        },
        onpause: function() {
            // Stop the wave animation.
            //wave.container.style.display = 'none';
            // bar.style.display = 'block';
        },
        onstop: function() {
            // Stop the wave animation.
            // wave.container.style.display = 'none';
            //  bar.style.display = 'block';
        },
    });

    console.log(sound);
    // Change global volume.
    Howler.volume(0.5);


    const audio = document.getElementById("audio");

    //todo manage src and audio element
    audio.src = sound._src;
    console.log(audio.src);
    audio.load();


    const playPause = document.getElementById("play-pause");
    const progressBar = document.getElementById('playbar-progress');
    const timeProgress = document.getElementById('time-progress');
    const timeLeft = document.getElementById('time-left');
    const largePlayIcon = document.getElementById("large-play-icon");
    const gainBarValue = document.getElementById("gain-bar-value");
    const demoContainer = document.getElementById('demo-button-container');

    const app = document.getElementById("app");
    const leftSidebar = document.getElementById("left-sidebar");
    const rightSidebar = document.getElementById("right-sidebar");
    const footerAudioPlayer = document.getElementById("footer-audio-player");
    // const rightGainBar = document.getElementById("right-gain-bar");
    const personalLinks = document.getElementById("personal-links");
    const personalLinksContainer = document.getElementById("personal-links-container");
    const projectName = document.getElementById("project-name");
    const favicon = document.getElementById('favicon');
    const StationCollection = document.getElementsByClassName("station-grid-box");
    for (let i = 0; i < StationCollection.length; i++) {
        StationCollection[i].onclick = function() {
            radioModal.style.display = "";
            const stationselected = StationCollection[i].getAttribute("data");
            alert(stationselected);

            // TODO handle get request

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

    const directionArr = ["0deg", "45deg", "90deg", "135deg", "180deg", "225deg", "270deg", "315deg"];

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
        updateGain(0.5);
        analyser.connect(context.destination);
        createVisualizer();
    };

    const hideElements = () => {
        if (!audio.paused) {
            //backgroundColorHeader.style.opacity = 0;
            //leftSidebar.style.opacity = 0;
            //rightSidebar.style.opacity = 0;
            footerAudioPlayer.style.opacity = 0;
            // rightGainBar.style.opacity = 0;
            personalLinksContainer.style.opacity = 0;
            personalLinks.style.paddingRight = "7px";
            projectName.style.transition = "1s";
            projectName.style.opacity = 0;
            // demoContainer.style.opacity = 0;
            if (window.innerWidth <= 824) {
                //infoLink.style.transform = "translate(0, -38px)";
                personalLinksContainer.style.transform = "translate(0, -38px)";
            }
        }
    };

    const showElements = () => {
        // backgroundColorHeader.style.opacity = "";
        //leftSidebar.style.opacity = "";
        //rightSidebar.style.opacity = "";
        footerAudioPlayer.style.opacity = "";
        // rightGainBar.style.opacity = "";
        personalLinksContainer.style.opacity = "";
        personalLinks.style.paddingRight = "";
        projectName.style.opacity = "";
        projectName.style.transition = "";
        // demoContainer.style.opacity = "";
        //infoLink.style.transform = "";
        personalLinksContainer.style.transform = "";
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
    document.getElementById('radio-close-modal').onclick = () => {
        radioModal.style.display = "";
    };

    // Variables to target our base class,  get carousel items, count how many carousel items there are, set the slide to 0 (which is the number that tells us the frame we're on), and set motion to true which disables interactivity.
    var itemClassName = "station-grid-wrapper carousel__photo";
    items = document.getElementsByClassName(itemClassName),
        totalItems = items.length,
        slide = 0,
        moving = true;

    // To initialise the carousel we'll want to update the DOM with our own classes
    function setInitialClasses() {

        // Target the last, initial, and next items and give them the relevant class.
        // This assumes there are three or more items.
        items[totalItems - 1].classList.add("prev");
        items[0].classList.add("active");
        items[1].classList.add("next");
    }

    // Set click events to navigation buttons

    function setEventListeners() {
        var next = document.getElementsByClassName('carousel__button--next')[0],
            prev = document.getElementsByClassName('carousel__button--prev')[0];

        next.addEventListener('click', moveNext);
        prev.addEventListener('click', movePrev);
    }

    // Disable interaction by setting 'moving' to true for the same duration as our transition (0.5s = 500ms)
    function disableInteraction() {
        moving = true;

        setTimeout(function() {
            moving = false
        }, 500);
    }

    function moveCarouselTo(slide) {

        // Check if carousel is moving, if not, allow interaction
        if (!moving) {

            // temporarily disable interactivity
            disableInteraction();

            // Preemptively set variables for the current next and previous slide, as well as the potential next or previous slide.
            var newPrevious = slide - 1,
                newNext = slide + 1,
                oldPrevious = slide - 2,
                oldNext = slide + 2;

            // Test if carousel has more than three items
            if ((totalItems - 1) > 3) {

                // Checks if the new potential slide is out of bounds and sets slide numbers
                if (newPrevious <= 0) {
                    oldPrevious = (totalItems - 1);
                } else if (newNext >= (totalItems - 1)) {
                    oldNext = 0;
                }

                // Check if current slide is at the beginning or end and sets slide numbers
                if (slide === 0) {
                    newPrevious = (totalItems - 1);
                    oldPrevious = (totalItems - 2);
                    oldNext = (slide + 1);
                } else if (slide === (totalItems - 1)) {
                    newPrevious = (slide - 1);
                    newNext = 0;
                    oldNext = 1;
                }

                // Now we've worked out where we are and where we're going, by adding and removing classes, we'll be triggering the carousel's transitions.

                // Based on the current slide, reset to default classes.
                items[oldPrevious].className = itemClassName;
                items[oldNext].className = itemClassName;

                // Add the new classes
                items[newPrevious].className = itemClassName + " prev";
                items[slide].className = itemClassName + " active";
                items[newNext].className = itemClassName + " next";
            }
        }
    }

    // Next navigation handler
    function moveNext() {

        // Check if moving
        if (!moving) {

            // If it's the last slide, reset to 0, else +1
            if (slide === (totalItems - 1)) {
                slide = 0;
            } else {
                slide++;
            }

            // Move carousel to updated slide
            moveCarouselTo(slide);
        }
    }

    // Previous navigation handler
    function movePrev() {

        // Check if moving
        if (!moving) {

            // If it's the first slide, set as the last slide, else -1
            if (slide === 0) {
                slide = (totalItems - 1);
            } else {
                slide--;
            }

            // Move carousel to updated slide
            moveCarouselTo(slide);
        }
    }

    // Initialise carousel
    function initCarousel() {
        setInitialClasses();
        setEventListeners();

        // Set moving to false now that the carousel is ready
        moving = false;
    }

    // make it rain
    initCarousel();



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
        showElements();
        clearTimeout(timeOut);
        timeOut = setTimeout(() => hideElements(), 3000);
    };

    document.onclick = () => {
        showElements();
        clearTimeout(timeOut);
        timeOut = setTimeout(() => hideElements(), 3000);
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
        timeProgress.innerHTML = `<span>${formatTime(audio.currentTime, audio.duration)}</span>`;
        timeLeft.innerHTML = `<span>${formatTime(audio.duration - audio.currentTime, audio.duration)}</span>`;
    };

    const switchPlayPause = () => {
        if (!contextCreated) {
            createContext();
        }
        // if (context && audio.src !== "") {
        if (audio.paused) {
            audio.play();
            //sound.play();
            largePlayIcon.style.opacity = "";
            largePlayIcon.style.cursor = "";
        } else {
            audio.pause();
            //sound.pause();
            largePlayIcon.style.opacity = 1;
            largePlayIcon.style.cursor = "pointer";
        }
        // }
    };

    playPause.onclick = () => {
        switchPlayPause();
    };

    document.getElementById('large-play').onclick = () => {
        switchPlayPause();
    };

    /*  const switchFullScreen = () => {
        if (!fscreen.fullscreenElement) {
            fscreen.requestFullscreen(document.documentElement);
        } else {
            fscreen.exitFullscreen();
        }
    };

    enterExitFullScreen.onclick = () => {
        switchFullScreen();
    };

    fscreen.onfullscreenchange = (() => {
        if (!!fscreen.fullscreenElement) {
            enterExitFullScreen.innerHTML = `<i class="fas fa-compress-arrows-alt"></i>`;
            enterExitFullScreen.setAttribute("data", "Exit Full-Screen, or press [F]");
        } else {
            enterExitFullScreen.innerHTML = `<i class="fas fa-arrows-alt"></i>`;
            enterExitFullScreen.setAttribute("data", "Enter Full-Screen, or press [F]");
        }
    });
*/


    document.onkeyup = (e) => {
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
        gain.gain.value = value;
        //gainBarValue.style.width = `${193 * value}px`;
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
        playPause.classList.remove("fa-pause");
        playPause.classList.add("fa-play");
        largePlayIcon.style.opacity = 1;
        largePlayIcon.style.cursor = "pointer";
        showElements();
    };

    audio.onplay = () => {
        var t = decodeURIComponent(audio.src.substr(audio.src.lastIndexOf('/') + 1, audio.src.lastIndexOf('.') - 1));
        var t = t.substring(0, t.lastIndexOf('.'));
        document.getElementById('track-name').innerHTML = `<span>${t}</span>`;
        playPause.classList.remove("fa-play");
        playPause.classList.add("fa-pause");
        timeOut = setTimeout(() => hideElements(), 3000);
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
            timeProgress.innerHTML = "";
            timeLeft.innerHTML = "";
            progressBar.style.width = "0%";
        }
    }, 1000);

    // document.getElementById("file-input-label").onclick = () => {
    //     if (!contextCreated) {
    //         createContext();
    //     }
    // };

    // document.getElementById("file-input").onchange = function() {
    //     const files = this.files;
    //     if (files.length > 0) {
    //         audio.src = URL.createObjectURL(files[0]);
    //         audio.load();
    //         playPause.classList.remove("fa-pause");
    //         playPause.classList.add("fa-play");
    //         largePlayIcon.style.opacity = 1;
    //         largePlayIcon.style.cursor = "pointer";
    //         document.getElementById('track-name').innerHTML = `<span>${files[0].name.split(".").slice(0, files[0].name.split(".").length - 1).join("")}</span>`;
    //     }
    // };
    /*
        document.getElementById("demo-button").onclick = function () {
            if (!contextCreated) {
                createContext();
            }
            if (!audio.src.includes("01%20Keep%20on%20Mixing.m4a")) {
                audio.src = "./01 Keep on Mixing.m4a";
                audio.load();
                playPause.classList.remove("fa-pause");
                playPause.classList.add("fa-play");
                largePlayIcon.style.opacity = 1;
                largePlayIcon.style.cursor = "pointer";
                document.getElementById('track-name').innerHTML = "<span>01 Keep on Mixing</span>";
            }
        };
    */
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
};