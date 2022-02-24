//O elemento input_numero1
const inputNumero1 = document.getElementById("input_numero1");
//O elemento input_numero2
const inputNumero2 = document.getElementById("input_numero2");
//O elemento input_resultado
const inputResultado = document.getElementById("input_resultado");

function somarNumeros() {
    //efetuando a soma dos dois números que vieram do input
    let resultadoSoma = Number(inputNumero1.value) + Number(inputNumero2.value);
    //atribuindo a variável resultadoSoma para o input com id "input_resultado"
    inputResultado.value = resultadoSoma;
}

function subtrairNumeros() {
    //efetuando a subtracao dos dois números que vieram do input
    let resultadoSubtracao = Number(inputNumero1.value) - Number(inputNumero2.value);
    //atribuindo a variável resultadoSubtracao para o input com id "input_resultado"
    inputResultado.value = resultadoSubtracao;
}

function multiplicarNumeros() {
    //efetuando a multiplicacao dos dois números que vieram do input
    let resultadoMultiplicacao = Number(inputNumero1.value) * Number(inputNumero2.value);
    //atribuindo a variável resultadoSoma para o input com id "input_resultado"
    inputResultado.value = resultadoMultiplicacao;
}

function dividirNumeros() {
    //efetuando a divisão dos dois números que vieram do input
    let resultadoDivisao = Number(inputNumero1.value) / Number(inputNumero2.value);
    //atribuindo a variável resultadoSubtracao para o input com id "input_resultado"
    inputResultado.value = resultadoDivisao;
}

function limparInputs() {
    inputNumero1.value = '';
    inputNumero2.value = '';
    inputResultado.value = '';
}