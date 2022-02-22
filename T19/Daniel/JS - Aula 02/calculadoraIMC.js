function calcularIMC() {
    alert("Olá, ficamos felizes por você abrir a calculadora de IMC!")

    //criando uma variável peso e atribuindo valor para ela
    var peso = Number(prompt("Qual é o seu peso? (Em kilos)"))
    alert(`O peso informado é de ${peso}kg.`)
    
    var altura = Number(prompt("Qual é a sua altura? (Em metros)"))
    alert(`A altura informada é de ${altura}m.`)

    var resultadoIMC = peso / (altura ** 2)

    resultadoIMC = resultadoIMC.toFixed(2)

    alert(`O resultado do IMC entre o peso ${peso}kg e a altura ${altura}m é de ${resultadoIMC}`)

    document.getElementById("titulo_resultado_imc").style.display = "block"
    document.getElementById("resultado_imc").innerHTML = resultadoIMC
}