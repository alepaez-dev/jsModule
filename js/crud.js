//all functions of crud

//funcion para get, post, delete, patch

const baseAllJquery = (method, funct, data, path, url) => {
  if (method === "GET" || method === "DELETE") {
    console.log("entro al if de GET");
    $.ajax({
      url: url,
      method: method,
    })
      .done(response => {
        console.log("response", response);
        if (funct !== "") {
          if (path !== "") {
            funct(response, path);
          } else {
            funct(response);
          }
        } else {
          console.log(response);
        }
      })
      .fail(() => {
        console.log("todo mal");
      });
  } else {
    //PATCH, POST, PUT
    console.log("entro al if del POST, PATCH Y PUT");
    $.ajax({
      url: url,
      method: method,
      data: JSON.stringify(data),
    })
      .done(response => {
        console.log(response);
      })
      .fail(err => {
        console.log(err);
        console.log(err.status);
        console.log(err.statusText);
        console.log("todo mal");
      });
  }
};

//funcion de mostrar usuarios
const showUsers = (response, path) => {
  let usersList = "";
  for (user in response) {
    let usuario = response[user];
    usersList += `<li class="d-flex px-3 py-2 shadow-sm mb-2 rounded justify-content-between">
      <div class="d-flex">
        <img src="${usuario.urlPhoto}" class="d-flex rounded-circle icon__user" width="35" heigth="35"></img>
        <p class="d-flex text-left px-2">${usuario.name} ${usuario.lastname}</p>
      </div>
      <div class="d-flex">
        <a href="user.html?id=${user}" class="btn btn-link">Ver usuario</a>
        <a href="update-user.html?id=${user}" class= "btn btn-link" href="#">Editar Usuario</a>
        <button class="btn btn-danger btn__delete__user" data-id="${user}" data-algo="54">Eliminar</button>
      </div>
    </li>`;
  }
  $(path).append(usersList);
  deleteUserBtns();
};

//redireccionar
const redirectPage = () => {
  setTimeout(() => {
    window.location.replace("http://127.0.0.1:5500/ajax.html");
  }, 2000);
};

//funcion para imprimir usuario en inputs
const printUserInfo = response => {
  console.log("entramos a printUserInfo");
  if (response) {
    $("#name__input").val(response.name);
    $("#lastname__input").val(response.lastname);
    $("#photo__input").val(response.urlPhoto);
  }
};

//funcion para mostrar el usuario en los inputs
const updateFormUser = () => {
  console.log("idUser: ", idUser);
  if (idUser !== "") {
    baseAllJquery("GET", printUserInfo, "", "", urlGEt);
  } else {
    $("alert__form").append("El usuario no existe");
    $("alert__form").removeClass("d-none");
  }
};

//Para actualizar el usuario
constUpdateUser = () => {
  console.log("idUser: ", idUser);
  baseAllJquery("PUT", redirectPage, updatedUser, "", urlGEt);
};

//delete users buttons
const deleteUserBtns = () => {
  $(".btn__delete__user").each((id, btn) => {
    btn.addEventListener("click", function (user) {
      console.log("USER", user);
      console.log("USER TARGET:", user.target);
      console.log("CLASES", user.target.classList);
      console.log("ID", user.target.dataset.id);
      console.log("ALGO", user.target.dataset.algo);
      if (user.target.classList.contains("btn__delete__user")) {
        // id usuario
        let idUser = user.target.dataset.id;
        urlNow = `https://koders1gpython-default-rtdb.firebaseio.com/alepaez/users/${idUser}.json`;
        // request
        baseAllJquery("DELETE", "", "", "", urlNow);
        redirectPage();
      }
    });
  });
};
