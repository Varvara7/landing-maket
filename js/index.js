const menuWrapper = document.querySelector('.header');
const menuButton = document.querySelector('.header__button');
const menuList = document.querySelector('.header__menu')

function toggleMenu () {
  menuList.classList.toggle('opened');
}

function closeMenu(evt) {
    let insideMenu = menuWrapper.contains(evt.target);

    if (!insideMenu) {
        menuList.classList.remove('opened');
    }
}

menuButton.addEventListener('click', toggleMenu);
document.addEventListener('click', closeMenu);





