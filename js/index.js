alert("¡Bienvenidas Mujeres Emprendedoras!");

function Bienvenida() {
    var pregunta = confirm("¿Deseas saber acerca de autonomía económica de las mujeres ? ");
}

function confirmacion() {
    var pregunta = confirm("Ingresa tu nombre:");
    if (pregunta == true) {
        var nombre = prompt("Ingresa tu nombre: ");
        document.getElementById('mostrar_mensaje').innerHTML = "Hola " + nombre + " te invitamos a ser emprendedora y a desarrollar tu autonomía económica";
    } else {
        document.getElementById('mostrar_mensaje').innerHTML = "Te invitamos a desarrollar tu autonomia económica";
    }
}
Bienvenida();
confirmacion();