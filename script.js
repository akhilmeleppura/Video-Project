const video = document.getElementById('video-background');
const playPauseButton = document.getElementById('play-pause-button');

playPauseButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseButton.textContent = 'Pause';
  } else {
    video.pause();
    playPauseButton.textContent = 'Play';
  }
});
