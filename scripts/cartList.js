// class Cart {
//   products;
//   constructor() {
//     this.products = [];
//   }
//   get count() {
//     return this.products.length;
//   }
//   addProduct(product) {
//     this.products.push(product);
//   }
//   removeProduct(index) {
//     this.products.splice(index, 1);
//     location.reload();
//   }
//   get cost() {
//     const prices = this.products.map((product) => {
//       return product.priceOrigin;
//     });
//     const sum = prices.reduce((acc, num) => {
//       return acc + num;
//     }, 0);
//     return sum;
//   }
//   get costDiscount() {
//     const prices = this.products.map((product) => {
//       return product.priceOrigin - product.priceActive;
//     });
//     const sum = prices.reduce((acc, num) => {
//       return acc + num;
//     }, 0);
//     return sum;
//   }
//   get costTotal() {
//     return this.cost - this.costDiscount;
//   }
// }

const savedCart = JSON.parse(localStorage.getItem('flowCart'));
const cartNum = document.querySelector('#cartBtnNum');
const cartNumValue = savedCart.products.length;
cartNum.textContent = cartNumValue;

const headingCounter = document.querySelector('#headingCounter');
headingCounter.textContent = cartNumValue;

//console.log(cartNumValue);
//console.log(savedCart);

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

class CartItem {
  constructor(
    id,
    name,
    image,
    height,
    width,
    resume,
    description,
    priceOrigin,
    priceActive,
    currency,
    category,
    type,
    isPopular,
    isNew,
    isPromo
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.height = height;
    this.width = width;
    this.resume = resume;
    this.description = description;
    this.priceOrigin = priceOrigin;
    this.priceActive = priceActive;
    this.currency = currency;
    this.category = category;
    this.type = type;
    this.isPopular = isPopular;
    this.isNew = isNew;
    this.isPromo = isPromo;
  }
  render() {
    return `<div class="product" data-id="${this.id}">
        <div class="product-image" data-id="${this.id}">
          <img src="${this.image}" alt="photo" id="image-${this.id}" />
        </div>
        <div class="product-box">
          <div class="product-info" data-id="${this.id}">
            <a class="product-title" href="../pages/product.html?id=" id="product${this.id}">${this.name}</a>
            <div class="price-box">
              <div class="price-active-box">
                <p class="price-active" data-id="${this.id}">${this.priceActive}</p>
                <p class="currency">${this.currency}</p>
              </div>
            </div>
          </div>
          <div class="product-purchase" data-id="${this.id}">
            <div class="counter-box">
              <div class="counter" id="counter${this.id}">
                <button class="counter-minus" data-id="${this.id}" id="minus${this.id}">-</button>
                <input class="counter-value" type="text" value="1" data-id="${this.id}" id="counterValue${this.id}" />
                <button class="counter-plus" data-id="${this.id}" id="plus${this.id}">+</button>
              </div>
            </div>
            <div class="total-box">
              <div class="total-price">
                <p class="total-text">Total price:</p>
                <p class="total-value" data-id="${this.id}" id="total${this.id}" >${this.priceActive}</p>
                <p class="total-currency">${this.currency}</p>
              </div>
            </div>
            <button class="delete-button" id="delete${this.id}">&#10006;</button>
          </div>
        </div>
      </div>`;
  }
}

class CartList {
  constructor() {
    this.ccart = [];
  }

  fetchCart() {
    this.ccart = savedCart;
    //console.log(this.ccart);
  }

  render() {
    let listHtml = '';
    this.ccart.products.forEach((ccart) => {
      const cartItem = new CartItem(
        ccart.id,
        ccart.name,
        ccart.image,
        ccart.height,
        ccart.width,
        ccart.resume,
        ccart.description,
        ccart.priceOrigin,
        ccart.priceActive,
        ccart.currency,
        ccart.category,
        ccart.type,
        ccart.isPopular,
        ccart.isNew,
        ccart.isPromo
      );
      listHtml += cartItem.render();
    });
    document.querySelector('.cart-list').innerHTML = listHtml;
  }
}

const list = new CartList();

list.fetchCart();

list.render();
// myCart.products = savedCart.products;
// cartNum.textContent = myCart.count;

//Set total cart price:
const totalCart = document.querySelector('#cartCostTotal');
const totalCartCurrency = document.querySelector('#cartCostTotalCurrency');

let totalCartValue = totalCart.textContent;

function toFixed(num, size) {
  return Math.round(num * Math.pow(10, size)) / Math.pow(10, size);
}

function total() {
  let totalValue = Number(totalCartValue);
  for (i = 0; i < savedCart.products.length; i++) {
    totalValue = totalValue + Number(savedCart.products[i].priceActive);
  }
  return toFixed(totalValue, 2);
}

totalCart.innerHTML = total();

//Remove item from cart
let productDeleteBtns = document.querySelectorAll('.delete-button');
//console.log(productDeleteBtns);

productDeleteBtns.forEach((productDeleteBtn) => {
  productDeleteBtn.addEventListener('click', () => {
    let index = savedCart.products.findIndex(
      (product) => product.id == productDeleteBtn.dataset.id
    );
  });
});

let counters = document.querySelectorAll('.counter');
//console.log(counters);

// counters.forEach((counters) => {
//   counter();
// });

for (i = 0; i < cartNumValue; i++) {
  let counterId = counters[i].id;

  //console.log(counterId);
}
