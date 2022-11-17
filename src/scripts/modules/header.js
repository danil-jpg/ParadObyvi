function header () {
  const headerProblemCloseAll = document.querySelectorAll('.header-problem__close')
  const headerProblem = document.querySelectorAll('.header-problem')

  const menuToDisable1 = document.querySelectorAll('.header__mobile-menu')[0]
  const menuToDisable2 = document.querySelectorAll('.header__mobile-menu')[1]

  const menuTrigger1 = document.querySelector('.menu-trigger_1')
  const menuTrigger2 = document.querySelector('.menu-trigger_2')

  const menusImg = document.querySelector('.trigger-img_pc')

  headerProblemCloseAll.forEach(item => {
    item.addEventListener('click', () => {
      headerProblem.forEach(item => {
        item.classList.toggle('close')

        menuToDisable1.classList.remove('active')
        menuToDisable1.classList.remove('activeOld')

        menuToDisable2.classList.remove('active')
        menuToDisable2.classList.remove('activeOld')

        menuTrigger1.classList.remove('active')
        menuTrigger1.classList.remove('activeOld')

        menuTrigger2.classList.remove('active')
        menuTrigger2.classList.remove('activeOld')

        // console.log(menusImg.hasAttribute('true'))

        // if (menusImg.hasAttribute('true')) {
        //   menusImg.setAttribute('src', 'img/header/close_icon.svg')
        // } else {
        //   menusImg.setAttribute('src', './img/header/burger-mob.svg')
        // }
      })
    })
  })
}

export default header
