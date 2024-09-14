document.addEventListener('DOMContentLoaded', function() {

// Splash Screen
window.addEventListener('load', () => {
  let intro = document.querySelector('.intro');
  let splash = document.querySelector('.splash-header');
  let splashSpan = document.querySelectorAll('.splash');
  let mainContent = document.querySelector('.main-content'); // Assuming you have a main content section

  // Hide main content initially
  mainContent.style.display = 'none';

  setTimeout(() => {
    splashSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add('active');
      }, (idx + 1) * 800);
    });

    setTimeout(() => {
      splashSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 350);
      });
    }, 4000);

    setTimeout(() => {
      intro.style.top = '-100vh'; // Slide the splash screen out
      mainContent.style.display = 'block'; // Show main content
    }, 4300);

  }, 100); // Add a slight delay to allow assets to load properly
});


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
  const navbar = document.querySelector('.navi');
  const navbg = document.querySelector('.nav-bg');
  menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
      navbg.classList.toggle('active');
  });


// Close menu when nav-link is clicked
const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
  navbg.classList.remove('active');
}

// Close menu when clicking outside of menuIcon and navbar
document.body.addEventListener('click', function(event) {
  const isClickInsideMenuIcon = menuIcon.contains(event.target);
  const isClickInsideNavBar = navbar.contains(event.target);
  if (!isClickInsideMenuIcon && !isClickInsideNavBar) {
    menuIcon.classList.remove('active');
    navbar.classList.remove('active');
    navbg.classList.remove('active');
  }
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

// Modal Popups
function openModal(name, price, description, image) {
  document.getElementById('modalTitle').innerText = name;
  document.getElementById('modalPrice').innerText = price;
  document.getElementById('modalDescription').innerText = description;
  document.getElementById('modalImage').src = image;
  document.getElementById('myModal').style.display = "flex";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
  if (event.target == document.getElementById('myModal')) {
    document.getElementById('myModal').style.display = "none";
  }
}
