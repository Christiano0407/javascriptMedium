console.group("Platzi Video Media");
// Const>>>
// <<== Video Const ==>>
export const video = document.getElementById(`movie`);
console.log(video);
export const playBtn = document.getElementById(`playButton`);
export const playIconBtn = playBtn.querySelector("i");
export const muteBtn = document.getElementById(`muteButton`);
export const volBtnIcon = muteBtn.querySelector("i");
export const stopBtn = document.getElementById(`stopBtn`);
export const progressBar = document.querySelector(".progress");
export const timestamp = document.querySelector(".timestamp");

// <<< == Plugins== Importamos y Ejecutamos ==== >>>
import { mediaPlayer } from "./videoOne.js";

//import { plaIconToogleBtn } from "./videoOne.js";

import { mediaMuted } from "./videoOne.js";

import { stopVideo } from "./videoOne.js";

import { setVideoProgress } from "./videoOne.js";

import { updateVideoProgress } from "./videoOne.js";
// <<<<<<<<<<<<<<<<< blog / Intersection Observer >>>>>>>>>>>>>>>>>>>>>>>
const imgOne = document.getElementById(`imgOne`);

//> function de cargar Imagen>
const loadingImage = () => {
  console.log("Ejecutando");
};

//> Observador / invocar / parámetros>
const allObserver = new IntersectionObserver(loadingImage, {
  root: null,
  rootMargin: `0px`, //100px, 0, 0, 0,
  threshold: 0.5, //0.0 / 1.0(todo el elemento dentro),
});

//> Llamar al Obsevador>
allObserver.observe(imgOne);
