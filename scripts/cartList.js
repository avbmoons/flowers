const savedCart = JSON.parse(localStorage.getItem('flowCart'));
const cartNum = document.querySelector('#cartBtnNum');
const cartNumValue = savedCart.products.length;
cartNum.textContent = cartNumValue;

const headingCounter = document.querySelector('#headingCounter');
headingCounter.textContent = cartNumValue;

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
            <button class="delete-button" data-id="${this.id}" id="delete${this.id}">&#10006;</button>
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

productDeleteBtns.forEach((productDeleteBtn) => {
  productDeleteBtn.addEventListener('click', () => {
    let index = savedCart.products.findIndex(
      (product) => product.id == productDeleteBtn.dataset.id
    );
    savedCart.products.splice(index, 1);
    localStorage.setItem("flowCart", JSON.stringify(savedCart));
    location.reload();    

  });
});

let counters = document.querySelectorAll('.counter');

for (i = 0; i < cartNumValue; i++) {
  let counterId = counters[i].id;
}
