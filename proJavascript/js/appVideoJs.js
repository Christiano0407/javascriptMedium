console.group("Platzi Video Media");
// Const>>>
// <<== Video Const ==>>
const video = document.getElementById(`movie`);
console.log(movie);
const playBtn = document.getElementById(`playButton`);
const muteBtn = document.getElementById(`muteButton`);

//> <<== Video Part Events==>>
video.addEventListener("click", mediaPlayer);
playBtn.addEventListener("click", mediaPlayer);
muteBtn.addEventListener("click", mediaMuted);

//> << == Invocar====>
function mediaPlayer() {
  /* if (video.paused) { */
  /*   video.play(); */
  /* } else { */
  /*   video.pause(); */
  /* } */

  video[video.paused ? "play" : "pause"]();
}

function mediaMuted() {
  video.muted = true;
}
