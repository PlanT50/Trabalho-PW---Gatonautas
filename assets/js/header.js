document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const navLinks = document.querySelectorAll(".site-header__link");

  if (!header) return;

  let currentPath = decodeURIComponent(window.location.pathname.split("/").pop() || "");
  if (currentPath === "") {
    currentPath = "PaginaInicial.html";
  }

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");

    if (linkPath === currentPath) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }

    link.addEventListener("click", () => {
      header.classList.remove("is-open");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      header.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
});
