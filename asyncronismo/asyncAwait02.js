console.group("Async Await");

//> (A) => Promise

const somethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Value ok! Async!"), 3000)
      : reject(new Error("Test error"));
  });
};

// 01>practice>
const onePlus = () => {
  return new Promise((resolve, reject) => {
    true ? resolve("One Ok! Plus!") : reject(new Error("No exist One Plus"));
  });
};

//> (B) => Async and Await
const somethingAwait = async () => {
  const something = await somethingAsync();
  const plusTwo = await onePlus();
  console.log(something);
  console.log(plusTwo);
};

// (C)> Invocar>>
somethingAwait();

// (D) >> Error / Cachar errores>> Otra forma de hacer>>
const somethingError = async () => {
  try {
    const somethingOff = await somethingAsync();
    console.log(somethingOff);
  } catch (error) {
    console.error(error);
  }
};

somethingError();

console.groupEnd();
