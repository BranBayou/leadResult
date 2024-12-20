// Handle hover effect sidebar nav

const sidebar = document.querySelector('.sidebar');
const hiddenTexts = document.querySelectorAll('.hidden');
const submenuItems = document.querySelectorAll('.submenu-item');
const sidebarLogo = document.querySelector('.sidebar-logo');

sidebar.addEventListener('mouseenter', () => {
  sidebar.classList.add('nav-expanded-width');
  hiddenTexts.forEach((hiddenText) => {
    hiddenText.classList.remove('hidden');
    hiddenText.style.opacity = '1';
    hiddenText.style.transition = 'opacity 0.3s ease';
  });
  submenuItems.forEach((item) => {
    item.classList.add('icon-only-sub-menu');
  });
  
  sidebarLogo.classList.add('logo-expanded'); 
});

sidebar.addEventListener('mouseleave', () => {
  sidebar.classList.remove('nav-expanded-width');
  hiddenTexts.forEach((hiddenText) => {
    hiddenText.style.opacity = '0';
    hiddenText.style.transition = 'opacity 0.3s ease';
    hiddenText.classList.add('hidden');
  });
  submenuItems.forEach((item) => {
    item.classList.remove('icon-only-sub-menu');
  });
  sidebarLogo.classList.remove('logo-expanded'); 
});


document.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // Remove the blue-bg class from all links
    document.querySelectorAll('.menu-link').forEach(item => item.classList.remove('blue-bg'));

    // Add the blue-bg class to the clicked link
    this.classList.add('blue-bg');

    // Remove gray-bg class from all parent elements
    document.querySelectorAll('.menu-link').forEach(item => {
      const parent = item.parentElement; 
      if (parent) {
        parent.classList.remove('gray-bg');
      }
    });

    // Add gray-bg class to the parent of the clicked link
    const parentElement = this.parentElement; 
    if (parentElement) {
      parentElement.classList.add('gray-bg');
    }

    // Get the target submenu id
    const targetId = this.getAttribute('data-target');
    const targetMenu = document.getElementById(targetId);

    // Close all other submenus first
    document.querySelectorAll('.submenu').forEach(menu => {
      if (menu !== targetMenu) {
        menu.classList.remove('active');
      }
    });

    // Toggle the active class for the target submenu
    if (targetMenu) {
      targetMenu.classList.toggle('active');
    }
  });
});





