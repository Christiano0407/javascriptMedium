// Exercise Two>
// <== npm i date-fns ===>
//import { areIntervalsOverlapping, isOverlap } from "date-fns";
// (A)
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
console.log(dates);
//(B)
const newAppointment = {
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
};

// (C) date-fns> npm>
//const areIntervalsOverlapping = require("date-fns/areIntervalsOverlapping");
const areIntervalsOverlapping = require(`date-fns/areIntervalsOverlapping`);
//import format from "date-fns/format";
//import { format } from "date-fns";
/*areIntervalsOverlapping(intervalLeft, intervalRight, [options]);*/
//const { areIntervalsOverlapping } = require("date-fns");

// (F) Para saber si se sobreponen => date-fns>>>
const isOverlap = (newDate) => {
  return dates.some((date) => {
    return areIntervalsOverlapping(
      { start: date.startDate, end: date.endDate },
      { start: newDate.startDate, end: newDate.endDate }
    );
  });
};
//(G)>
console.log(`isOverlap`, isOverlap(newAppointment));
