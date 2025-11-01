// Smooth fade-in for each section when scrolled into view
const sections = document.querySelectorAll("section");

function appearOnScroll() {
  const triggerHeight = window.innerHeight * 0.8;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerHeight) section.classList.add("visible");
  });
}

window.addEventListener("scroll", appearOnScroll);
window.addEventListener("load", appearOnScroll);
