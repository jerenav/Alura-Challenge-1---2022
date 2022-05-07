var clickEncriptar = document.querySelector(".boton-encriptar");
var clickDesencriptar = document.querySelector(".boton-desencriptar");
var clickCopiar = document.querySelector(".boton-copiar");

clickEncriptar.addEventListener("click", encriptar);
clickDesencriptar.addEventListener("click", desencriptar);
clickCopiar.addEventListener("click", copiar);


function encriptar() {
    let textoIngresado = document.getElementById("texto-in");
    let textoEgresado = document.getElementById("texto-out");

    let arrayEncripta = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]]; // arreglo de claves a buscar y reemplazar.

    let temporal =""; //cadena vacia donde guardaremos la cadena final encriptada.
    let i; // lo declaramos fuera del For para poder usarlo fuera del mismo.

    if(compruebaCaracteres(textoIngresado)){ //Comprueba caracteres permitidos y True si están bien.
        for(let e=0; e<textoIngresado.value.length; e++){ //recorremos la cadena de texto ingresada, caracter por caracter.
            for(i=0; i<5; i++){ // recorremos el arreglo de Claves a buscar.
                    if(textoIngresado.value[e] == arrayEncripta[i][0]){ //hay coincidencia con la vocal [i][0]?
                        temporal = temporal + arrayEncripta [i][1]; //guardamos (concatenamos) la clave correspondiente a la vocal, en "temporal"
                        break; // salimos del For si hubo una coincidencia.
                    }
                }
            if(i==5){ //si no hubo concidencia, i llegará a 5.
                temporal = temporal + textoIngresado.value[e]; //almacenamos (concatenamos) el caracter tal como está, en "temporal".
            }
        }
        textoEgresado.value = temporal;
        textoIngresado.value="";
    }
    else{
        alert('No se permiten mayusculas ni caracteres especiales');
    }
}

function desencriptar() {
    var textoIngresado = document.getElementById("texto-in");
    var textoEgresado = document.getElementById("texto-out");

    let arrayEncripta = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]]; // arreglo de claves a buscar y reemplazar.

    for(let i=0; i<5; i++){ // recorremos el arreglo de Claves a buscar y vamos reemplazando todas las coincidencias de las claves por las vocales.
        textoIngresado.value = textoIngresado.value.replaceAll(arrayEncripta[i][1], arrayEncripta[i][0]);
    }
 
    textoEgresado.value = textoIngresado.value;
    textoIngresado.value = "";


}

function copiar() {
    var textoEgresado = document.getElementById("texto-out");

    textoEgresado.select();
    navigator.clipboard.writeText(textoEgresado.value);
}

function compruebaCaracteres(areaTexto){
    let codigoLetra;
    for(let i=0; i<areaTexto.value.length; i++){
        codigoLetra = areaTexto.value.charCodeAt(i);
        if(((codigoLetra<97) || (codigoLetra>122)) && (codigoLetra != 32)){
            return false;
        }
    }
    return true;

}
