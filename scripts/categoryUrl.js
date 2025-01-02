let data2 = catalog;

let arrCategory = document.querySelectorAll('.catalog');

console.log(arrCategory);

arrCategory.forEach(arrCategory => {
    console.log(arrCategory.textContent);
    let el = arrCategory.textContent;
    let categoryEl;
    if (!el.indexOf('Bouquets')) {
        categoryEl = 'Bouquets';        
    } else {
        categoryEl = 'Gifts';
    }

    arrCategory.href = 'pages/catalog.html?category=' + categoryEl;
});
