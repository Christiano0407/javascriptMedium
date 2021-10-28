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
}

export function setVideoProgress() {
  progressBar.value = Number((progressBar.value * video.duration) / 100);
}
