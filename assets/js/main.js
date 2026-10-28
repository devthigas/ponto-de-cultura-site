// Main site interactivity

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const header = document.querySelector('header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('bg-white/95', 'shadow-premium', 'border-line');
        header.classList.remove('bg-white/80', 'border-line/40');
      } else {
        header.classList.remove('bg-white/95', 'shadow-premium', 'border-line');
        header.classList.add('bg-white/80', 'border-line/40');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
  }

  // 2. Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const barTop = document.getElementById('bar-top');
  const barMid = document.getElementById('bar-mid');
  const barBot = document.getElementById('bar-bot');

  if (menuToggle && mobileDrawer) {
    let isOpen = false;

    const toggleMenu = () => {
      isOpen = !isOpen;
      menuToggle.setAttribute('aria-expanded', isOpen);
      if (isOpen) {
        mobileDrawer.classList.remove('left-[-100%]');
        mobileDrawer.classList.add('left-0');
        if (barTop) barTop.classList.add('rotate-45', 'translate-y-[9px]');
        if (barMid) barMid.classList.add('opacity-0');
        if (barBot) barBot.classList.add('-rotate-45', '-translate-y-[9px]');
        document.body.style.overflow = 'hidden';
      } else {
        mobileDrawer.classList.remove('left-0');
        mobileDrawer.classList.add('left-[-100%]');
        if (barTop) barTop.classList.remove('rotate-45', 'translate-y-[9px]');
        if (barMid) barMid.classList.remove('opacity-0');
        if (barBot) barBot.classList.remove('-rotate-45', '-translate-y-[9px]');
        document.body.style.overflow = '';
      }
    };

    menuToggle.addEventListener('click', toggleMenu);

    // Close when clicking mobile links
    const mobileLinks = mobileDrawer.querySelectorAll('a');
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (isOpen) toggleMenu();
      });
    });
  }

  // 3. Fade-in animation on scroll
  const fadeElements = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window && fadeElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    fadeElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver not supported
    fadeElements.forEach((el) => el.classList.add('appear'));
  }
});
