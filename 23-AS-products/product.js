const url = 'https://course-api.com/javascript-store-single-product';
// '?id=sduc&name=ccc&age=...' usuniete i podmianka dynamicznie
const productDOM = document.querySelector('.product');

const fetchProduct = async () => {
  try {
    productDOM.innerHTML = `<h4 class="product-loading">loading...</h4>`;
    // query string params - id!!! we have api for that:)
    // console.log(window.location.search);
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const res = await fetch(`${url}?id=${id}`);
    const data = res.json();
    return data;
  } catch (error) {
    productDOM.innerHTML = '<p class="error">There was an error...</p>';
  }
};

const displayProduct = (item) => {
  const id = item.id;
  const { name: title, price, company, description, colors } = item.fields;
  const formatPrice = price / 100;
  const img = item.fields.image[0].url;
  // change page title dynamically
  document.title = title.toUpperCase();
  // item colors rendered dynamically
  const colorsList = colors
    .map((color) => {
      return `<span class="product-color" style="background: ${color}"></span>`;
    })
    .join('');

  productDOM.innerHTML = `<div class="product-wrapper" data-id=${id}>
  <img
      src="${img}"
      alt="${title}"
      class="img">
  <div class="product-info">
      <h3>${title}</h3>
      <h5>${company}</h5>
      <span>${formatPrice}£</span>
      <div class="colors">
      <span class="product-color"></span>
          ${colorsList}
      </div>
      <p>${description}</p>
      <button class="btn">add to cart</button>
  </div>
</div>`;
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};
start();
