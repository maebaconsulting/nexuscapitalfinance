/* =================================================================
   NEXUS CAPITAL FINANCE — Interactions
   ================================================================= */
(function () {
  "use strict";

  /* --- En-tête compacte au défilement --- */
  var entete = document.querySelector(".entete");
  function majEntete() {
    if (!entete) return;
    if (window.scrollY > 40) entete.classList.add("compacte");
    else entete.classList.remove("compacte");
  }
  window.addEventListener("scroll", majEntete, { passive: true });
  majEntete();

  /* --- Menu mobile --- */
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      nav.classList.toggle("ouvert");
      document.body.classList.toggle("menu-ouvert");
    });
    nav.querySelectorAll("a").forEach(function (lien) {
      lien.addEventListener("click", function () {
        nav.classList.remove("ouvert");
        document.body.classList.remove("menu-ouvert");
      });
    });
  }

  /* --- Animations d'apparition au scroll --- */
  var elements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && elements.length) {
    var obs = new IntersectionObserver(
      function (entrees) {
        entrees.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    elements.forEach(function (el, i) {
      el.style.transitionDelay = (i % 3) * 0.08 + "s";
      obs.observe(el);
    });
  } else {
    elements.forEach(function (el) { el.classList.add("visible"); });
  }

  /* --- Formulaire de contact (démonstration vitrine) --- */
  var form = document.querySelector(".form-contact");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector("button[type=submit]");
      if (btn) {
        var txt = btn.textContent;
        btn.textContent = "Demande transmise ✓";
        btn.disabled = true;
        form.reset();
        setTimeout(function () {
          btn.textContent = txt;
          btn.disabled = false;
        }, 4000);
      }
    });
  }

  /* --- Année dynamique dans le pied de page --- */
  document.querySelectorAll("[data-annee]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
