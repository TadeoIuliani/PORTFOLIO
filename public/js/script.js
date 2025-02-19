// Esperar a que la página cargue completamente
document.addEventListener("DOMContentLoaded", function () {
    
    // Seleccionar todos los enlaces dentro del navbar
    document.querySelectorAll("nav a").forEach(link => {

        // Agregar un evento al hacer clic en cada enlace
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Evita que el enlace haga un salto automático

            const targetId = this.getAttribute("data-target"); // Obtiene el ID de la sección destino
            const targetElement = document.getElementById(targetId); // Busca la sección en el documento

            if (targetElement) {
                // Desplazar suavemente a la sección
                targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        });
    });
});
