export function crearProducto(nombre, categoria, precio, stock) {
  return { nombre, categoria, precio, stock };
}

export function filtrarPorCategoria(inventario, categoria) {
  return inventario.filter(producto => producto.categoria === categoria);
}

export function listarProductosAgotados(inventario) {
  return inventario.filter(producto => producto.stock === 0);
}

export function calcularValorTotalInventario(inventario) {
  return inventario.reduce((acc, producto) => acc + producto.precio * producto.stock, 0);
}

export default function resumenInventario(inventario) {
  const categorias = new Set(inventario.map(producto => producto.categoria));
  console.log("Resumen del inventario:");
  console.log(`Número total de productos: ${inventario.length}`);
  console.log(`Número de categorías distintas: ${categorias.size}`);
  console.log(`Valor total: ${calcularValorTotalInventario(inventario)} €`);
}