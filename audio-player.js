// variable to store HTML5 audio element
var vid = document.getElementById("audioplayer");
alert(vid.paused);
var music = document.getElementById('audioplayer');
  
function playAudio() {
  if (music.paused) {
    music.play();
    pButton.className = "";
    pButton.className = "pause";
  } else {
    music.pause();
    pButton.className = "";
    pButton.className = "play";
  }
}
function setVolume(volume) {
   music.volume = volume;
}
