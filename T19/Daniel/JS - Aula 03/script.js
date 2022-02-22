//valor do input 1
var num1 = Number(document.getElementById("input_numero1").value);
//valor do input 2
var num2 = Number(document.getElementById("input_numero2").value);

function somarNumeros() {
    //efetuando a soma dos dois números que vieram do input
    var resultadoSoma = num1 + num2;

    //atribuindo a variável resultadoSoma para o input com id "input_resultado"
    document.getElementById("input_resultado").value = resultadoSoma;
}

function subtrairNumeros() {
    //efetuando a subtracao dos dois números que vieram do input
    var resultadoSubtracao = num1 - num2;
    
    //atribuindo a variável resultadoSubtracao para o input com id "input_resultado"
    document.getElementById("input_resultado").value = resultadoSubtracao;
}