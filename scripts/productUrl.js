function productUrl(address) {
  let arrProducts = document.querySelectorAll('.product-title');

  arrProducts.forEach((arrProducts) => {
    let el = arrProducts.id;
    let numEl = parseInt(el.match(/\d+/));

    arrProducts.href = address + numEl;
  });
  //console.log(arrProducts);
}

productUrl('./product.html?id=');
