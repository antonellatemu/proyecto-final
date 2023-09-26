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
const hr = document.querySelector('hr');

hr.addEventListener('click', () => {
  hr.style.transform = 'scaleX(2)';
  setTimeout(() => {
    hr.style.transform = 'scaleX(1)';
  }, 1000); // Revertir después de 1 segundo
});






  
  
  



