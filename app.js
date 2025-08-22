// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

// Se crea Array para nombres
let amigos = [];

// Se crea funcion para agregar amigos
function agregarAmigo() {
   let nombreAmigo = document.getElementById('amigo').value;
   if (nombreAmigo === '') {
        alert("Por favor, Ingrese un Nombre Válido"); // Mensaje Alerta nombre
   } else {
        amigos.push (nombreAmigo);// Agrega al array un nombre nuevo.
        // Imprime los nombres en lista.
        let listadoDeAmigos = document.getElementById('listaAmigos');
        let contenido = "";
        for (let amigo of amigos) {
            contenido += `<li> ${amigo} </li>`;
            listadoDeAmigos.innerHTML = contenido;
        }
        limpiarBloque();
   } 
}

function generarAmigoSecreto() {
    if (amigos == "") {
        alert("No hay ningún nombre en la Lista de Amigos");// Para saber si no hay amigos en la lista.-
    } else {
        let indiceAleatorio = Math.floor(Math.random()*amigos.length);
        let amigoSecreto = amigos[indiceAleatorio];
        console.log(indiceAleatorio);
        console.log(amigoSecreto);
        let resultadoSorteo = document.getElementById('resultado');
        resultadoSorteo.innerHTML = `Felicidades "${amigoSecreto}" es tú Amigo Secreto`;

    }
    
}

// Funcion para limpiar bloque
function limpiarBloque() {
    document.querySelector('#amigo').value = ''; 
}
