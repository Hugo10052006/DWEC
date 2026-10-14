const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
  estaDisponible: false
};

console.table(coche);

const { marca, modelo } = coche;
console.log(marca);
console.log(modelo);

coche.estaDisponible = true;
coche.color = "rojo";
delete coche.año;

console.table(coche);