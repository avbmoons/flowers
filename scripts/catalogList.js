const data = catalog;
let dataLength = data.length;
//console.log(dataLength);

let categoryName = new URLSearchParams(window.location.search).get('category');
console.log(categoryName);

let pageTitleText;
let pageCategory;

for (let i=0; i<dataLength; i++) {
  let thisCategory;
  if (data[i].category == categoryName) {
    thisCategory = data[i];
    pageTitleText = thisCategory.category;
    pageCategory = thisCategory.category;
    //console.log(pageCategory);
    //console.log(pageTitleText);
  } else {
    console.log('No category');
  }
}

let pageTitle = document.getElementById('headingPrime');
console.log(pageTitleText);

if (pageTitleText == 'Bouquets') {
  pageTitle.innerHTML = pageTitleText + '&Flowers';
} else {
  pageTitle.innerHTML = pageTitleText + "&Cards";
}

//pageTitle.innerHTML = pageTitleText;

class CatalogItem {
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

class CatalogList {
  constructor() {
    this.ccatalog = [];
  }

  fetchCatalog() {
    //this.ccatalog = catalog;
    this.ccatalog = catalog.filter(catalog => catalog.category.includes(pageCategory));
  }

  render() {
    let listHtml = '';
    this.ccatalog.forEach((ccatalog) => {
      const catalogItem = new CatalogItem(
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

const list = new CatalogList();

list.fetchCatalog();

list.render();
