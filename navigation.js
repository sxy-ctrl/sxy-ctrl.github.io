const chapterNav = document.querySelector('.chapter-nav');
const chapterEntries = [...chapterNav.querySelectorAll('a')].map(link => ({
  link,
  target: document.getElementById(link.hash.slice(1)),
  group: link.closest('.chapter-list > li')
})).filter(entry => entry.target);
const chapterGroups = chapterNav.querySelectorAll('.chapter-list > li');
const projectFilters = document.querySelector('.filters');
let chapterFrame = 0;

function updateChapter() {
  chapterFrame = 0;
  const guide = window.innerHeight * .3;
  let active = chapterEntries[0];
  let nearest = -Infinity;

  for (const entry of chapterEntries) {
    if (!entry.target.getClientRects().length) continue;
    const top = entry.target.getBoundingClientRect().top;
    if (top <= guide && (top > nearest || (top === nearest && entry.link.hash === location.hash))) {
      active = entry;
      nearest = top;
    }
  }

  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 6) {
    active = chapterEntries.at(-1);
  }

  const requested = chapterEntries.find(entry => entry.link.hash === location.hash);
  if (requested?.target.getClientRects().length) {
    const bounds = requested.target.getBoundingClientRect();
    if (bounds.top <= guide && bounds.top >= 0) active = requested;
  }

  for (const {link} of chapterEntries) {
    const current = link === active.link;
    link.classList.toggle('current', current);
    if (current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
  for (const group of chapterGroups) group.classList.toggle('chapter-active', group === active.group);
}

function scheduleChapterUpdate() {
  if (!chapterFrame) chapterFrame = requestAnimationFrame(updateChapter);
}

function revealProject(hash) {
  const entry = chapterEntries.find(item => item.link.hash === hash);
  if (!entry?.target.matches('.project[hidden]')) return;
  projectFilters.querySelector('[data-filter="all"]').click();
  return entry.target;
}

for (const {link} of chapterEntries) {
  link.addEventListener('click', () => revealProject(link.hash));
}
window.addEventListener('hashchange', () => {
  revealProject(location.hash)?.scrollIntoView();
  scheduleChapterUpdate();
});
window.addEventListener('scroll', scheduleChapterUpdate, {passive: true});
window.addEventListener('resize', scheduleChapterUpdate);
projectFilters.addEventListener('click', scheduleChapterUpdate);
updateChapter();
