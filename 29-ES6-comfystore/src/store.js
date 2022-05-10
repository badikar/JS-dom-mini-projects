import { getStorageItem, setStorageItem } from './utils.js';

//  once we fecth up produtcs, we set up the store
//  before we set up the store we make sure there are item in the local storage, so we could use that store in different pages
// so setupStore gets called only in index.JS
// in other pages we only call getStorageItem() cos we only inport LET STORE
let store = getStorageItem('store');

const setupStore = (products) => {
  store = products.map((product) => {
    const {
      id,
      fields: { featured, name, price, company, colors, image: img },
    } = product;
    const image = img[0].thumbnails.large.url;
    return { id, featured, name, price, company, colors, image };
  });
  // @params: store-any string name &  value=> LET STORE
  setStorageItem('store', store);
};

const findProduct = () => {};
export { store, setupStore, findProduct };
