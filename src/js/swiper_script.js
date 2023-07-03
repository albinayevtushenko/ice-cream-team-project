new Swiper('.image-slider', {
  autoHeight: true,

  // Включено перетаскивание на ПК
  simulateTouch: true,

  // Чувчтвительность свайпа
  touchRatio: 2,

  // Угол срабатівания сайпа
  touchAngle: 45,

  // Курсор перетаскивания
  grabCursor: true,

  // Переключение при клике на слайд
  slideToClickedSlide: true,

  //   Управление клавиатурой
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  // Управление колесом мыши

  mousewheel: {
    sensitivity: 1,
    eventsTarget: 'image-slider',
  },

  spaceBetween: 30,

  slidesPerGroup: 1,

  centeredSlides: true,

  freemode: true,

  autoplay: {
    delay: 1000,
    stopOnLastSlide: false,
    disableOnItneraction: false,
  },
  speed: 2000,

  effect: 'flip',
  flipEffect: {
    slideShadows: true,
    limitRotation: true,
  },
});
