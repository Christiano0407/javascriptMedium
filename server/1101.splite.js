// Split === > Separar de acuerdo a un patrón / Separar dentro un Objeto o Array>>>>
const title = `Course of the Methods in Javascript`;
// 1)
const urlFinal = title.split(" ").join(`-`).toUpperCase(); // Mayúscula
console.log(urlFinal);

//2)
const finalText = title.split(" ").join(`/`).toLowerCase(); // Minúscula
console.log(finalText);
