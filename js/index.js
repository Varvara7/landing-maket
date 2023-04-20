
const popupButton = document.querySelector('.popup-menu__button');
const popupWrapper = document.querySelector('.popup-menu');
const popupMenu = document.querySelector('.popup-menu__list');

popupButton.addEventListener('click', handleMenu);

function handleMenu() {
    popupMenu.classList.toggle('hide-popup');
}

document.addEventListener('click', hidePopup);

function hidePopup(el) {
    let targetInside = popupWrapper.contains(el.target);
    if(!targetInside) {
        popupMenu.classList.add('hide-popup');
    }
    else {
        return
    }
}

/*

const menuButton = document.querySelector('.header__toggle');
const menuWrapper = document.querySelector('.header');
const menuList = document.querySelector('.header__menu')


menuButton.addEventListener('click', toggleMenu);


function toggleMenu () {
    menuList.classList.toggle('opened');
}


document.addEventListener('click', closeMenu);

function closeMenu(evt) {
    let insideMenu = menuWrapper.contains(evt.target);
    if (!insideMenu) {
        menuList.classList.remove('opened');
    }
    else {
        return
    }
}*/


