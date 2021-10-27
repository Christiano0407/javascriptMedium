console.group("Platzi Video Media");
// Const>>>
// <<== Video ==>>
const video = document.getElementById(`movie`);
console.log(movie);
const playBtn = document.getElementById(`playButton`);
const muteBtn = document.getElementById(`muteButton`);

// <<== Video Part==>>
playBtn.addEventListener("click", handlePlayBtn, false);
playVideo();

//==>>
async function playVideo() {
  try {
    await video.play();
    playBtn.className = "Playing";
  } catch (error) {
    playBtn.className = " ";
  }
}
//>
function handlePlayBtn() {
  if (video.paused) {
    playVideo();
  } else {
    video.pause();
    playBtn.className = " ";
  }
}
//=
muteBtn.addEventListener("click", () => {
  console.log("Muted");
});
