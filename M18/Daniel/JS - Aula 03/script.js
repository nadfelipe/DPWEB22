

function somarNumeros() {
    var num1 = Number(document.getElementById("input_numero1").value);//valor do input 1
    var num2 = Number(document.getElementById("input_numero2").value);//valor do input 1

    var resultadoSoma = num1 + num2;//resultado da soma entre input 1 e 2

    document.getElementById("input_resultado").value = resultadoSoma;
}

function subtrairNumeros() {
    var num1 =  Number(document.getElementById("input_numero1").value);//valor do input 1
    var num2 =  Number(document.getElementById("input_numero2").value);//valor do input 1

    var resultadoSubtracao = num1 - num2;//resultado da subtração entre input 1 e 2

    document.getElementById("input_resultado").value = resultadoSubtracao
}