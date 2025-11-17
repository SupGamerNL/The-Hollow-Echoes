document.addEventListener("DOMContentLoaded", () => {
  const sounds = [
    "assets/audio/ambient_hum.mp3",
    "assets/audio/low_wind.mp3",
    "assets/audio/subtle_whisper.mp3"
  ];

  function playRandomAmbient() {
    const audio = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
    audio.volume = 0; // start muted (autoplay allowed)
    audio.play().then(() => {
      setTimeout(() => { audio.volume = 0.15 }, 300); // fade in
    });

    const delay = Math.random() * 20000 + 10000;
    setTimeout(playRandomAmbient, delay);
  }

  document.addEventListener("click", startAmbientOnce, { once: true });

  function startAmbientOnce() {
    playRandomAmbient();
  }

});
