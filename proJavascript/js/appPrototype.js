// < ==== Prototype ===== >
// <Method => Object.create> Recibe y crea un Objeto >>>>
// (A)>

/* //(2)> */
/* const heroMethods = { */
/*   hello: function () { */
/*     console.log(`Hola, yo soy: ${this.name}`); */
/*   }, */
/* }; */
/*  */
/* // (1)> */
/* function hero(name) { */
/*   const hero = Object.create(heroMethods); */
/*   hero.name = name; */
/*   return hero; */
/* } */
/*  */
/* const mario = hero("Mario"); */
/* mario.hello(); */

// (B)>
//(2)>
/* const heroMethods = { */
/*   hello: function () { */
/*     console.log(`Hola, yo soy: ${this.name}`); */
/*   }, */
/* }; */

// (1)>
function HeroProto({ name, firstName, approveTeam }) {
  //const hero = Object.create(heroProto.prototype);
  this.name = name;
  this.firstName = firstName;
  this.approveTeam = [];
  //return hero;
}

//(2)>
HeroProto.prototype.hello = function () {
  console.log(`Hola, yo soy: ${this.name} ${this.firstName}`);
};
//New Method>
HeroProto.prototype.addTeam = function (newTeam) {
  console.log("this", this);
  this.approveTeam.push(newTeam);
};

const mario = new HeroProto({
  name: "Mario",
  firstName: "Bros",
  approveTeam: (approveMoney = []),
});
mario.hello();
mario.addTeam("Manchester");
console.log(mario);
console.log(Object.keys(mario));
console.log(Object.getPrototypeOf(mario));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const luisa = {
  name: "Luisa",
  age: 30,
  approveMoney: [],

  // Method
  addMoney(newMoney) {
    console.log("this", this);
    this.approveMoney.push(newMoney);
  },
};

//>>
luisa.addMoney(500);
console.log(luisa);

console.log(Object.keys(luisa));
console.log(Object.getPrototypeOf(luisa));
