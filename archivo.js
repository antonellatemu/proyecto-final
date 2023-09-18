document.addEventListener('DOMContentLoaded', function() {
    const textoAMostrar = document.getElementById('texto-a-mostrar');
    
    // Agregar una clase CSS para iniciar la animación
    textoAMostrar.classList.add('aparecer');

    // Cuando finalice la animación, puedes realizar alguna acción si es necesario
    textoAMostrar.addEventListener('animationend', function() {
        console.log('La animación ha terminado.');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const parrafoAMostrar = document.getElementById('parrafo-a-mostrar');
    
    // Agregar una clase CSS para iniciar la animación
    parrafoAMostrar.classList.add('aparecer');

    // Cuando finalice la animación, puedes realizar alguna acción si es necesario
    parrafoAMostrar.addEventListener('animationend', function() {
        console.log('La animación ha terminado.');
    });
});
window.addEventListener("scroll", function() {
    var menu = document.getElementById("menu");
    if (window.scrollY > 100) { // Cambia 100 al valor de desplazamiento deseado
      menu.classList.add("fixed-menu");
    } else {
      menu.classList.remove("fixed-menu");
    }
  });
 
  
  
  



