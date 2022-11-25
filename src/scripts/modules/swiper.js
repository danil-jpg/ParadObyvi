import Swiper, { Navigation } from 'swiper'

function swiperProject () {
  const swiperTop = document.querySelector('.swiper-top')
  const swiperSneakers = document.querySelectorAll('.swiper-sneakers')
  const swiperBrends = document.querySelector('.swiper-brends')
  const prevArrow = document.querySelectorAll('.swiper-sneakers__button-prev')
  const nextArrow = document.querySelectorAll('.swiper-sneakers__button-next')
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
  swiperSneakers.forEach((item, index) => {
      const swiperSneak = new Swiper(item, {
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
          nextEl: nextArrow[index],
          prevEl: prevArrow[index]
        }
      })
  })
// ========================================
  const swiper = new Swiper(swiperBrends, {
    slidesPerView: 8,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    modules: [Navigation],
    breakpoints: {
      320: {
        slidesPerView: 2.43,
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
}
export default swiperProject
