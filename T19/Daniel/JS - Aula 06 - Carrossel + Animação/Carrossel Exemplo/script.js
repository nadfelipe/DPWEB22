new Glider(document.querySelector('.glider'), {
    // items que vão aparecer por página
    slidesToShow: 2,
    // quantidade de itens que vão ser passados por vez
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },
    // serve para fazer "loop"
    rewind: true
});