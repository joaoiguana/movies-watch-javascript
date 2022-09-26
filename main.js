// Fetching JSON OMB API
const list = document.querySelector(".list-inline");

const fetchMovies = () => {
  fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
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

fetchMovies();

const search = document.querySelector("#search-form");
console.log(search);
