/**
 * Video Player Controls
 * Handles play/pause, overlay, and auto-stop after 12 seconds
 */

const video = document.getElementById("promoVideo");
const playButton = document.getElementById("playButton");
const videoOverlay = document.getElementById("videoOverlay");
const videoTitle = document.getElementById("videoTitle");
let playbackTimeout;

/**
 * Play button click handler
 * Starts video and hides overlay
 */
playButton.addEventListener("click", function () {
    video.play();
    videoOverlay.style.opacity = "0";
    videoOverlay.style.pointerEvents = "none";
    videoTitle.style.opacity = "0";
});

/**
 * Video click handler
 * Pauses video and shows overlay when clicked
 */
video.addEventListener("click", function () {
    if (!video.paused) {
        video.pause();
        videoOverlay.style.opacity = "1";
        videoOverlay.style.pointerEvents = "auto";
        playButton.innerHTML = '<i class="fas fa-play"></i>';
        videoTitle.style.opacity = "1";
        if (playbackTimeout) {
            clearTimeout(playbackTimeout);
        }
    }
});

/**
 * Video ended event handler
 * Resets video and shows overlay
 */
video.addEventListener("ended", function () {
    video.currentTime = 0;
    video.load();
    videoOverlay.style.opacity = "1";
    videoOverlay.style.pointerEvents = "auto";
    playButton.innerHTML = '<i class="fas fa-play"></i>';
    videoTitle.style.opacity = "1";
});

/**
 * Video play event handler
 * Updates button icon and sets 12-second auto-stop timeout
 */
video.addEventListener("play", function () {
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
    
    // Auto-stop video after 12 seconds
    playbackTimeout = setTimeout(function() {
        video.pause();
        video.currentTime = 0;
        video.load();
        videoOverlay.style.opacity = "1";
        videoOverlay.style.pointerEvents = "auto";
        playButton.innerHTML = '<i class="fas fa-play"></i>';
        videoTitle.style.opacity = "1";
    }, 12000); // 12 seconds
});

/**
 * Video pause event handler
 * Updates button icon and clears timeout
 */
video.addEventListener("pause", function () {
    playButton.innerHTML = '<i class="fas fa-play"></i>';
    if (playbackTimeout) {
        clearTimeout(playbackTimeout);
    }
});
