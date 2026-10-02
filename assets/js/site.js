/* Renders the portfolio from data.js. You shouldn't need to edit this file. */
(function () {
  "use strict";
  const D = window.PORTFOLIO || PORTFOLIO;
  const $ = (s, el = document) => el.querySelector(s);

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const parseYM = (s) => {
    if (!s || s === "present") return new Date();
    const [y, m] = String(s).split("-").map(Number);
    return new Date(y, (m || 1) - 1, 1);
  };
  const fmtDate = (s) => {
    if (!s) return "";
    if (s === "present") return "Present";
    const m = /^(\d{4})-(\d{2})$/.exec(s);
    return m ? `${MONTHS[+m[2] - 1]} ${m[1]}` : s; // free text like "2021 – 2022" is shown as-is
  };
  const duration = (start, end) => {
    const a = parseYM(start), b = parseYM(end);
    let months = (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth()) + 1;
    const y = Math.floor(months / 12), m = months % 12;
    return [y && `${y} yr${y > 1 ? "s" : ""}`, m && `${m} mo${m > 1 ? "s" : ""}`].filter(Boolean).join(" ");
  };
  const sortKey = (p) => {
    const m = /(\d{4})(?:-(\d{2}))?/.exec(p.date || "");
    return m ? +m[1] * 100 + (+m[2] || 12) : 0;
  };
  const sortedProjects = () =>
    [...D.projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || sortKey(b) - sortKey(a));
  const chips = (arr) => `<div class="chips">${(arr || []).map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>`;
  const socialsHTML = () =>
    `<div class="socials">${D.profile.socials
      .map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.label)}" title="${esc(s.label)}"><i class="bi ${esc(s.icon)}"></i></a>`)
      .join("")}</div>`;

  /* ---------- shared: theme, menu, footer ---------- */
  function initChrome() {
    const btn = $("#themeBtn");
    const setIcon = () => {
      const light = document.documentElement.dataset.theme === "light";
      btn.innerHTML = `<i class="bi ${light ? "bi-moon-stars" : "bi-sun"}"></i>`;
      btn.setAttribute("aria-label", light ? "Switch to dark theme" : "Switch to light theme");
    };
    btn.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
      setIcon();
    });
    setIcon();

    const nav = $("#nav");
    $("#menuBtn").addEventListener("click", () => nav.classList.toggle("open"));
    nav.addEventListener("click", (e) => e.target.closest("a") && nav.classList.remove("open"));

    const first = D.profile.name.split(" ")[0], rest = D.profile.name.split(" ").slice(1).join(" ");
    $("#logo").innerHTML = `${esc(first)}<span>.</span>${esc(rest)}`;
    $("#footer").innerHTML = `<span>© ${new Date().getFullYear()} ${esc(D.profile.name)}</span><span>${esc(D.profile.title)} · ${esc(D.profile.location)}</span>`;
  }

  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) return els.forEach((e) => e.classList.add("in"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.08 });
    els.forEach((e) => io.observe(e));
  }

  /* ---------- home page ---------- */
  function renderHome() {
    const P = D.profile;
    document.title = `${P.name} | ${P.title}`;

    $("#hero").innerHTML = `
      <div class="container hero-grid">
        <div>
          ${P.openToWork ? `<span class="badge"><span class="dot"></span>Open to opportunities</span>` : ""}
          <h1>Hi, I'm <span class="gradient-text">${esc(P.name)}</span></h1>
          <div class="role"><span id="typed"></span><span class="cursor"></span></div>
          <p class="tagline">${esc(P.tagline)}</p>
          <div class="btn-row">
            <a class="btn btn-primary" href="#projects"><i class="bi bi-grid"></i>View my work</a>
            ${P.cv ? `<a class="btn btn-ghost" href="${esc(P.cv)}" target="_blank" rel="noopener"><i class="bi bi-file-earmark-arrow-down"></i>Download CV</a>` : ""}
            <a class="btn btn-ghost" href="#contact"><i class="bi bi-envelope"></i>Contact</a>
          </div>
          <div class="hero-meta">
            <span><i class="bi bi-geo-alt"></i>${esc(P.location)}</span>
            <span><i class="bi bi-envelope"></i>${esc(P.email)}</span>
          </div>
          ${socialsHTML()}
        </div>
        <div class="hero-photo"><img src="${esc(P.photo)}" alt="${esc(P.name)}"></div>
      </div>`;
    typeRoles(P.roles);

    // stats
    const earliest = D.experience.reduce((min, e) => (parseYM(e.start) < min ? parseYM(e.start) : min), new Date());
    const latestEnd = D.experience.reduce((max, e) => (parseYM(e.end) > max ? parseYM(e.end) : max), earliest);
    const years = Math.floor(((latestEnd - earliest) / (365.25 * 864e5)) + 0.1);
    const stats = [
      { value: `${years}+`, label: "Years of experience" },
      { value: `${D.projects.length}+`, label: "Projects shipped" },
      ...(D.extraStats || []),
    ].slice(0, 4);
    $("#stats").innerHTML = stats.map((s) => `<div class="stat"><b class="gradient-text">${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("");

    // about
    const edu = D.education[0];
    $("#aboutBody").innerHTML = `
      <div class="about-text">${D.about.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
      <div class="info-card">
        <dl>
          <dt>Name</dt><dd>${esc(P.name)}</dd>
          <dt>Role</dt><dd>${esc(P.title)}</dd>
          ${edu ? `<dt>Degree</dt><dd>${esc(edu.degree)}</dd>` : ""}
          <dt>Location</dt><dd>${esc(P.location)}</dd>
          <dt>Email</dt><dd><a href="mailto:${esc(P.email)}">${esc(P.email)}</a></dd>
          ${P.phone ? `<dt>Phone</dt><dd><a href="tel:${esc(P.phone.replace(/\s/g, ""))}">${esc(P.phone)}</a></dd>` : ""}
        </dl>
      </div>`;

    // skills
    $("#skillsGrid").innerHTML = D.skills
      .map((g) => `<div class="skill-card reveal"><h3><i class="bi ${esc(g.icon)}"></i>${esc(g.group)}</h3>${chips(g.items)}</div>`)
      .join("");

    // experience
    $("#timeline").innerHTML = D.experience
      .map((e) => `
        <div class="tl-item reveal"><div class="tl-card">
          <div class="tl-top"><h3>${esc(e.role)}${e.type ? `<span class="pill">${esc(e.type)}</span>` : ""}</h3>
            <span class="tl-date">${fmtDate(e.start)} – ${fmtDate(e.end)}</span></div>
          <div class="tl-company"><b>${esc(e.company)}</b> · ${esc(e.location)} · ${duration(e.start, e.end)}</div>
          <ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
          ${chips(e.tags)}
        </div></div>`)
      .join("");

    renderProjects();

    // lab
    $("#labGrid").innerHTML = D.lab
      .map((l) => `<div class="lab-card reveal"><i class="bi ${esc(l.icon)} ico"></i><span class="status ${esc(l.status)}">${esc(l.status)}</span><h3>${esc(l.title)}</h3><p>${esc(l.text)}</p></div>`)
      .join("");

    // education + certs
    $("#eduList").innerHTML = D.education
      .map((e) => `<li><i class="bi bi-mortarboard"></i><div><b>${esc(e.degree)}</b><small>${esc(e.school)}, ${esc(e.location)}</small><small>${fmtDate(e.start)} – ${fmtDate(e.end)}</small></div></li>`)
      .join("");
    $("#certList").innerHTML = D.certifications
      .map((c) => {
        const name = c.url ? `<a href="${esc(c.url)}" target="_blank" rel="noopener">${esc(c.name)}</a>` : esc(c.name);
        return `<li><i class="bi bi-patch-check"></i><div>${name}${c.issuer ? `<small>${esc(c.issuer)}</small>` : ""}</div></li>`;
      })
      .join("");

    // contact
    $("#contactBox").innerHTML = `
      <h2>Let's build something <span class="gradient-text">great</span></h2>
      <p>I'm open to game development, XR, multiplayer and AI-in-games roles and collaborations. The fastest way to reach me is email.</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="mailto:${esc(P.email)}"><i class="bi bi-envelope"></i>${esc(P.email)}</a>
        ${P.phone ? `<a class="btn btn-ghost" href="https://wa.me/${esc(P.phone.replace(/\D/g, ""))}" target="_blank" rel="noopener"><i class="bi bi-whatsapp"></i>WhatsApp</a>` : ""}
        ${P.cv ? `<a class="btn btn-ghost" href="${esc(P.cv)}" target="_blank" rel="noopener"><i class="bi bi-file-earmark-arrow-down"></i>CV</a>` : ""}
      </div>
      ${socialsHTML()}`;

    initScrollSpy();
  }

  function renderProjects() {
    const cats = D.projectCategories;
    const all = sortedProjects();
    const used = Object.keys(cats).filter((k) => all.some((p) => p.category === k));
    const filters = $("#filters");
    filters.innerHTML =
      `<button class="filter active" data-cat="all">All<span class="count">${all.length}</span></button>` +
      used.map((k) => `<button class="filter" data-cat="${esc(k)}">${esc(cats[k])}<span class="count">${all.filter((p) => p.category === k).length}</span></button>`).join("");

    const grid = $("#projectsGrid");
    const draw = (cat) => {
      const list = cat === "all" ? all : all.filter((p) => p.category === cat);
      grid.innerHTML = list.length
        ? list.map((p) => `
          <a class="project-card" href="project.html?id=${encodeURIComponent(p.id)}">
            <div class="thumb"><img src="${esc(p.cover)}" alt="${esc(p.title)}" loading="lazy"><span class="cat">${esc(cats[p.category] || p.category)}</span></div>
            <div class="body"><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p>
              <div class="meta"><span>${esc(p.client)} · ${esc(fmtDate(p.date))}</span><span class="go">View →</span></div></div>
          </a>`).join("")
        : `<div class="empty">No projects here yet.</div>`;
    };
    filters.addEventListener("click", (e) => {
      const b = e.target.closest(".filter");
      if (!b) return;
      filters.querySelectorAll(".filter").forEach((x) => x.classList.toggle("active", x === b));
      draw(b.dataset.cat);
    });
    draw("all");
  }

  function typeRoles(roles) {
    const el = $("#typed");
    if (!roles || !roles.length) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = roles[0]; return; }
    let r = 0, i = 0, del = false;
    (function tick() {
      const word = roles[r];
      i += del ? -1 : 1;
      el.textContent = word.slice(0, i);
      let wait = del ? 35 : 70;
      if (!del && i === word.length) { del = true; wait = 1600; }
      else if (del && i === 0) { del = false; r = (r + 1) % roles.length; wait = 300; }
      setTimeout(tick, wait);
    })();
  }

  function initScrollSpy() {
    const links = [...document.querySelectorAll("#nav a[href^='#']")];
    const sections = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
    const onScroll = () => {
      const y = window.scrollY + 120;
      let cur = null;
      sections.forEach((s) => { if (s.offsetTop <= y) cur = s; });
      links.forEach((a) => a.classList.toggle("active", !!cur && a.getAttribute("href") === "#" + cur.id));
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- project page ---------- */
  function renderProject() {
    const id = new URLSearchParams(location.search).get("id");
    const list = sortedProjects();
    const idx = list.findIndex((p) => p.id === id);
    const p = list[idx];
    const root = $("#project");
    if (!p) {
      root.innerHTML = `<div class="container" style="padding:80px 20px"><h1>Project not found</h1><p><a href="index.html#projects">← Back to all projects</a></p></div>`;
      return;
    }
    document.title = `${p.title} | ${D.profile.name}`;
    const images = p.images && p.images.length ? p.images : [p.cover];
    const yt = p.video && /(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/.exec(p.video);
    const prev = list[(idx - 1 + list.length) % list.length], next = list[(idx + 1) % list.length];

    root.innerHTML = `
      <div class="container">
        <div class="crumbs"><a href="index.html#projects">← All projects</a></div>
        <div class="project-head">
          <span class="status Building">${esc(D.projectCategories[p.category] || p.category)}</span>
          <h1>${esc(p.title)}</h1>
          <p class="muted" style="font-size:1.1rem;max-width:720px">${esc(p.summary)}</p>
        </div>
        <div class="project-layout">
          <div>
            <div class="gallery-main"><img id="mainImg" src="${esc(images[0])}" alt="${esc(p.title)} screenshot"></div>
            ${images.length > 1 ? `<div class="gallery-thumbs">${images.map((src, i) => `<button class="${i ? "" : "active"}" data-src="${esc(src)}" aria-label="Screenshot ${i + 1}"><img src="${esc(src)}" alt="" loading="lazy"></button>`).join("")}</div>` : ""}
            ${yt ? `<div class="video-wrap"><iframe src="https://www.youtube-nocookie.com/embed/${yt[1]}" title="${esc(p.title)} video" allowfullscreen loading="lazy"></iframe></div>` : ""}
            <div class="project-desc">
              <h2>About the project</h2>
              ${String(p.description).split(/\n\n+/).map((t) => `<p>${esc(t)}</p>`).join("")}
              ${p.highlights && p.highlights.length ? `<h2>Highlights</h2><ul>${p.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>` : ""}
            </div>
          </div>
          <aside class="side-card">
            <dl>
              <dt>Client</dt><dd>${esc(p.client)}</dd>
              <dt>Date</dt><dd>${esc(fmtDate(p.date))}</dd>
              <dt>Category</dt><dd>${esc(D.projectCategories[p.category] || p.category)}</dd>
            </dl>
            <div class="muted" style="font-size:.9rem;margin-bottom:8px">Tech</div>
            ${chips(p.tech)}
            ${(p.links || []).map((l, i) => `<a class="btn ${i ? "btn-ghost" : "btn-primary"}" href="${esc(l.url)}" target="_blank" rel="noopener"><i class="bi ${esc(l.icon || "bi-box-arrow-up-right")}"></i>${esc(l.label)}</a>`).join("")}
          </aside>
        </div>
        ${list.length > 1 ? `<div class="pager">
          <a href="project.html?id=${encodeURIComponent(prev.id)}">← ${esc(prev.title)}</a>
          <a href="project.html?id=${encodeURIComponent(next.id)}" style="text-align:right">${esc(next.title)} →</a>
        </div>` : ""}
      </div>`;

    const thumbs = root.querySelector(".gallery-thumbs");
    if (thumbs) thumbs.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      $("#mainImg").src = b.dataset.src;
      thumbs.querySelectorAll("button").forEach((x) => x.classList.toggle("active", x === b));
    });
  }

  /* ---------- boot ---------- */
  initChrome();
  if (document.body.dataset.page === "project") renderProject();
  else renderHome();
  initReveal();
})();
