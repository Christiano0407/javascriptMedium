console.group("Exercise Promise");
// Disponer de la  Data / FetchData ====>>>

//>> (A)>>
const fetchData = require(`../asyncronismo/utils/fetchDataJs`);

//>> API>> (b) >
const API = `https://rickandmortyapi.com/api/character`;

//>> Peticiones> (c) =>
fetchData(API)
  .then((data) => {
    console.log(data.info.count);
    return fetchData(`${API}${data.results[0].id}`);
  })
  .then((data) => {
    console.log(data.name);
    return fetchData(data.origin.url);
  })
  .then((data) => {
    console.log(data.dimension);
  })
  .catch((error) => console.error(error));
console.groupEnd();
