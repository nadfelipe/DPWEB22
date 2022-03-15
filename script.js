const btn = document.querySelector('#btn_conteudo')

btn.addEventListener("click", function () {
    var itens = ['ux', 'ui', 'html', 'css', 'js']
    var listaCaminhos = document.querySelectorAll(`.caminho`)
    var tempoDelay = 500
    for (let x = 0; x < itens.length; x++) {
        (function (qntItens) {
            setTimeout(function () {
                mudarCor(itens[x])

                if (x > (listaCaminhos.length - 1)) {
                    return;
                } else {
                    document.querySelectorAll(`.caminho`)[x].classList.remove('cinza')
                }

            }, 0 + (tempoDelay * qntItens));
        })(x);
    }

    btn.children[0].innerHTML = ''
    btn.children[1].innerHTML = ''
    btn.style.cursor = 'default'
    btn.children[0].style.color = '#676767'
    btn.style.backgroundColor = 'transparent'
    btn.style.border = 'none'

    setTimeout(function () {
        btn.children[0].innerHTML = 'Agora passe o mouse sobre as matérias!'
        btn.children[1].innerHTML = '😉'
        btn.style.border = '2px solid #676767'
        for (let i = 0; i < itens.length; i++) {
            mudarCor(`${itens[i]}`)
        }
        addMouseOver()
    }, (tempoDelay * itens.length) + 3000)

}, { once: true });

function addMouseOver() {
    var itens = ['ux', 'ui', 'html', 'css', 'js']
    
    for (let i = 0; i < itens.length; i++) {
        document.querySelector(`#titulo_${itens[i]}`).style.cursor = 'pointer'
    }
}

function mudarCor(classe) {
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

    setTimeout(voltar, 2000)
}