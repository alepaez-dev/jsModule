// Ejercicio 1
// dado el siguiente array de objetos
let users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

// obtener un nuevo objeto con esta estructura
//-> {
//   'Bradley Bouley': 'Full Stack Resident',
//   'Chloe Alnaji': 'Full Stack Resident',
//   'Jonathan Baughn': 'Enterprise Instructor',
//   'Michael Herman': 'Lead Instructor',
//   'Robert Hajek': 'Full Stack Resident',
//   'Wes Reid': 'Instructor',
//   'Zach Klabunde': 'Instructor'
//   }

const arrayToObject = (array) =>
  array.reduce((accumulator, element) => {
    let name = element.firstName + " " + element.lastName;
    let role = element.role;
    // console.log(accumulator);
    //return { ...accumulator, [name]: role };
    return (accumulator[name] = role), accumulator;
  }, {});

console.log(arrayToObject(users));

//  tomando el array users,
//  hacer una funcion que reciba 2 parametros (arrayUsers, role)
//  y retorne un array con los usuarios que cumplan con el role

const filterRole = (array, role) =>
  array.filter((element) => element.role === role);

console.log(filterRole(users, "Instructor"));

// ejercicio 3
// tomando el siguiente array de objetos
let persons = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

// obtener lo siguiente
// 1. Cantidad de personas que votaron
// 2. Cual es el promedio de Edad de los votantes

//votos solos
const whoVote = (array) =>
  array.reduce(
    (accumulator, currentValue) =>
      currentValue.voted ? accumulator + 1 : accumulator,
    0
  );
console.log("votaron: ", whoVote(persons));

//average solo
const averageArray = (array) =>
  parseInt(
    array.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.age;
    }, 0) / persons.length
  );

console.log("El promedio: ", averageArray(persons));

//los 2 juntos
const whoVoteAndAverage2 = (array) => {
  let votos = 0;
  let average = 0;
  return array.reduce((accumulator, currentValue) => {
    currentValue.voted ? (votos += 1) : votos;
    average += currentValue.age / array.length;
    return (
      (accumulator.votos = votos),
      (accumulator.promedio = parseInt(average)),
      accumulator
    );
  }, {});
};

console.log(whoVoteAndAverage2(persons));
