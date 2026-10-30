document.documentElement.classList.add('js');

// Mobile menu
const btn = document.querySelector('.menu');
const nav = document.getElementById('mainnav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }));
}

// Sunset scene: reveal when it scrolls into view
const scene = document.querySelector('.scene');
if (scene) {
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries, obs) => {
      if (entries[0].isIntersecting) { scene.classList.add('in'); obs.disconnect(); }
    }, { threshold: 0.25 }).observe(scene);
  } else {
    scene.classList.add('in');
  }
}