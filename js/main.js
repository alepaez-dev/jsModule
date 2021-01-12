console.log("Hola mundo");

const recorrerObject = object => {
  let listUsers = "";
  Object.keys(object).forEach(key => {
    if (typeof object[key] === "object") {
      Object.keys(object[key]).forEach(llave => {
        if (typeof object[key][llave] === "object") {
          Object.keys(object[key][llave]).forEach(llavesita => {
            listUsers += `<li><s>${llavesita}</s> : ${object[key][llave][llavesita]}</li>`;
          });
        } else {
          listUsers += `<li><s>${llave}</s> : ${object[key][llave]}</li>`;
        }
      });
    } else {
      listUsers += `<li><s>${key}</s> : ${object[key]}</li>`;
    }
  });
  return listUsers;
};

// Asynchronous JavaScript And XML
// JSON
// XML
const loadUsers = (url, selector) => {
  const request = new XMLHttpRequest();
  let search = location.search;
  let newLocation = search.substr(search.indexOf("=") + 1);
  request.addEventListener("readystatechange", () => {
    if (request.readyState !== 4) {
      return;
    } else {
      if (request.status >= 200 && request.status <= 299) {
        const response = request;
        console.log(response);
        const objectUsers = JSON.parse(response.responseText);

        //recorrer objeto
        const newListUsers = recorrerObject(objectUsers);
        document.querySelector(selector).innerHTML = newListUsers;
      } else {
        console.log("No se pudo ejecutar");
      }
    }
  });
  request.open("GET", url + "/" + newLocation);
  request.send();
};

loadUsers("https://jsonplaceholder.typicode.com/users", ".list__users");
