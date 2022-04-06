import articles from './data.js';

const toggleBtn = document.querySelector('.btn');
const allArticles = document.querySelector('.articles');

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
  if (toggleBtn.textContent === 'dark mode') {
    toggleBtn.textContent = 'day mode';
    return;
  }
  toggleBtn.textContent = 'dark mode';
});

const posts = articles
  .map((post) => {
    // deconstructing
    const { title, date, length, snippet } = post;
    // date format MOMENT.JS
    const formatDate = moment(date).format('MMMM Do, YYYY');
    return `
  <article class="post">
    <h2>${title}</h2>
    <div class="post-info">
        <span>${formatDate}</span>
        <span>${length} min read</span>
    </div>
    <p>${snippet}</p>
  </article>`;
  })
  .join();

allArticles.innerHTML = posts;

// we need to create class that with the help of JS will add to the html/root: element. and when added/removed that class the colors will change
// so ctreate in CSS .dark-theme with CSS vars
// textContent  bo string wiec CASE SENSITIVE!!!
