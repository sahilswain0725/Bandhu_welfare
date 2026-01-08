// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: "smooth"
      });
    }
  });
});

// Highlight active nav link on scroll
window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + 70;
  document.querySelectorAll("section").forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      document.querySelectorAll("nav a").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === section.id) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Hero text animation
document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero h2");
  if (heroText) {
    heroText.style.opacity = 0;
    heroText.style.transform = "translateY(20px)";
    setTimeout(() => {
      heroText.style.transition = "all 1s ease";
      heroText.style.opacity = 1;
      heroText.style.transform = "translateY(0)";
    }, 300);
  }

  // Make phone number clickable
  const phoneElement = document.querySelector("#contact p:nth-child(3)");
  if (phoneElement) {
    const phoneNumber = "+91-9668308096"; // Replace with actual number
    phoneElement.innerHTML = `<strong>Phone:</strong> <a href="tel:${phoneNumber}">${phoneNumber}</a>`;
  }

  // Gallery slider
  const track = document.querySelector(".gallery-track");
  const slides = document.querySelectorAll(".gallery-slide");
  const prevBtn = document.querySelector(".gallery-btn.prev");
  const nextBtn = document.querySelector(".gallery-btn.next");
  let index = 0;

  function showSlide(i) {
    if (!track || slides.length === 0) return;
    if (i < 0) index = slides.length - 1;
    else if (i >= slides.length) index = 0;
    else index = i;
    track.style.transform = `translateX(${-index * 100}%)`;
  }

  if (prevBtn) prevBtn.addEventListener("click", () => showSlide(index - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => showSlide(index + 1));

  // Initial render
  showSlide(0);
});