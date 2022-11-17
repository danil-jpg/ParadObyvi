function textBlock () {
  const triggerElem = document.querySelector('.text__arrow')
  const textElems = document.querySelectorAll('.text__content > *:not(.text__title-wr)')

  triggerElem.addEventListener('click', () => {
    triggerElem.classList.toggle('active')
    textElems.forEach(item => { item.classList.toggle('disabledText') })
  })
}

export default textBlock
