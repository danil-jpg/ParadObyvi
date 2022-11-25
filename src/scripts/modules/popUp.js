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
let popUpOpenWar = document.querySelectorAll('.pop-up__war-open');

let popUpOpenContent = document.querySelector('.pop-up-war');
let popUpWarClose = document.querySelectorAll('.pop-up__war-close');
let popUpWarBlock = document.querySelectorAll('.pop-up__war-block');
let popUpWarBlockNew = document.querySelectorAll('.pop-up__war-block-2');
let popUpOpenWarNew = document.querySelectorAll('.pop-up__war-open-2');
popUpOpenWar.forEach(item => {
    item.addEventListener('click', () => {
        popUpWarBlock.forEach(item => {
            item.classList.add('open')
            popUpOpenContent.classList.add('open')
            setTimeout(function(){
                item.classList.remove('open')
            }, 3500);
        })
    })
    popUpWarClose.forEach(item => {
        item.addEventListener('click', () => {
            popUpWarBlock.forEach(item => {
                item.classList.remove('open')
                popUpOpenContent.classList.remove('open')
            })
        })
    })
})

// ==================================================
popUpOpenWarNew.forEach(item => {
    item.addEventListener('click', () => {
        popUpWarBlockNew.forEach(item => {
            item.classList.add('open')
            popUpOpenContent.classList.add('open')
            setTimeout(function(){
                item.classList.remove('open')
            }, 3500);
        })
    })
    popUpWarClose.forEach(item => {
        item.addEventListener('click', () => {
            popUpWarBlockNew.forEach(item => {
                item.classList.remove('open')
                popUpOpenContent.classList.remove('open')
            })
        })
    })
})
// ==================================================
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
