console.group("Method Some");
// <True or False>
const numbers = [1, 2, 4, 5, 8, 9];

// Ciclo for>>
let rta = false;

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];

  if (element % 2 === 0) {
    rta = true;
    break;
  }
}
console.log(rta);

// Method Some>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const somePLus = numbers.some((item) => item % 2 === 0);
console.log(somePLus);

// ========================================================================>>
// Exercise>>>
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

const someData = data.some((item) => item.delivered);
console.log(someData);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Exercise Two>
const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
};
console.log(dates);

console.groupEnd();
