console.log("new user");

$(document).ready(() => {
  console.log("jqeury si jala");

  $(".btnGuardar").click(event => {
    event.preventDefault;
    console.log("entra al boton click");

    let dataNewUser = {
      name: $("#name_input").val(),
      lastname: $("#lastname_input").val(),
      urlPhoto: $("#url_input").val(),
    };

    baseAllJquery(
      "POST",
      "",
      dataNewUser,
      "",
      `https://koders1gpython-default-rtdb.firebaseio.com/alepaez/users/.json`
    );
    console.log("redirect", redirectPage());
    redirectPage();
  });
});
