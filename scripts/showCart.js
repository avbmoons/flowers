class Cart {
  products;
  constructor() {
    this.products = [];
  }
  get count() {
    return this.products.length;
  }
  addProduct(product) {
    this.products.push(product);
  }
  removeProduct(index) {
    this.products.splice(index, 1);
    location.reload();
  }
  get cost() {
    const prices = this.products.map((product) => {
      return product.priceOrigin;
    });
    const sum = prices.reduce((acc, num) => {
      return acc + num;
    }, 0);
    return sum;
  }
  get costDiscount() {
    const prices = this.products.map((product) => {
      return product.priceOrigin - product.priceActive;
    });
    const sum = prices.reduce((acc, num) => {
      return acc + num;
    }, 0);
    return sum;
  }
  get costTotal() {
    return this.cost - this.costDiscount;
  }
}

class Product {
  id;
  name;
  image;
  height;
  width;
  resume;
  description;
  priceOrigin;
  priceActive;
  currency;
  category;
  type;
  isPopular;
  isNew;
  isPromo;
  constructor(cardId) {
    this.id = cardId; // card.getAttribute("data-id").value;
    this.name = data[this.id - 1].name;
    this.image = data[this.id - 1].image;
    this.height = data[this.id - 1].height;
    this.width = data[this.id - 1].width;
    this.resume = data[this.id - 1].resume;
    this.description = data[this.id - 1].description;
    this.priceOrigin = data[this.id - 1].priceOrigin;
    this.priceActive = data[this.id - 1].priceActive;
    this.currency = data[this.id - 1].currency;
    this.category = data[this.id - 1].category;
    this.type = data[this.id - 1].type;
    this.isPopular = data[this.id - 1].isPopular;
    this.isNew = data[this.id - 1].isNew;
    this.isPromo = data[this.id - 1].isPromo;
  }
  render() {
    return `<div class="product" data-id="${this.id}">
    <div class="product-image" data-id="${this.id}">
      <img src="${this.image}" alt="photo" id="image-${this.id}" />
    </div>
    <div class="product-box">
      <div class="product-info" data-id="${this.id}">
        <a class="product-title" href="../pages/product.html?id=" id="product${this.id}">Lorem ipsum dolor sit</a>
        <div class="price-box">
          <div class="price-active-box">
            <p class="price-active">${this.priceActive}</p>
            <p class="currency">${this.currency}</p>
          </div>
        </div>
      </div>
      <div class="product-purchase" data-id="${this.id}">
        <div class="counter-box">
          <div class="counter">
            <button class="counter-minus" data-id="${this.id}">-</button>
            <input class="counter-value" type="text" value="1" data-id="${this.id}" id="counter-${this.id}" />
            <button class="counter-plus" data-id="${this.id}">+</button>
          </div>
        </div>
        <div class="total-box">
          <div class="total-price">
            <p class="total-text">Total price:</p>
            <p class="total-value">18</p>
            <p class="total-currency">${this.currency}</p>
          </div>
        </div>
        <button class="close-button">&#10006;</button>
      </div>
    </div>
  </div>`;
  }
}

const cardAddArr = Array.from(document.querySelectorAll('.to-cart'));

const cartNum = document.querySelector('#cartBtnNum'); //счетчик товаров в корзине
const cartBtn = document.querySelector('#btnCart'); //кнопка открытия корзины

const myCart = new Cart();
if (localStorage.getItem('flowCart') == null) {
  localStorage.setItem('flowCart', JSON.stringify(myCart));
}

const savedCart1 = JSON.parse(localStorage.getItem('flowCart'));

myCart.products = savedCart1.products;
cartNum.textContent = myCart.count;

// добавление товара в корзину
myCart.products = cardAddArr.forEach((cardAdd) => {
  cardAdd.addEventListener('click', (e) => {
    e.preventDefault();
    const card = e.target.closest('.product');
    //const cardId = e.target.getAttribute("data-id");
    const cardId = card.getAttribute('data-id');

    console.log(cardId);

    const product = new Product(cardId);
    const savedCart1 = JSON.parse(localStorage.getItem('flowCart'));
    myCart.products = savedCart1.products;
    myCart.addProduct(product);
    localStorage.setItem('flowCart', JSON.stringify(myCart));
    cartNum.textContent = myCart.count;
  });
});

const localPage = location.pathname.match(/[^/]*$/);
console.log(localPage[0]);
////функция перехода на страницу корзины
const cartPage = function () {
  if (!(localPage == 'index.html')) {
    window.location.href = '../pages/cart.html';
  } else {
    window.location.href = 'pages/cart.html';
  }
  cartContainerFill();
};

////    открытие страницы корзины
cartBtn.addEventListener('click', (e) => {
  e.preventDefault();
  cartPage();
});
