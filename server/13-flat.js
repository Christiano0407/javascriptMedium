console.group("Method Flat");
// Un array dentro de un Array === Dentro de otro>>>>
//>
const arr1 = [5, 10, 20, 30, 40, 50, [100, 200, 300, 400, 500], [1000, [2000]]];

//> CICLO FOR>>
//const newArray = [];
// Ciclo doble: Cuando quremos entrar a otro array(dentro de otro)>>>>>>
// Entre más array internos (dentro de otro) ==> Más cilos for>>>> Evita eso>>>>>>>>>
/* for (let i = 0; i < arr1.length; i++) { */
/*   const array = arr1[i]; */
/*   for (let j = 0; j < array.length; j++) { */
/*     const element = arr1[i][j]; */
/*  */
/*     newArray.push(element); */
/*   } */
/* } */
/* console.log(newArray); */
// Method flat()>>>
// Hasta qué nivel queremos que haga la compilación >>>>
const matriz = arr1.flat();
const matrizOne = arr1.flat(1); // Hasta el 1 Nivel>
const matrizTwo = arr1.flat(2); // Hasta el 2 Nivel>
console.log(matriz);
console.log(matrizOne);
console.log(matrizTwo);

console.groupEnd();
