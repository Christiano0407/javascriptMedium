//<< Map =>> Transformar = Es Inmutable (No edita el Array original)>>
// Crea uno nuevo con los elementos de Array (Map = Transformados)>> Filtrar / Mismo número de elementos >>>

// =============================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const letters = ["a", "b", "c", "d"];
console.group("Ciclo for");
// (A) Ciclo For >>
const newArray = [];

for (let index = 0; index < letters.length; index++) {
  const elements = letters[index];
  newArray.push(`${elements}` + " " + "++");
}
console.log(newArray);
console.groupEnd();

console.group("Método Map");
// (B) Method map >>
// 1)
const newTwoArray = letters.map((item) => item + "++");
console.log(newTwoArray);
console.groupEnd();

console.group("Exercise One");
console.log("Exercise Map");
const app = document.getElementById(`app`);

const product = [
  { title: "Burger", price: 85 },
  { title: "Pizza", price: 199 },
  { title: "Tacos", price: 65 },
  { title: "Beer", price: 55 },
  { title: "Soda", price: 40 },
];

const list = product.map((product) => {
  return `<li>${product.title} - ${product.price}</li>`;
});
app.innerHTML = list.join(``);

console.groupEnd();

console.group("Map Reloaded");

console.groupEnd();
