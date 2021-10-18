console.group("Map Reloaded");
const products = document.getElementById(`products`);
// (A)>
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
];
console.log(orders);

//(B)>
const express = orders.map((item) => item.delivered);
console.log(`Order:`, express);

const play = orders.map((item) => {
  // Return memory / Referencia en memoria / Transformamos>>
  return {
    ...item,
    tax: 15,
    city: "CDMX",
  };
});
console.log(play);

console.groupEnd();
