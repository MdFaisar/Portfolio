/* ============================================================
   PORTFOLIO — main.js
   Reads CONFIG object from config.js and populates the DOM
   ============================================================ */

(function () {
  "use strict";

  // ── HELPERS ───────────────────────────────────────────────
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  };

  // Social icon SVGs (inline, no CDN dependency)
  const ICONS = {
    github: `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.42 7.88 10.95.58.1.79-.25.79-.56v-2.15c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.18-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.07.78 2.15v3.19c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>`,
    twitter: `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18.9 1.15h3.6l-7.87 9 9.27 12.25h-7.25l-5.68-7.43-6.5 7.43H.87l8.42-9.63L.3 1.15h7.43l5.13 6.79 5.94-6.79h1.2zm-1.26 19.1h2l-12.9-17.1H4.57l13.07 17.1z"/></svg>`,
    code: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    default: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  };

  function icon(name) {
    return ICONS[name] || ICONS.default;
  }

  // ── PAGE TITLE & NAV LOGO ─────────────────────────────────
  document.title = `${CONFIG.name} · Portfolio`;
  $("#page-title") && (document.title = `${CONFIG.name} · Portfolio`);
  const initials = CONFIG.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  $("#nav-logo").textContent = initials;

  // ── HERO ──────────────────────────────────────────────────
  $("#hero-name").textContent = CONFIG.name;
  $("#hero-tagline").textContent = CONFIG.tagline;
  $("#hero-bio").textContent = CONFIG.shortBio;
  $("#hero-resume").href = CONFIG.resumeLink;

  // Photo
  const heroImg = $("#hero-img");
  heroImg.src = CONFIG.photo;
  heroImg.alt = CONFIG.name;
  $("#photo-fallback").textContent = initials;

  // Socials
  const heroSocials = $("#hero-socials");
  CONFIG.socials.forEach((s) => {
    const a = el("a", "social-btn");
    a.href = s.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = `${icon(s.icon)} ${s.label}`;
    heroSocials.appendChild(a);
  });

  // ── ABOUT ──────────────────────────────────────────────────
  $("#about-description").textContent = CONFIG.about.description;

  // Photo in About section
  const aboutImg = $("#about-photo-img");
  if (aboutImg) {
    aboutImg.src = CONFIG.photo;
    aboutImg.alt = CONFIG.name;
  }
  const aboutFallback = $("#about-photo-fallback");
  if (aboutFallback) aboutFallback.textContent = initials;

  // Education
  const eduList = $("#education-list");
  CONFIG.about.education.forEach((e) => {
    const item = el("div", "edu-item");
    item.innerHTML = `
      <div class="edu-degree">${e.degree}</div>
      <div class="edu-institution">${e.institution}</div>
      <div class="edu-meta">
        <span>${e.field || ""}</span>
        <span>${e.year}</span>
        <span class="edu-score">${e.gpa}</span>
      </div>`;
    eduList.appendChild(item);
  });

  // Languages (plain pill tags, no level text)
  const langList = $("#lang-list");
  CONFIG.about.languages.forEach((l) => {
    const tag = el("div", "lang-tag", l.name);
    langList.appendChild(tag);
  });

  // Projects count card — use first stat that contains "Project"
  const projStat = CONFIG.about.stats.find((s) => s.label.toLowerCase().includes("project"));
  if (projStat) {
    const countVal = $("#projects-count-value");
    if (countVal) countVal.textContent = projStat.value;
  }

  // ── SKILLS ─────────────────────────────────────────────────
  // Build skill category cards from CONFIG.skills
  const skillsGrid = $("#skills-cards-grid");

  // Define categories from config
  const skillCategories = [
    {
      title: "Programming Languages",
      items: CONFIG.skills.programmingLanguages.map((s) => ({ name: s.name, icon: "❖" })),
    },
    {
      title: "Web Development",
      items: CONFIG.skills.frontend.concat(CONFIG.skills.backend).map((s) => ({ name: s.name, icon: "◈" })),
    },
    {
      title: "Databases",
      items: (CONFIG.skills.databases || []).map((s) => ({ name: typeof s === "string" ? s : s.name, icon: "◉" })),
    },
    {
      title: "Other Skills",
      items: (CONFIG.skills.other || []).map((s) => ({ name: typeof s === "string" ? s : s.name, icon: "✦" })),
    },
    {
      title: "Tools & Technologies",
      items: CONFIG.skills.tools.map((t) => ({ name: typeof t === "string" ? t : t.name, icon: "⬡" })),
    },
  ].filter((cat) => cat.items.length > 0);

  // Apply centered-bottom layout class when there are 5 categories
  if (skillCategories.length === 5) skillsGrid.classList.add("cols-5-bottom-2");

  skillCategories.forEach((cat) => {
    const card = el("div", "skill-category-card");
    const pillsHTML = cat.items.map((item) =>
      `<span class="skill-pill"><span class="skill-pill-icon">${item.icon}</span>${item.name}</span>`
    ).join("");
    card.innerHTML = `
      <div class="skill-category-title">${cat.title}</div>
      <div class="skill-pills">${pillsHTML}</div>`;
    skillsGrid.appendChild(card);
  });

  // ── PROJECTS ───────────────────────────────────────────────
  const featured = CONFIG.projects.filter((p) => p.featured);
  const others = CONFIG.projects.filter((p) => !p.featured);

  const projectEmojis = ["🚀", "💡", "⚡", "🛠", "🎯", "🔮"];

  function tagsHTML(tags) {
    return tags.map((t) => `<span class="project-tag">${t}</span>`).join("");
  }
  function linksHTML(p) {
    return `
      <a href="${p.liveUrl}" target="_blank" rel="noopener" class="project-link">Live ↗</a>
      <a href="${p.githubUrl}" target="_blank" rel="noopener" class="project-link">GitHub ↗</a>`;
  }

  const projFeatured = $("#projects-featured");
  featured.forEach((p, i) => {
    const card = el("div", "project-card");
    const imgContent = p.image
      ? `<img src="${p.image}" alt="${p.title}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" /><div class="project-img-placeholder" style="display:none">${projectEmojis[i % projectEmojis.length]}</div>`
      : `<div class="project-img-placeholder">${projectEmojis[i % projectEmojis.length]}</div>`;
    card.innerHTML = `
      <div class="project-img">${imgContent}</div>
      <div class="project-body">
        <div class="project-title">${p.title}</div>
        <p class="project-desc">${p.description}</p>
        <div class="project-tags">${tagsHTML(p.tags)}</div>
        <div class="project-links">${linksHTML(p)}</div>
      </div>`;
    projFeatured.appendChild(card);
  });

  const projOther = $("#projects-other");
  others.forEach((p, i) => {
    const card = el("div", "project-card-small");
    card.innerHTML = `
      <div class="project-title">${p.title}</div>
      <p class="project-desc">${p.description}</p>
      <div class="project-tags">${tagsHTML(p.tags)}</div>
      <div class="project-links">${linksHTML(p)}</div>`;
    projOther.appendChild(card);
  });

  // ── CERTIFICATIONS ─────────────────────────────────────────
  const certIconMap = {
    aws: "AWS", meta: "META", google: "GOO", fcc: "FCC", python: "PY", docker: "DOC",
  };
  const certsGrid = $("#certs-grid");
  CONFIG.certifications.forEach((c) => {
    const card = el("div", "cert-card");
    card.innerHTML = `
      <div class="cert-icon">${certIconMap[c.logo] || c.logo.slice(0, 3).toUpperCase()}</div>
      <div>
        <div class="cert-title">${c.title}</div>
        <div class="cert-issuer">${c.issuer}</div>
        <div class="cert-date">${c.date}</div>
        <a href="${c.credentialUrl}" target="_blank" rel="noopener" class="cert-link">View Credential ↗</a>
      </div>`;
    certsGrid.appendChild(card);
  });

  // ── CONTACT ────────────────────────────────────────────────
  const emailLink = $("#contact-email-link");
  emailLink.href = `mailto:${CONFIG.contact.email}`;
  emailLink.textContent = CONFIG.contact.email;

  const phoneLink = $("#contact-phone-link");
  phoneLink.href = `tel:${CONFIG.contact.phone.replace(/\s/g, "")}`;
  phoneLink.textContent = CONFIG.contact.phone;

  const contactSocials = $("#contact-socials");
  CONFIG.socials.forEach((s) => {
    const a = el("a", "social-btn");
    a.href = s.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = `${icon(s.icon)} ${s.label}`;
    contactSocials.appendChild(a);
  });

  // ── CONTACT FORM (live mailto sender) ─────────────────────
  const form = $("#contact-form");
  const sendBtn = $("#send-btn");
  const formStatus = $("#form-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name    = $("#f-name").value.trim();
    const email   = $("#f-email").value.trim();
    const subject = $("#f-subject").value.trim();
    const message = $("#f-message").value.trim();

    if (!name || !email || !subject || !message) {
      formStatus.textContent = "Please fill in all fields.";
      formStatus.className = "form-status error";
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formStatus.textContent = "Please enter a valid email address.";
      formStatus.className = "form-status error";
      return;
    }

    // Compose mailto link (live mail sender without backend)
    const body = encodeURIComponent(
      `Hi ${CONFIG.name.split(" ")[0]},\n\n${message}\n\n— ${name} (${email})`
    );
    const mailtoURL = `mailto:${CONFIG.contact.email}?subject=${encodeURIComponent(subject)}&body=${body}`;

    sendBtn.querySelector(".btn-text").hidden = true;
    sendBtn.querySelector(".btn-loader").hidden = false;
    sendBtn.disabled = true;

    setTimeout(() => {
      window.location.href = mailtoURL;
      formStatus.textContent = "✓ Your email client is opening. Thank you for reaching out!";
      formStatus.className = "form-status success";
      sendBtn.querySelector(".btn-text").hidden = false;
      sendBtn.querySelector(".btn-loader").hidden = true;
      sendBtn.disabled = false;
      form.reset();
    }, 700);
  });

  // ── FOOTER ─────────────────────────────────────────────────
  $("#footer-note").innerHTML =
    `© ${CONFIG.footer.year} · ${CONFIG.footer.note} · Built with ♥`;

  // ── NAVBAR SCROLL ─────────────────────────────────────────
  window.addEventListener("scroll", () => {
    const nav = $("#navbar");
    if (window.scrollY > 60) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  });

  // ── MOBILE DRAWER ─────────────────────────────────────────
  const hamburger    = $("#hamburger");
  const navDrawer    = $("#nav-drawer");
  const drawerOverlay = $("#drawer-overlay");

  // Populate drawer socials from CONFIG
  const drawerSocials = $("#drawer-socials");
  if (drawerSocials) {
    CONFIG.socials.forEach((s) => {
      const a = el("a", "social-btn");
      a.href = s.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.innerHTML = icon(s.icon) + " " + s.label;
      drawerSocials.appendChild(a);
    });
  }

  function openDrawer() {
    hamburger.classList.add("open");
    hamburger.setAttribute("aria-expanded", "true");
    navDrawer.classList.add("open");
    drawerOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeDrawer() {
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    navDrawer.classList.remove("open");
    drawerOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", () => {
    hamburger.classList.contains("open") ? closeDrawer() : openDrawer();
  });
  drawerOverlay.addEventListener("click", closeDrawer);

  // Close on any drawer link click
  navDrawer.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", closeDrawer)
  );

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
  });

  // ── SMOOTH SCROLL OFFSET ──────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      window.scrollTo({ top: target.offsetTop - offset, behavior: "smooth" });
    });
  });

  // ── CUSTOM CURSOR (desktop only) ─────────────────────────
  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
  if (isTouchDevice) {
    document.body.style.cursor = "auto";
  }
  const cursor = $("#cursor");
  const ring   = $("#cursor-ring");
  let mx = 0, my = 0, rx = 0, ry = 0;

  window.addEventListener("mousemove", (e) => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + "px";
    cursor.style.top  = my + "px";
  });

  function animateCursor() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + "px";
    ring.style.top  = ry + "px";
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.querySelectorAll("a, button, input, textarea").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform = "translate(-50%,-50%) scale(2)";
      ring.style.width = "56px";
      ring.style.height = "56px";
      ring.style.opacity = "0.3";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.transform = "translate(-50%,-50%) scale(1)";
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.opacity = "0.5";
    });
  });

  // ── INTERSECTION OBSERVER — REVEAL ────────────────────────
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  // Observe hero children immediately
  $$(".reveal").forEach((el) => io.observe(el));

  // Observe section children with stagger
  const sectionChildren = $$(
    "#about .about-grid > *, #skills .skills-layout > *, " +
    "#projects .project-card, #projects .project-card-small, " +
    "#certifications .cert-card, #contact .contact-layout > *"
  );
  const io2 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), i * 60);
          io2.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  sectionChildren.forEach((el) => {
    el.classList.add("reveal");
    io2.observe(el);
  });

  // ── ACTIVE NAV LINK ON SCROLL ─────────────────────────────
  const sections = $$("section[id]");
  const navAnchs = $$("#navbar a");
  const scrollSpy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navAnchs.forEach((a) => {
            a.style.color = a.getAttribute("href") === `#${entry.target.id}` ? "var(--accent)" : "";
          });
        }
      });
    },
    { threshold: 0.4 }
  );
  sections.forEach((s) => scrollSpy.observe(s));

})();