const header = document.querySelector('#header')
const mouse = document.querySelector('#mouse')
const navHeight = header.offsetHeight
window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // scroll é maior que o header//
    header.classList.add('scroll')

    setTimeout(() => {
      mouse.classList.add('scroll')
    }, '900')
  } else {
    //menor q altura do header//
    header.classList.remove('scroll')
    setTimeout(() => {
      mouse.classList.remove('scroll')
    }, '900')
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
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
})

// const ctx = document.getElementById('myChart').getContext('2d')
// const myChart = new Chart(ctx, {
//   type: 'doughnut',
//   data: {
//     labels: ['Percy', 'Annabeth', 'Jason', 'Piper', 'Hazel', 'Leo', 'Frank'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3, 10],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//           'rgba(200,15,100, 0.2)'
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//           'rgba(200,15,100, 1)'
//         ],
//         borderWidth: 1
//       }
//     ]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// })

// const ctx1 = document.getElementById('myChart1').getContext('2d')
// const myChart1 = new Chart(ctx1, {
//   type: 'bar',
//   data: {
//     labels: ['Percy', 'Annabeth', 'Jason', 'Piper', 'Hazel', 'Leo', 'Frank'],
//     datasets: [
//       {
//         label: 'Quantidade de escolhas',
//         data: [],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//           'rgba(200,15,100, 0.2)'
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//           'rgba(200,15,100, 1)'
//         ],
//         borderWidth: 1
//       }
//     ]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// })

// b_usuario.innerHTML = sessionStorage.NOME_USUARIO
// // var swiper1 = new Swiper1('.mySwiper', {
// //   speed: 600,
// //   parallax: true,
// //   pagination: {
// //     el: '.swiper-pagination',
// //     clickable: true
// //   },
// //   navigation: {
// //     nextEl: '.swiper-button-next',
// //     prevEl: '.swiper-button-prev'
// //   }
// // })

// // {
// //   const data = {
// //     labels: [],
// //     datasets: [
// //       {
// //         label: 'Motos mais votadas  ',
// //         backgroundColor: '#f7403b',
// //         borderColor: '#63247e',
// //         data: []
// //       }
// //     ]
// //   }
// //

// //   const config = {
// //     type: 'bar',
// //     data: data,
// //     options: {}
// //   }

// //   const mychart = new Chart(document.getElementById('myChart'), config)
// // }
