import products from './products.js';

// copy of original products
let filteredProducts = [...products];

const productsContainer = document.querySelector('.products-container');

const displayProducts = () => {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h5>sorry...</h5>`;
    // !!!!! trza RETURN bo inaczej js dalej pojdzie!
    return;
  }
  productsContainer.innerHTML = filteredProducts
    .map(({ id, title, image, price }) => {
      return `<article class="product" data-id=${id}>
      <img
        src="${image}"
        class="product-img img"
        alt=""
        />
      <footer>
        <h5 class="product-name">${title}</h5>
        <span class="product-price">${price}</span>
      </footer>
    </article>`;
    })
    .join('');
};

displayProducts();

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

// jak w includes('empty string) nic nie filtreuje i pierwotny zwraca
form.addEventListener('keyup', () => {
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  console.log(filteredProducts);
  displayProducts();
});
