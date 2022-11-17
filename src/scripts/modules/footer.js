function mobileMenu () {
  const triggers = document.querySelectorAll('.footer__title')

  triggers.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      const parentElemsToShow = document.querySelectorAll('.footer__title')[index].parentNode.classList[0]
      const elemsToShow = document.querySelectorAll(`.${parentElemsToShow} .footer__item`)
      const parentElem = document.querySelector(`.${parentElemsToShow} `)

      elemsToShow.forEach(item => {
        item.classList.toggle('active')
      })

      parentElem.classList.toggle('active')

      item.classList.toggle('active')
    })
  })
}

export default mobileMenu
