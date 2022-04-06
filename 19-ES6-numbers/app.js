const items = [...document.querySelectorAll('.number')];

const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const increcment = Math.ceil(value / 500);

  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increcment;

    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }
    el.textContent = `${initialValue}+`;
  }, 1);
};

items.forEach((item) => {
  updateCount(item);
});
