// <<<<==== Importamos la base =====>>>>
import { video } from "../js/appVideoJs.js";
import { playBtn } from "../js/appVideoJs.js";
import { muteBtn } from "../js/appVideoJs.js";
//> <<== Video Part Events==>>
video.addEventListener("click", mediaPlayer);
playBtn.addEventListener("click", mediaPlayer);
muteBtn.addEventListener("click", mediaMuted);

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
