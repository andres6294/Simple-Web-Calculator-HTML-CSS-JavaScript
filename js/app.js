let operando1 = document.getElementById("operando1");
let operando2 = document.getElementById("operando2");
let resultado = document.getElementById("resultado");
resultado.disabled = true;

function sumar(){
    resultado.value = Number(operando1.value) + Number(operando2.value);
    return resultado.value;
}

function restar(){
    resultado.value = Number(operando1.value) - Number(operando2.value);
    return resultado.value;
}

function multiplicar(){
    resultado.value = Number(operando1.value) * Number(operando2.value);
    return resultado.value;
}

function dividir(){
    resultado.value = Number(operando1.value) / Number(operando2.value);
    return resultado.value;
}