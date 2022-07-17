import cipher from './cipher.js';

//Saludamos
alert("Bienvenido, ")

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
        document.getElementById("mensaje2").value = cipher.encode(desplazamiento, texto);
        /*let mensaje2 = document.getElementById("mensaje2").value;                         // Para que muestre error cuando ingresan letras o signos en el mensaje
        if (texto !== null && texto !== '' && texto !== undefined) {
            alert ("Por favor ingrese sólo letras")
        } */
    }, true);
     document.getElementById("descifrar").addEventListener("click", function(){
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value = cipher.decode(desplazamiento, texto);
        }, true);
}


//console.log(cipher);

