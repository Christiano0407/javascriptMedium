console.group("Platzi Video Media");
// Const>>>
// <<== Video Const ==>>
export const video = document.getElementById(`movie`);
console.log(movie);
export const playBtn = document.getElementById(`playButton`);
export const playIconBtn = playBtn.querySelector("i");
export const muteBtn = document.getElementById(`muteButton`);
export const stopBtn = document.getElementById(`stopBtn`);
export const progressBar = document.querySelector(".progress");
export const timestamp = document.querySelector(".timestamp");
// <<< ==== Importamos y Ejecutamos ==== >>>
import { mediaPlayer } from "./videoOne.js";

//import { plaIconToogleBtn } from "./videoOne.js";

import { mediaMuted } from "./videoOne.js";

import { stopVideo } from "./videoOne.js";

import { setVideoProgress } from "./videoOne.js";

import { updateVideoProgress } from "./videoOne.js";
