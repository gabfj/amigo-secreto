// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigoSeleccionado = '';
let listaAmigosIngresados = [];

function asignarTextoElemento(idEelemento, texto) {
    let elementoHTML = document.getElementById(idEelemento);
    elementoHTML.innerHTML += "<li>"+texto+"</li>";
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
    document.getElementById('amigo').focus();
}

function agregarAmigo(){
    console.log(listaAmigosIngresados);

    let nombreDeAmigo = document.getElementById('amigo').value;

    if (nombreDeAmigo === ''){
        alert(`Por favor, ingrese un nombre válido.`);
        return;
    }else if(listaAmigosIngresados.includes(nombreDeAmigo)) {
        alert(`El nombre ${nombreDeAmigo} ya fué ingresado.`);
        limpiarCaja();
    }else{
        listaAmigosIngresados.push(nombreDeAmigo);
        asignarTextoElemento('listaAmigos',`${nombreDeAmigo}`);
        limpiarCaja();
    }
}

function sortearAmigo() {
    if (listaAmigosIngresados.length < 2) {
        alert("Debes ingresar al menos dos amigos.");
        return;
    }

    let indice =  Math.floor(Math.random()*listaAmigosIngresados.length);
    amigoSeleccionado = listaAmigosIngresados[indice];
    document.getElementById("listaAmigos").remove();
    document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es: ${amigoSeleccionado}`;
}