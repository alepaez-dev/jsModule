// Ejercicio 1 .forEach()
// Dado un array con solo números
// obtener el valor mas alto
// input: [1,4,3,2,5]
// output: -> [5]

const myArray = [1,4,3,2,5];
let higher_number = -99999;
const higherNumber = array => {
    array.forEach(element => {
        if (element > higher_number) {
            higher_number = element;
        };
    });
    // console.log("el numero mayor es: ", higher_number);
    return higher_number;
};
console.log(`el numero mayor es: ${higherNumber(myArray)}`);


// ejercicio 2 .map()
// función
// convertir todos los elementos numericos de un array
// a strings
// input: [1,2,3,4,5]
// output -> ['1,','2','3','4','5']

// const convertToString = array => convertString = array.map(element => element.toString());
const convertString = array => array.map(element => element.toString());
console.log(convertString(myArray));

// ejercicio 3 .map()
// función
// capitalizar todos los elementos que sean strings de un array
// input: ['hOlA', 'mundo', 123]
// output -> ['Hola','Mundo','123]

const uppercaseString = array => array.map(element => {
    if (typeof element === "string") {
        element.replace(element[0],element[0].toUpperCase());
    };
    return element;
});
console.log(uppercaseString(["ale","hernandez","paez", 5, "hola", "pop", 7, "7"]));


const notDuplicateElements = array => array.filter((element,index,array) => {
    first_index =  array.indexOf(element);
    last_index = array.lastIndexOf(element);
    if(first_index === last_index){
        return element;
    };
});

const duplicateElements = array => array.filter((element,index,array) => {
    first_index =  array.indexOf(element);
    last_index = array.lastIndexOf(element);
    if(last_index !== index && first_index === index){
        return element;
    };
});

console.log(notDuplicateElements([1,1,1,2,3,4,5,2,4,1,5,2,2,2,2,7]));
console.log(duplicateElements([1,1,1,2,3,4,5,2,4,1,5,2,2,2,2,7]));

