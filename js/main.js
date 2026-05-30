/* =============================================================
   NEXUS CAPITAL FINANCE — JavaScript vanilla
   - Apparitions au scroll (IntersectionObserver)
   - En-tête qui se densifie au scroll
   - Menu mobile
   - Formulaire de contact : validation + confirmation factice
   ============================================================= */
(function () {
  "use strict";

  /* ---- 1. En-tête : densification au scroll ---- */
  var nav = document.querySelector(".nav");
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- 2. Apparitions au scroll ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- 3. Menu mobile ---- */
  var burger = document.querySelector(".nav__burger");
  var mobileLinks = document.querySelectorAll(".mobile-menu a");
  if (burger) {
    burger.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    mobileLinks.forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("menu-open");
        document.body.style.overflow = "";
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- 4. Formulaire de contact : validation + confirmation ---- */
  var form = document.querySelector(".form");
  if (form) {
    var msg = document.querySelector(".form-msg");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      // Validation native HTML5
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var prenom = (form.querySelector("#prenom") || {}).value || "";
      // Récupère le prénom pour personnaliser le message
      var nameNode = document.getElementById("confirm-name");
      if (nameNode) nameNode.textContent = prenom ? (", " + prenom.trim()) : "";
      form.style.display = "none";
      if (msg) {
        msg.classList.add("show");
        msg.setAttribute("role", "status");
        msg.scrollIntoView ? null : null; // pas de scrollIntoView (peut perturber)
      }
    });
  }

  /* ---- 5. Année dynamique du footer ---- */
  var y = document.querySelectorAll(".js-year");
  y.forEach(function (n) { n.textContent = new Date().getFullYear(); });
})();
