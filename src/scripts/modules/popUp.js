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
let popUpWarClose = document.querySelector('.pop-up__war-close');
let popUpWarBlock = document.querySelectorAll('.pop-up__war-block');



// ======================================================
popUpOpenWar.forEach((item)=> {
  item.addEventListener('click', () => {
    popUpOpenContent.classList.add('open')
    popUpWarBlock.forEach((item, index) => {
      popUpWarBlock[index].classList.add('open')
      setTimeout(function(){
        item.classList.remove('open')
        popUpOpenContent.classList.remove('open')
      }, 3500);
    })
    popUpWarClose.addEventListener('click', () => {
      popUpWarBlock.forEach(item => {
        item.classList.remove('open')
      })
      popUpOpenContent.classList.remove('open')
    })
  })
})

// ======================================================
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
  // Scroll===================================================
  const scrollBtn = document.querySelector('.scrol-top__btn')
  window.onscroll = () => {
    if(window.scrollY > 300){
      scrollBtn.classList.remove('scrol-top__btn_hide')
    } else if (window.scrollY < 300) {
      scrollBtn.classList.add('scrol-top__btn_hide')
    }
  }
  scrollBtn.onclick = () => {
    window.scrollTo(0, 0)
  }
  // ============================================================
  document.querySelector('.header-main__drop-buyer').addEventListener('click', () => {
    document.querySelector('.header-main__drop-buyer').classList.toggle('active')
    document.querySelector('.drop-buyer-block__list').classList.toggle('active')
    document.querySelector('.header-main__drop-tell').classList.remove('active')
    document.querySelector('.drop-tell-block__list').classList.remove('active')
  })

  document.querySelector('.header-main__drop-tell').addEventListener('click', () => {
    document.querySelector('.header-main__drop-tell').classList.toggle('active')
    document.querySelector('.drop-tell-block__list').classList.toggle('active')
    document.querySelector('.header-main__drop-buyer').classList.remove('active')
    document.querySelector('.drop-buyer-block__list').classList.remove('active')
  })
}

export default popUpPage
