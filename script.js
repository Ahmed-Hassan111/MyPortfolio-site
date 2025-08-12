// Mobile menu toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    // Close mobile menu if open
    document.getElementById("mobile-menu").classList.add("hidden");
  });
});

// Animate skill bars on scroll
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress");
  skillBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });
}

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.id === "skills") {
        animateSkillBars();
      }
      entry.target.classList.add("animate-fadeIn");
    }
  });
}, observerOptions);

// Observe sections
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Add floating animation to random elements
const floatingElements = document.querySelectorAll(".floating");
floatingElements.forEach((el, index) => {
  el.style.animationDelay = `${index * 0.5}s`;
});
