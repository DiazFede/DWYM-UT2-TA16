const btnOcultar = document.getElementById("btnOcultar");

btnOcultar.addEventListener("click", function() {
    const parrafo = document.getElementById("texto");
    parrafo.style.display = "none";
});
