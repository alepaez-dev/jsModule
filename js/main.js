// function request all methods
var requestAjax = (url, callback, method = "GET", data = {}) => {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log("JSONPARSE", JSON.parse(this.response));
      callback(JSON.parse(this.response));
      return true;
    } else if (this.readyState === 4 && this.status === 404) {
      console.error(JSON.parse(this.response));
      return false;
    }
  };
  xhttp.open(method, url);
  if (method === "GET" || method === "DELETE") {
    xhttp.send();
  } else {
    // put, patch, post
    xhttp.send(JSON.stringify(data));
  }
};

// put y post RESPONSE
const showResponse = response => {
  console.log(response);
};

// put y post
var showUsers = response => {
  console.log("response", response);
  let users = response;
  let usersList = "";
  for (user in response) {
    console.log("user", user);
    let dataUsuario = response[user];
    usersList += `
            <li>${dataUsuario.name} ${dataUsuario.lastname} <a href="user.html?id=${user}">ver usuario</a></li>
        `;
  }
  document.querySelector(".list__users").innerHTML = usersList;
};

//INDEX
if (
  window.location.pathname === "/" ||
  window.location.pathname === "/index.html" ||
  window.location.pathname ===
    "/C:/Users/al3_h/Downloads/Prueba/JavaScript/jsModule/index.html"
) {
  // estoy en home
  console.log("entra");
  requestAjax(
    "https://koders1gpython-default-rtdb.firebaseio.com/alepaez/users/.json",
    showUsers,
    "GET"
  );
}

var printUser = arrData => {
  console.log(arrData);
  document.querySelector("#card__user").innerHTML = `
    <img src="${arrData.urlPhoto}">
    <h5 class="card-title name__user">${arrData.name}</h5>
    <p class="card-text email__user">${arrData.lastname}</p>
    `;
};

//USER
if (
  window.location.pathname === "/user.html" ||
  window.location.pathname ===
    "/C:/Users/al3_h/Downloads/Prueba/JavaScript/jsModule/user.html"
) {
  console.log("entra aquiiiiiiii");
  let suma = 2 + 2;
  let url = new URLSearchParams(window.location.search);
  let id = url.get("id");
  // estoy en home
  console.log("suma", suma);
  console.log("location:", `${window.location.search}`);
  console.log("url: ", url);
  console.log("id", id);
  console.log("id", id);
  requestAjax(
    `https://koders1gpython-default-rtdb.firebaseio.com/alepaez/users/${id}.json`,
    printUser,
    "GET"
  );
}

//NEWUSER
if (
  window.location.pathname === "/newuser.html" ||
  window.location.pathname ===
    "/C:/Users/al3_h/Downloads/Prueba/JavaScript/jsModule/newuser.html"
) {
  console.log("entra a la funcion if del newuser.html");

  //Delete
  const clickDelete = event => {
    event.preventDefault();
    let idDelete = document.getElementById("idDelete").value;
    requestAjax(
      `https://koders1gpython-default-rtdb.firebaseio.com/alepaez/users/${idDelete}.json`,
      showResponse,
      "DELETE"
    );
  };

  //guardar
  const clickGuardad = event => {
    event.preventDefault();
    console.log("principip");
    let nameSave = document.getElementById("name").value;
    let lastnameSave = document.getElementById("lastname").value;
    let url_photoSave = document.getElementById("url_photo").value;

    console.log("name", nameSave);
    console.log("lastname", lastnameSave);
    console.log("urlophot", url_photoSave);
    console.log("typeoffff", typeof url_photoSave);
    requestAjax(
      "https://koders1gpython-default-rtdb.firebaseio.com/alepaez/users.json",
      showResponse,
      "POST",
      {
        lastname: lastnameSave,
        name: nameSave,
        urlPhoto: url_photoSave,
      }
    );
    console.log("fin");
  };

  //buttons listeners
  document.getElementById("btnSave").addEventListener("click", clickGuardad);
  document.getElementById("btnDelete").addEventListener("click", clickDelete);
}
