window.onload = inicializar;
var carrito = [];

function inicializar() {



    document.getElementById("añadir1").addEventListener("click", añadir1, false);
    document.getElementById("añadir2").addEventListener("click", añadir2, false);
    document.getElementById("añadir3").addEventListener("click", añadir3, false);
    document.getElementById("añadir4").addEventListener("click", añadir4, false);
    document.getElementById("añadir5").addEventListener("click", añadir5, false);
    document.getElementById("añadir6").addEventListener("click", añadir6, false);
    document.getElementById("vercarrito").addEventListener("click", guardarCarrito, false);

}


function añadir1() {

    var fila = { 'nombre': document.getElementById('zapato1').innerHTML, 'precio': document.getElementById('precio1').innerHTML, 'cantidad': 1, 'imagen': document.getElementById("imagen1").getAttribute("src") };


    carrito.push(fila);

}

function añadir2() {

    var fila = { 'nombre': document.getElementById('zapato2').innerHTML, 'precio': document.getElementById('precio2').innerHTML, 'cantidad': 1, 'imagen': document.getElementById("imagen2").getAttribute("src") };

    carrito.push(fila);

}

function añadir3() {

    var fila = { 'nombre': document.getElementById('zapato3').innerHTML, 'precio': document.getElementById('precio3').innerHTML, 'cantidad': 1, 'imagen': document.getElementById("imagen3").getAttribute("src") };

    carrito.push(fila);

}

function añadir4() {

    var fila = { 'nombre': document.getElementById('zapato4').innerHTML, 'precio': document.getElementById('precio4').innerHTML, 'cantidad': 1, 'imagen': document.getElementById("imagen4").getAttribute("src") };

    carrito.push(fila);

}

function añadir5() {

    var fila = { 'nombre': document.getElementById('zapato5').innerHTML, 'precio': document.getElementById('precio5').innerHTML, 'cantidad': 1, 'imagen': document.getElementById("imagen5").getAttribute("src") };

    carrito.push(fila);

}

function añadir6() {

    var fila = { 'nombre': document.getElementById('zapato6').innerHTML, 'precio': document.getElementById('precio6').innerHTML, 'cantidad': 1, 'imagen': document.getElementById("imagen6").getAttribute("src") };

    carrito.push(fila);

}

function guardarCarrito() {
    var carritoAnterior = JSON.parse(sessionStorage.getItem("carrito"));
    if (carritoAnterior == null) {
        sessionStorage.setItem("carrito", JSON.stringify(carrito));
    } else {
        carritoAnterior.forEach(zapato => {
            carrito.push(zapato);
        });
        sessionStorage.setItem("carrito", JSON.stringify(carrito));
    }
}