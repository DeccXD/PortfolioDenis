  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  let isOpen = false;

  menuBtn.addEventListener('click', () => {
    isOpen = !isOpen;

    if (isOpen) {
      mobileMenu.classList.remove('scale-y-0', 'opacity-0');
      mobileMenu.classList.add('scale-y-100', 'opacity-100');
    } else {
      mobileMenu.classList.remove('scale-y-100', 'opacity-100');
      mobileMenu.classList.add('scale-y-0', 'opacity-0');
    }
  });
