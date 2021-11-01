console.group("Promises / Async and Await");

//> Traer la Petición (Fetch)>>
const fetchDataApi = require(`../utils/apiFetch`);

//> API => (URL)>>
const API = `https://api.themoviedb.org/3/movie/76341?api_key/`;
//https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>
//curl --request GET \
//--url 'https://api.themoviedb.org/3/movie/76341' \
//--header 'Authorization: Bearer <<access_token>>' \
//--header 'Content-Type: application/json;charset=utf-8'

fetchDataApi(API);

console.groupEnd();
