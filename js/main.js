console.log("Hola mundo");

// Asynchronous JavaScript And XML
// JSON
// XML
const loadUsers = (url, selector) => {
  const request = new XMLHttpRequest();
  let search = location.search;
  let newLocation = search.substr(search.indexOf("=") + 1);
  console.log("eee", newLocation);
  request.addEventListener("readystatechange", () => {
    if (request.readyState !== 4) {
      return;
    } else {
      if (request.status >= 200 && request.status <= 299) {
        const response = request;
        console.log(response);
        const objectUsers = JSON.parse(response.responseText);
        let listUsers = "";
        console.log("listUsers", listUsers);
        console.log("object:", objectUsers);
        // objectUsers.forEach(user => {
        //   listUsers += `<li><a href="user.html?id=${user.id}">${par1}: ${user[par1]} ${par2}: ${user[par2]} ${par3}: ${user[par3]}</a></li>`;
        // });
        console.log("list", listUsers);

        //recorrer objeto
        Object.keys(objectUsers).forEach(key => {
          if (typeof objectUsers[key] === "object") {
            Object.keys(objectUsers[key]).forEach(llave => {
              listUsers += `<li>${llave} : ${objectUsers[key][llave]}</li>`;
              console.log("list", listUsers);
              // console.log(`${llave} : ${objectUsers[key][llave]}`);
            });
          } else {
            listUsers += `<li>${key} : ${objectUsers[key]}</li>`;
            // console.log(`${key} : ${objectUsers[key]}`);
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
