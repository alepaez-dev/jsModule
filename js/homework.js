console.log("Hola mundo homework");

//name
//username
const loadUsers = () => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState !== 4) {
      return;
    } else {
      if (request.status >= 200 && request.status <= 299) {
        const response = request;
        console.log(response);
        const objectUsers = JSON.parse(response.responseText);
        console.log("objectUsers", objectUsers);
        let listUsers = "";
        objectUsers.forEach(user => {
          listUsers += `<li><a href="user.html?id=${user.id}">Name: ${user.name} Email: ${user.email}</a></li>`;
        });
        document.querySelector(".list__users").innerHTML = listUsers;
      } else {
        console.log("No se pudo ejecutar");
      }
    }
  });
  request.open("GET", "https://jsonplaceholder.typicode.com/users/");
  request.send();
};

//loadUsers()
document.getElementById("getusers").addEventListener("click", loadUsers);
