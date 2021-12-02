window.onload = inicializar;

function inicializar() {


    mostrarCarrito();
    document.getElementById("eliminarCarro").addEventListener("click", eliminarCarro, false);

}

function mostrarCarrito() {
    var carrito = JSON.parse(sessionStorage.getItem("carrito"));
    var total = 0;
    carrito.forEach(zapato => {

        document.getElementById("mostrarCarrito").innerHTML += `<div class="divzapatos">
            <div class="imagenproducto">
                <img src="${zapato.imagen}" width="400" height="300">
            </div>
            <div class="descripcionproducto">
                <h3 >${zapato.nombre}</h3>
                <h4 >${zapato.precio}€</h4>
            </div>
            

        </div>`
        total += Number(zapato.precio);

    });
    document.getElementById("total").innerHTML = "Total : " + total + "€";
}

function eliminarCarro() {
    sessionStorage.clear();
    location.reload();
}