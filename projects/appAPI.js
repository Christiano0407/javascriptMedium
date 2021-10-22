console.group("API Project");
//(A)>>>>>
// = Var and Const =
const main = document.getElementById(`main`);
const search = document.getElementById(`search`);
const form = document.getElementById(`form`);

// = API =
const apiUrl =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const imgPath = "https://image.tmdb.org/t/p/w1280";

const searchApi =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

//(B) Initially GET Movies / Functions and Events>>>>>

getMovies(apiUrl);

async function getMovies(url) {
  const resp = await fetch(url);

  const respData = await resp.json();
  console.log(respData);

  showMovies(respData.results);
}

function showMovies(movies) {
  main.innerHTML = " ";

  movies.forEach((movie) => {
    const { poster_path, title, vote_average, overview } = movie;

    const movieEl = document.createElement("div");

    movieEl.classList.add("movie");

    movieEl.innerHTML = ` <img src="${
      imgPath + poster_path
    }" alt=" ${title}" /> 
    
    <div class="movie-info">
    <h3>${title}</h3>
    <span class="${getClassByRate(vote_average)}"></span>
    </div>

    <div class="overview">
    <h3>overview</h3>
    ${overview}
    </div>
    `;
  });

  main.appendChild(movieEl);
}

getClassByRate = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
};

console.groupEnd();
