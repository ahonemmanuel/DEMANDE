/* ==========================================================================
   Afro Explorer AI — interactions Vanilla JS
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Initialise les icônes Lucide
  if (window.lucide) {
    lucide.createIcons();
  }

  // Menu mobile : ouverture/fermeture + fermeture automatique au clic sur un lien
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("hidden");
      mobileMenu.classList.toggle("hidden");
      menuToggle.innerHTML = isOpen
        ? '<i data-lucide="menu" class="w-5 h-5 text-brand-ink"></i>'
        : '<i data-lucide="x" class="w-5 h-5 text-brand-ink"></i>';
      if (window.lucide) lucide.createIcons();
    });

    mobileMenu.querySelectorAll(".mobile-link").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuToggle.innerHTML = '<i data-lucide="menu" class="w-5 h-5 text-brand-ink"></i>';
        if (window.lucide) lucide.createIcons();
      });
    });
  }

  // Apparition au scroll : observe chaque élément .reveal et ajoute
  // .reveal-visible dès qu'il entre dans le viewport (une seule fois).
  const revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    // Pas de support IntersectionObserver : on affiche tout directement.
    revealEls.forEach((el) => el.classList.add("reveal-visible"));
  }
});
