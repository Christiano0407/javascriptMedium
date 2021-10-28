// <<<<==== Importamos la base =====>>>>
import { video } from "../js/appVideoJs.js";
import { playBtn } from "../js/appVideoJs.js";
import { muteBtn } from "../js/appVideoJs.js";
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
}

export function mediaMuted() {
  video.muted = true;
}

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
