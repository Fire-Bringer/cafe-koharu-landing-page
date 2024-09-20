document.addEventListener('DOMContentLoaded', function() {
  // Splash Screen
  window.addEventListener('load', () => {
    let intro = document.querySelector('.intro');
    let splashSpan = document.querySelectorAll('.splash');
    let mainContent = document.querySelector('.main-content');

    // Hide main content initially
    mainContent.style.visibility = 'hidden'; // Main content is hidden
    mainContent.style.opacity = 0; // Set opacity to 0 for fade-in effect later

    // Show the splash screen animation
    setTimeout(() => {
      splashSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add('active');
        }, (idx + 1) * 800); // Sequentially activate splash elements
      });

      // Fade out splash screen text
      setTimeout(() => {
        splashSpan.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.remove('active');
            span.classList.add('fade');
          }, (idx + 1) * 350);
        });
      }, 4000); // Adjust the time to match your animation duration

      // End splash and show main content
      setTimeout(() => {
        // Slide splash screen out
        intro.style.top = '-100vh'; // Move the splash screen out of view

        // Fade in the main content
        setTimeout(() => {
          mainContent.style.visibility = 'visible';
          mainContent.style.opacity = 1;
        }, 500); // Slight delay to ensure smooth transition

      }, 4300); // Matches the timing of your splash screen animation

    }, 100); // Slight delay for assets to load properly
  });

  // Navbar on Scroll
  window.onscroll = function () {
    const docScrollTop = document.documentElement.scrollTop;

    if (window.innerWidth > 991) {
      if (docScrollTop > 100) {
        document.querySelector('.header').classList.add('scrolled');
      } else {
        document.querySelector('.header').classList.remove('scrolled');
      }
    }
  };

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
  };

  document.getElementById('prev').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft -= widthItem;
  };
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
};
