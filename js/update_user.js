// print user

//agarrar el user
let url = new URLSearchParams(location.search);
let idUser = url.get("id");

const updateFormUser = () => {
  if (idUser !== "") {
    let urlGEt = `https://koders1gpython-default-rtdb.firebaseio.com/alepaez/users/${idUser}.json`;
    requestAjax(urlGEt, printUserInfo, "GET");
  } else {
    document.getElementById("alert__form").innerText = "El usuario no existe";
    document.getElementById("alert__form").classList.remove("d-none");
  }
};

const printUserInfo = obj => {
  if (obj) {
    document.querySelector("#name__input").value = obj.name;
    document.querySelector("#lastname__input").value = obj.lastname;
    document.querySelector("#photo__input").value = obj.urlPhoto;
  }
};
updateFormUser();

// listener
let btn__update__user = document.querySelector(".btn__update__user");
if (btn__update__user) {
  btn__update__user.addEventListener("click", () => {
    console.log("sending form");
    // obtener los datos a guardar
    let name = document.querySelector("#name__input").value;
    let lastName = document.querySelector("#lastname__input").value;
    let urlPhoto = document.querySelector("#photo__input").value;
    console.log("name", name);
    console.log("lastname", lastName);
    console.log("url", urlPhoto);
    // validacion
    if (name === "" || lastName === "" || urlPhoto === "") {
      document.getElementById("alert__form").innerText =
        "Todos los datos son obligatorios";
      document.getElementById("alert__form").classList.remove("d-none");
      setTimeout(() => {
        document.getElementById("alert__form").classList.add("d-none");
      }, 3000);
    } else {
      let userToUpdate = {
        lastname: lastName,
        urlPhoto: urlPhoto,
        name: name,
      };
      console.log(userToUpdate);

      update_new_user(userToUpdate);
    }
  });
}

//FETCH
const update_new_user = data => {
  console.log("entra a update");
  fetch(
    `https://koders1gpython-default-rtdb.firebaseio.com/alepaez/users/${idUser}.json`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then(response => {
      return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log("ERROR"));
};
