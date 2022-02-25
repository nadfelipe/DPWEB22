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
    // limiteBotoes é o índice máximo da lista de botões
    let limiteBotoes = document.getElementsByTagName("button").length - 1;

    // gerar um índice aleatório entre 0 e o último índice da lista de botões (18)
    // Math.round(Math.random() * (maximo - minimo) + minimo)
    // parseInt(Math.random() * (maximo - minimo) + minimo)
    let indiceAleatorio = Math.round(Math.random() * (limiteBotoes - 0) + 0);

    document.getElementsByTagName("button")[indiceAleatorio].style.backgroundColor = "lightblue";

    document.getElementsByTagName("h2")[2].innerHTML = indiceAleatorio + 1;
}

// Botão 13 ALTERADO MALUCO DOIDO - Muda a cor do fundo de um único botão
// function mudarCorFundoBotao() {
//     // limiteBotoes é o índice máximo da lista de botões
//     let limiteBotoes = document.getElementsByTagName("button").length - 1;

//     // gerar um índice aleatório entre 0 e o último índice da lista de botões (18)
//     // Math.round(Math.random() * (maximo - minimo) + minimo)
//     // parseInt(Math.random() * (maximo - minimo) + minimo)
//     let indiceAleatorio = Math.round(Math.random() * (limiteBotoes - 0) + 0);

//     let botaoAleatorio = document.getElementsByTagName("button")[indiceAleatorio]
     
//     botaoAleatorio.style.backgroundColor = "lightblue";

//     document.getElementsByTagName("h2")[2].innerHTML = `${indiceAleatorio + 1} - ${botaoAleatorio.innerHTML}`;
// }


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

// Botão 15 - Pega a quantidade de botões e coloca o número dentro do conteúdo interno do primeiro h2
function contarBotoes() {
    let quantidadeBotoes = document.getElementsByTagName("button").length;

    document.getElementsByTagName("h2")[0].innerHTML = `Número de botões do site: ${quantidadeBotoes}`;
}

// Botão 16 - Muda o conteúdo interno do primeiro elemento que tem a classe paragrafo
function alterarTextoParagrafo() {
    document.querySelector(".paragrafo").innerHTML = "Texto alterado com query selector";
}

// Botão 17 - Muda a cor do fundo da página inteira
function mudarCorPagina() {
    document.querySelector("body").style.backgroundColor = "#ffff00";
}

// Botão 18 - Troca a imagem do laptop da xuxa pela imagem do outro pc
function mudarImagem() {
    document.querySelector("img").src = "./img/alien.jpg";
    document.querySelector("img").alt = "Imagem de um notebook gamer";
}

// Botão 19 - Aciona (quase) todas as funções
function acionarFuncoes() {
    //Não vamos colocar os botões 1, 8, 9, 10 e 13*
    
    mudarTamanhoFonte(); // Função botão 2
    mudarCorFonte(); // Função botão 3
    mudarCorFundo(); // Função botão 4
    mudarFonteItalico(); // Função botão 5
    mudarFonteNegrito(); // Função botão 6
    adicionarBorda(); // Função botão 7

    mudarSegundoTexto(); // Função botão 11
    mudarCorFundoParagrafo(); // Função botão 12

    mudarCorFundoBotoes(); // Função botão 14
    contarBotoes(); // Função botão 15
    alterarTextoParagrafo(); // Função botão 16
    mudarCorPagina(); // Função botão 17
    mudarImagem(); // Função botão 18   
}