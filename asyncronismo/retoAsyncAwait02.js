console.group("Practice Async and Await");
//>>> (A) ==>
const fetchData = require(`../asyncronismo/utils/fetchDataJs`);

//>>> (b) ==>
const API = `https://rickandmortyapi.com/api/character/`;

//>>> (C) ==> Async and Await>>
const dataAll = async (url_api) => {
  try {
    const data = await fetchData(url_api);
    const character = await fetchData(`${API}${data.results[0].id}`);
    const origin = await fetchData(character.origin.url);
    //>
    console.log(data.info.count);
    console.log(data.info.pages);
    console.log(character.name);
    console.log(character.status);
    console.log(character.location);
    console.log(character.image);
    console.log(origin.dimension);
    //>
  } catch (error) {
    console.error(error);
  }
};

console.log(dataAll(API));

console.groupEnd();
