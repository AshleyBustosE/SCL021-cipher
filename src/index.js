import cipher from './cipher.js';

console.log(cipher);

let Boton1 = document.getElementById("Boton1");
let Boton2 = document.getElementById("Boton2");

Boton1.addEventListener("click", codificar);
Boton2.addEventListener("click", decodificar);

function codificar(){
    alert("¿Quieres codificar?");
}
function decodificar(){
    alert("¿Quieres decodificar?"); 
}

//alert("Chao nomas");