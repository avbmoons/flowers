const locPage = location.pathname.match(/[^/]*$/);

console.log(locPage[0]);

function toCart() {
  if (!(locPage == "index.html")) {
    window.location.href = "../pages/cart.html";
  } else {
    window.location.href = "pages/cart.html";
  }
}
