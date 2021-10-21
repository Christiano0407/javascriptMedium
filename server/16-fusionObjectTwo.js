const user = { name: "Chris", age: 30 };
const book = { title: "IT", score: 9 };
const beer = { name: "XX", type: "Belgian Strong" };

// Method Assing:
const withAssing = Object.assign(user, book, beer);

// Operador / Method Spread:
const withSpread = { ...user, ...book, ...beer };

//>
console.log(withAssing);
console.log(withSpread);
