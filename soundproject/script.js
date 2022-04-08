// Declare elements
const player = document.querySelector(".tape-player");
var intro = document.getElementById("intro");

var chap1aud = document.getElementById("chap1aud");
var chap2aud = document.getElementById("chap2aud");
var chap3aud = document.getElementById("chap3aud");
var chap4aud = document.getElementById("chap4aud");
var chap5aud = document.getElementById("chap5aud");

//Toggle Intro Cassette Player
function toggleIntroPlay() {
  if (!(player.matches(".playing"))) {
    intro.play();
    player.classList.add("playing");

  } else {
    intro.pause();
    player.classList.remove("playing");
  }
}

let audnow = chap1aud;

function toggleChap1Play() {
  if(chap1aud.paused) {
      if (audnow != chap1aud) {
        audnow.pause(); //Pauses other audio
      };
      chap1aud.play();
      audnow = chap1aud;
    } else if(!chap1aud.paused){
      chap1aud.pause();
  }
}

//Chapter 2
function toggleChap2Play() {
  if(chap1aud.paused) {
      if (audnow != chap2aud) {
        audnow.pause(); //Pauses other audio
      };
      chap2aud.play();
      audnow = chap2aud;
    } else if(!chap2aud.paused){
      chap2aud.pause();
  }
}

//Chapter 3
function toggleChap3Play() {
  if(chap3aud.paused) {
      if (audnow != chap3aud) {
        audnow.pause(); //Pauses current playing audio
      };
      chap3aud.play();
      audnow = chap3aud; //Needed to check current playing audio
    } else if(!chap3aud.paused){
      chap1aud.pause();
  }
}

//Chapter 4
function toggleChap4Play() {
  if(chap4aud.paused) {
      if (audnow != chap4aud) {
        audnow.pause(); //Pauses other audio
      };
      chap4aud.play();
      audnow = chap4aud;
    } else if(!chap4aud.paused){
      chap4aud.pause();
  }
}

//Toggle Chapter 5 Cassette Player
function toggleChap5Play() {
  if (!(player.matches(".playing"))) {
    chap5aud.play();
    player.classList.add("playing");

  } else {
    chap5aud.pause();
    player.classList.remove("playing");
  }
}

// use for creating an instance when audio is finished
// var aud = document.getElementById("myAudio");
//aud.onended = function() { };