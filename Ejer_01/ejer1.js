const nombre = "Hugo";

let edad = 20;

let tieneMascota = true;

edad = 21;
tieneMascota = false;

console.log(nombre, typeof nombre);            
console.log(edad, typeof edad);                
console.log(tieneMascota, typeof tieneMascota); 

console.log(
  `${nombre} tiene ${edad} años y ${tieneMascota ? "tiene" : "no tiene"} mascota.`
);