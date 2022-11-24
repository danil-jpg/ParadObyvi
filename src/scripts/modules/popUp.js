function popUpPage () {
let popUpOpen = document.querySelectorAll('.pop-up-open');
let popUpAcc = document.querySelectorAll('.pop-up-acc');
let popUpBtn = document.querySelectorAll('.popUp-select');
let popUpClose = document.querySelectorAll('.popUp-btn__close');
let popUpTabLeft = document.querySelectorAll('.popUp-btn__tab')[0];
let popUpTabRight = document.querySelectorAll('.popUp-btn__tab')[1];
let bodyLock = document.querySelector('body');
let popUpLogin = document.querySelector('.popUp-login');
let popUpNewClient = document.querySelector('.popUp-login-new');
let popUpDrop = document.querySelectorAll('.popUp-login__new-drop');
let popUpDropForm = document.querySelector('.popUp-login__new-form-second');
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