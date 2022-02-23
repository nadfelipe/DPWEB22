//O elemento input_numero1
const inputNum1 = document.getElementById("input_numero1");
//O elemento input_numero2
const inputNum2 = document.getElementById("input_numero2");
//O elemento input_resultado
const inputResultado = document.getElementById("input_resultado");

function somarNumeros() {
    //resultado da soma entre input 1 e 2
    let resultadoSoma = Number(inputNum1.value) + Number(inputNum2.value);

    inputResultado.value = resultadoSoma;
}

function subtrairNumeros() {
    //resultado da subtração entre input 1 e 2
    let resultadoSubtracao = Number(inputNum1.value) - Number(inputNum2.value);

    inputResultado.value = resultadoSubtracao;
}

function multiplicarNumeros() {
    //resultado da multiplicação entre input 1 e 2
    let resultadoSoma = Number(inputNum1.value) * Number(inputNum2.value);

    inputResultado.value = resultadoSoma;
}

function dividirNumeros() {
    //resultado da divisão entre input 1 e 2
    let resultadoSubtracao = Number(inputNum1.value) / Number(inputNum2.value);

    inputResultado.value = resultadoSubtracao;
}

function limparInputs() {
    inputNum1.value = '';
    inputNum2.value = '';
    inputResultado.value = '';
}