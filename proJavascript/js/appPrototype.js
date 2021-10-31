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
function heroProto(name, firstName) {
  //const hero = Object.create(heroProto.prototype);
  this.name = name;
  this.firstName = firstName;
  //return hero;
}

//(2)>
heroProto.prototype.hello = function () {
  console.log(`Hola, yo soy: ${this.name} ${this.firstName}`);
};

const mario = new heroProto("Mario", "Bros");
mario.hello();
