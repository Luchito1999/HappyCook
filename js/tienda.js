const contenedorCards = document.getElementById("productos-container");
const unidadesElement = document.getElementById("unidades");
const precioElement = document.getElementById("precio");
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesElement = document.getElementById("totales");
const reiniciarCarritoElement = document.getElementById("reiniciar");

function crearCardsProductos() {
    fetch("./productos.json")
        .then(response => response.json())
        .then(data => {
            contenedorCards.innerHTML = ""; // Limpiar el contenedor antes de volver a llenarlo
            const productos = JSON.parse(localStorage.getItem("data")) || [];
            if (productos.length > 0) {
                productos.forEach(producto => {
                    const nuevoProducto = document.createElement("div");
                    nuevoProducto.classList.add("tarjeta-producto");
                    nuevoProducto.innerHTML = `
                    <img src="${producto.img}">
                    <h3>${producto.nombre}</h3>
                    <p>$${producto.precio} c/u</p>
                    <div class = "botones">
                        <button> + </button>
                        <span class="cantidad">${producto.cantidad}</span>
                        <button> - </button>
                    </div>
                    `;
                    contenedorCards.appendChild(nuevoProducto);

                    nuevoProducto.getElementsByTagName("button")[0].addEventListener("click", () => {
                        agregarAlCarrito(producto);
                        actualizarTodo();
                    });
                    nuevoProducto.getElementsByTagName("button")[1].addEventListener("click", () => {
                        restarAlCarrito(producto);
                        actualizarTodo();
                    });
                });
            } else {
                // Maneja el caso en que no hay productos
                carritoVacioElement.classList.remove("escondido");
                totalesElement.classList.add("escondido");
            }
        });
}

function actualizarTotales() {
    const productos = JSON.parse(localStorage.getItem("data")) || [];
    let unidades = 0;
    let precio = 0;

    if (productos.length > 0) {
        productos.forEach(producto => {
            unidades += producto.cantidad;
            precio += producto.precio * producto.cantidad;
        });
        unidadesElement.innerText = unidades;
        precioElement.innerText = precio;
    } else {
        unidadesElement.innerText = 0;
        precioElement.innerText = 0;
    }
}

function revisarMensajeVacio() {
    const productos = JSON.parse(localStorage.getItem("data")) || [];
    carritoVacioElement.classList.toggle("escondido", productos.length > 0);
    totalesElement.classList.toggle("escondido", productos.length === 0);
}

function actualizarNumeroCarrito() {
    const memoria = JSON.parse(localStorage.getItem("data")) || [];
    const cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0);
    document.getElementById("cuenta-carrito").innerText = cuenta;
}

function actualizarTodo() {
    crearCardsProductos(); // Crea y actualiza las tarjetas de productos
    actualizarTotales();
    revisarMensajeVacio();
    actualizarNumeroCarrito();
}

// Inicializa la interfaz cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
    actualizarTodo();
});

reiniciarCarritoElement.addEventListener("click", reiniciarCarrito);
function reiniciarCarrito() {
    localStorage.removeItem("data");
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "El carrito se vació correctamente",
        showConfirmButton: false,
        timer: 1500
    });
    actualizarTodo(); // Actualiza la interfaz después de reiniciar el carrito
}
