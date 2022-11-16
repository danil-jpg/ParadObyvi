function mobileBurger () {
  const menuTrigger1 = document.querySelector('.menu-trigger_1')
  const menusImg = document.querySelector('.trigger-img_pc')
  const menu = document.querySelector('.header__mobile-menu')

  menuTrigger1.addEventListener('click', () => {
    menuTrigger1.classList.toggle('active')
    menusImg.toggleAttribute('true')

    if (menusImg.hasAttribute('true')) {
      menusImg.setAttribute('src', 'img/header/close_icon.svg')
    } else {
      menusImg.setAttribute('src', './img/header/burger-mob.svg')
    }

    menu.classList.toggle('active')
  })
}

export default mobileBurger
