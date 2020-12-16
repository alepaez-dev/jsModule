// Ejercicio 1 .forEach()
// Dado un array con solo números
// obtener el valor mas alto
// input: [1,4,3,2,5]
// output: -> [5]

const myArray = [1,4,3,2,5];
let higher_number = -99999;
const higherNumber = myArray => {
    myArray.forEach(element => {
        if (element > higher_number) {
            higher_number = element;
        };
    });
    console.log("el numero mayor es: ", higher_number);
};
higherNumber(myArray);


// ejercicio 2 .map()
// función
// convertir todos los elementos numericos de un array
// a strings
// input: [1,2,3,4,5]
// output -> ['1,','2','3','4','5']


