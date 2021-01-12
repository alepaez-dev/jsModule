console.log("Hola mundo homework");

//name
//username
const loadUsers = () => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState !== 4) {
      return;
    } else {
      if (request.status >= 200 && request.status <= 299) {
        const response = request;
        console.log(response);
        const objectUsers = JSON.parse(response.responseText);
        console.log("objectUsers", objectUsers);
        let listUsers = "";
        objectUsers.forEach(user => {
          listUsers += `<li><a href="user.html?id=${user.id}"><s>name:</s> ${user.name} <s>email</s>: ${user.email}</a></li>`;
        });
        document.querySelector(".list__users").innerHTML = listUsers;
      } else {
        console.log("No se pudo ejecutar");
      }
    }
  });
  request.open("GET", "https://jsonplaceholder.typicode.com/users/");
  request.send();
};

//loadUsers()
document.getElementById("getusers").addEventListener("click", loadUsers);

// const urlDB = "https://koders1gpython-default-rtdb.firebaseio.com/alepaez/";
// const createUsers = () => {
//   const request = new XMLHttpRequest();
//   request.addEventListener("readystatechange", () => {
//     if (request.readyState !== 4) {
//       return;
//     } else {
//       if (request.status >= 200 && request.status <= 299) {
//         const response = request;
//         console.log(response);
//         // const objectUsers = JSON.parse(response.responseText);
//         console.log(JSON.parse(response.responseText));
//       } else {
//         console.log(JSON.parse(response.responseText));
//         console.log("No se pudo ejecutar");
//       }
//     }
//   });
//   request.open("POST", `${urlDB}users/.json`);
//   request.send(
//     JSON.stringify({
//       id: 2,
//       name: "Ale",
//       lastname: "Paez",
//       urlPhoto:
//         "data:image/jpeg;base64,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",
//     })
//   );
// };
