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

  function closeMenu() {
    nav.classList.remove('active');
    overlay.classList.remove('active');
    menuToggle.classList.remove('active');
    document.querySelectorAll('.has-submenu').forEach(i => i.classList.remove('open'));
  }

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  overlay.addEventListener('click', closeMenu);

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








