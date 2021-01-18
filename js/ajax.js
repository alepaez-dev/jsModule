console.log("estamos entrando a ajax");

//funcion get de mostrar usuarios

$(document).ready(() => {
  console.log("si entra a jquert document");

  $(function () {
    // GET
    $.ajax({
      url:
        "https://koders1gpython-default-rtdb.firebaseio.com/alepaez/users/.json",
      method: "GET",
    })
      .done(function (response) {
        console.log("todo ok");
        console.log(response);
        let usersList = "";
        for (user in response) {
          console.log(user);
          let usuario = response[user];
          console.log("usuario:", usuario);
          usersList += `<li class="d-flex px-3 py-2 shadow-sm mb-2 rounded justify-content-between> 
                <div class="d-flex"> 
                    <img src="${usuario.urlPhoto}" class="d-flex rounded-circle icon__user" width="35" height="35"></img>     
                    <p class="d-flex text-left px-2">${usuario.name} ${usuario.lastname} </p>
                </div> 
            </li>`;
          console.log("usersListsssssss", usersList);
        }
        console.log("usersList", usersList);
        $(".list__users").append(usersList);
      })
      .fail(function () {
        console.log("todo mal");
      });
  });
});
