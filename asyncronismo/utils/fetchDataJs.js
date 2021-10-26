// Petición para el request ===>>>

const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open(`GET`, url_api, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error(`Error loaded`, url_api));
      }
    };
    xhttp.send();
  });
};

// Como js
module.exports = fetchData;
