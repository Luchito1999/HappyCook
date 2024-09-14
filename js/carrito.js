function agregarAlCarrito(producto) {
    // Validar el producto antes de añadirlo
    if (!producto.id || !producto.nombre || !producto.img || !producto.precio) {
        console.error("Producto inválido:", producto);
        return;
    }
    let memoria = JSON.parse(localStorage.getItem("data")) || [];
    let cuenta = 0;

    const indiceProducto = memoria.findIndex(item => item.id === producto.id);

    if (indiceProducto === -1) {
        // Producto no está en la memoria, lo añadimos
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        memoria.push(nuevoProducto);
        cuenta = 1;
    } else {
        // Producto ya está en la memoria, incrementamos la cantidad
        memoria[indiceProducto].cantidad++;
        cuenta = memoria[indiceProducto].cantidad;
    }
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "El producto se agregó al carrito",
        showConfirmButton: true,
        timer: 1200
    });
    localStorage.setItem("data", JSON.stringify(memoria));
    actualizarNumeroCarrito();
    return cuenta;
};



function restarAlCarrito(producto) {
    let memoria = JSON.parse(localStorage.getItem("data")) || [];
    const indiceProducto = memoria.findIndex(item => item.id === producto.id);

    if (indiceProducto !== -1) {
        if (memoria[indiceProducto].cantidad === 1) {
            // Si la cantidad es 1, eliminamos el producto
            memoria.splice(indiceProducto, 1);
        } else {
            // Decrementamos la cantidad
            memoria[indiceProducto].cantidad--;
        }
        
        localStorage.setItem("data", JSON.stringify(memoria));
        actualizarNumeroCarrito();
    }
}

// Toma un producto, le agrega cantidad 1 y lo devuelve
function getNuevoProductoParaMemoria(producto) {
    return { ...producto, cantidad: 1 };
}

const cuentaCarritoElement = document.getElementById("cuenta-carrito");
function actualizarNumeroCarrito() {
    const memoria = JSON.parse(localStorage.getItem("data")) || [];
    if (memoria && memoria.length > 0) {
    const cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0);
    cuentaCarritoElement.innerText = cuenta;
    console.log(cuenta)
    }else {
        cuentaCarritoElement.innerText = 0;
    }
}

actualizarNumeroCarrito();
