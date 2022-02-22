alert("Olá mundo, de um arquivo externo!")

function mostrarAlerta(){
    alert("Alerta que apareceu quando clicou no botão!")
}

function mostrarData() {
    document.getElementById("data").innerHTML = Date()
}

function atualizarData() {
    setInterval(mostrarData, 1000)
    mostrarData()
}

function mudarParagrafo() {
    document.getElementById("paragrafo").innerHTML = "Texto alterado através do JS"
}

function clicarParagrafo(){
    document.getElementById("paragrafo").innerHTML = "Você está segurando o mouse"
}

function soltarParagrafo(){
    document.getElementById("paragrafo").innerHTML = "Você soltou o clique do mouse"
}

function mudarCorDiv(){
    //1° acessa o document (DOM)
    //2° falar como vai selecionar o elemento getElementById + falar o Id do elemento
    //3° o que vai ser alterado no elemento, nesse caso o estilo
    //4° falar qual propriedade quer mudar
    //5° falar qual o valor da propriedade
    document.getElementById("quadrado").style.backgroundColor = "#ff0000"  
}

function mudarCorQuadrado(){
    document.getElementById("quadrado").style.backgroundColor = "#00ff00"
}

function acenderLampada(){
    //1° acessa o document (DOM)
    //2° falar como vai selecionar o elemento getElementById + falar o Id do elemento
    //3° o que vai ser alterado no elemento, no caso as classes
    document.getElementById("quadrado").classList.replace("apagada", "acesa")
}

function apagarLampada(){
    document.getElementById("quadrado").classList.replace("acesa", "apagada")
}

// function noturnaLampada() {
//     document.getElementById("quadrado").removeAttribute("class")
//     document.getElementById("quadrado").classList.add("noturna")
// }

// <!-- Comentário no HTML -->
// /* Comentário no CSS */
// Comentário no JS