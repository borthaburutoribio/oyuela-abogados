/* ============================================================================
   Oyuela & Asociados — bilingüe ES / EN
   El español es la fuente (está en el HTML). Este archivo aporta el inglés.
   Si falta una clave en inglés, el texto queda en español (nunca se rompe).
   ========================================================================= */
(function () {
  "use strict";

  var STORE = "oa-lang";

  var EN = {
    /* ---- navegación / chrome ---- */
    "nav.perfil": "Our Profile",
    "nav.antecedentes": "Background",
    "nav.servicios": "Services",
    "nav.clientes": "Main Clients",
    "nav.corresponsales": "Correspondents",
    "nav.links": "Links",
    "nav.contacto": "Contact",
    "brand.kicker": "Attorneys",
    "common.skip": "Skip to content",
    "common.share": "Share",
    "common.shared": "Link copied",
    "common.call": "Call",
    "common.write": "Email",
    "common.menu.open": "Open menu",
    "common.menu.close": "Close menu",
    "footer.secciones": "Sections",
    "footer.estudio": "Firm",
    "footer.mapa": "Site map",
    "footer.weekdays": "Monday to Friday",
    "footer.hours": "9:00 am – 6:00 pm",
    "footer.addr": "Cerrito 1130, 6th floor — (C1010AAX)<br>Autonomous City of Buenos Aires, Argentina",
    "footer.legal": "© <span data-year>2026</span> Oyuela &amp; Asociados. Cerrito 1130, 6th floor — (C1010AAX) Autonomous City of Buenos Aires, Argentina — Tel (54 11) 5235-8800",

    /* ---- bloque de contacto reutilizado ---- */
    "cta.eyebrow": "Contact us",
    "cta.title": "Contact us",
    "cta.lead": "To arrange a meeting, write to oyuela@oyuela.com or call (54 11) 5235-8800.",
    "cta.btn_ir": "Go to contact",
    "cta.btn_mail": "Send an email",
    "cta.btn_call": "Call (54 11) 5235-8800",

    /* ---- inicio ---- */
    "home.doc": "Oyuela & Asociados — Attorneys, City of Buenos Aires",
    "home.hero.eyebrow": "Attorneys",
    "home.hero.h1": "Law firm in the City of Buenos Aires",
    "home.hero.sub": "An individual, independent and personalised professional service.",
    "home.hero.btn_serv": "Services",
    "home.hero.btn_cont": "Contact us",
    "home.dir.eyebrow": "Sections",
    "home.dir.title": "The site",
    "home.dir.perfil_d": "How the firm works and its framework under the Code of Ethics.",
    "home.dir.ante_d": "The firm’s background and the professionals who form it.",
    "home.dir.serv_d": "The fourteen matters in which the firm advises and litigates.",
    "home.dir.cli_d": "Financial institutions, public-utility companies, insurers and chambers.",
    "home.dir.corr_d": "Correspondents in Argentina and abroad.",
    "home.dir.links_d": "Activities and press, codes, public bodies and libraries.",
    "home.dir.cont_d": "Address, phone, email and map.",
    "home.dir.mapa_d": "Index of every section.",
    "home.cta.title": "Get in touch to receive advice suited to your needs",
    "home.cta.lead": "Cerrito 1130, 6th floor — (C1010AAX), Autonomous City of Buenos Aires. Tel (54 11) 5235-8800. Email oyuela@oyuela.com.",

    /* ---- nuestro perfil ---- */
    "perfil.doc": "Our Profile — Oyuela & Asociados, Attorneys",
    "perfil.hero.h1": "Our Profile",
    "perfil.hero.sub": "The firm provides an individual, independent and personalised professional service.",
    "perfil.p1": "The firm provides an individual, independent and personalised professional service, handling each area of practice autonomously.",
    "perfil.p2": "In this way each client receives, in every matter, the particular attention they need, without delegating the professional work, so as to preserve a personal, direct relationship — and without forming a company, association or business for professional practice, in order to preserve the values of applying legal knowledge individually, the exclusive freedom of decision and intellectual creation, the particular art of procedural strategy and representation before the courts, and the personal duty of professional secrecy.",
    "perfil.p3": "All of this without prejudice to the use of a shared infrastructure of professional goods and services, to the benefit of costs and services, arranged individually with each client.",
    "perfil.p4": "In this way the principles of the Code of Ethics of the Bar Association of the City of Buenos Aires are observed and, under its article 19, professional activity and responsibility are ratified, establishing the foregoing as a general condition of individual and personal engagement for professional practice.",
    "perfil.aside.title": "Principles",
    "perfil.li1": "A personal, direct relationship with the client",
    "perfil.li2": "No delegation of the professional work",
    "perfil.li3": "Freedom of decision and intellectual creation",
    "perfil.li4": "Personal duty of professional secrecy",
    "perfil.li5": "Individual professional responsibility",

    /* ---- servicios ---- */
    "serv.doc": "Services — Corporate, banking, commercial and insolvency law | Oyuela & Asociados",
    "serv.hero.h1": "Services",
    "serv.hero.sub": "The firm advises and litigates in the following matters, among others.",
    "serv.sec.eyebrow": "Oyuela & Asociados services",
    "serv.sec.title": "Matters the firm handles",
    "serv.s1.t": "Corporate and banking law",
    "serv.s1.d": "Incorporation, reorganisation and governance of companies; banking transactions, security and contracts.",
    "serv.s2.t": "Commercial contracts",
    "serv.s2.d": "Drafting, negotiation, performance and termination of contracts between companies.",
    "serv.s3.t": "Labour and social-security law",
    "serv.s3.d": "Individual and collective advice, prevention of contingencies, and labour and social-security litigation.",
    "serv.s4.t": "Consumer protection",
    "serv.s4.d": "Prevention, regulatory compliance and defence in claims and administrative or judicial proceedings.",
    "serv.s5.t": "Distribution, licensing and franchising contracts",
    "serv.s5.d": "Distribution, dealership, agency, trademark licensing and franchising contracts.",
    "serv.s6.t": "Administrative law",
    "serv.s6.d": "Dealings with government, licences, permits, claims and administrative litigation.",
    "serv.s7.t": "Insurance. Environmental law",
    "serv.s7.d": "Insurance contracts, claims and coverage; environmental compliance and contingencies.",
    "serv.s8.t": "Debt recovery",
    "serv.s8.d": "Judicial and out-of-court management and enforcement of receivables and security.",
    "serv.s9.t": "Debt restructuring",
    "serv.s9.d": "Refinancing, creditor arrangements and balance-sheet clean-up.",
    "serv.s10.t": "Insolvency and bankruptcy",
    "serv.s10.d": "Reorganisation proceedings, bankruptcy, proof of claims and creditor arrangements.",
    "serv.s11.t": "Construction law",
    "serv.s11.d": "Works contracts, liability of builders and designers, and defect claims.",
    "serv.s12.t": "Succession and family matters",
    "serv.s12.d": "Estates, family wealth planning, divorce and settlements.",
    "serv.s13.t": "Mediation and arbitration",
    "serv.s13.d": "Representation in mandatory pre-trial mediation and in domestic and international arbitration.",
    "serv.s14.t": "Court representation",
    "serv.s14.d": "Action before every court and instance, with a procedural strategy tailored to each case.",
    "serv.faq.eyebrow": "Common questions",
    "serv.faq.title": "Frequently asked questions",
    "serv.faq.q1": "Does the firm advise both companies and individuals?",
    "serv.faq.a1": "Yes. The firm advises both entities and companies and individuals, with individual, direct professional attention in every matter.",
    "serv.faq.q2": "Where is the firm located?",
    "serv.faq.a2": "At Cerrito 1130, 6th floor (C1010AAX), Autonomous City of Buenos Aires, near the courts district and the Teatro Colón.",
    "serv.faq.q3": "Does the firm act on cases outside the City of Buenos Aires?",
    "serv.faq.a3": "Yes. The firm has a network of correspondents across most Argentine provinces and in nearly twenty countries abroad. See the <a href=\"corresponsales.html\">correspondents page</a>.",
    "serv.faq.q4": "How do I request a consultation?",
    "serv.faq.a4": "You can write to <a href=\"mailto:oyuela@oyuela.com\">oyuela@oyuela.com</a> or call <a href=\"tel:+541152358800\">(54 11) 5235-8800</a> to arrange a meeting.",

    /* ---- principales clientes ---- */
    "cli.doc": "Main Clients — Oyuela & Asociados",
    "cli.hero.h1": "Main Clients",
    "cli.hero.sub": "The firm has advised, among others, the following entities and companies.",
    "cli.g1": "Banks and financial institutions",
    "cli.g2": "Public utilities and energy",
    "cli.g3": "Insurance",
    "cli.g4": "Industry and trade",
    "cli.g5": "Chambers and institutions",
    "cli.g6": "Car dealerships",
    "cli.note": "A partial list, for reference, of clients advised by the firm over the course of its activity.",

    /* ---- corresponsales ---- */
    "corr.doc": "Correspondents in Argentina and abroad | Oyuela & Asociados",
    "corr.hero.eyebrow": "Correspondents",
    "corr.hero.h1": "Correspondents in Argentina and abroad",
    "corr.hero.sub": "Associated firms in nearly twenty countries abroad and across most Argentine provinces.",
    "corr.map.title": "The network at a glance",
    "corr.map.hint": "Select a marker to open its details in the list below.",
    "corr.map.tab_ext": "Abroad",
    "corr.map.tab_arg": "Argentina",
    "corr.map.office": "Oyuela & Asociados — Buenos Aires",
    "corr.map.view": "See in the list",
    "corr.ext.eyebrow": "Abroad",
    "corr.ext.title": "International correspondents",
    "corr.arg.eyebrow": "In Argentina",
    "corr.arg.title": "Correspondents within Argentina",
    "corr.note": "Correspondent contact details per the firm’s records; subject to verification and updating.",
    "corr.c.alemania": "Germany",
    "corr.c.australia": "Australia",
    "corr.c.belgica": "Belgium",
    "corr.c.china": "China",
    "corr.c.eeuu": "United States of America",
    "corr.c.francia": "France",
    "corr.c.finlandia": "Finland",
    "corr.c.granbretana": "United Kingdom",
    "corr.c.grecia": "Greece",
    "corr.c.hungria": "Hungary",
    "corr.c.india": "India",
    "corr.c.italia": "Italy",
    "corr.c.luxemburgo": "Luxembourg",
    "corr.c.nuevazelanda": "New Zealand",
    "corr.c.portugal": "Portugal",
    "corr.c.polonia": "Poland",
    "corr.c.sudafrica": "South Africa",
    "corr.c.suiza": "Switzerland",
    "corr.c.uruguay": "Uruguay",
    "corr.p.buenos-aires": "Buenos Aires Province",
    "corr.p.cordoba": "Córdoba",
    "corr.p.chaco": "Chaco",
    "corr.p.chubut": "Chubut",
    "corr.p.corrientes": "Corrientes",
    "corr.p.formosa": "Formosa",
    "corr.p.jujuy": "Jujuy",
    "corr.p.la-pampa": "La Pampa",
    "corr.p.mendoza": "Mendoza",
    "corr.p.neuquen": "Neuquén",
    "corr.p.rio-negro": "Río Negro",
    "corr.p.salta": "Salta",
    "corr.p.san-luis": "San Luis",
    "corr.p.santa-fe": "Santa Fe",
    "corr.p.tucuman": "Tucumán",

    /* ---- links de interés ---- */
    "links.doc": "Links — Oyuela & Asociados",
    "links.hero.h1": "Links",
    "links.hero.sub": "The firm’s activities and press, libraries, codes and reference bodies.",
    "links.note": "<strong>Note:</strong> some external links come from the previous site and may be out of date. They are pending review and updating with the client.",
    "links.g1": "Activities and Press",
    "links.g2": "Codes and legislation",
    "links.g3": "National bodies",
    "links.g4": "International bodies and libraries",
    "links.g5": "Professional profile",

    /* ---- contacto ---- */
    "cont.doc": "Contact — Cerrito 1130, Buenos Aires | Oyuela & Asociados",
    "cont.hero.h1": "Contact us",
    "cont.hero.sub": "Fill in the form or write to the firm directly to arrange a meeting.",
    "cont.datos.eyebrow": "Details",
    "cont.datos.title": "Office in Buenos Aires",
    "cont.lbl.dir": "Address",
    "cont.lbl.tel": "Phone",
    "cont.lbl.mail": "Email",
    "cont.lbl.hor": "Office hours",
    "cont.addr": "Cerrito 1130, 6th floor — (C1010AAX)<br>Autonomous City of Buenos Aires, Argentina",
    "cont.hours_val": "Monday to Friday, 9:00 am to 6:00 pm",
    "cont.form.eyebrow": "Contact form",
    "cont.form.title": "Send us your inquiry",
    "cont.form.ok": "Thank you for your inquiry. The firm will be in touch shortly.",
    "cont.form.empresa": "Company",
    "cont.form.nombre": "First name",
    "cont.form.apellido": "Last name",
    "cont.form.telefono": "Phone",
    "cont.form.email": "Email",
    "cont.form.consulta": "Inquiry",
    "cont.form.req": "* Required fields",
    "cont.form.enviar": "Send",
    "cont.form.borrar": "Clear",
    "cont.form.note": "The initial inquiry does not create a professional relationship until the firm expressly accepts the matter. Information sent is treated confidentially.",

    /* ---- antecedentes / mapa ---- */
    "ante.doc": "Background — Oyuela & Asociados",
    "ante.hero.h1": "Background",
    "mapa.doc": "Site map — Oyuela & Asociados",
    "mapa.hero.h1": "Site map",
    "mapa.inicio": "Home"
  };

  var els = null;

  function collect() {
    if (els) return els;
    els = [];
    document.querySelectorAll("[data-i18n],[data-i18n-html],[data-i18n-ph],[data-i18n-aria]").forEach(function (el) {
      els.push({
        el: el,
        t: el.hasAttribute("data-i18n") ? el.getAttribute("data-i18n") : null,
        h: el.hasAttribute("data-i18n-html") ? el.getAttribute("data-i18n-html") : null,
        p: el.hasAttribute("data-i18n-ph") ? el.getAttribute("data-i18n-ph") : null,
        a: el.hasAttribute("data-i18n-aria") ? el.getAttribute("data-i18n-aria") : null,
        es_t: null, es_h: null, es_p: null, es_a: null
      });
    });
    return els;
  }

  function refreshYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  function apply(lang) {
    var list = collect();
    list.forEach(function (r) {
      if (r.t) {
        if (r.es_t === null) r.es_t = r.el.textContent;
        r.el.textContent = (lang === "en" && EN[r.t] != null) ? EN[r.t] : r.es_t;
      }
      if (r.h) {
        if (r.es_h === null) r.es_h = r.el.innerHTML;
        r.el.innerHTML = (lang === "en" && EN[r.h] != null) ? EN[r.h] : r.es_h;
      }
      if (r.p) {
        if (r.es_p === null) r.es_p = r.el.getAttribute("placeholder") || "";
        r.el.setAttribute("placeholder", (lang === "en" && EN[r.p] != null) ? EN[r.p] : r.es_p);
      }
      if (r.a) {
        if (r.es_a === null) r.es_a = r.el.getAttribute("aria-label") || "";
        r.el.setAttribute("aria-label", (lang === "en" && EN[r.a] != null) ? EN[r.a] : r.es_a);
      }
    });

    // <title>
    var td = document.querySelector("[data-i18n-doc]");
    if (td) {
      if (!td.dataset.es) td.dataset.es = document.title;
      var key = td.getAttribute("data-i18n-doc");
      document.title = (lang === "en" && EN[key] != null) ? EN[key] : td.dataset.es;
    }

    document.documentElement.setAttribute("lang", lang);
    refreshYear();

    document.querySelectorAll(".lang-switch [data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
  }

  function current() {
    try {
      var q = new URLSearchParams(location.search).get("lang");
      if (q === "en" || q === "es") return q;
      return localStorage.getItem(STORE) === "en" ? "en" : "es";
    } catch (e) { return "es"; }
  }

  function set(lang) {
    try { localStorage.setItem(STORE, lang); } catch (e) {}
    apply(lang);
  }

  function init() {
    apply(current());
    document.querySelectorAll(".lang-switch [data-lang]").forEach(function (b) {
      b.addEventListener("click", function () { set(b.dataset.lang); });
    });
  }

  window.OAi18n = {
    lang: function () { return document.documentElement.getAttribute("lang") || "es"; },
    t: function (key) {
      return (this.lang() === "en" && EN[key] != null) ? EN[key] : null;
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
