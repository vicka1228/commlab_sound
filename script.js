// Declare elements
const player1 = document.querySelector(".tape-player.one");
const player2 = document.querySelector(".tape-player.two");
var intro = document.getElementById("intro");

var chap1aud = document.getElementById("chap1aud");
var chap2aud = document.getElementById("chap2aud");
var chap3aud = document.getElementById("chap3aud");
var chap4aud = document.getElementById("chap4aud");
var chap5aud = document.getElementById("chap5aud");

let audnow = intro;

//Toggle Intro Cassette Player
function toggleIntroPlay() {
  if (!(player1.matches(".playing"))) {
    if (audnow != intro) {
      audnow.pause(); //Pauses other audio
      if (player1.className.indexOf("playing") !== -1) {
        player1.classList.remove("playing");
      } else if (player2.className.indexOf("playing") !== -1) {
        player2.classList.remove("playing")
      }; //Pauses the tape player animation
    };
    intro.play();
    player1.classList.add("playing");
    audnow = intro;
  } else {
    intro.pause();
    player1.classList.remove("playing");
  }
}

function toggleChap1Play() {
  if(chap1aud.paused) {
      if (audnow != chap1aud) {
        audnow.pause(); //Pauses other audio
        if (player1.className.indexOf("playing") !== -1) {
          player1.classList.remove("playing");
        } else if (player2.className.indexOf("playing") !== -1) {
          player2.classList.remove("playing")
        }; //Pauses the tape player animation
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
        if (player1.className.indexOf("playing") !== -1) {
          player1.classList.remove("playing");
        } else if (player2.className.indexOf("playing") !== -1) {
          player2.classList.remove("playing")
        }; //Pauses the tape player animation
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
        if (player1.className.indexOf("playing") !== -1) {
          player1.classList.remove("playing");
        } else if (player2.className.indexOf("playing") !== -1) {
          player2.classList.remove("playing")
        }; //Pauses the tape player animation
      };
      chap3aud.play();
      audnow = chap3aud; //Needed to check current playing audio
    } else if(!chap3aud.paused){
      chap3aud.pause();
  }
}

//Chapter 4
function toggleChap4Play() {
  if(chap4aud.paused) {
      if (audnow != chap4aud) {
        audnow.pause(); //Pauses other audio
        if (player1.className.indexOf("playing") !== -1) {
          player1.classList.remove("playing");
        } else if (player2.className.indexOf("playing") !== -1) {
          player2.classList.remove("playing")
        }; //Pauses the tape player animation
      };
      chap4aud.play();
      audnow = chap4aud;
    } else if(!chap4aud.paused){
      chap4aud.pause();
  }
}

//Toggle Chapter 5 Cassette Player
function toggleChap5Play() {
  if (!(player2.matches(".playing"))) {
    if (audnow != chap5aud) {
      audnow.pause(); //Pauses other audio
      if (player1.className.indexOf("playing") !== -1) {
        player1.classList.remove("playing");
      } else if (player2.className.indexOf("playing") !== -1) {
        player2.classList.remove("playing")
      }; //Pauses the tape player animation
    };
    chap5aud.play();
    audnow = chap5aud;
    player2.classList.add("playing");

  } else {
    chap5aud.pause();
    player2.classList.remove("playing");
  }
}

// use for creating an instance when audio is finished
// var aud = document.getElementById("myAudio");
//aud.onended = function() { };