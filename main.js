// Fetching JSON OMB API
const list = document.querySelector(".list-inline");

const fetchMovies = (movieRequest) => {
  fetch(`http://www.omdbapi.com/?s=${movieRequest}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      data.Search.forEach(result => {
        const movie = `<li class="list-inline-item">
          <img src=${result.Poster} alt="Movie Poster">
          <p>${result.Title}</p>
        </li>
        `
        list.insertAdjacentHTML("beforeend", movie);
      });
    });

};

const search = document.querySelector("#search-form");


search.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector(".form-control");
  list.innerHTML = "";
  fetchMovies(input.value);
})
