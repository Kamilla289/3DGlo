const tabs = () => {
  const tabPnel = document.querySelector('.service-header');
  const tabs = document.querySelectorAll('.service-header-tab');
  const tabContent = document.querySelectorAll('.service-tab');

  tabPnel.addEventListener('click', (e) => {
    if (e.target.closest('.service-header-tab')) {
      const tabBtn = e.target.closest('.service-header-tab');

      tabs.forEach((tab, index) => {
        if (tab === tabBtn) {
          tab.classList.add('active');
          tabContent[index].removeAttribute('style');
        } else {
          tab.classList.remove('active');
          tabContent[index].setAttribute('style', 'display: none');
        }
      });
    }
  })
}

export default tabs