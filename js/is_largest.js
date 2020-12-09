console.log("is largest");
const NUM_1 = parseInt(prompt("ingresa el numero 1: "));
const NUM_2 = parseInt(prompt("ingresa el numero 2: "));

if(NUM_1 > NUM_2) {
    console.log("el numero mayor es: ", NUM_1);
} else if(NUM_1 === NUM_2){
    console.log("son iguales");
} else {
    console.log("el numero mayor es: ", NUM_2);
};