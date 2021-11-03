console.group("Cómo cancelar peticiones / FETCH");
// <<< Fetch> Envíar una petición a FETCH, para parar la petición>>>>>
//const API_URL = `https://api.pexels.com/v1/`;
const url = `https://images.pexels.com/photos/974470/nature-stars-milky-way-galaxy-974470.jpeg?q=100`;
//const url = `https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg`;
const img = document.getElementById(`huge-img`);
console.log(img);
const loadBtn = document.getElementById(`load`);
const stopBtn = document.getElementById(`stop`);
//> Functions>
//(A)
function startLoading() {
  loadBtn.disabled = true; //Boolean
  loadBtn.innerText = `Loading...`;
  stopBtn.disabled = false;
}

//(B)
function stopLoading() {
  loadBtn.disabled = false;
  loadBtn.innerText = `Stop Loaded Img`;
  stopBtn.disabled = true;
}

//> Events
//(1)
loadBtn.addEventListener(`click`, async function () {
  startLoading();
  controller = new AbortController(); //Abortar la petición / fetch>
  //Traer las promesas/async and await>
  try {
    const response = await fetch(url, { signal: controller.signal }); //Abortar>
    const blob = await response.blob(); //< Binario = dela petición(IMG en forma Binaria) /Fetch>
    const imgUrl = URL.createObjectURL(blob); // < Convertir lo "Binario" == URL >
    img.src = imgUrl;
  } catch (error) {
    console.log(error.message);
  }

  stopLoading();
});

//(2)
stopBtn.addEventListener(`click`, function () {
  controller.abort();
  stopLoading();
});

console.groupEnd();
