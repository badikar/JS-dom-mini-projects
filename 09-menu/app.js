const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.jpeg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpeg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './images/item-7.jpeg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: 'TESTING',
    category: 'testing',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
];

// select items
// pamietaj, ze dynamicznie stworzone batony trzeba selektowac pozniej, nie tutaj!!!
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

// in ES6 there is easier way but this is good for reducer in redux react
// if values czyli accumulator (which is the array i return) does not include category, just add it to values array (accumulate)
// values == accumulator
// item == current itteration
// ['all'] - is initial value, just a string 'ALL', usually 0 i wtedy dodaje do koszyka

// load initial menu
window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
  displayCategoryBtns();
});

// with .map() we can modify the array
// tu jest LET i wtedy osobno .join(), ale mozna const i od razu za nim.join() - jak w categoryBtns
const displayMenuItems = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<article class="menu-item">
                    <img src=${item.img}
                     alt=${item.title} class="img photo"
                    />
                    <div class="item-info">
                    <header>
                        <h5>${item.title}</h5>
                        <span class="price" >${item.price}</span>
                    </header>
                    <p class="item-text">
                        ${item.desc}
                    </p>
                    </div>
                </article>`;
  });
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;
};

const displayCategoryBtns = () => {
  const category = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ['all']
  );
  const categoryBtns = category
    .map((category) => {
      return ` <button type="button" class="btn filter-btn" data-id=${category}>${category}</button>`;
    })
    .join('');
  btnContainer.innerHTML = categoryBtns;

  const filterBtns = document.querySelectorAll('.filter-btn');
  //filter items
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === 'all') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
};
