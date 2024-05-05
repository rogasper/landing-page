const dropdownBtn = document.querySelector('.drop-down-btn');
const dropdownMenu = document.querySelector('.drop-down');
const navItems = document.querySelectorAll('li.nav-item');
const navItemsLink = document.querySelectorAll('.drop-down li a')
const foto = document.querySelector('.foto');
const bingkai = document.querySelector('.bingkai');
const royan = document.querySelector('.royan');
const rogasper = document.querySelector('.rogasper');


// memunculkna dropdown navbar
dropdownBtn.addEventListener('click', () => {
  if(dropdownMenu.style.display === 'block'){
    dropdownMenu.style.display = 'none'
  }else{
    dropdownMenu.style.display = 'block'
  }
})
window.addEventListener("resize", () => {
  if(window.innerWidth >= 630){
    dropdownMenu.style.display = 'none'
    
  }
  if(window.innerWidth <= 740){
    let nav_offset_top = $('header').height();
    // console.log(nav_offset_top)
    function navbarFixed() {
      if ($('header').length) {
          $(window).scroll(function() {
              let scroll = $(window).scrollTop();
              if (scroll >= nav_offset_top) {
                  $('nav').addClass('navbar-fixed');
              } else {
                  $('nav').removeClass('navbar-fixed');
              }
          })
      }
  }

  navbarFixed();
  }
});
for(let i = 0; i < navItemsLink.length; i++){
  navItemsLink[i].addEventListener('click', () => {
    dropdownMenu.style.display = 'none'
  })
}

// 3D animation
foto.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  bingkai.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})
foto.addEventListener('mouseenter', () => {
  bingkai.style.transition = 'none'
  royan.style.transform = 'translateZ(50px)'
  rogasper.style.transform = 'translateZ(40px)'
})
foto.addEventListener('mouseleave', () => {
  bingkai.style.transition = 'all 0.5s ease'
  bingkai.style.transform = 'rotateY(0deg) rotateX(0deg)'
  royan.style.transform = 'translateZ(0px)'
  rogasper.style.transform = 'translateZ(0px)'
})

// dark-mode tombol
const tombolLampu = document.querySelector('.theme')
const wholeHTML = document.querySelector('body')
let theme = localStorage.getItem('theme')

if(theme === 'dark') enableDarkMode()

tombolLampu.addEventListener('click', e => {
  theme = localStorage.getItem('theme')
  if(theme === 'dark'){
    disableDarkMode()
  }else{
    enableDarkMode()
  }
})

function disableDarkMode() {
  localStorage.setItem('theme', 'light');
  wholeHTML.classList.remove("dark-mode")
  tombolLampu.innerHTML = "🌒"
}
function enableDarkMode() {
  localStorage.setItem('theme', 'dark');
  wholeHTML.classList.add("dark-mode")
  tombolLampu.innerHTML = "☀️"
}

window.matchMedia('(prefers-color-scheme: dark)')
.addListener((e) => (e.matches ? enableDarkMode() : disableDarkMode()));


// Smooth Scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        document.getElementById("gotoTop").style.display = "block";
    } else {
        document.getElementById("gotoTop").style.display = "none";
    }
}

function topFunction() {
    $('html, body').animate({scrollTop:0}, 'slow');
}

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});
