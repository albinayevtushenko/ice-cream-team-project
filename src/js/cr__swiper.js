new Swiper('.cr__container',{
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  loop: true,
  speed: 700,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },

  simulateTouch: true,
  touchAngle: 45,
  grabCursor: true,

  keybord: {
    enabled: true,
    onlyInViewport: true
  },
});
