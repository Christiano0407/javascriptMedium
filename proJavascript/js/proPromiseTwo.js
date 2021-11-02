console.group("Promise Movies / Async and Await");
// Ejemplo: renderMovies([{ title: "Spider-Man", release_date: "2019-06-30", poster_path: "/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg" }])
// Traducir las funciones de usar thens a usar async/await
// Crear función para que no nos gastemos la cantidad de requests demasiado rapido
// Crear función donde hacemos requests secuenciales
// Crear función donde hacemos requests en paralelo
// Crear función donde obtenemos el primer request que llegue
// ==============================================================================================
const sequence = document.getElementById(`sequence`);
const parallel = document.getElementById(`parallel`);
const fastest = document.getElementById(`fastest`);

// ====================================================================================================
// The Movie Database API: https://developers.themoviedb.org/3/getting-started/introduction
const API = `'b89fc45c2067cbd33560270639722eae'`;
//const API = `31431f65dcmsh9642cbacaebda1ap1b6804jsnb245da6a7333`;
// <<<< (1) >>>>>>
// Create Async and Await (promises / peticiones)
//(1)>
async function getMovies(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}
//(2)>
async function getPopularMovies() {
  const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}
//(3)>
async function getTopMoviesIds(n = 3) {
  const popularMovies = await getPopularMovies();
  const ids = popularMovies.slice(0, n).map((movie) => movie.id);
  return ids;
}

// <<<<< (2) >>>>>
// (RENDER)>
function renderMovies(movies) {
  const movieList = document.getElementById(`movies`);
  movieList.innerHTML = ` `;

  movies.forEach((movie) => {
    const listItem = document.createElement(`li`);
    listItem.innerHTML = ` {
             <img src="https://image.tmdb.org/t/p/w342${movie.poster_path}" />
             <h2>${movie.title}</h2>
             <p>Released on <em>${movie.release_date}</em></p>
        }`;
    movieList.appendChild(listItem);
  });
}

// <<<<< (3) >>>>>>
// (A)> ASYNC
async function getTopMoviesSequences() {
  const ids = await getTopMoviesIds();
  const movies = [];

  for (const id of ids) {
    const movie = await getMovies(id);
    movies.push(movie);
  }
}

// (B)> ASYNC
async function getTopMoviesParallel() {
  const ids = await getTopMoviesIds();
  const moviePromises = ids.map((id) => getMovies(id));
  const movies = await Promise.all(moviePromises);
  return movies;
}
// (C)>
async function getFastestTopMovies() {
  const ids = await getTopMoviesIds();
  const moviePromises = ids.map((id) => getMovies(id));
  const movie = await Promise.race(moviePromises);
  return movie;
}

//<<<< (4) >>>>
sequence.addEventListener(`click`, async () => {
  const movies = await getTopMoviesSequences();
  renderMovies(movies);
});

parallel.addEventListener(`click`, async () => {
  const movies = await getTopMoviesParallel();
  renderMovies(movies);
});

fastest.addEventListener(`click`, async () => {
  const movie = await getFastestTopMovies();
  renderMovies([movie]);
});

console.groupEnd();
