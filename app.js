// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

// Se crea Array para nombres
let amigos = [];

// Se Crea funcion para agregar amigos
function agregarAmigo() {
   let amigoSecreto = document.getElementById('amigo').value;
   console.log(amigoSecreto);
   limpiarBloque();
   return;
}

function generarAmigoSecreto() {
    
}
// Funcion para limpiar bloque
function limpiarBloque() {
    document.querySelector('#amigo').value = ''; 
}
