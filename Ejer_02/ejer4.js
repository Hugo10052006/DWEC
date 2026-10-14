const usuario = {
  nombre: "Carlos",
  email: "carlos@mail.com"
};

const perfil = {
  puesto: "Desarrollador",
  empresa: "TechCorp"
};

const empleado = { ...usuario, ...perfil };

const ciudad = empleado?.perfil?.direccion?.ciudad;
console.log(ciudad);

const ciudadFinal = empleado?.perfil?.direccion?.ciudad ?? "Ciudad no especificada";
console.log(ciudadFinal);