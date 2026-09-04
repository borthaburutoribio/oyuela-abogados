/* Oyuela & Asociados — interacciones mínimas */
(function () {
  "use strict";

  // ---- Menú móvil ----------------------------------------------------------
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? "Abrir menú" : "Cerrar menú");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ---- Año en el pie -----------------------------------------------------
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  // ---- Aviso de envío del formulario ----------------------------------
  if (location.search.indexOf("ok=1") !== -1) {
    var ok = document.getElementById("form-ok");
    if (ok) {
      ok.classList.add("is-visible");
      ok.setAttribute("role", "status");
      ok.scrollIntoView({ block: "center" });
    }
  }

  // ---- Botón compartir --------------------------------------------------
  document.querySelectorAll("[data-share]").forEach(function (btn) {
    btn.addEventListener("click", async function () {
      var data = { title: document.title, url: location.href };
      try {
        if (navigator.share) {
          await navigator.share(data);
        } else if (navigator.clipboard) {
          await navigator.clipboard.writeText(location.href);
          var prev = btn.innerHTML;
          btn.textContent = "Enlace copiado";
          setTimeout(function () { btn.innerHTML = prev; }, 2000);
        }
      } catch (err) { /* cancelado por el usuario */ }
    });
  });
})();
