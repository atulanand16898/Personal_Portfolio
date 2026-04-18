/* ============================================================
   ATUL ANAND — PORTFOLIO  |  script.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initMobileMenu();
  initReveal();
  initProjectCards();
  initSiteTabs();
  initVideoExclusivity();
  initLightbox();
  document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
});

/* ── NAV ─────────────────────────────────────────────── */
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  const page = window.location.pathname.split('/').pop() || 'index.html';
  nav.querySelectorAll('.nav__link').forEach(l => {
    if (l.getAttribute('href') === page) l.classList.add('active');
  });
}

/* ── MOBILE MENU ─────────────────────────────────────── */
function initMobileMenu() {
  const btn = document.querySelector('.nav__burger');
  const mob = document.querySelector('.nav__mob');
  if (!btn || !mob) return;
  const close = () => { mob.classList.remove('open'); btn.setAttribute('aria-expanded','false'); document.body.style.overflow = ''; };
  btn.addEventListener('click', () => {
    const open = mob.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mob.querySelectorAll('.nav__link').forEach(l => l.addEventListener('click', close));
  document.addEventListener('click', e => { if (!btn.contains(e.target) && !mob.contains(e.target)) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ── SCROLL REVEAL ───────────────────────────────────── */
function initReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.rv').forEach(el => el.classList.add('on'));
    return;
  }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.rv').forEach(el => obs.observe(el));
}

/* ── PROJECT DATA ────────────────────────────────────── */
const PROJECTS = {

  xer: {
    title: 'XER Automation & Fabric Pipeline',
    subtitle: 'Zero-touch Primavera P6 analytics — from file upload to live dashboard',
    tags: ['Microsoft Fabric', 'Power Automate', 'Lakehouse', 'Python', 'Primavera XER', 'SharePoint', 'Delta Tables', 'Spark'],
    desc: `Fully automated end-to-end data pipeline for Primavera P6 schedule analytics. Power Automate triggers a Microsoft Fabric pipeline on SharePoint file upload — running Spark notebooks that ingest, validate and transform XER/XML/SQL schedule data into Delta tables in the Lakehouse. Automated DCMA-style schedule checks, reconciliation, and validation run in Python and Spark. Once the semantic model refreshes, live Power BI reports surface schedule health, resource loading, cost S-curves and earned value — zero manual steps from source to dashboard.`,
    stats: [
      { num: '1000+', label: 'XER Files Processed' },
      { num: '0', label: 'Manual Steps' },
      { num: '5', label: 'Workflow Stages' },
      { num: 'Real-time', label: 'Dashboard Updates' },
    ],
    workflow: [
      { step: '01', title: 'SharePoint File Upload', desc: 'Planner / Engineer drops an XER or XML file into a monitored SharePoint library. This is the only manual step — everything else is fully automated from this point.', img: 'XER_Automation%20Solution/Sharepoint%20File%20to%20Trigeer%20the%20Automation%20.png' },
      { step: '02', title: 'Power Automate Trigger', desc: 'A Power Automate flow listens for new file events on the SharePoint library. On upload, it fires instantly — passing the file metadata to kick off the Fabric orchestration pipeline.', img: 'XER_Automation%20Solution/Sharepont%20Triggers%20runs%20the%20PA%20flow%20to%20trigger%20the%20Orcestration%20in%20Fabric%20.png' },
      { step: '03', title: 'Fabric Pipeline & Spark Notebooks', desc: 'Microsoft Fabric pipeline runs Spark notebooks that ingest, parse and validate the XER/XML/SQL data. Activities, relationships, resources, costs, and baseline data are extracted and transformed into structured Delta tables in the Lakehouse. DCMA-style schedule health checks (logic, lags, TF, BEI) run automatically.', img: 'XER_Automation%20Solution/PA%20triggers%20Pipeline%20to%20run%20Notebook%20and%20Orcestrate%20data%20in%20the%20Lakehouse.png' },
      { step: '04', title: 'Live Power BI Refresh', desc: 'Once the Lakehouse is updated, the semantic model refreshes automatically. Power BI reports immediately reflect the latest schedule data — S-curves, EVM metrics, resource histograms, critical path, and variance analysis.', img: 'XER_Automation%20Solution/Once%20the%20model%20is%20refreshed%20from%20the%20Pipeline%20new%20data%20reflects%20the%20Power%20Bi%20report.png' },
      { step: '05', title: 'Email Notification', desc: 'End users receive an automated email on pipeline success or failure — with a summary of records processed, validation checks passed, and any exceptions flagged. No manual monitoring required.', img: 'XER_Automation%20Solution/End%20User%20recive%20a%20email%20notification%20on%20Sucess%20and%20failure%20.png' },
    ],
    images: [],
    videos: []
  },

  datacenter: {
    title: 'Data Center Infrastructure — Project Controls & Commissioning Web App',
    subtitle: 'Custom web app integrating CXalloy & FacilityGrid APIs for live commissioning tracking',
    tags: ['Project Controls', 'Power BI', 'Primavera P6', 'T&C Sheets', 'BIM', 'VCAD', 'CXalloy', 'FacilityGrid', 'Web App', 'Aconex'],
    desc: `Project Control Specialist on a 1 Billion AED data center mega-project (30MW / 6 Pods). Delivered a custom web application that integrates directly with CXalloy and FacilityGrid APIs to track commissioning activities, T&C sheet status, and punch-list items in real time — replacing manual spreadsheet-based commissioning registers. Built live Power BI KPI dashboards for weekly client reporting, developed Level 01–05 Testing & Commissioning sheets through to Uptime Completion, automated progress tracking from Aconex and Wrench, integrated BIM models with Primavera P6 using VCAD, and implemented a Power Query-based Program Change Log for single-click schedule modifications.`,
    stats: [
      { num: '1B AED', label: 'Project Value' },
      { num: '30MW', label: 'Data Center Capacity' },
      { num: '6', label: 'Pods Delivered' },
      { num: 'L01–L05', label: 'T&C Sheet Coverage' },
    ],
    features: [
      { icon: '🌐', title: 'CXalloy API Integration', desc: 'Real-time pull of commissioning records, inspection status, and punch-list items directly from CXalloy into the web app — eliminating manual data entry.' },
      { icon: '🏗️', title: 'FacilityGrid API Integration', desc: 'Asset hierarchy, equipment tagging, and spatial commissioning data synced from FacilityGrid for live T&C tracking against the BIM model.' },
      { icon: '📋', title: 'L01–L05 T&C Sheets', desc: 'Full Testing & Commissioning sheet suite from pre-commissioning checks (L01) through to Uptime Completion (L05) — digitised and automated.' },
      { icon: '📊', title: 'Live Power BI KPI Dashboards', desc: 'Weekly client reporting dashboards covering schedule performance, commissioning progress, punch-list status, and risk flags.' },
      { icon: '🔗', title: 'BIM + P6 Integration via VCAD', desc: 'Primavera P6 schedule linked to BIM model via VCAD — BOQ, LPOs and schedule activities tied to 3D asset data for cost-to-complete alignment.' },
      { icon: '🔄', title: 'Program Change Log', desc: 'Power Query-based PCL enabling single-click schedule modifications across the programme baseline — full audit trail maintained.' },
    ],
    images: [],
    videos: [
      { src: 'Data%20Center%20Management%20Reports/Data%20Centre%20Commissioning%20Report%20.mp4', title: 'Commissioning Report Walkthrough' }
    ]
  },

  cmt: {
    title: 'PMIS Contract Management Tool',
    subtitle: 'End-to-end digital contract lifecycle on Power Apps Model-Driven',
    tags: ['Power Apps', 'Dataverse', 'Power Automate', 'SharePoint', 'Model-Driven', 'PMIS'],
    desc: `A full-featured PMIS Contract Management Tool built on Power Apps Model-Driven architecture with hundreds of Dataverse tables and over 100 automated Power Automate flows. The system manages the full contract lifecycle — from contract creation and approval routing through to payment certification, change order processing, and final closeout — replacing entirely manual, spreadsheet-based processes across the programme.`,
    stats: [
      { num: '100+', label: 'Automated Flows' },
      { num: '100s', label: 'Dataverse Tables' },
      { num: '0', label: 'Manual Registers' },
      { num: 'Full', label: 'Audit Trail' },
    ],
    features: [
      { icon: '📝', title: 'Contract Creation & Register', desc: 'Structured contract records with full metadata — contractor details, scope, values, milestones, retention, and document attachments — stored in Dataverse.' },
      { icon: '✅', title: 'Multi-Stage Approval Workflows', desc: 'Automated approval chains routing contracts through project manager, commercial manager, and finance approvals — with parallel and sequential logic, delegation, and escalation rules.' },
      { icon: '💰', title: 'Payment Certification Tool', desc: 'Digitised payment application and certification process — contractors submit applications, which route through verification and approval before generating payment certificates. Full payment log maintained per contract.' },
      { icon: '🔄', title: 'Change Order & Variation Process', desc: 'Structured change order workflow from initiation through assessment, approval, and contract amendment — with impact tracking on contract value, programme, and scope.' },
      { icon: '📧', title: 'Automated Notifications', desc: 'Real-time email notifications at every workflow stage — submission confirmations, approval requests, rejection reasons, and certificate issuance — sent to all relevant stakeholders automatically.' },
      { icon: '📊', title: 'Audit Trail & Reporting', desc: 'Complete audit trail of all contract actions, approvals, and amendments. Integrated Power BI reporting on contract status, payment positions, variation exposure, and programme financial health.' },
    ],
    images: [
      { src: 'PMIS%20CMT%20Tool/PMIS%20CMT%20Tool.png', cap: 'PMIS CMT — Main Interface' },
      { src: 'PMIS%20CMT%20Tool/Complete%20Model%20Driven%20apps%20with%20100s%20of%20Automated%20flow%20and%20tables%20to%20develop%20a%20Contract%20Management%20tool.png', cap: '100+ Automated Flows & Tables' },
      { src: 'XER_Automation%20Solution/End%20User%20recive%20a%20email%20notification%20on%20Sucess%20and%20failure%20.png', cap: 'Automated Email Notifications' },
    ],
    videos: []
  },

  portfolio: {
    title: 'Portfolio & Project Management Dashboard Suite',
    subtitle: 'Executive BI reporting across infrastructure programmes — EVM, spatial tracking, and live pipelines',
    tags: ['Power BI', 'ArcGIS', 'EVM', 'KPI Reporting', 'Microsoft Fabric', 'Lakehouse', 'DAX', 'Spark'],
    desc: `End-to-end Power BI reporting suite developed across KBR and infrastructure programmes — covering earned value management, value of work done, payment logs, progress dashboards, and ArcGIS-based spatial project tracking. Dashboards are driven by Microsoft Fabric Lakehouse pipelines and Spark notebooks, with automated semantic model refresh via Power Automate. Designed for real-time executive decision-making across complex, multi-project programmes.`,
    stats: [
      { num: 'Multi', label: 'Programme Coverage' },
      { num: 'Live', label: 'Data Refresh' },
      { num: 'EVM', label: 'Earned Value Engine' },
      { num: 'GIS', label: 'Spatial Tracking' },
    ],
    features: [
      { icon: '📈', title: 'Earned Value Management', desc: 'Full EVM suite — BCWS, BCWP, ACWP, SPI, CPI, EAC, VAC — computed from Fabric Lakehouse data and visualised in interactive Power BI dashboards with drill-through by project, WBS, and period.' },
      { icon: '💵', title: 'Value of Work Done & Payment Log', desc: 'VOWD tracking per period and cumulative, aligned with payment certifications and contractor applications. Full payment log with ageing, retention, and cash flow visualisation.' },
      { icon: '📍', title: 'ArcGIS Spatial Integration', desc: 'Site-level project tracking using ArcGIS maps embedded in Power BI — visualising progress, resource deployment, and risk areas geospatially across the programme portfolio.' },
      { icon: '⚙️', title: 'Fabric Lakehouse Pipeline', desc: 'Microsoft Fabric Lakehouse ingests data from multiple sources — Primavera P6, SharePoint, Excel trackers — via Spark notebooks and Delta tables, enabling a single source of truth.' },
      { icon: '🔄', title: 'Automated Semantic Model Refresh', desc: 'Power Automate triggers semantic model refresh on Fabric pipeline completion — ensuring Power BI reports are always current without any manual intervention.' },
      { icon: '📊', title: 'Progress & Resource Dashboards', desc: 'Programme-level and project-level progress dashboards tracking physical completion, planned vs actual, manpower histograms, and milestone burn-down.' },
    ],
    images: [
      { src: 'Portfolio%20and%20Project%20Management%20solutions/Value%20of%20Work%20Done.png', cap: 'Value of Work Done — EVM Dashboard' },
      { src: 'Portfolio%20and%20Project%20Management%20solutions/Payment%20log.png', cap: 'Payment Log Tracking' },
      { src: 'XER_Automation%20Solution/Once%20the%20model%20is%20refreshed%20from%20the%20Pipeline%20new%20data%20reflects%20the%20Power%20Bi%20report.png', cap: 'Live Power BI Post-Refresh' },
    ],
    videos: [
      { src: 'Portfolio%20and%20Project%20Management%20solutions/Project%20Dasboard%20-%202x.mp4', title: 'Project Dashboard' },
      { src: 'Portfolio%20and%20Project%20Management%20solutions/Progress%20Dashboard.mp4', title: 'Progress Dashboard' },
      { src: 'Portfolio%20and%20Project%20Management%20solutions/ARCGIS.mp4', title: 'ArcGIS Spatial Integration' },
    ]
  }
};

/* ── MODAL OPEN/CLOSE ─────────────────────────────────── */
const overlay = document.getElementById('modal');
const lbOverlay = document.getElementById('lightbox');

function openModal(html) {
  document.getElementById('modal-body').innerHTML = html;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  overlay.scrollTop = 0;
  // bind lightbox on gallery images
  overlay.querySelectorAll('[data-lb]').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation();
      openLightbox(el.dataset.lb, el.dataset.cap || '');
    });
  });
}

