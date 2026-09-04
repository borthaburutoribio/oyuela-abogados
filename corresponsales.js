/* ============================================================================
   Mapa interactivo de la red de corresponsales (Leaflet).
   Cada punto abre la ficha correspondiente en el listado de abajo.
   ========================================================================= */
(function () {
  "use strict";

  var el = document.getElementById("corr-map");
  if (!el || typeof L === "undefined") return;

  var OFFICE = { lat: -34.6037, lng: -58.3816 };

  var EXT = [
    { n: "Berlín",        lat: 52.520, lng: 13.405, id: "x-alemania" },
    { n: "Bonn",          lat: 50.737, lng: 7.098,  id: "x-alemania" },
    { n: "Bremen",        lat: 53.079, lng: 8.802,  id: "x-alemania" },
    { n: "Fráncfort",     lat: 50.110, lng: 8.682,  id: "x-alemania" },
    { n: "Hamburgo",      lat: 53.551, lng: 9.993,  id: "x-alemania" },
    { n: "Sídney",        lat: -33.868, lng: 151.209, id: "x-australia" },
    { n: "Bruselas",      lat: 50.850, lng: 4.351,  id: "x-belgica" },
    { n: "Shanghái",      lat: 31.230, lng: 121.474, id: "x-china" },
    { n: "Nueva York",    lat: 40.713, lng: -74.006, id: "x-eeuu" },
    { n: "Coral Gables, Florida", lat: 25.721, lng: -80.268, id: "x-eeuu" },
    { n: "París",         lat: 48.857, lng: 2.352,  id: "x-francia" },
    { n: "Helsinki",      lat: 60.170, lng: 24.941, id: "x-finlandia" },
    { n: "Londres",       lat: 51.507, lng: -0.128, id: "x-granbretana" },
    { n: "Atenas",        lat: 37.984, lng: 23.728, id: "x-grecia" },
    { n: "Budapest",      lat: 47.498, lng: 19.040, id: "x-hungria" },
    { n: "Nueva Delhi",   lat: 28.614, lng: 77.209, id: "x-india" },
    { n: "Bolzano",       lat: 46.498, lng: 11.354, id: "x-italia" },
    { n: "Roma",          lat: 41.903, lng: 12.496, id: "x-italia" },
    { n: "Luxemburgo",    lat: 49.611, lng: 6.131,  id: "x-luxemburgo" },
    { n: "Dunedin",       lat: -45.874, lng: 170.504, id: "x-nuevazelanda" },
    { n: "Lisboa",        lat: 38.722, lng: -9.139, id: "x-portugal" },
    { n: "Lublin",        lat: 51.246, lng: 22.568, id: "x-polonia" },
    { n: "Johannesburgo", lat: -26.204, lng: 28.047, id: "x-sudafrica" },
    { n: "Zúrich",        lat: 47.377, lng: 8.542,  id: "x-suiza" },
    { n: "Montevideo",    lat: -34.905, lng: -56.191, id: "x-uruguay" }
  ];

  var ARG = [
    { n: "Azul",              lat: -36.777, lng: -59.858, id: "p-buenos-aires" },
    { n: "Bahía Blanca",      lat: -38.720, lng: -62.266, id: "p-buenos-aires" },
    { n: "Coronel Suárez",    lat: -37.457, lng: -61.933, id: "p-buenos-aires" },
    { n: "Dolores",           lat: -36.313, lng: -57.677, id: "p-buenos-aires" },
    { n: "Junín",             lat: -34.585, lng: -60.944, id: "p-buenos-aires" },
    { n: "La Plata",          lat: -34.921, lng: -57.954, id: "p-buenos-aires" },
    { n: "Mar del Plata",     lat: -38.005, lng: -57.543, id: "p-buenos-aires" },
    { n: "Mercedes",          lat: -34.651, lng: -59.430, id: "p-buenos-aires" },
    { n: "Moreno",            lat: -34.650, lng: -58.790, id: "p-buenos-aires" },
    { n: "Necochea",          lat: -38.547, lng: -58.736, id: "p-buenos-aires" },
    { n: "Pehuajó",           lat: -35.812, lng: -61.900, id: "p-buenos-aires" },
    { n: "Pergamino",         lat: -33.889, lng: -60.567, id: "p-buenos-aires" },
    { n: "Tandil",            lat: -37.322, lng: -59.133, id: "p-buenos-aires" },
    { n: "Tres Arroyos",      lat: -38.379, lng: -60.279, id: "p-buenos-aires" },
    { n: "Córdoba",           lat: -31.420, lng: -64.188, id: "p-cordoba" },
    { n: "Resistencia",       lat: -27.451, lng: -58.987, id: "p-chaco" },
    { n: "Trelew",            lat: -43.253, lng: -65.309, id: "p-chubut" },
    { n: "Comodoro Rivadavia",lat: -45.865, lng: -67.496, id: "p-chubut" },
    { n: "Corrientes",        lat: -27.469, lng: -58.830, id: "p-corrientes" },
    { n: "Formosa",           lat: -26.185, lng: -58.175, id: "p-formosa" },
    { n: "Jujuy",             lat: -24.185, lng: -65.299, id: "p-jujuy" },
    { n: "Santa Rosa",        lat: -36.617, lng: -64.290, id: "p-la-pampa" },
    { n: "Mendoza",           lat: -32.890, lng: -68.844, id: "p-mendoza" },
    { n: "Neuquén",           lat: -38.951, lng: -68.059, id: "p-neuquen" },
    { n: "General Roca",      lat: -39.033, lng: -67.581, id: "p-rio-negro" },
    { n: "Viedma",            lat: -40.813, lng: -62.996, id: "p-rio-negro" },
    { n: "San Luis",          lat: -33.302, lng: -66.336, id: "p-san-luis" },
    { n: "Rosario",           lat: -32.951, lng: -60.664, id: "p-santa-fe" },
    { n: "Tucumán",           lat: -26.824, lng: -65.222, id: "p-tucuman" }
  ];

  var T = function (key, fallback) {
    return (window.OAi18n && window.OAi18n.t(key)) || fallback;
  };

  var map = L.map(el, { scrollWheelZoom: false, zoomControl: true, minZoom: 1, worldCopyJump: true });
  map.setView([20, 0], 2);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
  }).addTo(map);

  var dot = function (cls, s) {
    s = s || 14;
    return L.divIcon({ className: "", iconSize: [s, s], iconAnchor: [s / 2, s / 2],
      html: '<span class="corr-dot' + (cls ? " " + cls : "") + '"></span>' });
  };

  function openTarget(id) {
    var d = document.getElementById(id);
    if (!d) return;
    document.querySelectorAll("details.corr-target").forEach(function (n) { n.classList.remove("corr-target"); });
    d.open = true;
    d.classList.add("corr-target");
    d.querySelector("summary").scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function build(list) {
    var g = L.layerGroup();
    list.forEach(function (c) {
      var m = L.marker([c.lat, c.lng], { icon: dot(), keyboard: true, title: c.n });
      m.on("click", function () { openTarget(c.id); });
      m.bindPopup(function () {
        return '<strong>' + c.n + '</strong>' +
          '<a class="corr-map__link" href="#' + c.id + '" data-target="' + c.id + '">' +
          T("corr.map.view", "Ver en el listado") + '</a>';
      }, { closeButton: false });
      m.addTo(g);
    });
    return g;
  }

  var extGroup = build(EXT);
  var argGroup = build(ARG);
  var extBounds = L.latLngBounds(EXT.map(function (c) { return [c.lat, c.lng]; }));
  var argBounds = L.latLngBounds(ARG.map(function (c) { return [c.lat, c.lng]; }).concat([[OFFICE.lat, OFFICE.lng]]));

  var office = L.marker([OFFICE.lat, OFFICE.lng], { icon: dot("corr-dot--office", 20), title: T("corr.map.office", "Oyuela & Asociados — Buenos Aires") })
    .bindPopup('<strong>Oyuela &amp; Asociados</strong>Cerrito 1130, Buenos Aires', { closeButton: false });

  var current = "ext";

  function fit() {
    if (!el.clientWidth) return false;
    map.invalidateSize();
    if (current === "arg") {
      map.fitBounds(argBounds, { padding: [28, 28], maxZoom: 6 });
    } else {
      map.fitBounds(extBounds, { padding: [28, 28], maxZoom: 4 });
    }
    return true;
  }

  function show(view) {
    current = view;
    map.eachLayer(function (l) { if (l instanceof L.LayerGroup) map.removeLayer(l); });
    if (view === "arg") { argGroup.addTo(map); office.addTo(argGroup); }
    else { extGroup.addTo(map); office.addTo(extGroup); }
    document.querySelectorAll(".corr-map__tabs button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.view === view));
    });
    fit();
  }

  document.querySelectorAll(".corr-map__tabs button").forEach(function (b) {
    b.addEventListener("click", function () { show(b.dataset.view); });
  });

  el.addEventListener("click", function (e) {
    var a = e.target.closest(".corr-map__link");
    if (a) { e.preventDefault(); openTarget(a.dataset.target); }
  });

  show("ext");

  // el contenedor puede no tener tamaño en el primer render: reintentar
  var tries = 0;
  (function ensure() {
    if (fit() || tries++ > 40) return;
    setTimeout(ensure, 150);
  })();
  window.addEventListener("load", fit);
  if (window.ResizeObserver) {
    var ro = new ResizeObserver(function () { fit(); });
    ro.observe(el);
  }
})();
