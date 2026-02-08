document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        if (entry.target.hasAttribute("data-reveal-stagger")) {
          const items = entry.target.querySelectorAll("[data-reveal-item]");
          const stagger = Number(entry.target.dataset.stagger ?? 120);

          items.forEach((el, i) => {
            el.style.transitionDelay = `${i * stagger}ms`;
            el.classList.add("reveal-visible", "reveal-animate");
          });
        } else {
          entry.target.classList.add("reveal-visible", "reveal-animate");
        }

        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2 },
  );

  document
    .querySelectorAll("[data-reveal]")
    .forEach((el) => observer.observe(el));
  document
    .querySelectorAll("[data-reveal-stagger]")
    .forEach((el) => observer.observe(el));
});
