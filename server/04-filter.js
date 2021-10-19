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

// =================================================================>>>>>>
const orders = [
  {
    customerName: "Diana",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Luisa",
    total: 90,
    delivered: false,
  },
  {
    customerName: "Mau",
    total: 100,
    delivered: false,
  },
  {
    customerName: "Pammela",
    total: 150,
    delivered: true,
  },
  {
    customerName: "Chris",
    total: 200,
    delivered: true,
  },
  {
    customerName: "Karen",
    total: 500,
    delivered: false,
  },
  {
    customerName: "Paola",
    total: 100,
    delivered: true,
  },
];
console.log(orders);
// Filter >>
//(1)
const rtaTwo = orders.filter((item) => item.delivered);
console.log(rtaTwo);
//(2)
const rtaThree = orders.filter(
  (item) => item.customerName === "Mau" || item.total >= 100
);
console.log(rtaThree);
//(3) // Function and method>> Buscador>>Includes=> Incluir.(String)>>>
const search = (searching) => {
  return orders.filter((item) => {
    return item.customerName.includes(searching);
  });
};
console.log(search("Pa"));
console.log(search("L"));

console.groupEnd();
