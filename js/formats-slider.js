const sliderList = document.querySelector('.formats-section__list');

if (sliderList) {
  const slides = sliderList.querySelectorAll('.swiper-slide');

  if (slides[1]) {
    slides[1].querySelector('.format-card__text').innerHTML = `
      <p>Площа: до 25 м2</p>
      <p>Меню: найпопулярніші позиції меню</p>
      <p>Штат: 2 продавці-касири, 2 пекарі, 1 помічник пекаря</p>
      <p>Посадкові місця: відсутні</p>
    `;
  }

  if (slides[2]) {
    slides[2].querySelector('.format-card__text').innerHTML = `
      <p>Площа: до 15 м2</p>
      <p>Меню: найпопулярніші позиції меню</p>
      <p>Штат: 1 продавець, 1 пекар, 1 помічник пекаря</p>
      <p>Посадкові місця: відсутні</p>
    `;
  }

  for (let i = 4; i < slides.length; i++) {
    slides[i].remove();
  }
}

const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  loopedSlides: 4,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
    clickable: true,
  },
  navigation: {
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },
});
