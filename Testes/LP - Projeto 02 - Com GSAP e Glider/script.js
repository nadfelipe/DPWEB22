gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate-hero", {
    duration: 0.5,
    opacity: 0,
    y: -150,
    stagger: 0.3
});

gsap.from(".animate-hero-img", {
    duration: 0.8,
    opacity: 0,
    x: 150
});

gsap.from('.animate-artigos', { 
    duration: 0.8,
    opacity: 0,
    x: -100,
    delay: 0.5,
    stagger: 0.2
});

gsap.from('.animate-final', {
    scrollTrigger: '.animate-final',  
    duration: 0.8,
    opacity: 0,
    y: -100,
    delay: 0.5,
    stagger: 0.4
});

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