$(document).ready(() => {
  const hotelSLider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    // keyboard control 
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
  
  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
    // keyboard control 
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
  
  const menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', () => {
      document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible')
    });
  
    const modalButton = $("[data-toggle=modal]");
    const closeModalButton = $(".modal__close");
    const modalOverlay = $(".modal__overlay");
    const modalDialog = $(".modal__dialog");
    const openModal = () => {
      modalOverlay.addClass("modal__overlay--visible");
      modalDialog.addClass("modal__dialog--visible");
    };
    const closeModal = event => {
      event.preventDefault();
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
    modalButton.on('click', openModal);
    closeModalButton.on('click', closeModal);

    $(document).keydown(event => {
      const key = event.key
      if (key === "Escape") {
        event.preventDefault();
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__dialog--visible");
      }
    });
});