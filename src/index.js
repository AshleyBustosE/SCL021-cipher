import cipher from './cipher.js';

console.log(cipher);

window.addEventListener("load", inicio, true);

function inicio(){
     document.getElementById("mensaje").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
     }, true);
     document.getElementById("cifrar").addEventListener("click", function(){
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value = cifrar(texto, desplazamiento);
     }, true);
     document.getElementById("descifrar").addEventListener("click", function(){
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value = descifrar(texto, desplazamiento);
     }, true);
}

function cifrar(texto, desplazamiento){
    let resultado = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    desplazamiento = (desplazamiento % 26 + 26) % 26;

    if (texto){
        for (let i = 0; i<texto.lenght; i++){
            
        }

    }
}


/*let Boton1 = document.getElementById("Boton1");
let Boton2 = document.getElementById("Boton2");

Boton1.addEventListener("click", codificar);
Boton2.addEventListener("click", decodificar);

function codificar(){
    alert("¿Quieres codificar?");
}
function decodificar(){
    alert("¿Quieres decodificar?"); 
}*/

