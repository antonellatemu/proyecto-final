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

const textos = ["Centros de alta complejidad municipales y privados",]; // Lista de textos a mostrar y borrar
const h2Element = document.getElementById("centros");
let indiceTexto = 0; // Índice del texto actual

function escribirTexto() {
    const textoActual = textos[indiceTexto];
    let textoVisible = "";
    let intervalo = setInterval(function () {
        textoVisible += textoActual.charAt(textoVisible.length);
        h2Element.textContent = textoVisible;

        if (textoVisible === textoActual) {
            clearInterval(intervalo);
            setTimeout(borrarTexto, 1000); // Borra el texto después de 1 segundo
        }
    }, 100); // Velocidad de escritura (en milisegundos)
}

function borrarTexto() {
    let textoActual = h2Element.textContent;
    let intervalo = setInterval(function () {
        textoActual = textoActual.slice(0, -1);
        h2Element.textContent = textoActual;

        if (textoActual === "") {
            clearInterval(intervalo);
            indiceTexto = (indiceTexto + 1) % textos.length; // Avanzar al siguiente texto
            setTimeout(escribirTexto, 1000); // Escribe el próximo texto después de 1 segundo
        }
    }, 100); // Velocidad de borrado (en milisegundos)
}

escribirTexto(); // Comienza el proceso de escritura








  
  
  



