window.onload = inicializar;

function inicializar() {

    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var email = document.getElementById("email");
    var provincia = document.getElementById("provincia");
    var ciudad = document.getElementById("ciudad");
    var codigo = document.getElementById("codigo")


    nombre.addEventListener("focusout", validarNombre);
    apellidos.addEventListener("focusout", validarApellidos);
    numero.addEventListener("focusout", validarNumero);
    ciudad.addEventListener("focusout", validarProvincia);
    provincia.addEventListener("focusout", validarCiudad);
    codigo.addEventListener("focusout", validarCodigo);
    email.addEventListener("focusout", validarEmail);
    document.getElementById("enviar").addEventListener("submit", finalizar, false);






    function validarNombre() {

        var expRegNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        var valueNombre = document.getElementById("nombre").value;
        document.formulario.nombre.value = valueNombre.toString().toUpperCase();

        if (expRegNombre.test(valueNombre)) {
            document.getElementById("errores").innerHTML = "";
        } else {
            document.getElementById("errores").innerHTML = "<p>Formato de nombre incorrecto</p>";
            document.getElementById("nombre").focus();
        }



    }

    function validarApellidos() {
        var expRegApellidos = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        var valueApellidos = document.getElementById("apellidos").value;
        document.formulario.apellidos.value = valueApellidos.toString().toUpperCase();

        if (expRegApellidos.test(valueApellidos)) {
            document.getElementById("errores").innerHTML = "";
        } else {
            document.getElementById("errores").innerHTML = "<p>Formato de apellidos incorrecto</p>";
            document.getElementById("apellidos").focus();
        }

    }




    function validarEmail() {
        var expRegEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var valueEmail = document.getElementById("email").value;


        if (expRegEmail.test(valueEmail)) {
            document.getElementById("errores").innerHTML = "";
        } else {
            document.getElementById("errores").innerHTML = "<p>Formato de Email incorrecto</p>";
            document.getElementById("email").focus();
        }

    }

    function validarCiudad() {

        var expRegCiudad = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        var valueCiudad = document.getElementById("ciudad").value;
        document.formulario.ciudad.value = valueCiudad.toString().toUpperCase();

        if (expRegCiudad.test(valueCiudad)) {
            document.getElementById("errores").innerHTML = "";
        } else {
            document.getElementById("errores").innerHTML = "<p>Formato de ciudad incorrecto</p>";
            document.getElementById("ciudad").focus();
        }



    }

    function validarProvincia() {

        var expRegProvincia = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        var valueProvincia = document.getElementById("provincia").value;
        document.formulario.provincia.value = valueProvincia.toString().toUpperCase();

        if (expRegProvincia.test(valueProvincia)) {
            document.getElementById("errores").innerHTML = "";
        } else {
            document.getElementById("errores").innerHTML = "<p>Formato de provincia incorrecto</p>";
            document.getElementById("provincia").focus();
        }



    }

    function validarNumero() {
        var expRegNumero = /^[0-9]{4}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/;
        var valueNumero = document.getElementById("numero").value;


        if (expRegNumero.test(valueNumero)) {
            document.getElementById("errores").innerHTML = "";
        } else {
            document.getElementById("errores").innerHTML = "<p>Formato de Numero de tarjeta incorrecto</p>";
            document.getElementById("numero").focus();
        }

    }

    function validarCodigo() {
        var expRegCodigo = /^[0-9]{3}/;
        var valueCodigo = document.getElementById("codigo").value;


        if (expRegCodigo.test(valueCodigo)) {
            document.getElementById("errores").innerHTML = "";
        } else {
            document.getElementById("errores").innerHTML = "<p>Formato de Codigo de Seguridad incorrecto</p>";
            document.getElementById("codigo").focus();
        }

    }


}

function finalizar(event) {
    event.preventDefault();

    var confirmacion = confirm("Esta seguro que desaea finalizar el pedido?");

    if (confirmacion) {
        event.preventDefault();

        sessionStorage.clear();
        location.href = "index.html"
    } else {
        event.preventDefault();

        return false;

    }
}