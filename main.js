document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section.carrier');

  sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
      section.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
    });

    section.addEventListener('mouseleave', () => {
      section.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
  });
});
