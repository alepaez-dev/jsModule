// 1.
// si el usuario no tiene la cookie sessionuser
// Redireccionarlo al /login.html
// si tiene la cookie sessionuser
// redireccionarlo a /user.html
console.log("Hola mundo homework");

window.cookie = "sessionuser=false";
const isUser = () => {
  if (window.cookie.includes("sessionuser=true")) {
    console.log("bienvenido a USER");
    window.location.href =
      "file:///C:/Users/al3_h/Downloads/Prueba/JavaScript/jsModule/user.html";
  } else {
    console.log("bienvenido a LOGIN, REGISTRESE");
    window.location.href =
      "file:///C:/Users/al3_h/Downloads/Prueba/JavaScript/jsModule/login.html";
  }
};

window.addEventListener("load", isUser);
