
let amigos = []

function agregarAmigo(){

        let amigo = document.getElementById('amigo').value

        if(amigo == ''){

            alert('Debes escribir el nombre de tu amigo')

        }else{

            amigos.push(amigo);
            console.log(amigos);
            document.getElementById('amigo').value = '';
            document.getElementById('amigo').focus();
            mostrarAmigos();
    }
}

function mostrarAmigos(){

    let amigosHTML = '';

    for(let i = 0; i < amigos.length; i++){
        amigosHTML += `<li>${amigos[i]}</li>`
    }

    document.getElementById('listaAmigos').innerHTML = amigosHTML;
}


function sortearAmigo(){

    if(amigos.length == 0){

        alert('Debes agregar amigos antes de sortear');
        document.getElementById('resultado').innerHTML = '';
        
    }else{

        document.getElementById('listaAmigos').innerHTML = '';
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById('resultado').innerHTML = amigoSorteado;
        eliminarTodosAmigos();
    }
}
    
function eliminarTodosAmigos(){

    amigos = [];
    mostrarAmigos();
}