const imageOne = document.getElementById(`imgOne`);
const imageTwo = document.getElementById(`imgTwo`);
const imageThree = document.getElementById(`imgThree`);

//>>
const cargarImagen = (entradas, observador) => {
  console.log(entradas);
  console.log(observador);
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add(`Visible`);
    } else {
      entrada.target.classList.remove(`visible`);
    }
  });
};

//>>
const observador = new IntersectionObserver(cargarImagen, {
  root: null,
  rootMargin: `500px 0px 100px 0px`,
  threshold: 1.0,
});

observador.observe(imageOne);
observador.observe(imageTwo);
observador.observe(imageThree);
