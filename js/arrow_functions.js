// const addArrow = (par1,par2) => {
//     return a + b;
// };

/**
 * Escribir una función que calcule la edad de un perro en años caninos.
 * La función debe recibir el nombre y la edad del perro en años humanos
 * convertirlo a años caninos, e imprimir en consola 
 * calculateDogAge(2)
 * -> Poppy tiene 14 años caninos
 */

const calculateDogAge = age => age*7;



/**
 * Crear una función que calcule el area y la circunferencia de un circulo
 * Tomar como parametro del radio del circulo 
 * calcGeometry(4)
 * -> l area del circulo es NN y la circunferencia es de NN
 */
const calcGeometryArea = radio =>  Math.pow(radio,2) * 3.1417;
const calcGeometryCircun = radio => (radio*2)*3.1417;

/**
 * Crear una función que convierta los grados celsius en fahrenheit y viceversa
 * debe recibir la temparatura y si la temperatura esta en Celsius o Fahrenheit
 * temperatureConverter(100,"C")
 * -> 100º Celsius equivalen a 212º fahrenheit
 */
const temperatureConverter = (grados,sistema) => {
    return sistema === "C" ? (grados*(9/5)) + 32 : ((grados - 32)*(5/9));
};


/*
 * Escribir una funcion que calcule el factorial de un número
 * getFactorial(10)
 * -> 3628800
 */
const getFactorial = num => {
    num = parseInt(num);
    for(let i = 1; i <= num; i ++){
        result *= i;
    };
    return result;
};

const myArray = [1,4,7,10];
// for(let i = 0; i < myArray.length; i++){
//     console.log("tabla del: ", myArray[i]);
//     for(let j = 1; j <= 10; j ++){
//         console.log(`${myArray[i]} x ${j} = ${myArray[i]*j}`);
//     };
// };

myArray.forEach(element => {
    //const tabla = [1,2,3,4,5,6,7,8,9,10];
    console.log("tabal del: ", element);
        [1,2,3,4,5,6,7,8,9,10].forEach(i => {
            console.log(`${element} x ${i} = ${element*i}`);
        });
});



    
    
    // for(let j = 1; j <= 10; j++){
    //     console.log(`${element} x ${j} = ${element*j}`);
    // };
//}); 




