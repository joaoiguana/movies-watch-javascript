// GET REQUEST
const list = document.querySelector(".list-inline");

const fetchMovies = (movieRequest) => {
  fetch(`http://www.omdbapi.com/?s=${movieRequest}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      data.Search.forEach(result => {
        const movie = `
        <div class="movie-card">
          <li class="list-inline-item">
            <img src=${result.Poster} alt="Movie Poster">
            <h2><strong>${result.Title}</strong></h2>
            <p>Year: ${result.Year}</p>
            <p>IMDB id: ${result.imdbID}</p>
          </li>
        </div>
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
});


// POST REQUEST
// const signUp = (event) => {
//   event.preventDefault()
//   const emailValue = document.getElementById("email").value
//   const passwordValue = document.getElementById("password").value
//   fetch("https://reqres.in/api/register", {
//     method: "POST",
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify({"email": emailValue, "password": passwordValue})
//   })
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data)
//     })
// }

// const form = document.querySelector("#form");
// form.addEventListener("submit", signUp)
