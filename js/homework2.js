// 2.
// Crear un div con un mensaje de
// “Este sitio se ve mejor en desktop”
// si el viewportWidth es <= 767
// aparecer el mensaje
// sino
// desaparecer el mensaje
// utilizar css
// no usar inline styles

console.log("Hola mundo homework2");

window.addEventListener("resize", function () {
  width = window.innerWidth;

  if (width <= 768) {
    document.getElementById("mensajep").style.display = "block";
  } else {
    document.getElementById("mensajep").style.display = "none";
  }
});
