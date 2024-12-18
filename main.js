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
    item.classList.remove('icon-only-sub-menu');
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
    item.classList.add('icon-only-sub-menu');
  });
  sidebarLogo.classList.remove('logo-expanded'); 
});
