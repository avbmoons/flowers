const dataIni = catalog;
let dataSearch = [];
let dataIniLength = dataIni.length;

let searchString = new URLSearchParams(window.location.search).get('search');
console.log(searchString);

let pageTitleText2;
let pageSearch;

pageTitleText2 = 'Search results ' + '"' + searchString + '"' + ':';
pageSearch = searchString;

let pageTitle2 = document.getElementById('headingPrime');
pageTitle2.innerHTML = pageTitleText2;

const reg = new RegExp(searchString, 'i');

class CatalogItem2 {
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
        <img class="item-image" src="${this.image}" id="image-${this.id}" alt="photo" />
      </div>
      <div class="product-info" data-id="${this.id}">
        <a class="product-title" href="./product.html?id=" id="product${this.id}"
          >${this.name}</a
        >
        <div class="product-price-box">
          <p class="price-text">from</p>
          <p class="price-value">${this.priceActive}</p>
          <p class="price-currency">${this.currency}</p>
        </div>
      </div>
      <div class="product-button" data-id="${this.id}">
        <button class="to-cart" type="button" id="toCart-${this.id}">Add to cart</button>
      </div>
    </div>`;
  }
}

class CatalogList2 {
  constructor() {
    this.ccatalog = [];
  }

  fetchCatalog() {
    //this.ccatalog = catalog;
    this.ccatalog = catalog.filter(
      (catalog) =>
        reg.test(catalog.name) ||
        reg.test(catalog.resume) ||
        reg.test(catalog.description) ||
        reg.test(catalog.priceActive)
    );
  }

  render() {
    let listHtml = '';
    this.ccatalog.forEach((ccatalog) => {
      const catalogItem = new CatalogItem2(
        ccatalog.id,
        ccatalog.name,
        ccatalog.image,
        ccatalog.height,
        ccatalog.width,
        ccatalog.resume,
        ccatalog.description,
        ccatalog.priceOrigin,
        ccatalog.priceActive,
        ccatalog.currency,
        ccatalog.category,
        ccatalog.type,
        ccatalog.isPopular,
        ccatalog.isNew,
        ccatalog.isPromo
      );
      listHtml += catalogItem.render();
    });
    document.querySelector('.catalog__block').innerHTML = listHtml;
  }
}

const list2 = new CatalogList2();

list2.fetchCatalog();

list2.render();
