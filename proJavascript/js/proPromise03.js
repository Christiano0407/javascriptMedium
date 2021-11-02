console.group("API / Promise / Async and Await");

const axios = require(`axios`).default;

let options = {
  method: "GET",
  url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
  params: { type: "get-movies-by-title", title: "matrix" },
  headers: {
    "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
    "x-rapidapi-key": "31431f65dcmsh9642cbacaebda1ap1b6804jsnb245da6a7333",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

console.groupEnd();
