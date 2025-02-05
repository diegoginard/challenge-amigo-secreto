
let amigos = []

function agregarAmigo(){

    let amigo = document.getElementById('amigo').value

    amigos.push(amigo)

    console.log(amigos)

    document.getElementById('amigo').value = ''

    document.getElementById('amigo').focus()

    mostrarAmigos()
}

function mostrarAmigos(){

    let amigosHTML = ''

    for(let i = 0; i < amigos.length; i++){
        amigosHTML += `<li>${amigos[i]}</li>`
    }

    document.getElementById('listaAmigos').innerHTML = amigosHTML
}

function eliminarAmigo(){
    
    amigos.pop()

    mostrarAmigos()
}

function sortearAmigo(){
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]

    document.getElementById('resultado').innerHTML = amigoSorteado
}