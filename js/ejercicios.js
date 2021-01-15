console.log("ejercicios js query selectores");
/* Ejercicios
Del listado "#vacations"
1.  Seleccionar elementos de tipo 'h2' y cambiar el color
5.  Selecciona aquellos ítems que tenga la clase .america y modificar el color
2.  Modificar el precio de todos los vuelos para que ahora sea $199.99
3.  Modifica todos los títulos de las vacaciones (h2), 
    su nuevo valor será "Titulo de tu agrado".
Del listado sorting
1. Cuando le den click al link de America, Europe o Asia
    Filtrar del listado "#vacations" filtrar los li con la clase America, Europe o Asia
    y ocultar los demás
2. Si le dan click a todos
    Filtrar del listado "#vacations" filtrar los li con la clase America, Europe y Asia
*/
/**
 * Del listado Faq
 * 1. Al cargar la pagina, mostrar la pregunta 1
 * 2. Al dar click en head__faq aparecer la descripcion de la pregunta
 *      y desaparecer las descripciones que esten mostradas
 */
$(document).ready(() => {
  console.log("si funciona");
  //   1.  Seleccionar elementos de tipo 'h2' y cambiar el color
  $("h2").css("color", "purple");

  //   5.  Selecciona aquellos ítems que tenga la clase .america y modificar el color
  $(".america").css("color", "red");

  //   2.  Modificar el precio de todos los vuelos para que ahora sea $199.99
  $("span.details").text("199.99");

  //   3.  Modifica todos los títulos de las vacaciones (h2),
  //     su nuevo valor será "Titulo de tu agrado".
  $(".vacation.america:first h2").text("Mexico");
  $(".vacation.america:last h2").text("Cuba");
  $(".vacation.europe h2").text("Francia");
  $(".vacation.asia h2").text("Japon");

  //   1. Cuando le den click al link de America, Europe o Asia
  //     Filtrar del listado "#vacations" filtrar los li con la clase America, Europe o Asia
  //     y ocultar los demás
  $("#vacations-wrapper .sorting li:first a").click(() => {
    console.log("te muestre todos");
    $("#vacations .vacation").show();
  });
  $("#vacations-wrapper .sorting li:nth-child(2) a").click(() => {
    console.log("entra second");
    $("#vacations .vacation.america ").show();
    $("#vacations .vacation.europe").hide();
    $("#vacations .vacation.asia").hide();
  });
  $("#vacations-wrapper .sorting li:nth-child(3) a").click(() => {
    $("#vacations .vacation.america ").hide();
    $("#vacations .vacation.europe").show();
    $("#vacations .vacation.asia").hide();
  });
  $("#vacations-wrapper .sorting li:last a").click(() => {
    $("#vacations .vacation.america ").hide();
    $("#vacations .vacation.europe").hide();
    $("#vacations .vacation.asia").show();
  });

  //    * Del listado Faq
  //  * 1. Al cargar la pagina, mostrar la pregunta 1
  //  * 2. Al dar click en head__faq aparecer la descripcion de la pregunta
  //  *      y desaparecer las descripciones que esten mostradas
  //  */
  $(".faq:first").show();
  $(".faq:nth-child(2n)").hide();
  $(".faq:nth-child(3n)").hide();
  $(".faq:last").hide();

  $(".head__faq:first").click(event => {
    event.preventDefault();
    $(".faq:nth-child(2n)").show();
    $(".faq:nth-child(3n)").show();
    $(".faq:last").show();
  });

  $(".head__faq:nth-child(2n)").click(event => {
    event.preventDefault();
    $(".desc__faq:nth-child(2n)").show();
    $(".faq:nth-child(2n)").show();
    $(".faq:nth-child(3n)").show();
    $(".faq:last").show();
  });

  //
});
