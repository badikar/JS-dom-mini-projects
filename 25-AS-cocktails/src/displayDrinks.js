import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';

//  to zdestrukturyzowane DRINKS z obiektu DATA ktory sfeczowalem
const displayDrinks = ({ drinks }) => {
  const section = get('.section-center');
  const title = get('.title');

  if (!drinks) {
    hideLoading();
    title.textContent = 'sorry, no drinks matched your serach';
    section.innerHTML = null;
    return;
  }
  const newDrinks = drinks
    .map((drink) => {
      // destructure each drink z DRINKS
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;

      // render
      return `<a href="drink.html">
      <article class="cocktail" data-id=${id}>
        <img src="${image}" alt="${name}">
        <h3>${name}</h3>
      </article>
    </a>`;
    })
    .join('');
  hideLoading();
  title.textContent = '';
  section.innerHTML = newDrinks;
  return section;
};
export default displayDrinks;
