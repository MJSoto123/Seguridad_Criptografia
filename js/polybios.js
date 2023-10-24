function polybios() {
    var textoCifrado = document.getElementById("polybiosInput").value;
    const {isValid, result} = validator(textoCifrado);
    if(isValid == false) {
        document.getElementById("polybiosResult").innerHTML = "";
        return 0;
    }
    else{
        var textoDescifrado = desencriptarPolybius(result);
        console.log(result, textoDescifrado)
        document.getElementById("polybiosResult").innerHTML = textoDescifrado;
    }
}

function validator(cadena){
    let result = "";
    for(let i = 0; i < cadena.length; i++) if(cadena[i] != ' ' && cadena[i] != '\n') result += cadena[i];
    
    let isValid = true;
    for(let i = 0; i < result.length; i++){
        if(result[i] < '1' || result[i] > '5') {isValid = false; break;}
    }
    let messageError = "";

    if(!isValid) messageError = "Solo cifras del 1 al 5.\n"; 
    if(result.length%2 != 0) {
        messageError += "La cantidad de cifras debe ser par.\n";
        isValid = false;
    }

    document.getElementById("errorInfo").innerHTML = messageError;
    return {isValid, result};
}

function desencriptarPolybius(cifrado) {
    const cuadricula = [
        ['A', 'B', 'C', 'D', 'E'],
        ['F', 'G', 'H', 'I', 'K'],
        ['L', 'M', 'N', 'O', 'P'],
        ['Q', 'R', 'S', 'T', 'U'],
        ['V', 'W', 'X', 'Y', 'Z']
    ];

    let mensajeOriginal = "";
    let i = 0;
    for(let i = 0; i < cifrado.length; i++){
        const row = cifrado[i++] - '0';
        const col = cifrado[i] - '0';
        mensajeOriginal += cuadricula[row-1][col-1];
    }

    return mensajeOriginal;
}

// 13 24 15 33 13 24 11 14 15 31 11 13 34 32 35 45 44 11 13 24 34 33