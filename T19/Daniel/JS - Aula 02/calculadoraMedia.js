function calcularMedia() {
    var numeroUm = parseFloat(prompt("Digite o primeiro número:"))
    var numeroDois = parseFloat(prompt("Digite o segundo número:"))
    
    var resultadoMedia = (numeroUm + numeroDois) / 2
    
    //alert("O resultado da média entre os números " + numeroUm + " e " + numeroDois + " é " + resultadoMedia)
    alert(`O resultado da média entre os números ${numeroUm} e ${numeroDois} é ${resultadoMedia}`)
    
    console.log("resultado da média: " + resultadoMedia)
    
    console.log("o tipo da variável no número 1 é: " + typeof(numeroUm))
    console.log("o tipo da variável no número 2 é: " + typeof(numeroDois))
    console.log("o tipo da variável no resultado é: " + typeof(resultadoMedia))

    document.getElementById("titulo_resultado_media").style.display = "block"
    document.getElementById("resultado_media").innerHTML = resultadoMedia

    // document.getElementById("resultado_media").innerHTML = "O resultado é: " + resultadoMedia
    // document.getElementById("resultado_media").innerHTML = `O resultado é: ${resultadoMedia}`
}