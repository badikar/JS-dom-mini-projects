const productDOM = document.querySelector('.product');
const url = 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog';

const productColor = document.querySelector('.product-color');

const fetchProduct = async () => {
  try {
    const res = await fetch(url);
    const data = res.json();
    return data;
  } catch (error) {}
};

const displayProduct = (item) => {
  const id = item.id;
  const { name: title, price, company, description } = item.fields;
  const formatPrice = price / 100;
  item.fileds;
  const img = item.fields.image[0].url;
  console.log(img);

  productDOM.innerHTML = `<div class="product-wrapper" data-id=${id}>
  <img
      src="${img}"
      alt="${title}"
      class="img">
  <div class="product-info">
      <h3>${title}</h3>
      <h5>${company}</h5>
      <span>${formatPrice}</span>
      <div class="colors">
          <span class="product-color"></span>
          <span class="product-color" style="background: red"></span>
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
