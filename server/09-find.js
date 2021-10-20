console.group("Method Find");
// Find => Sólo puede retornar a un elemento (sí, cumpla con la condicional)>>>>>>
// No retorna un arraY ( diferencia con filter)>>>
//>>>>>>>>>>>
//findIndex = En qué posición se encuentra>>>
//>>>>>>>>>>>
const numbers = [5, 10, 20, 30, 40, 50];

//>>> (A)Ciclo for: >>>>
let rta = undefined; // No sabemos si el valor a retornar cumple la condicional>>
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 5) {
    rta = element;
    break;
  }
}
console.log(`Sí, se obtiene un valor:`, rta, `Ciclo for`);

// (B) <<< Method fIND >>>
// < item === index o element >
const rtaTwo = numbers.find((item) => item === 50);
console.log(rtaTwo);
console.groupEnd();

console.group("Practice Method Find");
const products = [
  {
    name: "Pizza",
    price: 12,
    id: "🍕",
  },
  {
    name: "Burger",
    price: 23,
    id: "🍔",
  },
  {
    name: "Hot dog",
    price: 34,
    id: "🌭",
  },
  {
    name: "Hot cakes",
    price: 355,
    id: "🥞",
  },
];
console.log(products);
//>>Method>
const addProduct = products.find((item) => item.price === 23);
const addName = products.find((item) => item.name === "Pizza");
const addId = products.find((item) => item.id === "🥞");
const addNamePosition = products.findIndex((item) => item.name === "Hot Cakes");
const addNamePositionTwo = products.findIndex(
  (item) => item.name === "Hot dog"
);
const addNamePositionThree = products.findIndex(
  (item) => item.name === "Pizza"
);
//>>>>
console.log("Price:", addProduct);
console.log("Name:", addName);
console.log("Id:", addId);
console.log("Name Po:", addNamePosition);
console.log("Name Po:", addNamePositionTwo);
console.log("Name Po:", addNamePositionThree);

console.groupEnd();
