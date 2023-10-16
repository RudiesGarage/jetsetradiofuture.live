//Set default Howler values
Howler.autoUnlock = false;
Howler.autoSuspend = false;
Howler.volume(0.5);


/**
 * Player class containing the state of our playlist and where we are in it.
 * Includes all methods for playing, skipping, updating the display, etc.
 * @param {Object} stationData Station Object with playlist song details .
 */
class Player {
    constructor(stationData) {
            this.stationData = stationData;
            this.playlist = [];
            for (let i = 0; i < stationData.songList.length; i++) {
                this.playlist.push({ "file": stationData.songList[i], "howl": null });
            }
            // If linear shuffle then start from index 0
            if (shuffleState == 0) {
                this.index = 0;
            } else {
                this.index = this.playlist.length * Math.random() | 0;
            }
        }
        /**
         * Play a song in the playlist.
         * @param  {Number} index Index of the song in the playlist (leave empty to play the first or current).
         */
    play(index) {
            let self = this;
            let sound;

            index = typeof index === 'number' ? index : self.index;
            let data = self.playlist[index];

            // If we already loaded this track, use the current one.
            // Otherwise, setup and load a new Howl.
            if (data.howl) {
                sound = data.howl;
            } else {
                let baseurl = "";
                if (self.stationData.isLive === undefined && typeof self.stationData.isLive == 'undefined') {
                    baseurl = "https://jsrfl.us-east-1.linodeobjects.com/music/stations/" + self.stationData.stationName + "/" + data.file + '.mp3';

                } else {
                    baseurl = data.file;
                }
                sound = data.howl = new Howl({
                    src: [baseurl],
                    html5: true,
                    volume: 0.5,
                    onplay: function() {
                        //Reset Track name field
                        let trackElem = document.getElementById('track-name');
                        let trackCont = document.getElementById('track-container');
                        trackElem.classList.remove('cssmarquee');
                        //Set Track Name Field
                        let t = data.file;
                        trackElem.innerHTML = `<span>${t}</span>`;

                        //check if overflowing
                        if (trackCont.scrollWidth > trackCont.clientWidth) {
                            trackElem.classList.add('cssmarquee');
                            trackElem.innerHTML = `<span>${t}</span><span>${t}</span><span>${t}</span>`;
                        }

                        //Hide play buttons
                        songBar.classList.add("animation");
                        songBar.style.display = "block";
                        pauseBtn.style.display = "";
                        playBtn.style.display = "none";
                        largePlayIcon.style.opacity = 0;
                        largePlayIcon.style.cursor = "";

                        // Set Document to be song title
                        document.title = `${t} | JetSetRadioFuture.live `;

                    },
                    onload: function() {
                        // Start the animation.
                        //if (!contextCreated) {
                        createContext();
                        //}

                    },
                    onend: function() {

                        if (shuffleState == 2 && shuffleStations.length != 0) {
                            var item = shuffleStations[Math.floor(Math.random() * shuffleStations.length)];
                            //load inital settings
                            getStationData(item)
                                .then((res) => setStation(res))
                                .catch((err) => console.log(err));
                        }
                        songBar.classList.remove("animation");
                        songBar.style.display = "none";
                        Howler.stop(); //stops all songs globally
                        self.skip('next');

                    },
                    onpause: function() {
                        //Show to play button
                        pauseBtn.style.display = "none";
                        playBtn.style.display = "";
                        //Show large play button
                        largePlayIcon.style.opacity = 1;
                        largePlayIcon.style.cursor = "pointer";
                    },
                    onstop: function() {
                        pauseBtn.style.display = "none";
                        playBtn.style.display = "";
                        //Show large play button
                        largePlayIcon.style.opacity = 1;
                        largePlayIcon.style.cursor = "pointer";
                        // Stop the wave animation.
                        // wave.container.style.display = 'none';
                        // bar.style.display = 'block';
                        // if (sound) {
                        //     sound.unload();
                        // }
                    },
                    onseek: function() {
                        // Start updating the progress of the track.
                        requestAnimationFrame(self.step.bind(self));
                    },
                    onplayerror: function() {
                        sound.once('unlock', function() {
                            sound.play();
                            createContext();
                        });
                    },
                    onunlock: function() {

                        sound.play();
                        createContext();
                    }
                });
            }

            // Begin playing the sound.
            sound.play();

            // Update the track display.
            //track.innerHTML = (index + 1) + '. ' + data.title;
            // Show the pause button.
            if (sound.state() === 'loaded') {
                songBar.style.display = "block";
                pauseBtn.style.display = "";
                playBtn.style.display = "none";
                largePlayIcon.style.opacity = 0;
                largePlayIcon.style.cursor = "";
            } else {
                //Show to play button
                pauseBtn.style.display = "none";
                playBtn.style.display = "";
                //Show large play button
                largePlayIcon.style.opacity = 1;
                largePlayIcon.style.cursor = "pointer";
            }
            // Keep track of the index we are currently playing.
            self.index = index;
        }
        /**
         * Pause the currently playing track.
         */
    pause() {
            let self = this;

            // Get the Howl we want to manipulate.
            let sound = self.playlist[self.index].howl;

            // Puase the sound.
            if (sound) {
                sound.pause();
            }

            // Show the play button.
            // playBtn.style.display = 'block';
            // pauseBtn.style.display = 'none';
        }
        /**
         * Skip to the next or previous track.
         * @param  {String} direction 'next' or 'prev'.
         */
    skip(direction) {
            let self = this;
            // Stop the current track.
            if (self.playlist[self.index].howl) {
                self.playlist[self.index].howl.stop();
            }
            // Get the next track based on the direction of the track.
            let index = 0;
            if (direction === 'prev') {
                index = self.index - 1;
                if (index < 0) {
                    index = self.playlist.length - 1;
                }
            } else {
                index = self.index + 1;
                if (index >= self.playlist.length) {
                    index = 0;
                }
            }

            self.skipTo(index);
        }
        /**
         * Skip to a specific track based on its playlist index.
         * @param  {Number} index Index in the playlist.
         */
    skipTo(index) {
            let self = this;

            // Stop the current track.
            if (self.playlist[self.index].howl) {
                self.playlist[self.index].howl.stop();
            }

            // Reset progress.
            //progress.style.width = '0%';
            // Play the new track.
            self.play(index);
        }
        /**
         * Set the volume and update the volume slider display.
         * @param  {Number} val Volume between 0 and 1.
         */
    volume(val) {

            // Update the global volume (affecting all Howls).
            Howler.volume(val);

            // Update the display on the slider.
            var barWidth = (val * 90) / 100;
            barFull.style.width = (barWidth * 100) + '%';
            sliderBtn.style.left = (window.innerWidth * barWidth + window.innerWidth * 0.05 - 25) + 'px';
        }
        /**
         * Seek to a new position in the currently playing track.
         * @param  {Number} inc increment to skip.
         */
    seek(inc) {
            let self = this;

            // Get the Howl we want to manipulate.
            let sound = self.playlist[self.index].howl;

            // Convert the percent into a seek position.
            if (sound) {
                sound.seek(inc);
            }
            self.updateDisplayTime();
        }
        /**
         * Seek to a new position in the currently playing track.
         * @param  {Number} per Percentage of song to skip
         */
    seekPer(per) {
            let self = this;

            // Get the Howl we want to manipulate.
            let sound = self.playlist[self.index].howl;

            // Convert the percent into a seek position.
            if (sound) {
                sound.seek(sound.duration() * per);
            }
            self.updateDisplayTime();
        }
        /**
         * The step called within requestAnimationFrame to update the playback position.
         */
    step() {
            let self = this;

            // Get the Howl we want to manipulate.
            let sound = self.playlist[self.index].howl;

            // Determine our current seek position.
            let seek = sound.seek() || 0;
            //timer.innerHTML = self.formatTime(Math.round(seek));
            //progress.style.width = (((seek / sound.duration()) * 100) || 0) + '%';
            // If the sound is still playing, continue stepping.
            if (sound.playing()) {
                requestAnimationFrame(self.step.bind(self));
            }
        }
        /**
         * Toggle the playlist display on/off.
         */
    togglePlaylist() {
        let self = this;
        let display = (playlist.style.display === 'block') ? 'none' : 'block';

        setTimeout(function() {
            playlist.style.display = display;
        }, (display === 'block') ? 0 : 500);
        playlist.className = (display === 'block') ? 'fadein' : 'fadeout';
    }
    updateDisplayTime() {
        let self = this;
        let sound = self.playlist[self.index].howl;
        if (sound) {
            let seek = Math.round(sound.seek() || 0);
            const dis = (seek / sound.duration()) * 100;
            if (dis !== dis) {
                progressBar.style.width = 0;
            } else {

                progressBar.style.width = `${(seek / sound.duration()) * 100}%`;
            }
        } else {
            progressBar.style.width = 0;
        }

    }
    currentSong() {
        let self = this;
        let sound = self.playlist[self.index].howl;
        return sound;
    }
    shuffle() {
        let self = this;
        let array = self.playlist;
        var tmp = self.playlist[self.index];
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
        //update index
        for (var i = 0; i < array.length; i++) {
            if (tmp === array[i]) {
                self.index = i;
                return;
            }
        }
    }
    linear() {
        let self = this;
        let array = self.playlist;
        var tmp = self.playlist[self.index];
        array.sort((a, b) => {

            let fa = a.file.toLowerCase(),
                fb = b.file.toLowerCase();

            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;

        });
        //update index
        for (var i = 0; i < array.length; i++) {
            if (tmp === array[i]) {
                self.index = i;
                return;
            }
        }

    }
}