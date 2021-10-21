console.group("Mutable Functions | Splice | Push");
// (A)>
const list = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];
//>
const myProducts = [];
//> (B)>>>
const product = list.find((item) => item.id === "🍕");
if (product) {
  myProducts.push(product);
}

const pay = list.find((item) => item.id === "🍔");
if (pay) {
  myProducts.push(pay);
}

//>>>>>>>
console.log("Lista", list);
console.log(product);
console.log(pay);
console.log("MyProduct", myProducts);

// delete>>>
const deleteProduct = list.findIndex((item) => item.id === "🍔"); // findIndex (InMutable: No modifica el original)>>
// >> -1 ==> Es cuando no lo encontramos >
if (deleteProduct !== -1) {
  myProducts.splice(deleteProduct, 1); // 1 => position(list);
}

console.log("Product Delete", deleteProduct);
console.log("Mi lista", myProducts);

//> Volver agregar>>>
const hot = list.find((item) => item.title === "Hot cakes");
console.log("Agregar", hot);
if (hot) {
  myProducts.push(hot);
}
console.log("New List: ", myProducts);
console.log("New List Add: ", myProducts.length);

// Quitar producto de la lista Original >>>==>>
const deleteList = list.findIndex((item) => item.title === "Burger");
if (deleteList !== -1) {
  list.splice(deleteList, 1);
}
console.log("New List Now:", list);
console.groupEnd();

// <<< ================================================================================== >>>
console.group("Exercise List");
// <<== Update == Actualizar ==>>
const listProduct = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];
//> Add Change:> (1)>>>
const update = {
  id: "🥞",
  change: {
    price: 150,
    description: "Delicious",
    chef: "Chef Herrera",
  },
};
//> Buscar y agregar (2)>>
const search = listProduct.findIndex((item) => item.id === update.id);

listProduct[search] = {
  ...listProduct[search], // Agregar la info ya hecha / ya tiene ==>>
  ...update.change,
}; // <<Cambio completo>>

console.log("New Update ListProduct", listProduct);

console.groupEnd();
