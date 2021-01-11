console.log("Hola mundo");

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
        let listUsers = "";

        //recorrer objeto
        Object.keys(objectUsers).forEach(key => {
          if (typeof objectUsers[key] === "object") {
            Object.keys(objectUsers[key]).forEach(llave => {
              // console.log(`${llave} : ${objectUsers[key][llave]}`);
              if (typeof objectUsers[key][llave] === "object") {
                Object.keys(objectUsers[key][llave]).forEach(llavesita => {
                  listUsers += `<li>${llavesita} : ${objectUsers[key][llave][llavesita]}</li>`;
                });
              } else {
                listUsers += `<li>${llave} : ${objectUsers[key][llave]}</li>`;
              }
            });
          } else {
            listUsers += `<li>${key} : ${objectUsers[key]}</li>`;
          }
        });
        document.querySelector(selector).innerHTML = listUsers;
      } else {
        console.log("No se pudo ejecutar");
      }
    }
  });
  request.open("GET", url + "/" + newLocation);
  request.send();
};

document
  .getElementById("getusers")
  .addEventListener(
    "load",
    loadUsers("https://jsonplaceholder.typicode.com/users", ".list__users")
  );
