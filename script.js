
  const menuToggle = document.querySelector('.menu-toggle button');
  const navbar2 = document.querySelector('.navbar-2');
  
  menuToggle.addEventListener('click', () => {
    navbar2.classList.toggle('active');
  });
