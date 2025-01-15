const searchInput = document.getElementsByClassName('search-input-box')[0];
const searchInputField = document.getElementById('inputSearch');
//const toSearch = document.getElementsByClassName("to-search")[0];

//console.log(searchInput);
//console.log(toSearch);

function showSearch() {
  searchInput.style.display = 'flex';
}
function closeSearch() {
  searchInput.style.display = 'none';
  searchInputField.value = '';
}
//toSearch.addEventListener("click", showSearch());
