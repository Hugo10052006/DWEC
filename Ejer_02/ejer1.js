const numeros = [3, 8, 12, 5, 20, 7, 14];

const dobles = numeros.map(numero => numero * 2);

const pares = numeros.filter(numero => numero % 2 === 0);

for (const par of pares) {
  console.log(par);
}