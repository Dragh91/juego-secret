//let titulo = document.querySelector('h1'); se sustituye con la funcion de linea 14
//titulo.innerHTML = 'Juego del número secreto'; sustituido en linea 15

//let parrafo = document.querySelector('p'); se sustituye en la funcion linea 14
//parrafo.innerHTML = 'Indica un número del 1 al 10'

let numerosecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

console.log(numerosecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    //let numeroDeUsuario = document.querySelector('input');
    //parseInt sirve para forzar la conversion de un string a un numero
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(typeof(numeroDeUsuario));
    //console.log(numerosecreto);
    //console.log(typeof(númerosecreto));
    //console.log(numeroDeUsuario);
    //el tripe igual sirve para validar que sean del mismo tipo 
    //console.log(númerosecreto === numeroDeUsuario);
    console.log(intentos);
    if (numeroDeUsuario === numerosecreto) {
        //${variable} ${(comprobacion)} operador ternario ?=if :else
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        //el usuario no acerto
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numerosecreto){
        asignarTextoElemento('p','El numero secreto es menor');
        }else {
        asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja( );
    }

    return;
}

function limpiarCaja() {
    //para seleccionar id's se hace con signo #
    document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto() {
    //no se necesita crear una variable
    //let númerosecreto = Math.floor(Math.random()*10)+1;
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 
    console.log(numeroGenerado)
    console.log(listaNumeroSorteados)
    //pregunta si ya sortemos todos los numero
    if (listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
    //si el numero generado esta incluido en la lista
    if (listaNumeroSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numerosecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    //reiniciar el num de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();