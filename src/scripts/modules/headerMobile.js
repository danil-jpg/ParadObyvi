function mobileBurger () {
  const menuTrigger1 = document.querySelector('.menu-trigger_1')
  const menuTrigger2 = document.querySelector('.menu-trigger_2')
  const menusImg = document.querySelector('.trigger-img_pc')
  const menu = document.querySelector('.header__mobile-menu')
  const menu2 = document.querySelector('.mobile-menu_2')

  const oldVer = document.querySelector('.header-problem ')

  menuTrigger1.addEventListener('click', () => {
    menuTrigger1.classList.toggle('active')
    menusImg.toggleAttribute('true')

    if (menusImg.hasAttribute('true')) {
      menusImg.setAttribute('src', 'img/header/close_icon.svg')
    } else {
      menusImg.setAttribute('src', './img/header/burger-mob.svg')
    }

    if (getComputedStyle(oldVer).display === 'none') {
      menu.classList.toggle('activeOld')
    }

    menu.classList.toggle('active')
  })

  menuTrigger2.addEventListener('click', () => {
    menuTrigger2.classList.toggle('active')
    if (getComputedStyle(oldVer).display === 'none') {
      menu2.classList.toggle('activeOld')
    }
    menu2.classList.toggle('active')
  })
}

export default mobileBurger
