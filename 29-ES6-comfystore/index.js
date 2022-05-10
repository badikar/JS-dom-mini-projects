// global imports
import './src/toggleSidebar.js';
import './src/cart/toggleCart.js';
import './src/cart/setupCart.js';
// specific imports
import fetchProducts from './src/fetchProducts.js';
import { setupStore, store } from './src/store.js';
import display from './src/displayProducts.js';
import { getElement } from './src/utils.js';

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    //   add products to store
    setupStore(products);
    // getting back LET store
    //  getting only those for featured section in index.html
    const featured = store.filter((product) => product.featured === true);
    display(featured, getElement('.featured-center'));
  }
  //   and IF NOT => loading...
};

window.addEventListener('DOMContentLoaded', init);
