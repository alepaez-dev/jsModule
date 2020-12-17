//METODO REDUCE
//Solo retorna un valor, no un arreglo
//PARAMETROS
// acc - resultado de la op anterior
// cv - current value
// index
// array

// [1,2,3,4,10,20].reduce((acumulator,currentValue) => {
//     let suma = accumulator + currentValue;
//     console.log(acumulator, currentValue);
//     return suma;
// },0);

let arr = ["a", "b", "c", "c", "b"];
let searchOcurrence = (arr, char) =>
  arr.reduce((count, currentValue) => {
    return char === currentValue ? count + 1 : count;
  }, 0);
console.log(searchOcurrence(arr, "c"));

arr = ["en", "un", "lugar", "de", "la", "mancha", "ale"];
let convertString = arr.reduce((count, currentValue) => {
  return count + currentValue + " ";
}, "");
console.log(convertString);

let person = {
  name: "ale",
  location: {
    cp: "2ewer",
    street: "asadada",
  },
};

for (item in person) {
  console.log(person[item]);
  if (item2 === "location") {
    for (item in person[item]) {
      console.log(`${item}: ${person[item][item2]}`);
    }
  }
}
