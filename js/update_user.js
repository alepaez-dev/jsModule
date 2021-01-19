console.log("estamos en update_user");

let url = new URLSearchParams(location.search);
let idUser = url.get("id");
let urlGEt = `https://koders1gpython-default-rtdb.firebaseio.com/alepaez/users/${idUser}.json`;

//mostramos primero
updateFormUser();

//actualizamos
$(document).ready(() => {
  console.log("entramos al jquery bein");
  //boton actualizar usuario
  $(".btn__update__user").click(event => {
    event.preventDefault;
    let updatedUser = {
      name: $("#name__input").val(),
      lastname: $("#lastname__input").val(),
      urlPhoto: $("#photo__input").val(),
    };
    console.log("updatednewUser: ", updatedUser);
    baseAllJquery("PUT", "", updatedUser, "", urlGEt);
    redirectPage();
  });
});
