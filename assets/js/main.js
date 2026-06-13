const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const revealItems = document.querySelectorAll(".reveal");
const tiltItems = document.querySelectorAll("[data-tilt]");
const particlesRoot = document.querySelector(".particles");
const scenePanel = document.querySelector(".scene-panel");
const splineFrame = document.querySelector(".spline-scene");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

// Lightweight tilt effect for cards and visual panels.
tiltItems.forEach((item) => {
  item.addEventListener("mousemove", (event) => {
    const rect = item.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 10;
    const rotateX = (0.5 - y) * 10;

    item.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "";
  });
});

// Animated particles for the dark technical background.
if (particlesRoot) {
  const particleCount = window.innerWidth < 760 ? 16 : 28;

  for (let index = 0; index < particleCount; index += 1) {
    const particle = document.createElement("span");
    const size = Math.random() * 4 + 3;
    const duration = Math.random() * 20 + 18;
    const delay = Math.random() * -18;
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const driftX = (Math.random() - 0.5) * 160 + "px";
    const driftY = (Math.random() - 0.5) * 220 - 180 + "px";

    particle.className = "particle";
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${startX}%`;
    particle.style.top = `${startY}%`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.setProperty("--drift-x", driftX);
    particle.style.setProperty("--drift-y", driftY);

    particlesRoot.appendChild(particle);
  }
}

// Subtle parallax for the future-scene panel and hero atmosphere.
window.addEventListener("mousemove", (event) => {
  const moveX = (event.clientX / window.innerWidth - 0.5) * 14;
  const moveY = (event.clientY / window.innerHeight - 0.5) * 14;

  document.documentElement.style.setProperty("--mouse-x", `${moveX}px`);
  document.documentElement.style.setProperty("--mouse-y", `${moveY}px`);

  if (scenePanel) {
    scenePanel.style.transform = `translate3d(${moveX * 0.22}px, ${moveY * 0.22}px, 0)`;
  }
});

// Only enable the iframe if a real Spline URL is provided later.
if (splineFrame && splineFrame.getAttribute("src")) {
  splineFrame.style.opacity = "1";
  splineFrame.style.pointerEvents = "auto";
}
