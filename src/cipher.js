const cipher = {
  encode: function (desplazamiento, texto) {
    if (!texto) {
      throw new TypeError();
    }
    if (!desplazamiento) {
      throw new TypeError();
    }

    let resultado = "";

    desplazamiento = ((desplazamiento % 26) + 26) % 26;

    for (let i = 0; i < texto.length; i++) {
      let ascii = texto.charCodeAt(i);
      if (ascii >= 65 && ascii <= 90) {
        let asciiCambiado = ((ascii - 65 + desplazamiento) % 26) + 65;
        resultado = resultado + String.fromCharCode(asciiCambiado);
      } else {
        resultado = resultado + String.fromCharCode(ascii);
      }
    }

    return resultado;
  },

  decode: function (desplazamiento, texto) {
    if (!texto) {
      throw new TypeError();
    }
    if (!desplazamiento) {
      throw new TypeError();
    }

    let resultado = "";

    desplazamiento = ((desplazamiento % 26) - 26) % 26;

    for (let i = 0; i < texto.length; i++) {
      let ascii = texto.charCodeAt(i);
      if (ascii >= 65 && ascii <= 90) {
        let asciiCambiado = ((ascii - 65 - desplazamiento) % 26) + 65;
        resultado = resultado + String.fromCharCode(asciiCambiado);
      } else {
        resultado = resultado + String.fromCharCode(ascii);
      }
    }

    return resultado;
  },
};

export default cipher;
