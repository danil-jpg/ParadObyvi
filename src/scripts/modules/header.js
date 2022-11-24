function header () {
  const headerProblemCloseAll = document.querySelectorAll('.header-problem__close')
  const headerProblem = document.querySelectorAll('.header-problem')

  headerProblemCloseAll.forEach(item => {
    item.addEventListener('click', () => {
      headerProblem.forEach(item => {
        item.classList.toggle('close')
      })
    })
  })
}

export default header
