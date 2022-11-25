
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

  const returnBtn = document.querySelectorAll('.menu__return-img')

  const newsTrigger = document.querySelectorAll('.mobile-item__news')
  const newsMenu = document.querySelector('.menu__news')

  const mensTrigger = document.querySelectorAll('.menList')
  const mensMenu = document.querySelector('.menu-for-mens')

  const womenTrigger = document.querySelectorAll('.womenList')
  const womensMenu = document.querySelector('.menu-for-womens')

  const kidsTrigger = document.querySelectorAll('.kidsList')
  const kidsMenu = document.querySelector('.menu-for-kids')

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

  returnBtn.forEach(item => {
    item.addEventListener('click', () => {
      const parentElem = item.parentNode.parentNode.classList[0]
      console.log(parentElem)
      document.querySelector(`.${parentElem}`).classList.toggle('active')
    })
  })

  dropDownList(newsTrigger, newsMenu)
  // News

  dropDownList(mensTrigger, mensMenu)
  // For mens

  dropDownList(womenTrigger, womensMenu)
  // For womens

  dropDownList(kidsTrigger, kidsMenu)

  function dropDownList (triggerClass, dropDownListClass) {
    triggerClass.forEach(item => {
      item.addEventListener('click', () => {
        dropDownListClass.classList.toggle('active')
        console.log(dropDownList)
      })
    })
  }
}

export default mobileBurger
