let data2 = catalog;
let dataLength = data2.length;

let productId = new URLSearchParams(window.location.search).get('id');

console.log(productId);

//let pageTitleText;

let productImageLink;
let productNameText;
let productResumeText; //
let productDescriptionText;
let productWidthText;
let productHeightText;
let productPriceActiveText;
let productPriceOriginText;
let productCurrencyActiveText;
let productCurrencyOriginText;
let initAmountText;
let productCategory;

for (let i = 0; i < dataLength; i++) {
  if (data2[i].id == productId) {
    productShow = data2[i];

    // pageTitleText = data2[i].name;
    // console.log(pageTitleText);

    productImageLink = data2[i].image;
    productNameText = data2[i].name;
    productResumeText = data2[i].resume;
    productDescriptionText = data2[i].description;
    productWidthText = data2[i].width;
    productHeightText = data2[i].height;
    productPriceActiveText = data2[i].priceActive;
    productPriceOriginText = data2[i].priceOrigin;
    productCurrencyActiveText = data2[i].currency;
    productCurrencyOriginText = data2[i].currency;
    initAmountText = data2[i].priceActive;
    productCategory = data2[i].category;
  } else {
    console.log('No products');
  }
}

// let pageTitle = document.getElementById('pageTitle');
// pageTitle.textContent = pageTitleText;

let productImage = document.getElementById('productImage');
productImage.src = productImageLink;

let productName = document.getElementById('productName');
productName.textContent = productNameText;

let productResume = document.getElementById('productResume');
productResume.textContent = productResumeText;

let productDescription = document.getElementById('productDescription');
productDescription.textContent = productDescriptionText;

let productWidth = document.getElementById('productWidth');
productWidth.textContent = productWidthText;

let productHeight = document.getElementById('productHeight');
productHeight.textContent = productHeightText;

let productPriceOrigin = document.getElementById('productPriceOrigin');
productPriceOrigin.textContent = productPriceOriginText;

let productPriceActive = document.getElementById('productPriceActive');
productPriceActive.textContent = productPriceActiveText;

let productCurrencyActive = document.getElementById('currencyActive');
productCurrencyActive.innerHTML = productCurrencyActiveText;
let productCurrencyOrigin = document.getElementById('currencyOrigin');
productCurrencyOrigin.innerHTML = productCurrencyOriginText;

if (productPriceOriginText == productPriceActiveText) {
  productPriceOrigin.style.display = 'none';
  productCurrencyOrigin.style.display = 'none';
}

let initAmount = document.getElementById('initAmount');
initAmount.textContent = initAmountText;
