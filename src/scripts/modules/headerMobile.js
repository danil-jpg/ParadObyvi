
function mobileBurger () {
  const allTriggers = document.querySelectorAll('.header-actible-item')

  const menuTrigger1 = document.querySelector('.menu-trigger_1')
  const menuTrigger2 = document.querySelectorAll('.menu-trigger_2')
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

  const madeInUkraineTrigger = document.querySelectorAll('.madeInUkraineList')
  const madeInUkraineMenu = document.querySelector('.menu-in-Ukraine')

  const forOrderTrigger = document.querySelectorAll('.forOrderList')
  const forOrderMenu = document.querySelector('.menu-order')

  const accessoriesTrigger = document.querySelectorAll('.accsesoriesList')
  const accessoriesMenu = document.querySelector('.menu-accessories')

  const customerTrigger = document.querySelectorAll('.customerList')
  const customerMenu = document.querySelector('.menu__for-customers')

  const contactsTrigger = document.querySelectorAll('.contactsList')
  const contactsMenu = document.querySelector('.menu__contacts')

  const graphicTrigger = document.querySelectorAll('.graphicList')
  const graphicMenu = document.querySelector('.menu__graphic')

  const languageTrigger = document.querySelectorAll('.languageList')
  const languageMenu = document.querySelector('.menu__language')
  // languageList
  // menu__language

  console.log(graphicTrigger, graphicMenu)

  menuTrigger1.addEventListener('click', () => {
    menu2.classList.remove('active')
    menu.classList.toggle('active')
    menuTrigger1.classList.add('active')
    menuTrigger2[0].classList.remove('active')

    if (menu.classList.contains('active')) {
      html.classList.add('active')
      menusImg.setAttribute('src', 'img/header/close_icon.svg')
    } else if (menu2.classList.contains('active')) {
      menusImg.setAttribute('src', './img/header/burger-mob.svg')
    } else {
      html.classList.remove('active')
      menusImg.setAttribute('src', './img/header/burger-mob.svg')
      menuTrigger1.classList.remove('active')
      menuTrigger2[0].classList.remove('active')
    }
  })

  menuTrigger2.forEach(item => {
    item.addEventListener('click', () => {
      menu.classList.remove('active')
      menu2.classList.toggle('active')
      console.log(menuTrigger2[0])
      menuTrigger2[0].classList.add('active')
      menuTrigger1.classList.remove('active')

      if (menu.classList.contains('active') || menu2.classList.contains('active')) {
        html.classList.add('active')
        menusImg.setAttribute('src', './img/header/burger-mob.svg')
      } else {
        html.classList.remove('active')
        menuTrigger1.classList.remove('active')
        menuTrigger2[0].classList.remove('active')
      }
    })
  })
  // function menuOldVer () {
  //   menuTrigger1.addEventListener('click', () => {
  //     menuTrigger1.toggleAttribute(true)

  //     if (menuTrigger1.hasAttribute(true)) {
  //       document.querySelectorAll('.header__mobile-menu:not(:nth-of-type(1))').forEach(item => {
  //         item.classList.remove('active')

  //         allTriggers.forEach(item => {
  //           item.classList.remove('active')
  //         })
  //       })
  //     }

  //     menuTrigger1.classList.toggle('active')
  //     menusImg.toggleAttribute('true')

  //     if (menusImg.hasAttribute('true')) {
  //       menusImg.setAttribute('src', 'img/header/close_icon.svg')
  //     } else {
  //       menusImg.setAttribute('src', './img/header/burger-mob.svg')
  //     }

  //     menu.classList.toggle('active')

  //     // elemsToBlur.forEach(item => {
  //     //   item.classList.toggle('blur4px')
  //     // })

  //     // html.classList.toggle('active')
  //   })

  //   menuTrigger2.addEventListener('click', () => {
  //     menuTrigger2.toggleAttribute(true)

  //     if (menuTrigger2.hasAttribute(true)) {
  //       document.querySelectorAll('.header__mobile-menu:not(:nth-of-type(2))').forEach(item => {
  //         item.classList.remove('active')

  //         allTriggers.forEach(item => {
  //           item.classList.remove('active')
  //         })
  //       })
  //     }

  //     menuTrigger2.classList.toggle('active')

  //     // elemsToBlur.forEach(item => {
  //     //   item.classList.toggle('blur4px')
  //     // })

  //     menu2.classList.toggle('active')

  //     // html.classList.toggle('active')
  //   })
  // }

  menuTrigger3.addEventListener('click', () => {
    menu3.classList.toggle('active')
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
  // For kids

  dropDownList(madeInUkraineTrigger, madeInUkraineMenu)
  // Made in Ukraine

  dropDownList(forOrderTrigger, forOrderMenu)
  // For order

  dropDownList(accessoriesTrigger, accessoriesMenu)
  // accsessories

  dropDownList(customerTrigger, customerMenu)
  // customer menu

  dropDownList(contactsTrigger, contactsMenu)

  dropDownList(graphicTrigger, graphicMenu)

  dropDownList(languageTrigger, languageMenu)

  function dropDownList (triggerClass, dropDownListClass) {
    triggerClass.forEach(item => {
      item.addEventListener('click', () => {
        dropDownListClass.classList.toggle('active')
      })
    })
  }
}

export default mobileBurger
