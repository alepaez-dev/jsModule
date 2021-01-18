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

    // console.log("name", dataNewUser.name);
    // console.log("lastname", dataNewUser.lastname);
    // console.log("url", dataNewUser.url);
    // console.log("datanewuser", dataNewUser);

    $.ajax({
      url:
        "https://koders1gpython-default-rtdb.firebaseio.com/alepaez/users/.json",
      method: "POST",
      data: JSON.stringify(dataNewUser),
    })
      .done(function (response) {
        console.log(response);
      })
      .fail(function (err) {
        console.log(err);
        console.log(err.status);
        console.log(err.statusText);
        console.log("todo mal");
      });
  });
});
