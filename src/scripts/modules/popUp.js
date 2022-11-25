function popUpPage () {
  const popUpOpen = document.querySelectorAll('.pop-up-open')
  const popUpAcc = document.querySelectorAll('.pop-up-acc')
  const popUpBtn = document.querySelectorAll('.popUp-select')
  const popUpClose = document.querySelectorAll('.popUp-btn__close')
  const popUpTabLeft = document.querySelectorAll('.popUp-btn__tab')[0]
  const popUpTabRight = document.querySelectorAll('.popUp-btn__tab')[1]
  const bodyLock = document.querySelector('body')
  const popUpLogin = document.querySelector('.popUp-login')
  const popUpNewClient = document.querySelector('.popUp-login-new')
  const popUpDrop = document.querySelectorAll('.popUp-login__new-drop')
  const popUpDropForm = document.querySelector('.popUp-login__new-form-second')
  popUpOpen.forEach(item => {
    item.addEventListener('click', () => {
      popUpAcc.forEach(item => {
        item.classList.toggle('open')
        bodyLock.classList.toggle('lock')
      })
    })
  })
  popUpClose.forEach(item => {
    item.addEventListener('click', () => {
      popUpAcc.forEach(item => {
        item.classList.remove('open')
        bodyLock.classList.remove('lock')
      })
    })
  })

  popUpBtn.forEach(item => {
    item.addEventListener('click', () => {
      popUpTabLeft.classList.toggle('active')
      popUpTabRight.classList.toggle('active')
      popUpLogin.classList.toggle('active')
      popUpNewClient.classList.toggle('active')
    })
  })

  popUpDrop.forEach(item => {
    item.addEventListener('click', () => {
      popUpDropForm.classList.toggle('open')
    })
  })
}

export default popUpPage
