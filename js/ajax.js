$(document).ready(() => {
  console.log("si entra a jquert document");
  baseAllJquery(
    "GET",
    showUsers,
    "",
    ".list__users",
    "https://koders1gpython-default-rtdb.firebaseio.com/alepaez/users/.json"
  );
});
