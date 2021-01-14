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
  };

  const closeMenu = () => {
    mainMenu.style.display = `none`;
  };

  mainMenuButton.addEventListener(`click`, closeMenu);

  mainNavigationButton.addEventListener(`click`, openMenu);
})();
