function calcularAreaRectangulo(base, altura) {
  return base * altura;
}

const calcularAreaTriangulo = function (base, altura) {
  return (base * altura) / 2;
};

const calcularAreaTrianguloFlecha = (base = 1, altura = 1) => (base * altura) / 2;

console.log(calcularAreaRectangulo(5, 3));
console.log(calcularAreaTriangulo(6, 4));
console.log(calcularAreaTrianguloFlecha(8, 5));
console.log(calcularAreaTrianguloFlecha());
console.log(calcularAreaTrianguloFlecha(10));