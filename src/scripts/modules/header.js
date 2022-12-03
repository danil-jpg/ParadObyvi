function header () {
  const headerProblemCloseAll = document.querySelectorAll('.header-problem__close')
  const headerProblem = document.querySelectorAll('.header-problem')
  
  const headerLengthBtn = document.querySelector('.pop-up__length-btn')
  const headerLengthPopUp = document.querySelector('.length-block')
  headerProblemCloseAll.forEach(item => {
    item.addEventListener('click', () => {
      headerProblem.forEach(item => {
        item.classList.toggle('close')
      })
    })
  })

  headerLengthBtn.addEventListener('click', () => {
    headerLengthPopUp.classList.toggle('active')
  })
  

}

export default header
