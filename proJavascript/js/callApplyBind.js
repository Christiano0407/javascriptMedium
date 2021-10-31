console.group("Call/Apply/Bind");
// Call >> Ayuda a concatenar todo ======>>>>
function saludar() {
  console.log(`Hola, soy ${this.name} ${this.firstName}`);
}

const chris = {
  name: "Chris",
  firstName: "Evans",
};
saludar.call(chris);

//>
function caminar(metros, direccion) {
  console.log(
    `Soy ${this.name} ${this.firstName}, y recorro ${metros} mts,  hacia: ${direccion}`
  );
}

caminar.call(chris, 500, `New York City`);

// << ======= Apply ======= >>
// Misma función que "Call pero, sus argumentos pasan de manera diferente>"
// Diferencia es que se meten en un array.
caminar.apply(chris, [100, `Disney World`]);
const value = [200, "CDMX"];
caminar.apply(chris, value);

// << ======== Bind ========= >>
// Construye una nueva función / con this incluido>>>
const alma = { name: "Alma", firstName: "Rosas" };
const almaSaludar = saludar.bind(alma);
almaSaludar();

const almaCamina = caminar.bind(alma, 500, "Centro CDMX");
almaCamina();

console.groupEnd();
