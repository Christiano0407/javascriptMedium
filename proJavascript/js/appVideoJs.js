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

const imgOne = document.getElementById(`imgOne`);
const imgTwo = document.getElementById(`imgTwo`);
const imgThree = document.getElementById(`imgThree`);

// <<< == Plugins== Importamos y Ejecutamos ==== >>>
import { mediaPlayer } from "./videoOne.js";

import { mediaMuted } from "./videoOne.js";

import { stopVideo } from "./videoOne.js";

import { setVideoProgress } from "./videoOne.js";

import { updateVideoProgress } from "./videoOne.js";

//import { visibleVideo } from "./videoOne.js";

// (2) <<<<<<<<<<<<<<<<< blog / Intersection Observer >>>>>>>>>>>>>>>>>>>>>>>//> function de cargar Imagen>
// << Entrada (entrada al Viewport) === interObserver / o entries >>
const loadingImage = (interObserver, allObserver) => {
  /*  console.log("Ejecutando"); */
  /*  console.log(interObserver); */
  /*  console.log(allObserver); */
  interObserver.forEach((interObserver) => {
    if (interObserver.isIntersecting) {
      //console.log("La imagen está en el viewport");
      interObserver.target.classList.add(`visible`); // add CSS
    } else {
      interObserver.target.classList.remove(`visible`);
    }
  });
};
//isIntersecting => Una imagen dentro del Viewport/Observer>

//> Observador / invocar / parámetros>
const allObserver = new IntersectionObserver(loadingImage, {
  //root: document.getElementById(`container`),
  root: null,
  rootMargin: `0px`, //100px, 0, 0, 0,
  threshold: 1.0, //0.0 / 1.0(todo el elemento dentro),
});

//> Llamar al Obsevador>
allObserver.observe(imgOne);
allObserver.observe(imgTwo);
allObserver.observe(imgThree);

// << ============================== (3) ================================== >>
