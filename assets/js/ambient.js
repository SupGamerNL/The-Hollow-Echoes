document.addEventListener("DOMContentLoaded", () => {
  const sounds = [
    "assets/audio/ambient_hum.mp3",
    "assets/audio/low_wind.mp3",
    "assets/audio/subtle_whisper.mp3"
  ];

  function playRandomAmbient() {
    const audio = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
    audio.volume = 0.15;
    audio.play();

    // wait 10–30 seconds before playing another
    const delay = Math.random() * 20000 + 10000;

    setTimeout(playRandomAmbient, delay);
  }

  playRandomAmbient();
});
