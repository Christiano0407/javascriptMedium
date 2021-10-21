console.group("Method Concat");
//>
const numbers = [1, 5, 10, 20, 30, 40, 50];
const otherElements = [8, 25, 35, 55, 69, 90];

//> Ciclo for>>>>
/* const newArray = [...numbers]; */
/* for (let i = 0; i < otherElements; i++) { */
/*   const element = otherElements[i]; */
/*   newArray.push(element); */
/* } */
/* console.log(newArray); */

//> Method Concat>>>>

const rta = numbers.concat(otherElements);
console.log(rta);
// otra forma: Split Operation (Abajo) / push() / ciclo:
const rta2 = [...numbers, ...otherElements];
console.log(rta2);

console.groupEnd();
