const ciudades = ["Madrid", "Buenos Aires", "Tokio", "Nueva York", "París"];

ciudades.push("Roma");

const ciudadesMayusculas = ciudades.map(ciudad => ciudad.toUpperCase());

const ciudadesFiltradas = ciudades.filter(ciudad => ciudad.length > 6);

console.log(ciudades);
console.log(ciudadesMayusculas);
console.log(ciudadesFiltradas);