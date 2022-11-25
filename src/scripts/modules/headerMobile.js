import { active } from 'browser-sync'

function mobileBurger () {
  const allMenus = document.querySelectorAll('.header__mobile-menu.active')

  const menuTrigger1 = document.querySelector('.menu-trigger_1')
  const menuTrigger2 = document.querySelector('.menu-trigger_2')
  const menuTrigger3 = document.querySelector('.menu-trigger_3')
  const menusImg = document.querySelector('.trigger-img_pc')
  const menu = document.querySelector('.header__mobile-menu')
  const menu2 = document.querySelector('.mobile-menu_2')

  const menu3 = document.querySelector('.mobile-menu_3')
  const redCross = document.querySelector('.red-cross_wr')

  const html = document.querySelector('html')

  const oldVer = document.querySelector('.header-problem ')

  const elemsToBlur = document.querySelectorAll('body > *:not(header)')

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

    elemsToBlur.forEach(item => {
      item.classList.toggle('blur4px')
    })

    html.classList.toggle('active')
  })

  menuTrigger2.addEventListener('click', () => {
    menuTrigger2.classList.toggle('active')

    elemsToBlur.forEach(item => {
      item.classList.toggle('blur4px')
    })

    if (getComputedStyle(oldVer).display === 'none') {
      menu2.classList.toggle('activeOld')
    }
    menu2.classList.toggle('active')

    html.classList.toggle('active')
  })

  menuTrigger3.addEventListener('click', () => {
    menu3.classList.toggle('active')

    html.classList.toggle('active')
  })
  redCross.addEventListener('click', () => {
    menu3.classList.toggle('active')
  })
}

export default mobileBurger
