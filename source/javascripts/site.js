document.addEventListener('DOMContentLoaded', function() {

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
