// Es un método mutable => Cambia el Array original.
//>>
const months = ["March", "January", "February", "December"];
console.log(months);
months.sort();
console.log(months); //Los va a organizar por el código Asquii / Abecedario
//>>
const numbers = [5, 50, 100, 150, 200, 500];
//numbers.sort();
// Ordenar como entero>
//numbers.sort((a, b) => a - b); // Menor al mayor >
numbers.sort((a, b) => b - a); // Mayor al menor >
console.log(numbers);
//>>
const words = ["Premier", "Thor", "Iron Man", "Captain", "Eternals"];
words.sort();
//>Characters>
words.sort((a, b) => a.localeCompare(b));
console.log(words);
//>>
const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
    date: new Date(2021, 1, 1, 10),
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
    date: new Date(2021, 1, 1, 20),
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
    date: new Date(2021, 1, 1, 15),
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
    date: new Date(2022, 1, 1, 10),
  },
];

//>>>>>>>>> a y b ===> son index/element>>> Trabajar con Objetos >=====>>>>
orders.sort((a, b) => a.total - b.total); // Acomodarlos de menor a mayor>>>

orders.sort((a, b) => a.customerName.localeCompare(b.customerName));

orders.sort((a, b) => a.date.getTime() - b.date.getTime());
console.log(orders);
