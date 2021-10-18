console.group("Methods");
//(A) Method: For Each>>>
const letter = [`a`, `b`, `c`];
letter.forEach((element, index) =>
  console.log(`Method ForEach:`, element, index)
);

// VS CICLO FOR>>>

for (let index = 0; index < letter.length; index++) {
  const element = letter[index];
  console.log(`for:`, element);
}

// Exercise APP >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// (A)
const appPlay = document.getElementById(`app`);
// (B)
const products = [
  { title: "Burger", price: 100 },
  { title: "Pizza", price: 199 },
];
// (C)
products.forEach((products) => {
  appPlay.innerHTML += `<li>${products.title} - ${products.price}</li>`;
});

console.groupEnd();
