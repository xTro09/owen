// Redirigir a otra página cuando se presiona "Acepto"
function mostrarMensaje() {
    window.location.href = "aceptado.html";
}

// Mensajes que se mostrarán al presionar "No quiero"
const mensajes = [
    "¿Estás seguro? 😢",
    "Piénsalo bien... 💔",
    "¡Vamos, di que sí! 🥺",
    "No me hagas esto... 😭",
    "Solo una oportunidad más... 💕"
];

let contador = 0;

// Función para cambiar el mensaje cada vez que se presiona "No quiero"
document.getElementById("noBtn").addEventListener("click", function() {
    alert(mensajes[contador]);

    contador++;

    // Si llega al final del array, vuelve al inicio
    if (contador >= mensajes.length) {
        contador = 0;
    }
});

// Hacer que el botón "No quiero" se mueva al pasar el mouse
document.getElementById("noBtn").addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - this.clientWidth);
    let y = Math.random() * (window.innerHeight - this.clientHeight);
    this.style.left = x + "px";
    this.style.top = y + "px";
});