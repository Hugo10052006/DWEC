import resumenInventario, {
  crearProducto,
  filtrarPorCategoria,
  listarProductosAgotados,
  calcularValorTotalInventario
} from "./inventario.js";

const inventario = [];

inventario.push(crearProducto("Portátil", "Electrónica", 899, 5));
inventario.push(crearProducto("Auriculares", "Electrónica", 59, 0));
inventario.push(crearProducto("Camiseta", "Ropa", 15, 40));
inventario.push(crearProducto("Pantalón", "Ropa", 35, 20));
inventario.push(crearProducto("El Quijote", "Libros", 12, 10));
inventario.push(crearProducto("Cien años de soledad", "Libros", 18, 0));

console.log("Productos de Ropa:");
console.log(filtrarPorCategoria(inventario, "Ropa"));

console.log("Productos agotados:");
console.log(listarProductosAgotados(inventario));

console.log(`Valor total del inventario: ${calcularValorTotalInventario(inventario)} €`);

resumenInventario(inventario);