function mudarCor(classe) {
    var listaElementos = document.querySelectorAll(`.${classe}`)

    for (let i = 0; i < listaElementos.length; i++) {
        listaElementos[i].classList.add('cor')
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

    function voltar(){
        
        var listaElementos = document.querySelectorAll(`.${classe}`)
    
        for (let i = 0; i < listaElementos.length; i++) {
            listaElementos[i].classList.remove('cor')
        }
    
        document.querySelector(`#bg-titulo_${classe}`).style.fill = '#C7C7C7'
    }

    setTimeout(voltar, 2000)
}