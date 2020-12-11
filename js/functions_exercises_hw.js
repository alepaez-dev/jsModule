//1
function tablaAlReves() {
    let num = prompt("Ingresa la tabla que quieres que se realice al reves");
    for(let i = 10; i > 0; i--) {
        console.log(`${num} x ${i} = ${num*i}`);
    };
};
//2
function imprimirPares() {
    let num_start = parseInt(prompt("el principio: "));
    let num_end = parseInt(prompt("el final: "));
    for(let i = num_start; i <= num_end; i++) {
        if (i % 2 === 0) {
            console.log(`${i} es par`);
        };
    };
};
//3
function stringReverse() {
    let str = prompt("Ingresa el string para ponerlo al reves");
    let reverse_string = "";
    for(let i = str.length - 1; i >=0; i--) {
        reverse_string += str[i];
    };
    console.log(reverse_string);
};
//4
function ingresarCorreo() {
    let correo = prompt("Ingresa tu correo: ");
    let res = correo.indexOf("@");
    let principio_correo = correo.slice(0,res);
    let asteriscos = "*";
    let asteriscos_2 = asteriscos.repeat(res - 1);
    let string_modificado = correo.replace(principio_correo, asteriscos_2);
    console.log(string_modificado);
    };
//5
function capitalizarString() {
    let str = prompt("ingresa tu string para capitalizar: ");
    let res = str.split(" "); //lo hago arreglo separando por " "
    for (let i = 0; i < res.length; i++) {
        res[i] = res[i].replace(res[i][0], res[i][0].toLocaleUpperCase());
    };
    console.log(res);
};
//6
function separarPorGuiones() {
    let str = prompt("ingresa tu string para separar por guiones: ");
    let res = str.replace(/ /g, "-");
    console.log(res);
};
//7
function concatenarVariables() {
    let variable1 = "hello";
    let variable2 = "world";
    let res = variable1.concat(variable2);
    console.log(res);
};
//8
function convertirString_Array() {
    let str = prompt("Ingresa el string que quieras convertir a Array: ");
    let res = str.split(" ");
    console.log(res);
};
//9
function imprimirRango() {
    let str = prompt("Ingresar el string: ");
    let num_start = parseInt(prompt("Ingresa el primer rango:" ));
    let num_end = parseInt(prompt("Ingresa el ultimo rango:" ));
    let res = str.slice(num_start, num_end);
    console.log(res);
};

// tablaAlReves();
// imprimirPares();
// stringReverse();
// ingresarCorreo();
// capitalizarString();
// separarPorGuiones();
// concatenarVariables();
// convertirString_Array();
// imprimirRango();

