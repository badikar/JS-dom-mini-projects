const displayButtons = (container, pages, activeIndex) => {
  let btns = pages.map((_, pageIndex) => {
    return `<button class="page-btn ${activeIndex === pageIndex ? 'active-btn' : 'null'}"
    data-index="${pageIndex}"
    >${pageIndex + 1}</btn>`;
  });
  btns.push('<button class="next-btn">next</btn>');
  btns.unshift('<button class="prev-btn">prev</btn>');
  container.innerHTML = btns.join('');
};

export default displayButtons;
