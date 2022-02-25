const secaoParagrafos = document.getElementById("secao_paragrafos")

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
    // o elemento border tem que ter 3 valores:
    // 1. grossura em pixels;
    // 2. estilo da borda;
    //  2.1 solid - sólida
    //  2.2 dashed - tracejada
    //  2.3 dotted - pontinhos
    // 3. cor da borda (pode ser com hexadecimal ou não);
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
function mudarSegundoTitulo() {
    document.getElementsByClassName("texto")[1].innerHTML = "Texto alterado pela class";
}

// Botão 12 - Muda a cor do fundo no primeiro elemento que possui a classe "paragrafo"
function mudarCorFundoParagrafo() {
    document.getElementsByClassName("paragrafo")[0].style.backgroundColor = "#ff0000";
}

// Botão 13 - Muda a cor do fundo um único botão
function mudarCorFundoBotao() {
    let indiceBotoes = document.getElementsByTagName("button").length - 1;

    // Math.round(Math.random() * (maximo - minimo) + minimo)
    let numeroAleatorio = Math.round(Math.random() * (indiceBotoes - 0) + 0);

    document.getElementsByTagName("button")[numeroAleatorio].style.backgroundColor = "lightblue";

    document.getElementsByTagName("h2")[2].innerHTML = numeroAleatorio;
}

// Botão 14 - Muda a cor de todos os botões
function mudarCorFundoBotoes() {
    // repetir (contador = 0; contador < qntBtn; contador++){
    //    botao[contador].style.backgroundColor = "verde";
    //}
    let botoes = document.getElementsByTagName("button");
        
    //"contador++" é igual a "contador = contador + 1"
    for (let contador = 0; contador < botoes.length; contador++){
        botoes[contador].style.backgroundColor = "lightgreen";
    }
}

// Botão 15 - Pega a quantidade de botões e coloca o número dentro do conteúdo interno do primeiro h2
function contarBotoes() {
    let quantidadeBotoes =  document.getElementsByTagName("button").length;

    document.getElementsByTagName("h2")[0].innerHTML = `O número de botões no site é: ${quantidadeBotoes}`;
}

// Botão 16 - Muda o conteúdo interno do primeiro elemento com a classe "paragrafo"
function alterarTextoParagrafo(entradaTexto) {
    document.querySelector(".paragrafo").innerHTML = entradaTexto;
}

// Botão 17 - Muda a cor do fundo da página inteira
function mudarCorPagina() {
    document.querySelector("body").style.backgroundColor = "#ffff00";
}

// Botão 18 - Troca a imagem do laptop da xuxa pela imagem do outro pc
function mudarImagem() {
    let imagem = document.querySelector("img");
    imagem.src = "./img/alien.jpg";
    imagem.alt = "Imagem de um notebook gamer";
}

// Botão 19 - Aciona (quase) todas as funções
function acionarTudo() {
    // Não vai colocar funções 8, 9, 10, 13*

    mudarTamanhoFonte(); // Função botão 2
    mudarCorFonte(); // Função botão 3
    mudarCorFundo(); // Função botão 4
    mudarFonteItalico(); // Função botão 5
    mudarFonteNegrito(); // Função botão 6
    adicionarBorda(); // Função botão 7
    mudarSegundoTitulo(); // Função botão 11
    mudarCorFundoParagrafo(); // Função botão 12
    mudarCorFundoBotoes(); // Função botão 14
    mudarCorFundoBotao(); // Função botão 13
    contarBotoes(); // Função botão 15
    alterarTextoParagrafo("FRASE QUE VEIO DA FUNÇÃO DE ACIONAR (QUASE) TUDO"); // Função botão 16
    mudarCorPagina(); // Função botão 17
    mudarImagem(); // Função botão 18
}