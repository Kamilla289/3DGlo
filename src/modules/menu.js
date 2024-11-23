const menu = () => {
  const menu = document.querySelector('menu')
  const closeBtn = menu.querySelector('.close-btn');
  const header = document.querySelector('header');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  menu.addEventListener('click', (event) => {
    if (event.target === closeBtn || event.target.closest('ul>li>a')) {
      handleMenu();
    }
  });

  header.addEventListener('click', (event) => {
    if (event.target.closest('.menu')) {
      handleMenu();
    }
  });
};

export default menu;