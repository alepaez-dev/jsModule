console.log("Hola mundo");

// Asynchronous JavaScript And XML
// JSON
// XML
const loadUsers = (url, selector, par1, par2, par3) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState !== 4) {
      return;
    } else {
      if (request.status >= 200 && request.status <= 299) {
        const response = request;
        console.log(response);
        const objectUsers = JSON.parse(response.responseText);
        let listUsers = "";
        objectUsers.forEach(user => {
          listUsers += `<li>${par1}: ${user[par1]} ${par2}: ${user[par2]} ${par3}: ${user[par3]}</li>`;
        });
        document.querySelector(selector).innerHTML = listUsers;
      } else {
        console.log("No se pudo ejecutar");
      }
    }
  });
  request.open("GET", url);
  request.send();
};
// loadUsers()
document
  .getElementById("getusers")
  .addEventListener(
    "click",
    loadUsers(
      "https://jsonplaceholder.typicode.com/users",
      ".list__users",
      "id",
      "name",
      "email"
    )
  );

document
  .getElementById("getpost")
  .addEventListener(
    "click",
    loadUsers(
      "https://jsonplaceholder.typicode.com/posts",
      ".list__post",
      "id",
      "title",
      "userId"
    )
  );
// window.addEventListener('load', loadUsers)
