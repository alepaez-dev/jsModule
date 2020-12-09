
const PESO_KODER = prompt("¿Cuál es tu peso en kg?");
let peso_luna = (PESO_KODER/9.81) * 1622;
let mensaje = "tu peso en la luna es: " + peso_luna;
alert(mensaje);