document.addEventListener('DOMContentLoaded', function() {

// Splash Screen
let intro = document.querySelector('.intro');
let splash = document.querySelector('.splash-header');
let splashSpan = document.querySelectorAll('.splash');

window.addEventListener('DOMContentLoaded', ()=>{

  setTimeout(()=>{

    splashSpan.forEach((span, idx)=>{
      setTimeout(()=>{
        span.classList.add('active');
      }, (idx + 1) * 800)
    });

    setTimeout(()=>{
      splashSpan.forEach((span, idx)=>{

        setTimeout(()=>{
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 350)

      })
    },4000);

    setTimeout(()=>{
      intro.style.top = '-100vh';
    }, 4300)

  })

})

// Navbar on Scroll
window.onscroll = function () {
  const docScrollTop = document.documentElement.scrollTop;

  if (window.innerWidth > 991) {
      if (docScrollTop > 100) {
          document.querySelector('.header').classList.add('scrolled')
      }
      else {
          document.querySelector('.header').classList.remove('scrolled')
      }
  }
}

// Responsive Navbar
const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');
  const navbg = document.querySelector('.nav-bg');
  menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
      navbg.classList.toggle('active');
  });

  // Best Sellers Slider
  document.getElementById('next').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft += widthItem;
  }
  document.getElementById('prev').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft -= widthItem;
  }

});
