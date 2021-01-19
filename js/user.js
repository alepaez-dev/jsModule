console.log("entramos a la pagina de user");

let url = new URLSearchParams(location.search);
let idUser = url.get("id");

console.log("url", url);
console.log("id", idUser);

const printUser = (response, path) => {
  let arrData = "";
  if (response !== null) {
    console.log("si entro al final del null");
    console.log("urlPhoto:", response.urlPhoto);
    arrData += `
    <img src="${response.urlPhoto}" class="mb-4 rounded-circle img__user__profile"></img>
    <h5 class="card-title name__user">${response.name}</h5>
    <p class="card-text email__user">${response.lastname}</p>
    `;
  } else {
    arrData += `<p class="card-text">El usuario no existe</p>`;
  }
  $(path).append(arrData);
};

//mandamos a llamar los datos de ese id en especifico
baseAllJquery(
  "GET",
  printUser,
  "",
  "#card__user",
  `https://koders1gpython-default-rtdb.firebaseio.com/alepaez/users/${idUser}.json`
);
