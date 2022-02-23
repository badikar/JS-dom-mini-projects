const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show-links');
});

// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// Ponizsze jest tez w EMMET SNIPPET do TOGGLE()
// console.log(links.classList.contains("random"));
// console.log(links.classList.contains("links"));
// if (links.classList.contains("show-links")) {
//   links.classList.remove("show-links");
// } else {
//   links.classList.add("show-links");
