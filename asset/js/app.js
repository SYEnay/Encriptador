// Encriptador
    //REGLAS
    // La letra "e" es convertida para "enter" 
    // La letra "i" es convertida para "imes" 
    // La letra "a" es convertida para "ai" 
    // La letra "o" es convertida para "ober" 
    // La letra "u" es convertida para "ufat" 
    // tacos up meet out

//Encriptar
function encriptar(){
    esconder("superbox" );
    presentar("bottom");
    presentar("result");
    var text=document.getElementById("text").value;
    let arr = text.split('');
    cambiarText(arr,'encriptarText');

}
//Desencriptar
function desencriptar(){
    esconder("superbox" );
    presentar("bottom");
    presentar("result");
    var text=document.getElementById("text").value;
    //let arr = text.split('');
    arr=generarArreglo(text);
    cambiarText(arr,'desencriptarText');
}

// Remplaza cadenas según la acción
function cambiarText(arr,action){
    let letras=["e", "i", "a", "o", "u"];
    let cambio=["enter", "imes", "ai", "ober", "ufat"];
    if(action=='encriptarText'){
        buscando=letras;
        remplazando=cambio;
    }
    else{
        buscando=cambio;
        remplazando=letras;
    }
    for(i=0; i<arr.length; i++){
        for(j=0; j<buscando.length;j++){
            if(arr[i]==buscando[j]){
                arr[i]=arr[i].replace(buscando[j], remplazando[j]);
            }
        }
    }
    NewText=arr.toString();
    NewText=NewText.replaceAll(",", "");
    console.log(NewText);
    asignarTextoElemento(NewText);
}

// Presentar resultados
function asignarTextoElemento(texto) {
    let elementoHTML = document.querySelector('#r');
    elementoHTML.innerHTML = texto;
    return;
}

// Generar el nuevo arreglo al buscar las subcadenas en la entrada 
function generarArreglo(entrada) {
    arr = [];
    let cambio = ["enter", "imes", "ai", "ober", "ufat"];
    let pos = 0;
    while (pos < entrada.length) {
        let encontrado = false;
        for (let i = 0; i < cambio.length; i++) {
            if (entrada.startsWith(cambio[i], pos)) {
                arr.push(cambio[i]);
                pos += cambio[i].length;
                encontrado = true;
                break;
            }
        }
        if (!encontrado) {
            arr.push(entrada[pos]);
            pos++;
        }
    }
    return arr;
}

function copiarTexto() {
    // Seleccionamos el elemento que contiene el texto a copiar
    var elemento = document.getElementById("r");

    // Creamos un campo de texto oculto
    var campoDeTextoTemporal = document.createElement("textarea");
    campoDeTextoTemporal.value = elemento.textContent;

    // Añadimos el campo de texto temporal al DOM
    document.body.appendChild(campoDeTextoTemporal);

    // Seleccionamos el contenido del campo de texto temporal
    campoDeTextoTemporal.select();
    campoDeTextoTemporal.setSelectionRange(0, 99999); /* Para dispositivos móviles */

    // Copiamos el texto seleccionado al portapapeles
    document.execCommand("copy");

    // Removemos el campo de texto temporal del DOM
    document.body.removeChild(campoDeTextoTemporal);

    // Mensaje de confirmación
    alert("Texto copiado al portapapeles: " + elemento.textContent);
}


// PRESENTACIÓN

function esconder(elemento) {
    // Elemento a esconder
    var elemento1 = document.getElementById(elemento);
    // Agregar clase
    elemento1.classList.add("oculto");
}
function presentar(elemento){
    // Elemento a presentar
    var elemento = document.getElementById(elemento);
    // Quitar  clase 
    setTimeout(function() {
        elemento.classList.remove("oculto");
    }, 2000);
}
function limpiar() {
    document.querySelector('#text').value = '';
    document.querySelector('#r').value = '';
    esconder("bottom");
    esconder("result");
    presentar("superbox");
}

