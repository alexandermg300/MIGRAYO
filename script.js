// Animación al hacer scroll
const elements = document.querySelectorAll('.about, .benefits, .testimonios, .contacto');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));