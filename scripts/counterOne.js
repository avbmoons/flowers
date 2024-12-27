function counter() {
  const price = document.querySelector('#initAmount');
  const priceText = price.textContent;
  const countValue = Number(document.querySelector('#counterValue').value);

  //console.log(countValue);

  document.addEventListener('click', ({ target }) => {
    const parent = target.closest('.counter');
    if (parent) {
      const btn = target.closest('button');
      const input = parent.querySelector('input');
      const value = Number(input.value);
      input.value = btn.dataset.action === 'minus' ? value - 1 : value + 1;
      price.textContent = (Number(input.value) * Number(priceText)).toFixed(2);
      input.textContent = input.value;
      if (input.value < 1) {
        input.value = 1;
        price.textContent = Number(priceText);
      }
    }
  });
}
counter();
