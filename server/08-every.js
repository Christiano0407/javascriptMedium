console.group("Every");
// true or false>>>>
// Evalua que todos los elementos cumplan con la condición >>>>>>

//>>>
const numbers = [1, 5, 10, 20, 30, 40]; // True
//const numbers = [1, 5, 10, 20, 30, 40, 50, 100, 150, 200]; // False
console.log(numbers);

// Ciclor for >>>
/* let rta = true; */
/* for (let i = 0; i < numbers.length; i++) { */
/*   const element = numbers[i]; */
/*   if (element >= 40) { */
/*     rta = false; */
/*   } */
/* } */
/* console.log(rta); */

// Method Every>>>
// La condicional (item <= 40)>>
const rtaTwo = numbers.every((item) => item <= 40);
console.log(rtaTwo);

console.groupEnd();
