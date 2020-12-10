// //ejercicio 1
// 1. Asignar un string a una variable 
// 2. Verificar cuantos caracteres tiene ese string
// 3. Imprimirlo en consola
let str = "hola mundo helloo";
console.log(str.length);


// ejercicio 2
// Ejercicio 2
// * Declarar 2 variables con strings y concatenarlos
let var1 = "hello";
let var2 = "world";
res = var1.concat(var2);
console.log(res);

// Ejercicio 3
//  * Declarar un string de al menos 10 caracteres
//  * imprimir en consola del 4 al 6 caracte

str = "equipo ale, mario y liliana";
res = str.slice(4,6);
console.log(res);

// Ejercicio 4
//  * Declarar un string de al menos 2 palabras
//  * imprimir en consola el string separado por guiones en cada palabra
//  * "hola koders"
//  * "hola-koders"

str = "hola como estas";
res = str.replace(/ /g, "-");
console.log(res);

// Ejercicio 5
//  * Declarar un string de al menos 2 palabras
//  * imprimir en consola el string con cada una de las palabras Capitalizadas
//  * "hola koders"
//  * "Hola Koders"
str = "hola";
res = str.toLocaleUpperCase();
console.log(res);


// Ejercicio 6
// * Declarar un string con un correo electrónico
// * Enmascarar con "*" el bloque del usuario
// * "jorgec@kodemia.mx"
// * "*****@kodemia.mx"

str = "sdadfwxzad@gmail.com";
res = str.indexOf("@");
let nuevo_string = str.slice(0,res);
let asteriscos = "*";
let asteriscos_2 = asteriscos.repeat(res - 1);
let string_modificado = str.replace(nuevo_string, asteriscos_2);
console.log(string_modificado);

// Ejercicio 8
//  * Declarar un string de al menos 2 palabras
//  * convertir ese string en un array
//  * "Hola koders"
//  *  ["hola", "koders"]

str = "hola mundo";
res = str.split(" ");
console.log(res);

 for (let i = 0; i < res.length; i++) {
    res[i] = res[i].replace(res[i][0],res[i][0].toLocaleUpperCase()); 
}
console.log(res);
