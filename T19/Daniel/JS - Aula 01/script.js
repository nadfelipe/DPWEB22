alert("Olá Mundo, agora de um JS externo!")

function aparecerAlerta(){
    alert("Alerta que veio do gatilho do botão.")
}

function aparecerData(){
    setInterval('document.getElementById("data").innerHTML = Date()', 1000)  
    // document.getElementById("data").innerHTML = "17/02/2022"
    document.getElementById("data").innerHTML = Date()
}

function mudarDblClick(){
    document.getElementById("paragrafo").innerHTML = "Texto alterado no JS, com o gatilho de duplo clique"
}

function mudarMouseSegurar() {
    document.getElementById("paragrafo").innerHTML = "Texto alterado no JS, quando o mouse ta clicando"
}

function mudarMouseSoltar() {
    document.getElementById("paragrafo").innerHTML = "Texto alterado no JS, quando soltar o mouse"
}

function mudarCorQuadrado() {
    //1° acessar a DOM (o document, documento)
    //2° falar como a gente vai selecionar o elemento
    //  2.1 - atraves do que (ID, CLASSE, NOME DA TAG, ETC)
    //  2.2 - qual o seletor (passar nome do id, passar nome da classe...)
    //3° falar o que vai fazer com o elemento selecionado (style)
    //4° falar qual propriedade quer mudar do css (backgroundColor)
    //5° falar qual o valor da propriedade (#ff0000)

    document.getElementById("quadrado").style.backgroundColor = "#ff0000"
}

function mudarCor() {
    document.getElementById("quadrado").style.backgroundColor = "#00ff00"
}

function acenderLampada() {
    //1° acessar a DOM (o document, documento)
    //2° falar como a gente vai selecionar o elemento
    //  2.1 - atraves do que (ID, CLASSE, NOME DA TAG, ETC)
    //  2.2 - qual o seletor (passar nome do id, passar nome da classe...)
    //3° falar o que vai fazer com o elemento selecionado
    document.getElementById("quadrado").classList.replace("apagada", "acesa")
}

function apagarLampada() {
    document.getElementById("quadrado").classList.replace("acesa", "apagada")
}

// function noturnaLampada() {
//     document.getElementById("quadrado").removeAttribute("class")
//     document.getElementById("quadrado").classList.add("noturna")
// }