const CLIMA = prompt("Ingrese como esta el clima: ");
if (CLIMA == "soleado") {
    console.log("El clima esta soleado por aqui");
} else if(CLIMA == "lluvioso") {
    console.log("El clima esta lluvioso por aqui");
} else if(CLIMA == "nevando") {
    console.log("El clima esta nevando por aqui");
} else if(CLIMA == "nublado") {
    console.log("El clima esta nublado por aqui");
} else {
    let mensaje = prompt("ingresa la descripcion de tu dia: ");
    console.log(mensaje);
};