function closeModal() {
  overlay.querySelectorAll('video').forEach(v => v.pause());
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function openLightbox(src, cap) {
  document.getElementById('lb-img').src = src;
  document.getElementById('lb-cap').textContent = cap;
  lbOverlay.classList.add('open');
}

function closeLightbox() {
  lbOverlay.classList.remove('open');
  document.getElementById('lb-img').src = '';
}

document.getElementById('modal-close')?.addEventListener('click', closeModal);
document.getElementById('lb-close')?.addEventListener('click', closeLightbox);
lbOverlay?.addEventListener('click', e => { if (e.target === lbOverlay || e.target.tagName === 'IMG') closeLightbox(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { if (lbOverlay?.classList.contains('open')) closeLightbox(); else closeModal(); }
});

/* ── BUILD MODAL HTML ────────────────────────────────── */
function buildModalHTML(p) {
  const tagsHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join('');

  const statsHTML = p.stats ? `
    <div class="mp-stats">
      ${p.stats.map(s => `
        <div class="mp-stat">
          <span class="mp-stat__num">${s.num}</span>
          <span class="mp-stat__lbl">${s.label}</span>
        </div>
      `).join('')}
    </div>
  ` : '';

  const workflowHTML = p.workflow ? `
    <div class="mp-section-header"><span class="mp-section-label">Automation Workflow</span><h3>How It Works — Step by Step</h3></div>
    <div class="mp-workflow">
      ${p.workflow.map(w => `
        <div class="mp-wf-step">
          <div class="mp-wf-step__head">
            <span class="mp-wf-step__num">${w.step}</span>
            <h4>${w.title}</h4>
          </div>
          <div class="mp-wf-step__body">
            <p class="mp-wf-step__desc">${w.desc}</p>
            ${w.img ? `
              <div class="mp-wf-step__img" data-lb="${w.img}" data-cap="${w.title}">
                <img src="${w.img}" alt="${w.title}" loading="lazy"/>
                <div class="mp-wf-step__zoom">🔍 Click to enlarge</div>
              </div>
            ` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  ` : '';

  const featuresHTML = p.features ? `
    <div class="mp-section-header"><span class="mp-section-label">Key Capabilities</span><h3>System Features</h3></div>
    <div class="mp-features">
      ${p.features.map(f => `
        <div class="mp-feature">
          <div class="mp-feature__icon">${f.icon}</div>
          <div>
            <h4>${f.title}</h4>
            <p>${f.desc}</p>
          </div>
        </div>
      `).join('')}
    </div>
  ` : '';

  const galleryHTML = p.images.length ? `
    <div class="mp-section-header"><span class="mp-section-label">Screenshots</span><h3>Visual Walkthrough</h3></div>
    <div class="modal-gallery">
      ${p.images.map(img => `
        <div class="mg-item" data-lb="${img.src}" data-cap="${img.cap}" style="cursor:zoom-in;">
          <img src="${img.src}" alt="${img.cap}" loading="lazy"/>
          <div class="mg-cap"><span>${img.cap}</span></div>
        </div>
      `).join('')}
    </div>
  ` : '';

  const videosHTML = p.videos.length ? `
    <div class="mp-section-header"><span class="mp-section-label">Video Demos</span><h3>Live Walkthroughs</h3></div>
    <div class="modal-video-grid">
      ${p.videos.map(v => `
        <div class="mv-item">
          <h4>${v.title}</h4>
          <div class="mv-wrap"><video controls preload="metadata"><source src="${v.src}" type="video/mp4"/></video></div>
        </div>
      `).join('')}
    </div>
  ` : '';

  return `
    <div class="mp-hero">
      <div class="mp-hero__tags tags">${tagsHTML}</div>
      <h2 class="mp-hero__title">${p.title}</h2>
      ${p.subtitle ? `<p class="mp-hero__sub">${p.subtitle}</p>` : ''}
      ${statsHTML}
      <p class="mp-hero__desc">${p.desc}</p>
    </div>
    <div class="mp-content">
      ${workflowHTML}
      ${featuresHTML}
      ${galleryHTML}
      ${videosHTML}
    </div>
  `;
}

/* ── PROJECT CARD CLICKS ─────────────────────────────── */
function initProjectCards() {
  document.querySelectorAll('[data-project]').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.project;
      const proj = PROJECTS[key];
      if (!proj) return;
      openModal(buildModalHTML(proj));
    });
  });
}

/* ── LIGHTBOX for standalone gallery images ──────────── */
function initLightbox() {
  document.querySelectorAll('[data-lightbox]').forEach(el => {
    el.style.cursor = 'zoom-in';
    el.addEventListener('click', () => openLightbox(el.dataset.lightbox, el.dataset.cap || ''));
  });
  // also wire static [data-lb] elements (outside modal)
  document.querySelectorAll('[data-lb]:not(#modal [data-lb])').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation();
      openLightbox(el.dataset.lb, el.dataset.cap || '');
    });
  });
}

/* ── SITE TABS ───────────────────────────────────────── */
function initSiteTabs() {
  const buttons = document.querySelectorAll('.tab-btn');
  const panels  = document.querySelectorAll('.tab-panel');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      buttons.forEach(b => b.classList.toggle('active', b === btn));
      panels.forEach(p => {
        const active = p.id === target;
        p.classList.toggle('active', active);
        if (active) {
          const iframe = p.querySelector('iframe[data-src]');
          if (iframe && !iframe.src) {
            iframe.src = iframe.dataset.src;
            iframe.addEventListener('error', () => {
              iframe.style.display = 'none';
              p.querySelector('.iframe-fallback')?.classList.add('show');
            });
          }
        }
      });
    });
  });

  // Load first tab iframe
  const first = document.querySelector('.tab-panel.active iframe[data-src]');
  if (first) {
    first.src = first.dataset.src;
    first.addEventListener('error', () => {
      first.style.display = 'none';
      first.closest('.tab-panel')?.querySelector('.iframe-fallback')?.classList.add('show');
    });
  }
}

/* ── VIDEO EXCLUSIVITY ───────────────────────────────── */
function initVideoExclusivity() {
  document.addEventListener('play', e => {
    if (e.target.tagName !== 'VIDEO') return;
    document.querySelectorAll('video').forEach(v => {
      if (v !== e.target && !v.paused) v.pause();
    });
  }, true);
}
