console.group("Filter");
//< Filtra a trvés de una condicional == Inmutable >
const words = ["Tigre", "Ciudad", "Balón", "Automóvil", "Manchester United"];

//(A) Ciclo>>>
const newWord = [];
for (let index = 0; index < words.length; index++) {
  const item = words[index];

  if (item.length >= 8) {
    newWord.push(item);
  }
}
console.log(newWord);

// (B) filter(Method)>>>
const rta = words.filter((item) => item.length >= 6);
console.log(rta);

console.groupEnd();
