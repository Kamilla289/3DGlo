import { animate } from './helpers'

const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');
  let opacity = 0;
  modal.style.opacity = opacity;

  
  const fadeIn = () => {
    if (document.documentElement.clientWidth > 768) {
      animate({
        duration: 300,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.display = 'block';
          modal.style.opacity = progress;
        }
      });
    }
    };
    
  const fadeOut = () => {
    if (document.documentElement.clientWidth > 768) {
      animate({
        duration: 300,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.display = 'none';
          modal.style.opacity = progress;
        }
      });
    }
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
    fadeIn();
    });
  });

  modal.addEventListener('click', (e) => {
      if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
        fadeOut();
      }
   });

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  });
  
  modal.addEventListener('click', (e) => {
      if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
        modal.style.display = 'none';
      }
  });
};

export default modal