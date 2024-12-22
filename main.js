// Handle hover effect sidebar nav

const sidebar = document.querySelector('.sidebar');
const hiddenTexts = document.querySelectorAll('.hidden');
const submenuItems = document.querySelectorAll('.submenu-item');
const sidebarLogo = document.querySelector('.sidebar-logo');
const mainMenu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu-item');
const menuLinks = document.querySelectorAll('.menu-link');

// Add hover effect sidebar nav
sidebar.addEventListener('mouseenter', () => {
  sidebar.classList.add('nav-expanded-width');
  mainMenu.style.margin = '0';
  menuItems.forEach((menuItem) => {
    menuItem.style.alignItems = 'start';
    // menuItem.style.padding = '0 1rem';
    menuItem.style.transition = 'all 0.3s ease';
  });
  hiddenTexts.forEach((hiddenText) => {
    hiddenText.classList.remove('hidden');
    hiddenText.style.opacity = '1';
    hiddenText.style.transition = 'opacity 0.3s ease';
  });
  submenuItems.forEach((item) => {
    item.classList.add('icon-only-sub-menu');
  });
  menuLinks.forEach((link) => {
    link.style.width = '100%';
    link.style.justifyContent = 'start';
  });
  sidebarLogo.classList.add('logo-expanded'); 
});

sidebar.addEventListener('mouseleave', () => {
  sidebar.classList.remove('nav-expanded-width');
  menuItems.forEach((menuItem) => {
    menuItem.style.alignItems = 'center';
  });
  hiddenTexts.forEach((hiddenText) => {
    hiddenText.style.opacity = '0';
    hiddenText.style.transition = 'opacity 0.3s ease';
    hiddenText.classList.add('hidden');
  });
  submenuItems.forEach((item) => {
    item.classList.remove('icon-only-sub-menu');
  });
  sidebarLogo.classList.remove('logo-expanded');
  menuLinks.forEach((link) => {
    link.style.width = '100%';
    link.style.justifyContent = 'center';
  });
});


document.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // Remove the blue-bg class and inline width style from all links
    document.querySelectorAll('.menu-link').forEach(item => {
      item.classList.remove('blue-bg');
    });

    // Add the blue-bg class and set width to 100% for the clicked link
    this.classList.add('blue-bg');
    // this.style.width = '100%';
    // this.style.padding = '0 1rem';

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

