new Glider(document.querySelector('.glider'), {
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: true,
    rewind: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });