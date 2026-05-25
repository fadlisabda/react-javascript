//fetch
const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");
  fetch("http://www.omdbapi.com/?apikey=fd8ee878&s=" + inputKeyword.value)
    .then((response) => response.json())
    .then((response) => response.Search);
});
