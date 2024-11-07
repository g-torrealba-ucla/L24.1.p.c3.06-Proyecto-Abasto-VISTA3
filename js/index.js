/**
 * Tenemos un abasto que procesa el código, nombre y costo de varios artículos
 * Se desea procesar estos artículos sabiendo que el precio de venta es con un
 * incremento del 25% del costo.
 * Se desea saber:
 * + El precio de venta de cada articulo
 * + Los artículos con menor precio de venta
 * + Los artículos con costo mayor que el promedio
 * + Cantidad de artículos con menor precio de venta
 * Cantidad de artículos con costo mayor que el promedio
 *
 * id   nombre     costo    pvp()
 * 1    Cerveza     1000    1250
 * 2    Coca-cola    500     625
 * 3    Pepsi        100     125
 * 4    Agua         300     375
 * 5    Jugo         100     125
 *
 * Artículos con menor precio de venta: Pepsi y Jugo (Resultado es ARRAY)
 * El promedio es: 400 (Resultado es número)
 * Artículos con costo mayor que el promedio: Cerveza y Coca-cola (Resultado es ARRAY)
 * Cantidad de artículos con menor precio de venta: 2 (Resultado es número)
 * Cantidad de artículos con costo mayor que el promedio: 2 (Resultado es número)
 */

import Cl_abasto from "./Cl_abasto.js";
import Cl_articulo from "./Cl_articulo.js";
import Dt_articulos from "./data.js";

const abasto = new Cl_abasto();

Dt_articulos.forEach((articulo) =>
  abasto.agregarArticulo(
    new Cl_articulo(articulo.id, articulo.nombre, articulo.costo)
  )
);

let salida = document.getElementById("salida");

let articulosMenorPvp = () => {
  let articulos = abasto.articulosMenorPvp();
  salida.innerHTML = `<br>Articulos con menor precio de venta:`;
  articulos.forEach((articulo) => {
    salida.innerHTML += `<br>${articulo.id} ${
      articulo.nombre
    } ${articulo.pvp()}`;
  });
};

let promedio = () => {
  let promedio = abasto.costoPromedio();
  salida.innerHTML = `<br>El promedio es: ${promedio}`;
};

let articulosCostoMayorPromedio = () => {
  let articulos = abasto.articulosCostoMayorPromedio();
  salida.innerHTML = `<br>Articulos con costo mayor que el promedio:`;
  articulos.forEach((articulo) => {
    salida.innerHTML += `<br>${articulo.id} ${articulo.nombre} ${articulo.costo}`;
  });
};

alert(`
  1= Artículos con menor precio de venta
  2= El promedio
  3= Artículos con costo mayor que el promedio
  4= Cantidad de artículos con menor precio de venta
  5= Cantidad de artículos con costo mayor que el promedio
  0= Fin`);
let opcion = +prompt("Seleccione su opción:");
switch (opcion) {
  case 1:
    articulosMenorPvp();
    break;
  case 2:
    promedio();
    break;
  case 3:
    articulosCostoMayorPromedio();
    break;
  case 4:
    salida.innerHTML = `<br>Cantidad de artículos con menor precio de venta: 
      ${abasto.cantidadArticulosMenorPvp()}`;
    break;
  case 5:
    salida.innerHTML = `<br>Cantidad de artículos con costo mayor que el promedio: 
      ${abasto.cantidadCostoMayorPromedio()}`;
    break;
}
