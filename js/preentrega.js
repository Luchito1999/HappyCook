alert("Bienvenido a Panaderia Lucho");

ducto3 = "bolita"

function Producto(nombre, precio, agregado) {
  this.nombre = nombre;
  this.precio = precio;
  this.agregado = agregado;
}
const producto1 = new Producto("Medialuna", 500, "simple");
const producto2 = new Producto("Churro", 500, "relleno");
const producto3 = new Producto("Bolita", 600, "relleno");

console.log(producto1);
console.log(producto2);
console.log(producto3);

let pedido = 0;
let pedidoMed = 0;
let pedidoChu = 0;
let pedidoBol = 0;

let medPrecio = 500;
let chuPrecio = 500;
let bolPrecio = 600;

const IVA = 1.21
const envio = 400

while (pedido !== "cobrar") {
    pedido = prompt("¿Que desea llevar? Medialunas / Churros / Bolitas / Cobrar").toLowerCase();

switch (pedido.toLowerCase()) {
  case "medialunas":
    let = pedidoMed = prompt ("Perfecto tenemos medialunas de manteca! ¿Cuantas desea llevar?" );
    break;
  case "medialuna":
    let = pedidoMed = prompt ("Perfecto tenemos medialunas de manteca! ¿Cuantas desea llevar?");
    break;
  case "churro":
    let = pedidoChu = prompt ("Perfecto tenemos churros bañados! ¿Cuantos desea llevar?" );
    break;
  case "churros":
    let = pedidoChu = prompt ("Perfecto tenemos churros bañados! ¿Cuantos desea llevar?");
    break;
  case "bolita":
    let = pedidoBol = prompt ("Perfecto tenemos bolitas rellenas! ¿Cuantas desea llevar?");
    break;
  case "bolitas":
    let = pedidoBol = prompt ("Perfecto tenemos bolitas rellenas! ¿Cuantas desea llevar?");
    break;
  case "cobrar":
    break;
    default:
        alert ("No tenemos " + pedido);
    break;
    } 
}

let precioFinal = (pedidoMed * medPrecio) * IVA + envio + (pedidoChu * chuPrecio) * IVA
+ (pedidoBol * bolPrecio) * IVA;

alert ("El gasto de su pedido es: " + precioFinal);




