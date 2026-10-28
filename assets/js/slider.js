document.querySelectorAll('[data-slider]').forEach((slider) => {
  const slides = [...slider.querySelectorAll('[data-slide]')];
  const dots = [...slider.querySelectorAll('[data-slide-to]')];
  let current = 0;
  let timer;

  const showSlide = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === current;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });
    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === current;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-selected', String(active));
    });
  };

  const start = () => {
    window.clearInterval(timer);
    timer = window.setInterval(() => showSlide(current + 1), 6500);
  };

  dots.forEach((dot) => dot.addEventListener('click', () => { showSlide(Number(dot.dataset.slideTo)); start(); }));
  slider.addEventListener('mouseenter', () => window.clearInterval(timer));
  slider.addEventListener('mouseleave', start);
  slider.addEventListener('focusin', () => window.clearInterval(timer));
  slider.addEventListener('focusout', (event) => { if (!slider.contains(event.relatedTarget)) start(); });
  start();
});