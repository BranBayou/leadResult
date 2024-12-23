// Handle hover effect sidebar nav

const sidebar = document.querySelector('.sidebar');
const hiddenTexts = document.querySelectorAll('.hidden');
const submenus = document.querySelectorAll('.submenu');
const submenuItems = document.querySelectorAll('.submenu-item');
const sidebarLogo = document.querySelector('.sidebar-logo');
const lbLogo = document.querySelector('#lbLogo');
const mainMenu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu-item');
const menuLinks = document.querySelectorAll('.menu-link');

// Add hover effect sidebar nav
sidebar.addEventListener('mouseenter', () => {
  sidebar.classList.add('nav-expanded-width');
  mainMenu.style.margin = '0';
  submenus.forEach((submenu) => { submenu.style.width = '100%'; });
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
    item.style.width = '100%';
  });
  menuLinks.forEach((link) => {
    link.style.width = '100%';
    link.style.justifyContent = 'start';
  });
  sidebarLogo.classList.add('logo-expanded'); 
  lbLogo.style.paddingLeft = '0';
  // lbLogo.style.justifyContent = 'center';
});

sidebar.addEventListener('mouseleave', () => {
  sidebar.classList.remove('nav-expanded-width');
  menuItems.forEach((menuItem) => {
    menuItem.style.alignItems = 'center';
  });
  submenus.forEach((submenu) => { submenu.style.width = ''; });
  hiddenTexts.forEach((hiddenText) => {
    hiddenText.style.opacity = '0';
    hiddenText.style.transition = 'opacity 0.3s ease';
    hiddenText.classList.add('hidden');
  });
  submenuItems.forEach((item) => {
    item.classList.remove('icon-only-sub-menu');
  });
  sidebarLogo.classList.remove('logo-expanded');
  sidebarLogo.style.transition = 'all 0.3s ease';
  lbLogo.style.paddingLeft = '.8rem';
  // lbLogo.style.justifyContent = 'start';
  // sidebarLogo.style.justifyContent = 'center';
  menuLinks.forEach((link) => {
    link.style.width = '100%';
    link.style.justifyContent = 'center';
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('.menu-link');
  
  menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('data-target');
      const targetMenu = document.getElementById(targetId);
      const isSubmenu = targetMenu && targetMenu.classList.contains('submenu');

      // Handle submenus
      if (isSubmenu) {
        // Close all other submenus slowly before opening the clicked submenu
        document.querySelectorAll('.submenu.active').forEach(menu => {
          menu.classList.remove('active');
          menu.style.transition = "all 0.3s ease-out";
        });

        // Open the clicked submenu
        if (targetMenu) {
          targetMenu.classList.toggle('active');
          targetMenu.style.transition = "all 0.3s ease-in";
        }
      }

      // Allow postback for top-level menu items without submenus
      if (!isSubmenu) {
        window.location.href = this.href;  // Allow page navigation for top-level menu items
      }

      // Reset the menu links to default state
      menuLinks.forEach(item => {
        item.classList.remove('blue-bg');
        const icon = item.querySelector('.menu-icon');
        if (icon) {
          icon.src = icon.src.replace(/-1\.svg$/, '.svg').replace(/\.svg$/, '-1.svg');
        }

        const menuText = item.querySelector('.menu-text');
        if (menuText) {
          menuText.style.color = '#B0B2B9';
          menuText.style.fontWeight = '500';
        }
      });

      // Reset all menu items to remove gray-bg class
      document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('gray-bg');
      });

      // Mark the clicked item as active
      this.classList.add('blue-bg');
      const activeIcon = this.querySelector('.menu-icon');
      if (activeIcon) {
        activeIcon.src = activeIcon.src.replace(/-1\.svg$/, '.svg');
      }

      const activeMenuText = this.querySelector('.menu-text');
      if (activeMenuText) {
        activeMenuText.style.color = '#FFFFFF';
        activeMenuText.style.fontWeight = '600';
      }

      // Handle submenu items
      if (this.classList.contains('submenu-item')) {
        const submenuIcon = this.querySelector('.menu-icon');
        if (submenuIcon) {
          submenuIcon.src = submenuIcon.src.replace(/-1\.svg$/, '.svg');
        }

        const submenuText = this.querySelector('.menu-text');
        if (submenuText) {
          submenuText.style.color = '#FFFFFF';
          submenuText.style.fontWeight = '600';
        }
      }

      // Add the gray-bg class to the parent menu item of the clicked link
      const parentElement = this.closest('.menu-item');
      if (parentElement) {
        parentElement.classList.add('gray-bg');
      }
    });
  });
});


// Function to set the active tab on page load
document.addEventListener('DOMContentLoaded', function () {
  const savedTab = document.getElementById('hfSelectedTab').value;

  if (savedTab) {
    // Find the menu link with the corresponding ID or data-target
    const activeLink = document.querySelector(`[data-target="${savedTab}"], #${savedTab}`);

    if (activeLink) {
      activeLink.click();
    }
  }
});

// Save the active tab when a menu item is clicked
menuLinks.forEach(link => {
  link.addEventListener('click', function () {
    const selectedTab = this.getAttribute('data-target') || this.id;
    if (selectedTab) {
      document.getElementById('hfSelectedTab').value = selectedTab;
    }
  });
});

