import cipher from './cipher.js';

// Para que se comience a ejecutar la página
window.addEventListener("load", inicio, true);

// Una vez iniciada, da comienzo a sus funciones
function inicio(){
     document.getElementById("mensaje").addEventListener("keyup", function(){               // Llamamos a "mensaje" en HTML para que una vez que se pulse la tecla se aplique mayúscula
        this.value = this.value.toUpperCase();
        }, true);
     document.getElementById("cifrar").addEventListener("click", function(){                // Se llama al botón "cifrar" en HTML para que una vez que se haga click ejecute su función
        let texto = document.getElementById("mensaje").value;                               // Se aplican variables let de los dos datos ingresados; mensaje y desplazamiento junto a value para darles valor
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value = cipher.encode (texto, desplazamiento);
        }, true);
     document.getElementById("descifrar").addEventListener("click", function(){
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value = cipher.decode (texto, desplazamiento);
        }, true);
}


console.log(cipher);

/*function cifrar2 (texto, desplazamiento){
    if (!texto)
        return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desplazamiento = (desplazamiento % 26 + 26) % 26;
    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)+desplazamiento)%26]);
  }
  
  function descifrar2 (texto, desplazamiento){
    if (!texto)
        return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desplazamiento = (desplazamiento % 26 - 26) % 26;
    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)-desplazamiento)%26]);
  }*/
/*function cifrar(texto, desplazamiento){
    let resultado = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    desplazamiento = (desplazamiento % 26 + 26) % 26;
  
    if (texto){
        for (let i = 0; i<texto.lenght; i++){
            if (letras.indexOf(texto[i])!=-1){
                let posicion = ((letras.indexOf(texto[i])+desplazamiento)%26);
                resultado += letras[posicion];
            }
            else
                resultado += texto[i];
        }
    }
    return resultado;
  }*

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

