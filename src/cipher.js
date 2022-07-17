const cipher = { 
  encode: function (desplazamiento, texto){
    //let asciiCambiado = 0;
    let resultado = "";
    //let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    desplazamiento = (desplazamiento % 26 + 26) % 26;

    //if (texto){
    for (let i = 0; i < texto.length; i++) {
      let ascii = texto.charCodeAt(i);
      if (ascii >= 65 && ascii <= 90) {
        let asciiCambiado = (ascii - 65 + desplazamiento) % 26 + 65;
        resultado = resultado + String.fromCharCode(asciiCambiado);
      }

      /*else if (ascii >= 48 && ascii <= 57) {
        asciiCambiado = (((ascii - 48 + desplazamiento) % 10) + 48);
        resultado += String.fromCharCode(asciiCambiado);
      }*/

      else {
        resultado = resultado + String.fromCharCode(ascii);
      }

      //console.log(ascii)
        //if (letras)
    }

    return resultado;
  },
    /*if (!texto)
      return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desplazamiento = (desplazamiento % 26 + 26) % 26;
    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)+desplazamiento)%26]);
  },*/

  decode: function (desplazamiento, texto){
    //let asciiCambiado = 0;
    let resultado = "";
 
    desplazamiento = (desplazamiento % 26 - 26) % 26;

    //if (texto){
    for (let i = 0; i < texto.length; i++) {
      let ascii = texto.charCodeAt(i);
      if (ascii >= 65 && ascii <= 90) {
        let asciiCambiado = (ascii - 65 - desplazamiento) % 26 + 65;
        resultado = resultado + String.fromCharCode(asciiCambiado);
      }

      /*else if (ascii >= 48 && ascii <= 57) {
        asciiCambiado = (((ascii - 57 - desplazamiento) % 10) + 57);
        resultado += String.fromCharCode(asciiCambiado);
      }*/

      else {
        resultado = resultado + String.fromCharCode(ascii);
      }
      //console.log(ascii)
        //if (letras)
    }

    return resultado;

    }
  }
//}
    /*if (!texto)
      return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desplazamiento = (desplazamiento % 26 - 26) % 26;
    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)-desplazamiento)%26]);
  } */


export default cipher;