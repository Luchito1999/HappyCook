// alert("Bienvenido a Panaderia Lucho");



// console.log(producto1);
// console.log(producto2);
// console.log(producto3);

// let pedido = 0;
// let pedidoMed = 0;
// let pedidoChu = 0;
// let pedidoBol = 0;

// let medPrecio = 500;
// let chuPrecio = 500;
// let bolPrecio = 600;

// const IVA = 1.21
// const envio = 400

// while (pedido !== "cobrar") {
//     pedido = prompt("¿Que desea llevar? Medialunas / Churros / Bolitas / Cobrar").toLowerCase();

// switch (pedido.toLowerCase()) {
//   case "medialunas":
//     let = pedidoMed = prompt ("Perfecto tenemos medialunas de manteca! ¿Cuantas desea llevar?" );
//     break;
//   case "medialuna":
//     let = pedidoMed = prompt ("Perfecto tenemos medialunas de manteca! ¿Cuantas desea llevar?");
//     break;
//   case "churro":
//     let = pedidoChu = prompt ("Perfecto tenemos churros bañados! ¿Cuantos desea llevar?" );
//     break;
//   case "churros":
//     let = pedidoChu = prompt ("Perfecto tenemos churros bañados! ¿Cuantos desea llevar?");
//     break;
//   case "bolita":
//     let = pedidoBol = prompt ("Perfecto tenemos bolitas rellenas! ¿Cuantas desea llevar?");
//     break;
//   case "bolitas":
//     let = pedidoBol = prompt ("Perfecto tenemos bolitas rellenas! ¿Cuantas desea llevar?");
//     break;
//   case "cobrar":
//     break;
//     default:
//         alert ("No tenemos " + pedido);
//     break;
//     } 
// }

// let precioFinal = (pedidoMed * medPrecio) * IVA + envio + (pedidoChu * chuPrecio) * IVA
// + (pedidoBol * bolPrecio) * IVA;

// alert ("El gasto de su pedido es: " + precioFinal);


// function Producto(nombre, precio, agregado) {
//   this.nombre = nombre;
//   this.precio = precio;
//   this.agregado = agregado;
// }
// const producto1 = new Producto("Medialuna", 500, "simple");
// const producto2 = new Producto("Churro", 500, "relleno");
// const producto3 = new Producto("Bolita", 600, "relleno");


// 2da entrega

// const productos = [
//   { nombre: "Medialuna", precio: 500, estilo: "simple"},
//   { nombre: "Churro", precio: 500, estilo: "relleno"},
//   { nombre: "Bolita", precio: 600, estilo: "relleno"},
//   { nombre: "Vigilante", precio: 550, estilo: "simple"},
//   { nombre: "Cremona", precio: 900, estilo: "simple"},
// ];

// function listaProductos () {
//   console.log("Productos Caseros")
//   productos.forEach((producto) => {
//     console.log(
//       `Producto: ${producto.nombre}, Precio: $${producto.precio}, Estilo: ${producto.estilo}`
//     );
//   });
// }
// listaProductos();

// let compraUsuario = [];
// let total = 0;

// function agregarProducto(nombreProducto, cantidad) {

//   const nombreProductoLower = nombreProducto.toLowerCase();
//   const productoEncontrado = productos.find(producto => producto.nombre.toLowerCase() === nombreProductoLower);

//   if (isNaN(cantidad) || cantidad <= 0) {
//     alert("Cantidad inválida");
//     return;
//   }

//   if (productoEncontrado) {
//     total += productoEncontrado.precio * cantidad;
//     compraUsuario.push({ producto: productoEncontrado.nombre, cantidad });
//   } else {
//     alert("Producto no disponible");
//   }
// }

// function mostrarCompra() {
//   if (compraUsuario.length === 0) {
//     alert("No hay productos en la compra.");
//   } else {
//     const detalleCompra = compraUsuario.map(item => `${item.producto} x ${item.cantidad}`).join(" + ");
//     alert(`Su compra es: ${detalleCompra}\nTotal: $${total}`);
//   }
// }
// mostrarCompra();

// 3er entrega

const contenedorCards = document.getElementById("productos-container");

// fetch("./productos.json")
//     .then((response) => response.json())
//     .then((data) => { 
//       crearCardsProductos(data); 
//   })
//   .catch((error) => {
//       console.error("Error al obtener los productos:", error);
//   });

// function crearCardsProductos(data) {
//     data.forEach(producto => {
//         const nuevoProducto = document.createElement("div");
//         nuevoProducto.classList.add("tarjeta-producto");
//         nuevoProducto.innerHTML = `
//             <img src="${producto.img}">
//             <h3>${producto.nombre}</h3>
//             <p>$${producto.precio} c/u</p>
//             <button>Agregar al carrito</button>
//         `;
//         contenedorCards.appendChild(nuevoProducto);

//         // Agregar funcionalidad al botón
//         nuevoProducto.getElementsByTagName("button")[0].addEventListener("click", () => {
//             agregarAlCarrito(producto);
//         });
//     });
// }

fetch("./productos.json")
    .then(response => response.json())
    .then(data => {
      console.log(data);
        function crearCardsProductos(data) {
            data.forEach(producto => {
                const nuevoProducto = document.createElement("div");
                nuevoProducto.classList.add("tarjeta-producto");
                nuevoProducto.innerHTML = `
                    <img src="${producto.img}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <p>$${producto.precio} c/u</p>
                    <button>Agregar al carrito</button>
                `;
                contenedorCards.appendChild(nuevoProducto);
                // Agregar funcionalidad al botón
                nuevoProducto.getElementsByTagName("button")[0].addEventListener("click", () => {
                    agregarAlCarrito(producto);
                });
            });
        }

        crearCardsProductos(data);
    })
    .catch(error => {
        console.error("Error al obtener los productos:", error);
    });