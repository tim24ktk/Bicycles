'use strict';
(() => {
  const mainMenu = document.querySelector(`.main-menu`);
  const mainNavigationButton = document.querySelector(`.main-navigation__button`);
  const mainMenuButton = document.querySelector(`.main-menu__button`);

  if (mainMenu && mainMenu.classList.contains(`main-menu--no-js`)) {
    mainMenu.classList.remove(`main-menu--no-js`);
  }

  const openMenu = () => {
    mainMenu.style.display = `flex`;
    mainMenu.style.position = `fixed`;
    mainMenu.style.zIndex = `100`;
  };

  const closeMenu = () => {
    mainMenu.style.display = `none`;
  };

  mainMenuButton.addEventListener(`click`, closeMenu);

  mainNavigationButton.addEventListener(`click`, openMenu);

  const phoneInput = document.querySelector(`input[type=tel]`);
  const pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

  phoneInput.addEventListener(`invalid`, () => {
    if (!pattern.test(phoneInput.value)) {
      phoneInput.setCustomValidity('Номер телефона должен быть написан цифрами!');
    }
  });
})();
