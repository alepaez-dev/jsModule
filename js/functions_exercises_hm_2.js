/**
 * Escribir una función que calcule la edad de un perro en años caninos.
 * La función debe recibir el nombre y la edad del perro en años humanos
 * convertirlo a años caninos, e imprimir en consola 
 * calculateDogAge(2)
 * -> Poppy tiene 14 años caninos
 */

function calculateDogAge(age, name = "nombre sin definir") {
    console.log(`${name} tiene ${age*7} años caninos`);
};
calculateDogAge(4,"Vader");

/**
 * Crear una función que calcule el area y la circunferencia de un circulo
 * Tomar como parametro del radio del circulo 
 * calcGeometry(4)
 * -> l area del circulo es NN y la circunferencia es de NN
 */

 function calcGeometry(radio) {
     const PI = 3.1417;
     console.log(`el area del circulo es: ${Math.pow(radio,2)*PI} y la circunferencia es: ${(radio*2)*PI}`);
 };
 calcGeometry(4);

/**
 * Crear una función que convierta los grados celsius en fahrenheit y viceversa
 * debe recibir la temparatura y si la temperatura esta en Celsius o Fahrenheit
 * temperatureConverter(100,"C")
 * -> 100º Celsius equivalen a 212º fahrenheit
 */

 function temperatureConverter(grados, sistema) {
    if(sistema == "C") {
        console.log(`${grados} Celsius equivalen a ${(grados*(9/5))+32} Fahrenheit`); 
    } else {
        console.log(`${grados} Fahrenheit equivalen a ${(grados -32)*(5/9)}`);
    };
 };
 temperatureConverter(20,"C");

/*
 * Escribir una funcion que calcule el factorial de un número
 * getFactorial(10)
 * -> 3628800
 */

 function getFactorial(num) {
    let result = 1;
    let multiplicacion = "";
    if(parseInt(num) === 1) {
        console.log(`el factorial de ${parseInt(num)}! es: ${result}`);
    } else {
        for(let i = 1; i <= parseInt(num); i++){
            result *= i;
            //*EXTRA = para imprimir la transicion de los numeros
            if(i < parseInt(num)) {
                multiplicacion += ` ${i} *`
            } else {
                multiplicacion += " " + i;
            };
        };
        console.log(`el factorial de ${parseInt(num)}! = ${multiplicacion} es: ${result}`);
    };
 };
 getFactorial(5);
