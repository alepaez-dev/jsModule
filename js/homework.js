console.log("entramos a homework js");

//funcion para mostrar los elementos de un arreglo/objeto por el valor de un input
const showForInput = (array, value) => {
  array.each(i => {
    let element = array.eq(i).text().toLowerCase();
    if (element.startsWith(value[0]) && element.includes(value)) {
      array.eq(i).show();
    }
  });
};

$(document).ready(() => {
  console.log("si funciona jquery");
  $(".input_place").keyup(() => {
    let input_value = $(".input_place").val().toLowerCase();
    let list_array = $(".list_countries");

    list_array.hide();
    showForInput(list_array, input_value);
  });
});

// for (let i = 0; i < list_array.length; i++) {
//   let element = list_array.eq(i).text().toLowerCase();
//   if (element.startsWith(input_value[0]) && element.includes(input_value)) {
//     console.log("si entro al if");
//     list_array.eq(i).show();
//   }
// }
