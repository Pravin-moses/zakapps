
      const video = document.getElementById("promoVideo");
      const playButton = document.getElementById("playButton");
      const videoOverlay = document.getElementById("videoOverlay");
      const videoTitle = document.getElementById("videoTitle");
      let playbackTimeout;

      // Play button click handler
      playButton.addEventListener("click", function () {
        video.play();
        videoOverlay.style.opacity = "0";
        videoOverlay.style.pointerEvents = "none";
        videoTitle.style.opacity = "0";
      });

      // Video click handler to pause
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

      // When video ends, show play button again
      video.addEventListener("ended", function () {
        video.currentTime = 0;
        video.load();
        videoOverlay.style.opacity = "1";
        videoOverlay.style.pointerEvents = "auto";
        playButton.innerHTML = '<i class="fas fa-play"></i>';
        videoTitle.style.opacity = "1";
      });

      // Update play button icon while playing
      video.addEventListener("play", function () {
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
        
        // Set 12-second timeout to stop video and show thumbnail
        playbackTimeout = setTimeout(function() {
          video.pause();
          video.currentTime = 0;
          video.load();
          videoOverlay.style.opacity = "1";
          videoOverlay.style.pointerEvents = "auto";
          playButton.innerHTML = '<i class="fas fa-play"></i>';
          videoTitle.style.opacity = "1";
        }, 13000); // 13 seconds
      });

      video.addEventListener("pause", function () {
        playButton.innerHTML = '<i class="fas fa-play"></i>';
        if (playbackTimeout) {
          clearTimeout(playbackTimeout);
        }
      });
