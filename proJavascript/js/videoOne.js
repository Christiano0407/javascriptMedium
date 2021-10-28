// <<<<==== Importamos la base =====>>>>
import { video } from "../js/appVideoJs.js";
import { playBtn } from "../js/appVideoJs.js";
import { playIconBtn } from "../js/appVideoJs.js";
import { muteBtn } from "../js/appVideoJs.js";
import { volBtnIcon } from "../js/appVideoJs.js";
import { stopBtn } from "../js/appVideoJs.js";
import { progressBar } from "../js/appVideoJs.js";
import { timestamp } from "../js/appVideoJs.js";
//> <<== Video Part Events==>>
video.addEventListener("click", mediaPlayer);
playBtn.addEventListener("click", mediaPlayer);
muteBtn.addEventListener("click", mediaMuted);
stopBtn.addEventListener("click", stopVideo);
progressBar.addEventListener("change", setVideoProgress);
video.addEventListener("timeupdate", updateVideoProgress);

//> <<== EXPORTAR == Invocar====>
export function mediaPlayer() {
  /* if (video.paused) { */
  /*   video.play(); */
  /* } else { */
  /*   video.pause(); */
  /* } */

  video[video.paused ? "play" : "pause"]();
  playIconToggleBtn();
}

function playIconToggleBtn() {
  if (video.paused) {
    playIconBtn.classList.remove("fa-pause");
    playIconBtn.classList.add("fa-play");
  } else {
    playIconBtn.classList.remove("fa-play");
    playIconBtn.classList.add("fa-pause");
  }
}

export function mediaMuted() {
  //video.muted = true;
  //volToggleBtnIcon();
  //video.mediaPlayer.mute();
  //unmute(); > No mute>

  if (video.muted) {
    //video.unmute();
    video.muted = false;
    volBtnIcon.classList.add("fa-volume-up");
    volBtnIcon.classList.remove("fa-volume-mute");
  } else {
    //video.mute();
    video.muted = true;
    volBtnIcon.classList.add("fa-volume-mute");
    volBtnIcon.classList.remove("fa-volume-up");
  }
}

/* function volToggleBtnIcon() { */
/*   if (video.muted) { */
/*     volBtnIcon.classList.add("fa-volume-up"); */
/*     volBtnIcon.classList.remove("fa-volume-mute"); */
/*   } else { */
/*     volBtnIcon.classList.add("fa-volume-mute"); */
/*     volBtnIcon.classList.remove("fa-volume-up"); */
/*   } */
/* } */

export function stopVideo() {
  video.pause();
  video.currentTime = 0;
  progressBar.value;
}

export function setVideoProgress() {
  video.currentTime = Number((progressBar.value * video.duration) / 100);
}
export function updateVideoProgress() {
  progressBar.value = Number((video.currentTime / video.duration) * 100);
  let minutes = Math.floor(video.currentTime / 60);
  let seconds = Math.floor(video.currentTime % 60);

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  timestamp.textContent = `${minutes}:${seconds}`;
}
