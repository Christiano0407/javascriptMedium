console.group("Promise");

// (Promesa>)
// (A)>>>
const something = () => {
  return new Promise((resolve, reject) => {
    // Validar la promesa>>>
    if (true) {
      resolve("I Win!");
    } else {
      reject("I Lose / Loser");
    }
  });
};

// (B)>>
something()
  .then((Response) => console.log(Response))
  .catch((error) => console.log(error));

// (C)>>

// ==============================================================================>>>
// (A) ==>
const happen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("Win / Champion!");
      }, 2000);
    } else {
      const error = new Error("Loser!!!");
      reject(error);
    }
  });
};
//(B) ==>
happen()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

console.groupEnd();
