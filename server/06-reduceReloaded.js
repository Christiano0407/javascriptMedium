console.group("ReduceReloaded");
// El primer valor es el acumulador => Sum>>
// 1> Arrow Function / 2> Estado Inicial (0); =====> Mandamos dos parámetro
// (element(index) === item)>>
//========================= (1) ========================= <(2)>
// (A)>
const items = [1, 2, 3, 4, 2, 5, 2, 3, 6];
// obj => No existe toavía = Mandamos crear> Es el valor acumulado>
const redu = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1; // 1 = Iteración>
  }
  return obj;
}, {});
// {} => Objeto === cero(No tiene valor)>
console.log(redu);
// Exercise ============================================================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Ejem: Object>>
const data = [
  {
    name: "Diana",
    level: "low",
    total: 60,
    delivered: true,
  },
  {
    name: "Luisa",
    level: "Medium",
    total: 90,
    delivered: false,
  },
  {
    name: "Mau",
    level: "Hight",
    total: 100,
    delivered: false,
  },
  {
    name: "Pammela",
    level: "Medium",
    total: 150,
    delivered: true,
  },
  {
    name: "Chris",
    total: 200,
    level: "Hight",
    delivered: true,
  },
  {
    name: "Karen",
    level: "Medium",
    total: 500,
    delivered: false,
  },
  {
    name: "Paola",
    level: "Hight",
    total: 100,
    delivered: true,
  },
];
console.log(data);

//(B)>
// (1) Me interesan los niveles >>
const reduTwo = data
  .map((item) => item.level) // Mapeamos >
  // Puedo concatenar> (Unir más métodos)
  .reduce((obj, item) => {
    // Cuántos existen dentro del mapeo / repiten >>>
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] += 1;
    }
    return obj;
  }, {});

console.log(reduTwo);

console.groupEnd();
