
// Array para almacenar la lista de amigos
let amigos = [];

// Función para agregar un nuevo amigo a la lista
function agregarAmigo() {
    // Obtiene el valor del campo de entrada
    let amigo = document.getElementById('amigo').value;

    // Verifica si el campo está vacío
    if (amigo == '') {

        alert('Debes escribir el nombre de tu amigo'); // Muestra una alerta si no se ingresó un nombre

    } else {

        amigos.push(amigo); // Agrega el amigo al array
        console.log(amigos); // Muestra la lista en la consola
        document.getElementById('amigo').value = ''; // Limpia el campo de entrada
        document.getElementById('amigo').focus(); // Vuelve a enfocar el campo de entrada
        mostrarAmigos(); // Actualiza la lista en la interfaz
    }
}

// Función para mostrar la lista de amigos en pantalla
function mostrarAmigos() {

    let amigosHTML = '';

    // Recorre el array y genera los elementos <li> para cada amigo
    for (let i = 0; i < amigos.length; i++) {
        amigosHTML += `<li>${amigos[i]}</li>`;
    }

    // Inserta la lista generada en el elemento con id 'listaAmigos'
    document.getElementById('listaAmigos').innerHTML = amigosHTML;
}

// Función para sortear un amigo al azar
function sortearAmigo() {

    // Verifica si hay amigos en la lista antes de realizar el sorteo
    if (amigos.length == 0) {

        alert('Debes agregar amigos antes de sortear'); // Muestra una alerta si la lista está vacía
        document.getElementById('resultado').innerHTML = ''; // Borra el resultado anterior

    } else {

        document.getElementById('listaAmigos').innerHTML = ''; // Borra la lista de amigos en pantalla
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]; // Selecciona un amigo aleatoriamente
        document.getElementById('resultado').innerHTML = amigoSorteado; // Muestra el amigo sorteado
        eliminarTodosAmigos(); // Borra la lista después de sortear
    }
}

// Función para eliminar todos los amigos de la lista
function eliminarTodosAmigos() {
    
    amigos = []; // Vacía el array de amigos
    mostrarAmigos(); // Actualiza la interfaz
}
