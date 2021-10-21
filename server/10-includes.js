console.group("Method Includes");
//> True or False ==> Incluye un index (si existe incluido en un objeto o array)>>>>
const numbers = [5, 10, 20, 30, 40, 50];
console.log(numbers);
//>> Ciclo For>>>
let includes = false;

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element === 5) {
    includes = true;
    break;
  }
}
console.log(includes);

// Method Includes>>>
const rtaTwo = numbers.includes(20); // Sólo pasar el elemento/index/ item ===> Saber si está incluido>>>>
console.log(rtaTwo);

// ========================================================================>>
// Exercise>>>
const data = [
  {
    name: "Diana",
    level: "low",
    total: 60,
    delivered: true,
  },
  {
    name: "Luisa",
    level: "Medium",
    total: 90,
    delivered: false,
  },
  {
    name: "Mau",
    level: "Hight",
    total: 100,
    delivered: false,
  },
  {
    name: "Pammela",
    level: "Medium",
    total: 150,
    delivered: true,
  },
  {
    name: "Chris",
    total: 200,
    level: "Hight",
    delivered: true,
  },
  {
    name: "Karen",
    level: "Medium",
    total: 500,
    delivered: false,
  },
  {
    name: "Paola",
    level: "Hight",
    total: 100,
    delivered: true,
  },
];
console.log(data);
