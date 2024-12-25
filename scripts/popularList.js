const data = catalog;

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
      <img src="${this.image}" id="image-${this.id}" alt="photo" />
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

class FeaturedList {
  constructor() {
    this.ccatalog = [];
  }

  fetchFeatured() {
    this.ccatalog = catalog.filter((catalog) => catalog.isPopular == 'true');
  }

  render() {
    let listHtml = '';
    this.ccatalog.forEach((ccatalog) => {
      const catalogItem = new CatalogItem(
        ccatalog.id,
        ccatalog.name,
        ccatalog.image.replace('../', ''),
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
    document.querySelector('.featured__block').innerHTML = listHtml;
  }
}

class BestList {
  constructor() {
    this.ccatalog = [];
  }

  fetchBest() {
    this.ccatalog = catalog.filter((catalog) => catalog.isNew == 'true');
  }

  render() {
    let listHtml = '';
    this.ccatalog.forEach((ccatalog) => {
      const catalogItem = new CatalogItem(
        ccatalog.id,
        ccatalog.name,
        ccatalog.image.replace('../', ''),
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
    document.querySelector('.best-selling__block').innerHTML = listHtml;
  }
}

class PromotList {
  constructor() {
    this.ccatalog = [];
  }

  fetchPromo() {
    this.ccatalog = catalog.filter((catalog) => catalog.isPromo == 'true');
  }

  render() {
    let listHtml = '';
    this.ccatalog.forEach((ccatalog) => {
      const catalogItem = new CatalogItem(
        ccatalog.id,
        ccatalog.name,
        ccatalog.image.replace('../', ''),
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
    document.querySelector('.promo__block').innerHTML = listHtml;
  }
}

const listFeatured = new FeaturedList();
listFeatured.fetchFeatured();
listFeatured.render();

const listBest = new BestList();
listBest.fetchBest();
listBest.render();

const listPromo = new PromotList();
listPromo.fetchPromo();
listPromo.render();
