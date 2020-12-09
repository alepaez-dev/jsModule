// Exercise 1
// 1. pedir al usuario la calificación de un examen (0 a 100) 
// Imprimir en consola las equivalencias en letra su calificación, es decir
// -> si es mayor o igual a 90, imprimir "A"
// -> si es mayor o igual a 80 y menor que 90 , imprimir "B"
// -> si es mayor o igual a 70 y menor que 80 , imprimir "C"
// -> si es mayor o igual a 60 y menor que 70 , imprimir "D"
// -> si es mayor o igual a 50 y menor que 60 , imprimir "E"
// -> si es menor 50 , imprimir "F"

const CALIFICACION = parseInt(prompt("Ingrese la calificacion del examen: "));
// no hace falta poner tambien que sea menor a la segunda condicion porque estan en orden de mayor y menor.
if (CALIFICACION >= 90) {
    console.log("la calificacion es A");
} else if (CALIFICACION >= 80) {    
    console.log("la calificacion es B");
} else if (CALIFICACION >= 70) {    
    console.log("la calificacion es C");
} else if (CALIFICACION >= 60) {    
    console.log("la calificacion es D");
} else if (CALIFICACION >= 50) {    
    console.log("la calificacion es E");
} else {
    console.log("la calificacion es F");
};

// Exercise 2
// pedir al usuario por prompt un numero entre 1 y 100
// comparar si ese numero es divisible entre 2 y 11 e imprimir en consola un mensaje indicandolo
// sino, enviar un mensaje negandolo

let number = parseInt(prompt("Ingrese numero entre el 1 al 100 para ver si son divisibles entre 11 y 2: "));
number % 11 === 0 && number % 2 === 0 
? console.log(`El numero ${number} SI es divisible entre 11 y 2`) 
: console.log(`El numero ${number} NO es divisible entre 11 y 2`);


// Exercise 3
// pedir al usuario por prompt un numero entre 1 y 100
// verificar si es un par o impar
// imprimir en resultado en consola

number = parseInt(prompt("Ingrese numero entre el 1 al 100 para ver si es par o impar: "));
number % 2 === 0 ? console.log(`el ${number} es par`) : console.log(`el ${number} es impar`);

// Exercise 4
// pedir al usuario un numero entre 1 y 7 
// imprimir en consola el dia de la semana equivalente
// es decir:
// 1 -> lunes, 2 -> martes, etc.

number = parseInt(prompt("Ingrese numero entre el 1 y el 7 para ver el dia de la semana: "));
switch(number) {
    case 1:
        console.log("El dia de la semana es Lunes");
        break;
    case 2:
        console.log("El dia de la semana es Martes");
        break;
    case 3:
        console.log("El dia de la semana es Miercoles");
        break;
    case 4:
        console.log("El dia de la semana es Jueves");
        break;
    case 5:
        console.log("El dia de la semana es Viernes");
        break;
    case 6:
        console.log("El dia de la semana es Sabado");
        break;
    case 7:
        console.log("El dia de la semana es Domingo");
        break;
};

// Exercise 5
// pedir al usuario un numero entre 1 y 12
// Imprimir en consola el numero de días que corresponden a ese mes
// p.ej.
// 5 -> 31 días

number = parseInt(prompt("Ingrese el numero del mes para calcular los dias "));
switch(number) {
    case 2: 
        console.log("Tiene 28 dias y en año bisiesto tiene 29 dias");
        break;
    case 1,3,5,7,8,10,12: 
        console.log("Tiene 30 dias");
        break;
    case 4,6,9,11: 
        console.log("Tiene 31 dias");
        break;
};