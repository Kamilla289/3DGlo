const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');

  let opacity = 0;
  modal.style.opacity = opacity;


  const fadeIn = () => {
    if (document.documentElement.clientWidth > 768) {
      modal.style.display = 'block';
      opacity += 0.1;
      modal.style.opacity = opacity;

      if(opacity < 1) {
        requestAnimationFrame(fadeIn);
      }
    } else {
      modal.style.display = 'block';
      modal.style.opacity = 1;
    }

  };

  const fadeOut = () => {
    opacity -= 0.1;
    modal.style.opacity = opacity;
    if(opacity > 0) {
      requestAnimationFrame(fadeOut);
    } else {
      modal.style.display = 'none';
    };
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
};

export default modal