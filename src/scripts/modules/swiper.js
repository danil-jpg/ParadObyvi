import Swiper, { Navigation } from 'swiper'

function swiperProject () {
  const swiperTop = document.querySelector('.swiper-top')
  const swiperSneakers = document.querySelector('.swiper-sneakers')
  const swiperBrends = document.querySelector('.swiper-brends')
  const swiperSneakers2 = document.querySelector('.swiper-sneakers-2')

  // ========================================
  const swiperNew = new Swiper(swiperTop, {
    slidesPerView: 1,
    loop: true,
    modules: [Navigation],
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-top__button-next',
      prevEl: '.swiper-top__button-prev'
    }

  })
  // ========================================

  // ========================================
  const swiperSneak = new Swiper(swiperSneakers, {
    slidesPerView: 5,
    loop: true,
    spaceBetween: 5,
    modules: [Navigation],
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      960: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 5
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-sneakers__button-next',
      prevEl: '.swiper-sneakers__button-prev'
    }

  })
  // ========================================

  // ========================================
  const swiper = new Swiper(swiperBrends, {
    slidesPerView: 8,
    spaceBetween: 30,
    loop: true,
    modules: [Navigation],
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 0
      },
      960: {
        slidesPerView: 5,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 8,
        spaceBetween: 30
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-brends__button-next',
      prevEl: '.swiper-brends__button-prev'
    }

  })
  // ========================================

  // ========================================
  const swiperboots = new Swiper(swiperSneakers2, {
    slidesPerView: 5,
    loop: true,
    spaceBetween: 5,
    modules: [Navigation],
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      960: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 5
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-sneakers-2__button-next',
      prevEl: '.swiper-sneakers-2__button-prev'
    }
  })
  // ========================================

  const heart = document.querySelectorAll('.sneakers-block__like-icon')

  heart.forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.hasAttribute('true')) {
        e.target.setAttribute('src', 'img/swiper/hart.webp')
        e.target.removeAttribute('true', '')
      } else {
        e.target.setAttribute('src', 'img/swiper/heart-painted.webp')
        e.target.setAttribute('true', '')
      }
    })
  })
}

export default swiperProject
