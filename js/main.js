// // function request all methods
// var requestAjax = (url, callback, method = "GET", data = {}) => {
//   let xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       console.log("JSONPARSE", JSON.parse(this.response));
//       callback(JSON.parse(this.response));
//       return true;
//     } else if (this.readyState === 4 && this.status === 404) {
//       console.error(JSON.parse(this.response));
//       return false;
//     }
//   };
//   xhttp.open(method, url);
//   if (method === "GET" || method === "DELETE") {
//     xhttp.send();
//   } else {
//     // put, patch, post
//     xhttp.send(JSON.stringify(data));
//   }
// };

// // put y post RESPONSE
// var showResponse = response => {
//   console.log(response);
// };

// // put y post
// // var showUsers = response => {
// //   console.log("response", response);
// //   let users = response;
// //   let usersList = "";
// //   for (user in response) {
// //     console.log("user", user);
// //     let dataUsuario = response[user];
// //     usersList += `
// //             <li>${dataUsuario.name} ${dataUsuario.lastname} <a href="user.html?id=${user}">ver usuario</a></li>
// //         `;
// //   }
// //   document.querySelector(".list__users").innerHTML = usersList;
// // };

// var showUsers = response => {
//   let users = response;
//   let usersList = "";
//   let iconDelete = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
//     <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
//     <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
//     </svg>`;
//   for (user in response) {
//     let dataUsuario = response[user];
//     usersList += `
//             <li class="d-flex px-3 py-2 shadow-sm mb-2 rounded justify-content-between item__user">
//                 <div class="d-flex">
//                     <span class="d-flex rounded-circle icon__user" style='background-image:  url(${dataUsuario.urlPhoto})'></span>
//                     <p class="d-flex text-left px-2">${dataUsuario.name} ${dataUsuario.lastname} </p>
//                 </div>
//                 <div class="d-flex">
//                     <a href="user.html?id=${user}" class="btn btn-link">Ver usuario</a>
//                     <button class="btn btn-danger btn__delete__user" data-id="${user}" data-user="${user}" data-algo="${user}">Eliminar ${iconDelete}</button>
//                     <a href="update-user.html?id=${user}" class="btn__update__user" data-id="${user}">Editar</a>
//                 </div>
//             </li>
//         `;
//   }
//   document.querySelector(".list__users").innerHTML = usersList;
//   // deleteUserBtns();
// };

// //INDEX
// if (
//   window.location.pathname === "/" ||
//   window.location.pathname === "/index.html" ||
//   window.location.pathname ===
//     "/C:/Users/al3_h/Downloads/Prueba/JavaScript/jsModule/index.html"
// ) {
//   // estoy en home
//   console.log("entra");
//   requestAjax(
//     "https://koders1gpython-default-rtdb.firebaseio.com/alepaez/users/.json",
//     showUsers,
//     "GET"
//   );
//   const list = document.querySelectorAll(".btn__update__user");
//   console.log("list", list);
// }

// var printUser = arrData => {
//   console.log(arrData);
//   document.querySelector("#card__user").innerHTML = `
//     <img src="${arrData.urlPhoto}">
//     <h5 class="card-title name__user">${arrData.name}</h5>
//     <p class="card-text email__user">${arrData.lastname}</p>
//     `;
// };

// //USER
// if (
//   window.location.pathname === "/user.html" ||
//   window.location.pathname ===
//     "/C:/Users/al3_h/Downloads/Prueba/JavaScript/jsModule/user.html"
// ) {
//   console.log("entra aquiiiiiiii");
//   let suma = 2 + 2;
//   let url = new URLSearchParams(window.location.search);
//   let id = url.get("id");
//   // estoy en home
//   console.log("suma", suma);
//   console.log("location:", `${window.location.search}`);
//   console.log("url: ", url);
//   console.log("id", id);
//   console.log("id", id);
//   requestAjax(
//     `https://koders1gpython-default-rtdb.firebaseio.com/alepaez/users/${id}.json`,
//     printUser,
//     "GET"
//   );
// }

// // create new user
// var redirectToUsers = res => {
//   window.location.pathname =
//     "file:///C:/Users/al3_h/Downloads/Prueba/JavaScript/jsModule/index.html";
// };

// //UPDATE USER
// if (
//   window.location.pathname === "/update-user.html" ||
//   window.location.pathname ===
//     "/C:/Users/al3_h/Downloads/Prueba/JavaScript/jsModule/update-user.html"
// ) {
//   const updateUserBtns = event => {
//     let url = new URLSearchParams(window.location.search);
//     let id = url.get("id");
//     event.preventDefault();
//     let nameSave = document.getElementById("name").value;
//     let lastnameSave = document.getElementById("lastname").value;
//     let url_photoSave = document.getElementById("url_photo").value;

//     requestAjax(
//       `https://koders1gpython-default-rtdb.firebaseio.com/alepaez/users/${id}.json`,
//       showResponse,
//       "PATCH",
//       {
//         lastname: lastnameSave,
//         name: nameSave,
//         urlPhoto: url_photoSave,
//       }
//     );
//   };
//   document.getElementById("btnSaves").addEventListener("click", updateUserBtns);
// }

// if (
//   window.location.pathname === "/newuser.html" ||
//   window.location.pathname ===
//     "/C:/Users/al3_h/Downloads/Prueba/JavaScript/jsModule/newuser.html"
// ) {
//   //NEWUSER
//   console.log("entra a la funcion if del newuser.html");

//   //Delete
//   const clickDelete = event => {
//     event.preventDefault();
//     let idDelete = document.getElementById("idDelete").value;
//     requestAjax(
//       `https://koders1gpython-default-rtdb.firebaseio.com/alepaez/users/${idDelete}.json`,
//       showResponse,
//       "DELETE"
//     );
//   };

//   //guardar
//   const clickGuardad = event => {
//     event.preventDefault();
//     console.log("principip");
//     let nameSave = document.getElementById("name").value;
//     let lastnameSave = document.getElementById("lastname").value;
//     let url_photoSave = document.getElementById("url_photo").value;

//     console.log("name", nameSave);
//     console.log("lastname", lastnameSave);
//     console.log("urlophot", url_photoSave);
//     console.log("typeoffff", typeof url_photoSave);
//     requestAjax(
//       "https://koders1gpython-default-rtdb.firebaseio.com/alepaez/users.json",
//       showResponse,
//       "POST",
//       {
//         lastname: lastnameSave,
//         name: nameSave,
//         urlPhoto: url_photoSave,
//       }
//     );
//     console.log("fin");
//   };

//   //buttons listeners
//   document.getElementById("btnSave").addEventListener("click", clickGuardad);
//   document.getElementById("btnDelete").addEventListener("click", clickDelete);
// }

// //delete users button
