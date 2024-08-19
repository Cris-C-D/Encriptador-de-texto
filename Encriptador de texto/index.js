function encrypt() {
    const entrada = document.getElementById("entrada").value
    let cadena = ''
    let auxiliar = entrada.split('')

    if(entrada.toLowerCase() != entrada) {
        alert("Solo se acepta texto en minuscula");
        document.getElementById("entrada").value = ""
        return
    }

    for (let i = 0; i < auxiliar.length; i++) {
        if (auxiliar[i] == "e"){
            cadena += "enter"
        } else if (auxiliar[i] == "i"){
            cadena += "imes"
        } else if (auxiliar[i] == "a"){
            cadena += "ai"
        } else if (auxiliar[i] == "o"){
            cadena += "ober"
        } else if (auxiliar[i] == "u"){
            cadena += "ufat"
        } else {
            cadena += auxiliar[i];
        }
    }

    document.getElementById("salida").value = cadena
}

function decrypt() {
    const entrada = document.getElementById("entrada").value
    let cadena = entrada

    if(entrada.toLowerCase() != entrada) {
        alert("Solo se acepta texto en minuscula");
        document.getElementById("entrada").value = ""
        return
    }

    cadena = cadena.replace(/enter/g, "e");
    cadena = cadena.replace(/imes/g, "i");
    cadena = cadena.replace(/ai/g, "a");
    cadena = cadena.replace(/ober/g, "o");
    cadena = cadena.replace(/ufat/g, "u");

    document.getElementById("salida").value = cadena
}