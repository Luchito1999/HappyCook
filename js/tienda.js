
const contenedorCards = document.getElementById("productos-container");
const unidadesElement = document.getElementById("unidades");
const precioElement = document.getElementById("precio");
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesElement = document.getElementById("totales");
const reiniciarCarritoElement = document.getElementById("reiniciar");

function crearCardsProductos() {
    contenedorCards.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("mercaderia")) || [];
    if (productos.length > 0) {
        productos.forEach(producto => {
            const nuevoProducto = document.createElement("div");
            nuevoProducto.classList.add("tarjeta-producto");
            nuevoProducto.innerHTML = `
            <img src=${producto.img}>
            <h3>${producto.nombre}</h3>
            <p>${producto.precio}</p>
            <div>
                <button> + </button>
                <span class="cantidad"> ${producto.cantidad} </span>
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
}

function actualizarTotales() {
    const productos = JSON.parse(localStorage.getItem("mercaderia")) || [];
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
        // Si no hay productos, asegúrate de mostrar 0
        unidadesElement.innerText = 0;
        precioElement.innerText = 0;
    }
}

function revisarMensajeVacio() {
    const productos = JSON.parse(localStorage.getItem("mercaderia")) || [];
    carritoVacioElement.classList.toggle("escondido", productos.length > 0);
    totalesElement.classList.toggle("escondido", productos.length === 0);
}

function actualizarTodo() {
    crearCardsProductos();
    actualizarTotales();
    revisarMensajeVacio();
}
actualizarTodo();


reiniciarCarritoElement.addEventListener("click", reiniciarCarrito);
function reiniciarCarrito () {
    localStorage.removeItem("mercaderia");
    actualizarTodo();
    crearCardsProductos();
}