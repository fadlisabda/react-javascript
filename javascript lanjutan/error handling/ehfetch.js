const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", async function () {
  try {
    const inputKeyword = document.querySelector(".input-keyword");
    const movies = await getMovies(inputKeyword.value);
  } catch (err) {
    alert(err);
  }
});

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=fd8ee878&s=" + keyword)
    .then((response) => {
      if (!response.ok) {
        //kirim error ke catch
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((response) => {
      if (response.Response === "False") {
        //kirim error ke catch
        throw new Error(response.Error);
      }
      return response.Search;
    });
}
