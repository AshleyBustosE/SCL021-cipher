import cipher from "./cipher.js";

//Saludamos
alert("Hola");
alert("Puedes escribir un mensaje secreto y compartirlo con tu entorno");

// Para que se comience a ejecutar la página
window.addEventListener("load", inicio, true);

// Una vez iniciada, da comienzo a sus funciones
function inicio() {
  document.getElementById("mensaje").addEventListener(
    "keyup",
    function () {
      this.value = this.value.toUpperCase(); // Llamamos a "mensaje" en HTML para que una vez que se pulse la tecla se aplique mayúscula
    },
    true
  );

  // Se llama al botón "cifrar" en HTML para que una vez que se haga click ejecute su función
  document.getElementById("cifrar").addEventListener(
    "click",
    function () {
      let texto = document.getElementById("mensaje").value; // Se aplican variables let de los dos datos ingresados; mensaje y desplazamiento junto a value para darles valor
      let desplazamiento = document.getElementById("desplazamiento").value;
      document.getElementById("mensaje2").value = cipher.encode(
        desplazamiento,
        texto
      );
    },
    true
  );

  document.getElementById("descifrar").addEventListener(
    "click",
    function () {
      let texto = document.getElementById("mensaje").value;
      let desplazamiento = document.getElementById("desplazamiento").value;
      document.getElementById("mensaje2").value = cipher.decode(
        desplazamiento,
        texto
      );
    },
    true
  );
}
