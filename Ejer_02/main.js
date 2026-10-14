import mostrarPerfil, {
  crearPerfil,
  obtenerMayoresDeEdad,
  calcularPromedioEdad
} from "./gestorUsuarios.js";

const usuarios = [
  crearPerfil("Ana", "ana@mail.com", 25),
  crearPerfil("Luis", "luis@mail.com", 17),
  crearPerfil("Marta", "marta@mail.com", 32),
  crearPerfil("Pedro", "pedro@mail.com", 15),
  crearPerfil("Laura", "laura@mail.com", 18)
];

const mayoresDeEdad = obtenerMayoresDeEdad(usuarios);

console.log("Usuarios mayores de edad:");
for (const usuario of mayoresDeEdad) {
  console.log(mostrarPerfil(usuario));
}

const promedio = calcularPromedioEdad(usuarios);
console.log(`La edad promedio de los usuarios es: ${promedio}`);