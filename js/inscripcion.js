// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener todos los botones que abren el modal
var btns = document.querySelectorAll(".openModalBtn");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Asignar el evento de clic a cada botón para abrir el modal
btns.forEach(function(btn) {
    btn.onclick = function() {
        modal.style.display = "flex";
    };
});

// Cuando el usuario hace clic en <span> (x), se cierra el modal
span.onclick = function() {
    modal.style.display = "none";
};

// Cuando el usuario hace clic fuera del modal, se cierra
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
