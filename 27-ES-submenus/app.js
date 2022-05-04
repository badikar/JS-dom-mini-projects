import sublinks from './data.js';

const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar-links');
const linkBtns = [...document.querySelectorAll('.link-btn')];
const submenu = document.querySelector('.submenu');
const hero = document.querySelector('.hero');
const nav = document.querySelector('.nav');

//  hide/show sidebar
toggleBtn.addEventListener('click', () => {
  sidebarWrapper.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  sidebarWrapper.classList.remove('show');
});

// set sidebar
sidebar.innerHTML = sublinks
  .map((item) => {
    const { page, links } = item;
    return `<article>
  <h4>${page}</h4>
  <div class="sidebar-sublinks">
  ${links
    .map(({ label, url, icon }) => {
      return `<a href="${url}">
      <i class="${icon}"></i>${label}
      </a>`;
    })
    .join('')}
  </div>
  </article>`;
  })
  .join('');

//   links
linkBtns.forEach((btn) => {
  // old func(), no arrow func here
  btn.addEventListener('mouseover', function (e) {
    const text = e.currentTarget.textContent;
    // trza srodek i bottom(wyzej 3px)
    const tempBtn = e.currentTarget.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    // find() returns obj or undefined
    const temPage = sublinks.find(({ page }) => page === text);
    if (temPage) {
      const { page, links } = temPage;
      submenu.classList.add('show');
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;
      // no of columns in submenu
      let columns = 'col-2';
      if (links.length === 3) {
        columns = 'col-3';
      }
      if (links.length > 3) {
        columns = 'col-4';
      }

      //  rendering
      submenu.innerHTML = `
      <section>
      <h4>${page}</h4>
      <div class="submenu-center ${columns}">
      ${links
        .map((link) => {
          return `<a href="${link.url}">
            <i class="${link.icon}"></i>${link.label}
          </a>`;
        })
        .join('')}
      </div>
      </section>
      `;
    }
  });
});

// hide sidebar when hovered away
// gdzie "e" to uzywaj regular func()!!!!
hero.addEventListener('mouseover', function (e) {
  submenu.classList.remove('show');
});

nav.addEventListener('mouseover', function (e) {
  if (!e.target.classList.contains('link-btn')) {
    submenu.classList.remove('show');
  }
});
