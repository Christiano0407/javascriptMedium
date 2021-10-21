//> flapMap() ==> Concatenar>>>
// Alinear para ejecutar un posterior análisis>>>
//>
const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "Mike", attributes: ["Lovely"] },
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];
console.log(users);

//>> Method Map>>
const rta = users.map((item) => item.attributes);
const rta1 = users.map((users) => users.attributes).flat(); // Concatenar lo Mapeado>>>
const rta2 = users.map((item) => item.username);
const rta3 = users.map((item) => item.userId);
// flatMap>>>>
const rtaMap = users.flatMap((users) => users.attributes);

//>>>
console.log(rta);
console.log(rta1);
console.log(rta2);
console.log(rta3);
console.log(rtaMap);

// Method filterMap=== Exercise >>>>>>>
const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};
//console.log(calendars);
//flatMap ==>> No es directo porque, los datos están dentro de un Objeto, y no un Array>>>>>
//(A)>
// <<<< keys ==> Me dice los atributos de un Objeto >>>>>
const key = Object.keys(calendars); // Object / atributos>>
const key1 = Object.values(calendars); // valores>>>
const key2 = Object.values(calendars).flat(); // valores>>> Array>>
const key3 = Object.values(calendars).flatMap((item) => {
  return item.map((element) => element.startDate);
}); // valores>>> Map >>> Array>>
//>
console.log("Keys", key);
console.log("Value", key1);
console.log("Flat", key2);
console.log("FlatMap", key3);
