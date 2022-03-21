var res = window.location.href.split('?');

if (res[1] === undefined) {
    window.location.href = '../404.html'
}
else {
    fetch('../db.json')
        .then(response => {
            return response.json();
        })
        .then(jsondata => {
            switch (res[1]) {
                case 'm18':
                    montarPagina(jsondata.m18)
                    break;
                case 't19':
                    montarPagina(jsondata.t19)
                    break;
                case 'teste':
                    montarPagina(jsondata.teste)
                    break;
                default:
                    window.location.href = '../404.html'
                    break;
            }
        });
}

function montarPagina(data) {
    let eleBreadcrumb = document.querySelector("#breadcrumb-page");
    eleBreadcrumb.innerHTML = data.breadcrumb;
    eleBreadcrumb.setAttribute('href', window.location.href);

    let eleH2 = document.createElement("h2");
    eleH2.innerHTML = data.title_page;

    let eleParagrafoDescricao = document.createElement("p");
    eleParagrafoDescricao.innerHTML = data.description_page;

    let parentDiv = document.querySelector(".header_projetos");
    parentDiv.append(eleH2);
    parentDiv.append(eleParagrafoDescricao);

    for (let i = 0; i < data.cards.length; i++) {
        addCard(data.cards[i]);
    }

}

function addCard(card) {
    let eleDivCard = document.createElement("div");
    let eleImg = document.createElement("img");
    let eleDivContentCard = document.createElement("div");
    let eleTitulo = document.createElement("h3")
    let eleDescricao = document.createElement("p");
    let eleDivBotoes = document.createElement("div");
    let eleBotao1 = document.createElement("a");
    let eleParagrafoDemo = document.createElement("p");
    let eleSeta = document.createElement("i");
    let eleSeta2 = document.createElement("i");
    let eleBotao2 = document.createElement("a");
    let eleParagrafoArquivos = document.createElement("p");

    let conteudoTitulo = document.createTextNode(card.title);
    let conteudoDescricao = document.createTextNode(card.description);
    let conteudoParagrafoDemo = document.createTextNode("Acessar demo");
    let conteudoParagrafoArquivos = document.createTextNode("Ver arquivos");

    eleImg.setAttribute("src", card.image);
    eleTitulo.appendChild(conteudoTitulo);
    eleDescricao.appendChild(conteudoDescricao);
    eleParagrafoDemo.appendChild(conteudoParagrafoDemo);
    eleParagrafoArquivos.appendChild(conteudoParagrafoArquivos);

    eleBotao1.append(eleParagrafoDemo, eleSeta);
    eleBotao1.setAttribute("href", card.link_demo);
    eleBotao1.setAttribute("target", 'blank');
    eleBotao2.append(eleParagrafoArquivos, eleSeta2);
    eleBotao2.setAttribute("href", card.link_arquivos);
    eleBotao2.setAttribute("target", 'blank');

    eleDivBotoes.append(eleBotao1, eleBotao2);
    eleDivContentCard.append(eleTitulo, eleDescricao, eleDivBotoes);

    eleDivCard.append(eleImg, eleDivContentCard);

    eleSeta.classList.add("fa-solid", "fa-arrow-right");
    eleSeta2.classList.add("fa-solid", "fa-arrow-right");
    eleDivCard.classList.add("card_projeto");
    eleImg.classList.add("img_card-projeto");
    eleDivContentCard.classList.add("content_card-projeto");
    eleDivBotoes.classList.add("botoes_card-projeto", "flex");
    eleBotao1.classList.add("card_projeto-btn", "btn", "flex");
    eleBotao2.classList.add("card_projeto-btn", "btn", "flex");

    let parentDiv = document.querySelector(".container_cards-projetos");
    parentDiv.append(eleDivCard);
}