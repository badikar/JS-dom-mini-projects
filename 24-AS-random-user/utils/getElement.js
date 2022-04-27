const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error('ooops... no such element exists');
};

export default getElement;

// mozna: export getElement = ()=>{} -> nazwe pamietac trza
// albo: export default () =>{}
