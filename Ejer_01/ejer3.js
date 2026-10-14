const producto = {
  nombre: "Portátil",
  precio: 899
};

const cliente = {
  nombreCliente: "Carlos",
  esPremium: true
};

const pedido = { ...producto, ...cliente };
console.log(pedido);

const cliente2 = {
  nombre: "Carlos",
  esPremium: true
};

const pedido2 = { ...producto, ...cliente2 };
console.log(pedido2);