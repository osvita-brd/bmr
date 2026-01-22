// Клік по кнопці - розгорнути/згорнути деталі
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.news-item.window');

  cards.forEach(card => {
    const btn = card.querySelector('.toggle-btn');
    const extra = card.querySelector('.news-extra');
    const isCollapsed = () => extra.classList.contains('collapsed');

    // ініціалізація: згорнуто
    extra.classList.add('collapsed');
    btn.textContent = 'Показати деталі';

    btn.addEventListener('click', function () {
      if (extra.classList.contains('collapsed')) {
        // розгорнути
        extra.classList.remove('collapsed');
        btn.textContent = 'Згорнути';
        card.setAttribute('aria-expanded', 'true');
      } else {
        // згорнути
        extra.classList.add('collapsed');
        btn.textContent = 'Показати деталі';
        card.setAttribute('aria-expanded', 'false');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const overlay = document.querySelector('.nav-overlay');

  function openMenu() {
    nav.classList.add('active');
    overlay.classList.add('active');
    menuToggle.classList.add('active');
    document.body.classList.add('menu-open'); // блокує скрол
    menuToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    nav.classList.remove('active');
    overlay.classList.remove('active');
    menuToggle.classList.remove('active');
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');

    document.querySelectorAll('.has-submenu')
      .forEach(i => i.classList.remove('open'));
  }

  menuToggle.addEventListener('click', () => {
    nav.classList.contains('active') ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  // Закриття по ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  // Підменю
  document.querySelectorAll('.submenu-toggle').forEach(link => {
    link.addEventListener('click', e => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    });
  });
});


function openMenu() {
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const snow = document.querySelector('.snow');
  const month = new Date().getMonth(); 
  // 11,0,1 = грудень, січень, лютий

  if (month === 11 || month === 0 || month === 1) {
    snow.style.display = 'block';
  } else {
    snow.style.display = 'none';
  }
});









