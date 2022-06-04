const header = document.querySelector('#header')
const navHeight = header.offsetHeight
window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // scroll é maior que o header//
    header.classList.add('scroll')
  } else {
    //menor q altura do header//
    header.classList.remove('scroll')
  }
})

// SWIPER

var swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: '4',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false
  },
  loop: true,
  Infinity: true
})

// var swiper1 = new Swiper1('.mySwiper', {
//   speed: 600,
//   parallax: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev'
//   }
// })
