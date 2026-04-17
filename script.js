const portfolioData = {
  career: [
    {
      period: 'Foundation',
      title: 'Early Learning & Problem Solving',
      description: 'Add education, certifications, and key early projects that shaped your journey.'
    },
    {
      period: 'Growth',
      title: 'Professional Roles & Startup Work',
      description: 'Add role-wise responsibilities, achievements, and measurable outcomes.'
    },
    {
      period: 'Current',
      title: 'Active Projects & Direction',
      description: 'Add your current thesis, core projects, and what you are building right now.'
    }
  ],
  projects: [
    {
      name: 'Project One',
      stack: 'Product / Growth',
      summary: 'Add a concise case-study style summary of the problem, your approach, and results.',
      link: '#'
    },
    {
      name: 'Project Two',
      stack: 'Startup / Ops',
      summary: 'Add details of execution quality, speed, and business value created.',
      link: '#'
    },
    {
      name: 'Project Three',
      stack: 'Design / Strategy',
      summary: 'Add your role, impact metrics, and what makes this work meaningful.',
      link: '#'
    }
  ],
  media: {
    videos: [
      {
        title: 'Current Work Video',
        embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Replace with your latest work demo video URL.'
      }
    ],
    pdfs: [
      {
        title: 'Sample Case Study PDF',
        path: 'assets/pdfs/case-study.pdf',
        description: 'Place your PDF in assets/pdfs and update this path.'
      }
    ],
    photos: [
      {
        title: 'Sample Work Photo',
        path: 'assets/photos/work-photo.jpg',
        description: 'Place your photo in assets/photos and update this path.'
      }
    ]
  }
};

const byId = (id) => document.getElementById(id);
const render = (id, html) => {
  const el = byId(id);
  if (el) el.innerHTML = html;
};

render(
  'careerTimeline',
  portfolioData.career
    .map(
      (item) => `
      <article class="timeline-item">
        <p class="meta">${item.period}</p>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    `
    )
    .join('')
);

render(
  'projectGrid',
  portfolioData.projects
    .map(
      (project) => `
      <article class="card">
        <p class="meta">${project.stack}</p>
        <h3>${project.name}</h3>
        <p>${project.summary}</p>
        <a href="${project.link}">View project</a>
      </article>
    `
    )
    .join('')
);

render(
  'videos',
  `<div class="media-grid">${portfolioData.media.videos
    .map(
      (video) => `
      <article class="media-card">
        <h3>${video.title}</h3>
        <iframe src="${video.embedUrl}" title="${video.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p class="meta">${video.description}</p>
      </article>
    `
    )
    .join('')}</div>`
);

render(
  'pdfs',
  `<div class="media-grid">${portfolioData.media.pdfs
    .map(
      (pdf) => `
      <article class="media-card">
        <h3>${pdf.title}</h3>
        <p class="meta">${pdf.description}</p>
        <a href="${pdf.path}" target="_blank" rel="noreferrer">Open PDF</a>
      </article>
    `
    )
    .join('')}</div>`
);

render(
  'photos',
  `<div class="media-grid">${portfolioData.media.photos
    .map(
      (photo) => `
      <article class="media-card">
        <h3>${photo.title}</h3>
        <img src="${photo.path}" alt="${photo.title}" loading="lazy" />
        <p class="meta">${photo.description}</p>
      </article>
    `
    )
    .join('')}</div>`
);

const year = byId('year');
if (year) year.textContent = String(new Date().getFullYear());

const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;

    tabButtons.forEach((btn) => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    });

    tabPanels.forEach((panel) => panel.classList.remove('active'));

    button.classList.add('active');
    button.setAttribute('aria-selected', 'true');

    const panel = byId(tab);
    if (panel) panel.classList.add('active');
  });
});
