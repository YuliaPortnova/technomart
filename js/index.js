const initSearchReset = () => {
  const searchResetButton = document.querySelector('.search-reset-button');
  const searchInput = document.querySelector('.search-input');
  if (!searchInput) {
    return;
  }

  searchResetButton.addEventListener('click', () => {
    searchInput.value = '';
    searchInput.focus();
  });
};

const initModal = () => {
  const contactsButton = document.querySelector('.contacts-button');
  const modalContainer = document.querySelector('.modal-container');
  const modalCloseButton = document.querySelector('.modal-close-button');

  if (!contactsButton) {
    return;
  }

  contactsButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalContainer.classList.remove('modal-close');
  });

  modalCloseButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalContainer.classList.add('modal-close');
  });

  modalContainer.addEventListener('click', (evt) => {
    if (evt.target.closest('.modal-feedback')) {
      return;
    }
    evt.preventDefault();
    modalContainer.classList.add('modal-close');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      modalContainer.classList.add('modal-close');
    }
  });
};

const initSlider = () => {
  const sliderButtonPrev = document.querySelector('.slider-button-prev');
  const sliderButtonNext = document.querySelector('.slider-button-next');
  const slides = document.querySelectorAll('.slider-item');
  const paginations = document.querySelectorAll('.slider-pagination-button');

  let currentSlide = 0;

  if (!slides.length) {
    return;
  }

  const removeSlideActiveState = () => {
    slides[currentSlide].classList.remove('slider-item-active');
    paginations[currentSlide].classList.remove('slider-pagination-button-current');
  };

  const addSlideActiveState = () => {
    slides[currentSlide].classList.add('slider-item-active');
    document.body.style.backgroundColor = slides[currentSlide].dataset.theme;
    paginations[currentSlide].classList.add('slider-pagination-button-current');
  };

  sliderButtonPrev.addEventListener('click', (evt) => {
    evt.preventDefault();
    removeSlideActiveState();
    if (currentSlide === 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide -= 1;
    }
    addSlideActiveState();
  });

  sliderButtonNext.addEventListener('click', (evt) => {
    evt.preventDefault();
    removeSlideActiveState();
    if (currentSlide === slides.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide += 1;
    }
    addSlideActiveState();
  });

  paginations.forEach((element, index) => {
    element.addEventListener('click', (evt) => {
      evt.preventDefault();
      removeSlideActiveState();
      currentSlide = index;
      addSlideActiveState();
    });
  });
};

initSearchReset();
initModal();
initSlider();
