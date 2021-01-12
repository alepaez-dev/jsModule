// // Create user
// const createUser = () => {
//   // https://koders1gpython-default-rtdb.firebaseio.com/jorge
//   let xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       console.log(JSON.parse(this.response));
//     } else if (this.readyState === 4 && this.status === 404) {
//       console.error(JSON.parse(this.response));
//       return false;
//     }
//   };
//   xhttp.open(
//     "POST",
//     "https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/.json"
//   );
//   xhttp.send(
//     JSON.stringify({
//       id: 1,
//       name: "Jorge",
//       lastname: "Camarillo",
//       urlPhoto: "https://loremflickr.com/320/240/person",
//     })
//   );
// };
// // Read user
// const readUser = () => {
//   // https://koders1gpython-default-rtdb.firebaseio.com/jorge
//   let xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       console.log(JSON.parse(this.response));
//     } else if (this.readyState === 4 && this.status === 404) {
//       console.error(JSON.parse(this.response));
//       return false;
//     }
//   };
//   xhttp.open(
//     "GET",
//     "https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/.json"
//   );
//   // xhttp.open('GET', 'https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/-MQnTbsClYPUsYDcBS-R.json')
//   xhttp.send();
// };
// // Update and replace
// const updateAndReplaceUser = idUser => {
//   // https://koders1gpython-default-rtdb.firebaseio.com/jorge
//   let xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       console.log(JSON.parse(this.response));
//     } else if (this.readyState === 4 && this.status === 404) {
//       console.error(JSON.parse(this.response));
//       return false;
//     }
//   };
//   xhttp.open(
//     "PUT",
//     `https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/${idUser}.json`
//   );
//   xhttp.send(
//     JSON.stringify({
//       id: 1,
//       name: "Jorge",
//       lastname: "Camarillo",
//       urlPhoto: "https://loremflickr.com/320/240/person",
//     })
//   );
// };
// // Update and modify
// const updateAndModifyUser = idUser => {
//   // https://koders1gpython-default-rtdb.firebaseio.com/jorge
//   let xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       console.log(JSON.parse(this.response));
//     } else if (this.readyState === 4 && this.status === 404) {
//       console.error(JSON.parse(this.response));
//       return false;
//     }
//   };
//   xhttp.open(
//     "PATCH",
//     `https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/${idUser}.json`
//   );
//   xhttp.send(
//     JSON.stringify({
//       name: "Jorge Luis",
//     })
//   );
// };
// // Delete
// const deleteUser = idUser => {
//   // https://koders1gpython-default-rtdb.firebaseio.com/jorge
//   let xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       console.log(JSON.parse(this.response));
//     } else if (this.readyState === 4 && this.status === 404) {
//       console.error(JSON.parse(this.response));
//       return false;
//     }
//   };
//   xhttp.open(
//     "DELETE",
//     `https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/${idUser}.json`
//   );
//   xhttp.send();
// };

// function request all methods
const requestAjax = (url, callback, method = "GET", data = {}) => {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      callback(JSON.parse(this.response));
      return true;
    } else if (this.readyState === 4 && this.status === 404) {
      console.error(JSON.parse(this.response));
      return false;
    }
  };
  xhttp.open(method, url);
  if (method === "GET" || method === "DELETE") {
    xhttp.send();
  } else {
    // put, patch, post
    xhttp.send(JSON.stringify(data));
  }
};

// put y post
const showResponse = response => {
  console.log(response);
};

requestAjax(
  "https://koders1gpython-default-rtdb.firebaseio.com/alepaez/users.json",
  showResponse,
  "POST",
  {
    lastname: "Paez3",
    name: "Ale3",
    urlPhoto: "https://loremflickr.com/320/240/person",
  }
);
