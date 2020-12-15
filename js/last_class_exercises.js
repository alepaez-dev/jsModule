// FUNCIONES CON RETORNO

// function add(a,b) {
//     const c = a + b;
//     return c;
// };


/**
 * Escribir una función que calcule la edad de un perro en años caninos.
 * La función debe recibir el nombre y la edad del perro en años humanos
 * convertirlo a años caninos, e imprimir en consola 
 * calculateDogAge(2)
 * -> Poppy tiene 14 años caninos
 */

function calculateDogAge(age, name = "nombre sin definir") {
    return age*7;
};
let result = calculateDogAge(4, "Vader");
console.log(`${result} años caninos`);

/**
 * Crear una función que calcule el area y la circunferencia de un circulo
 * Tomar como parametro del radio del circulo 
 * calcGeometry(4)
 * -> l area del circulo es NN y la circunferencia es de NN
 */

 function calcGeometry(radio) {
     const PI = 3.1417;
     return `el area del circulo es: ${Math.pow(radio,2)*PI} y la circunferencia es: ${(radio*2)*PI}`;
 };
result = calcGeometry(4);
console.log(result);

/**
 * Crear una función que convierta los grados celsius en fahrenheit y viceversa
 * debe recibir la temparatura y si la temperatura esta en Celsius o Fahrenheit
 * temperatureConverter(100,"C")
 * -> 100º Celsius equivalen a 212º fahrenheit
 */

 function temperatureConverter(grados, sistema) {
    if(sistema == "C") {
        return (grados*(9/5))+32;
    } else {
        return (grados -32)*(5/9);
    };
 };
result = temperatureConverter(20,"C");
console.log(`${result} grados`);

/*
 * Escribir una funcion que calcule el factorial de un número
 * getFactorial(10)
 * -> 3628800
 */

 function getFactorial(num) {
    let result = 1;
    num = parseInt(num);
    if(num === 1) {
        return result;
    } else {
        for(let i = 1; i <= num; i++){
            result *= i;
        };
        return result;
    };
 };
result = getFactorial(5);
console.log(`el resultado es: ${result}`);
