const secaoParagrafos = document.getElementById('secao_paragrafos');

// Botão 2 - Muda o tamanho da fonte dos parágrafos que estão na seção paragrafos
function mudarTamanhoFonte() {
    secaoParagrafos.style.fontSize = "30px";
}

// Botão 3 - Altera a cor da fonte dos parágrafos que estão na seção paragrafos
function mudarCorFonte() {
    secaoParagrafos.style.color = "#fff";
}

// Botão 4 - Altera a cor do fundo da div secao_paragrafos
function mudarCorFundo() {
    secaoParagrafos.style.backgroundColor = "#000";
}

// Botão 5 - Adiciona o estilo itálico para os paragráfos que estão na seção paragrafos
function mudarFonteItalico() {
    secaoParagrafos.style.fontStyle = "italic";
}

// Botão 6 - Adiciona o peso negrito para os paragráfos que estão na seção paragrafos
function mudarFonteNegrito() {
    secaoParagrafos.style.fontWeight = "bold";
}

// Botão 7 - Adiciona uma borda na div seção paragrafos
function adicionarBorda() {
    // a propriedade "border" tem que ter 3 valores:
    // 1° grossura da borda em pixels;
    // 2° estilo da borda;
    //  2.1 - solid: sólida
    //  2.2 - dotted: pontinhos
    //  2.3 - dashed: tracejada
    // 3° cor da borda (pode ser hexadecimal ou não)
    secaoParagrafos.style.border = "3px solid #ff0000";
}

// Botão 8 - Remove a borda da div seção paragrafos
function removerBorda() {
    secaoParagrafos.style.border = "none";
}

// Botão 9 - Esconde a div seção paragrafos
function esconderSecao() {
    secaoParagrafos.style.display = "none";
}

// Botão 10 - Aparece com a div seção paragrafos
function mostrarSecao() {
    secaoParagrafos.style.display = "block";
}

// Botão 11 - Inserir um texto HTML no segundo elemento que possui a classe "texto"
function mudarSegundoTexto() {
    document.getElementsByClassName("texto")[1].innerHTML = "Texto alterado pela seleção da class";
}

// Botão 12 - Muda a cor do fundo do primeiro elemento que possui a classe "paragrafo"
function mudarCorFundoParagrafo() {
    document.getElementsByClassName("paragrafo")[0].style.backgroundColor = "#ff0000";
}

// Botão 13 - Muda a cor do fundo de um único botão
function mudarCorFundoBotao() {
    document.getElementsByTagName("button")[5].style.backgroundColor = "lightblue";
}

// Botão 14 - Muda a cor do fundo de todos os botões
function mudarCorFundoBotoes() {
    // contador (counter); condição de saída; iterator
    // "contador = contador + 1" é igual a "contador++"

    //loop (contador = 0; contador < qntBtn; contador++){
    //  botao[contador].style.backgroundColor = "verdeclaro";
    //}
    let botoes = document.getElementsByTagName("button");

    for (let contador = 0; contador < botoes.length; contador++){
        botoes[contador].style.backgroundColor = "lightgreen";
    }
}