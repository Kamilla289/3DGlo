const slider = () => {
  const sliderBlock = document.querySelector('.portfolio-content');
  const slides = document.querySelectorAll('.portfolio-item');
  const portfolioDots = document.querySelector(".portfolio-dots");
  const timerInterval = 2000;
  let currentSlide = 0;
  let interval;
  let dots;

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');
    slides[currentSlide].classList.remove('portfolio-item-active');
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    };

    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');
  };

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();

    if (!e.target.matches('.dot, .portfolio-btn')) {
      return;
    }

    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');

    if (e.target.matches('#arrow-right')) {
      currentSlide++
    } else if (e.target.matches('#arrow-left')) {
      currentSlide--
    } else if (e.target.classList.contains('dot')) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      })
    }
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    };

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    };

    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');
  })

  sliderBlock.addEventListener('mouseenter', (e) => {
    if (e.target.matches('.dot, .portfolio-btn')) {
      stopSlide();
    }
  }, true);

  sliderBlock.addEventListener('mouseleave', (e) => {
    if (e.target.matches('.dot, .portfolio-btn')) {
      startSlide(timerInterval);
    }
  }, true);

  const addDots = () => {
    slides.forEach((slide, index) => {
      const dot = document.createElement('li');
      dot.classList.add('dot');
    if (index === 0) {
      dot.classList.add('dot-active');
    }
      dot.setAttribute('data-slide', index);
      portfolioDots.appendChild(dot);
    });
    dots = document.querySelectorAll('.dot');
  }
    
  addDots();
  startSlide(timerInterval);
}

export default slider;