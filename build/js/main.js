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
  const pattern = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

  phoneInput.addEventListener(`invalid`, () => {
    if (!pattern.test(+phoneInput.value)) {
      phoneInput.setCustomValidity(`Номер телефона должен быть написан цифрами длина не менее 10 символов и не более 18!`);
    }
  });
})();
