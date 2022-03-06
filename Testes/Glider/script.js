new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: false,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });