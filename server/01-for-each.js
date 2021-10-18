console.group("Methods");
// npx http-server client
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

// Exercise Task ====== >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// (A)
const appTask = document.getElementById(`appTask`);
// (B)
const taskApply = [
  { title: "Task1", done: true },
  { title: "Task2", done: false },
  { title: "Task3", done: true },
];
// (C) Method>>
taskApply.forEach((taskApply) => {
  // Create >
  //(1)
  let item = document.createElement(`li`);

  let input = document.createElement(`input`);
  input.type = `checkbox`;

  //(2)
  if (taskApply.done === true) {
    input.checked = true;
  }

  //(3)
  item.innerHTML = `<p> ${taskApply.title} </p>`;
  item.appendChild(input);
  // Invocar en app>>
  appTask.appendChild(item);
});

console.groupEnd();
