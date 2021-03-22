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
  
  const menuButton = document.querySelector('.menu-button'),
    navbarBottom = document.querySelector('.navbar-bottom');
    menuButton.addEventListener('click', () => {
      if (navbarBottom.classList.contains('navbar-bottom--visible')) {
        navbarBottom.classList.remove('navbar-bottom--visible');
        $("body").css("overflow","scroll");
        bodyUnfixPosition();
      } else {
      navbarBottom.classList.add('navbar-bottom--visible');
      $("body").css("overflow","hidden");
      bodyFixPosition();
      }
    });
  
    const modalButton = $("[data-toggle=modal]");
    const closeModalButton = $(".modal__close");
    const modalOverlay = $(".modal__overlay");
    const modalDialog = $(".modal__dialog");
    const openModal = () => {
      modalOverlay.addClass("modal__overlay--visible");
      modalDialog.addClass("modal__dialog--visible");
      $("body").css("overflow","hidden");
      bodyFixPosition();
    };
    const closeModal = event => {
      event.preventDefault();
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
      $("body").css("overflow","scroll");
      bodyUnfixPosition();
    };
    const turnModal = () => {
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
      $("body").css("overflow","scroll");
      bodyUnfixPosition();
    };
    $(document).keydown(event => {
      const key = event.key;
      if (key === "Escape") {
        turnModal();
      }
    });
    $(document).click(event => {
      if ($(event.target).is('.modal__overlay')) {
        turnModal();
      }
    });
    modalButton.on('click', openModal);
    closeModalButton.on('click', closeModal);
    const bodyFixPosition = () => {

      setTimeout(() => {
      /* Ставим необходимую задержку, чтобы не было «конфликта» в случае, если функция фиксации вызывается сразу после расфиксации (расфиксация отменяет действия расфиксации из-за одновременного действия) */
        if ( !document.body.hasAttribute('data-body-scroll-fix') ) {

          // Получаем позицию прокрутки
          let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
          // Ставим нужные стили
          document.body.setAttribute('data-body-scroll-fix', scrollPosition); // Cтавим атрибут со значением прокрутки
          document.body.style.overflow = 'hidden';
          document.body.style.position = 'fixed';
          document.body.style.top = '-' + scrollPosition + 'px';
          document.body.style.left = '0';
          document.body.style.width = '100%';
    
        }
    
      }, 15 ); /* Можно задержку ещё меньше, но у меня работало хорошо именно с этим значением на всех устройствах и браузерах */
    
    }
    
    // 2. Расфиксация <body>
    function bodyUnfixPosition() {
    
      if ( document.body.hasAttribute('data-body-scroll-fix') ) {
    
        // Получаем позицию прокрутки из атрибута
        let scrollPosition = document.body.getAttribute('data-body-scroll-fix');
    
        // Удаляем атрибут
        document.body.removeAttribute('data-body-scroll-fix');
    
        // Удаляем ненужные стили
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.width = '';
    
        // Прокручиваем страницу на полученное из атрибута значение
        window.scroll(0, scrollPosition);
      }
    }
    $(".form").each(function() {
      $(this).validate({
        errorClass: "invalid",
        messages: {
          name: {
            required: "Please specify your name",
            minlength: "The name must be at least 2 characters long "
          },
          email: {
            required: "We need your email address to contact you",
            email: "Please enter a valid e-mail"
          },
          phone: {
            required: "Please specify your phone",
            minlength: "Phone number must be at least 11 digits"
          },
        }
      });
    });
    $('.phone').mask('+7 (000) 000-00-00');
});