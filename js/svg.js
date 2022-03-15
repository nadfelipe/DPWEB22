const btn = document.querySelector('#btn_conteudo')

btn.addEventListener("click", function () {
    var itens = ['ux', 'ui', 'html', 'css', 'js']
    var listaCaminhos = document.querySelectorAll(`.caminho`)

    var tempoDelay = 1000
    
    for (let x = 0; x < itens.length; x++) {
        (function (qntItens) {
            setTimeout(function () {
                mudarCor(itens[x], true)

                if (x > (listaCaminhos.length - 1)) {
                    return;
                } else {
                    document.querySelectorAll(`.caminho`)[x].classList.remove('cinza')
                }

            }, 800 + (tempoDelay * qntItens));
        })(x);
    }

    btn.style.display = 'none'

    setTimeout(function () {
        for (let i = 0; i < itens.length; i++) {
            mudarCor(`${itens[i]}`, false)
        }
    },  (tempoDelay * itens.length) + 2000)

}, { once: true });

function mudarCor(classe, voltar) {
    var listaElementos = document.querySelectorAll(`.${classe}`)

    for (let i = 0; i < listaElementos.length; i++) {
        listaElementos[i].classList.add('cor_hover')
        listaElementos[i].classList.remove('esconder')
    }

    var corFundo

    switch (classe) {
        case 'ux':
            corFundo = '#D92BB3'
            break;
        case 'ui':
            corFundo = '#7129CC'
            break;
        case 'html':
            corFundo = '#FF7B1C'
            break;
        case 'css':
            corFundo = '#0057DA'
            break;
        case 'js':
            corFundo = '#FFA216'
            break;
        default:
            break;
    }

    document.querySelector(`#bg-titulo_${classe}`).style.fill = corFundo;


    if (voltar)
        voltarCor(classe);
}

function voltarCor(classe) {

    function voltar() {

        var listaElementos = document.querySelectorAll(`.${classe}`)

        for (let i = 0; i < listaElementos.length; i++) {
            listaElementos[i].classList.remove('cor_hover')
        }

        document.querySelector(`#bg-titulo_${classe}`).style.fill = '#C7C7C7'
    }

    setTimeout(voltar, 800)
}