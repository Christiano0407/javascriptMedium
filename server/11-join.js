console.group("Method Join");
// Method Join>>> Unificar todo un array>>>
const elements = ["Fire", "Air", "Water"];
console.log(elements);
// Ciclo for>>>
let rtaFinal = ` `;
const separator = `--`;

for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  rtaFinal = rtaFinal + element + separator;
}
console.log(`fOR`, rtaFinal);
// Method Join>>>
const meJoin = elements.join("--");
console.log(`jOIN `, meJoin);

console.groupEnd();
