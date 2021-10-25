console.group("Intersection Observer");
//>> (A)>
const imageOne = document.getElementById(`imageOne`);
console.log(imageOne);
const imageTwo = document.getElementById(`imageTwo`);
console.log(imageTwo);

//>>
// (B) Cargar img>>
const cargarImagen = (entradas, observador) => {
  //console.log(entradas); //Es un array
  //console.log(observador);
  //(E) Para saber si una "img", entra dentro del Viewport>>>
  entradas.forEach((entrada) => {
    // isIntersecting => La intersección de la imagen / está visible>>
    if (entrada.isIntersecting) {
      /* console.log("Img in Viewport"); */
      entrada.target.classList.add("visible"); // Entrar a la clase y saber>
    } else {
      //entrada.target.classList.remove("visible");
    }
  });
};

// (C) Obsevador => Cargar la imagen> / Vigilar Image>>
const observador = new IntersectionObserver(cargarImagen, {
  // Viewport
  root: null,
  rootMargin: `0px 0px 0px 0px`,
  threshold: 1.0,
  // (Root Margin) Margen al observador / límite>Ejecute el código> Se ejecuta hasta que la imagen entra dentro del margen > Dentro del viewpoer>>
  // (Root Margin) Manejar cuatro valores: 100px 0px 50px 20px => Arriba, Derecho, Abajo y Izquierdo>>
  //rootMargin: `500px 0px 100px 0px`,
  //(threshold) Cuándo queremos que ejecute el código>>
  // Valor desde: 0.0 y 1.0>
});
// (D) Llamar al método "observe" => Activar>
observador.observe(imageOne);
observador.observe(imageTwo);
// (F) ==>> Agregar efectos ==> CSS Animations>>>

console.groupEnd();
