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

// <!-- Comentário no HTML -->
// /* Comentário no CSS */
// Comentário no JS