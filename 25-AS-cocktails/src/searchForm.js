//  nie exportuje tego modulu, ale i tak mozna importowac
import get from './getElement.js';
import presentDrinks from './presentDrinks.js';

const baseURL = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = get('.search-form');
// attribute selector
const input = get('[name="drink"]');

form.addEventListener('keyup', (e) => {
  e.preventDefault();
  const value = input.value;
  if (!value) return;
  presentDrinks(`${baseURL}${value}`);
});
