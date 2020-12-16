// forEach
const MY_ARRAY = [1,2,3];
MY_ARRAY.forEach(item => item * 2);

// map
const doubled = MY_ARRAY.map(item => item*2);
console.log("double: ", doubled);

// filter
const ints = [4,5,6];
const evens = ints.filter(item => item % 2 === 0);
console.log(evens);


//arrays de objetos
let almuerzos = [
    {principal: "arepa", postre : "helado"},
    {principal: "tacos", postre : "torta de queso"},
    {principal: "pizza", postre : "galletas"},
    {principal: "sushi", postre : "quesillo"},
    {principal: "arepa", postre : "fresas"},
    {principal: "arepa", postre : "quesillo"}
];

const platosPrincipales = almuerzos.map((almuerzo) => almuerzo.principal);
console.log(platosPrincipales);
const platosArepas = almuerzos.filter(almuerzo => almuerzo.principal === "arepa");
console.log(platosArepas);
const postresArepas = almuerzos.filter(almuerzo => almuerzo.principal === "arepa").map(almuerzo => almuerzo.postre);
console.log(postresArepas);