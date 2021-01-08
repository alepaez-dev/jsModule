console.log("Hola mundo");

window.addEventListener("resize", function () {
  width = window.innerWidth;

  if (width <= 768) {
    document.getElementById("mob").style.display = "block";
    document.getElementById("desk").style.display = "none";
  } else {
    document.getElementById("mob").style.display = "none";
    document.getElementById("desk").style.display = "block";
  }
});

const funLogged = () => {
  if (window.cookie.logged) {
    console.log("loggeado");
  } else {
    console.log("no loggeado");
  }
};

window.cookie = { logged: true };
window.addEventListener("load", funLogged);
