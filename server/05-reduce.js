console.group("Method Reduce");

console.groupEnd();
console.group("Reduce");
// < Method REDUCE ==>Lo reduce a un sólo valor>> Cumplir con la condición>>

const totals = [1, 2, 3, 4, 5];

// Ciclo For >>>>>>>>>>>>
let sum = 0; // << => INDEX O ITEM === POSICIÓN QUE ES 0 = 1 POSICIÓN>>
for (let i = 0; i < totals.length; i++) {
  const element = totals[i];
  sum = sum + element;
}
console.log(sum);
// <<<<<<<<<< Method Reduce >>>>>>>>>>
//(A)>
// El primer valor es el acumulador => Sum>>
// 1> Arrow Function / 2> Estado Inicial (0); =====> Mandamos dos parámetros
// (element(index) === item)>>
//========================= (1) ========================= <(2)>
const redu = totals.reduce((sum, element) => sum + element, 0);
console.log(redu);

// << EXERCISE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>=================================================>
//(1)
const value = [5, 10, 15, 20, 25, 30];
//(2)
const count = 5;
//(3)
const newValue = value.reduce((count, item) => count + item, 5);
console.log(newValue);

console.groupEnd();
